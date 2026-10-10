import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import * as english from './content';
import {spanishUnits,spanishStages,spanishGlossary,spanishQuestions} from './spanish';
import translations from './es-ui.json';
const spanishEucharist='https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html';
export type Locale='en'|'es';
const LanguageContext=createContext<{locale:Locale;setLocale:(locale:Locale)=>void}>({locale:'en',setLocale:()=>{}});
export function LanguageProvider({children}:{children:ReactNode}){
 const [locale,setLocale]=useState<Locale>(()=>{try{return localStorage.getItem('at-the-table-language')==='es'?'es':'en'}catch{return 'en'}});
 useEffect(()=>{document.documentElement.lang=locale;try{localStorage.setItem('at-the-table-language',locale)}catch{/* Reading remains available without storage. */}},[locale]);
 return <LanguageContext.Provider value={{locale,setLocale}}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){
 const {locale,setLocale}=useContext(LanguageContext);
 const t=(text:string)=>locale==='es'?(translations as Record<string,string>)[text]??text:text;
 const sources=locale==='en'?english.sources:Object.fromEntries(Object.entries(english.sources).map(([key,source])=>[key,{...source,title:({'celebration':'Catecismo · La celebración de la Eucaristía','presence':'Catecismo · Sacrificio, memorial y presencia','communion':'Catecismo · El banquete pascual','girm':'Instrucción General del Misal Romano · Capítulo II','ocia':'USCCB · Introducción a OCIA','baptism':'USCCB · Bautismo e iniciación cristiana'} as Record<string,string>)[key]+(['celebration','presence','communion','girm'].includes(key)?'':' (en inglés)'),url:['celebration','presence','communion'].includes(key)?spanishEucharist:key==='girm'?source.url.replace('usccb.org/','usccb.org/es/'):source.url}])) as typeof english.sources;
 return {locale,setLocale,t,units:locale==='en'?english.units:spanishUnits,stages:locale==='en'?english.stages:spanishStages,glossary:locale==='en'?english.glossary:spanishGlossary,questions:locale==='en'?english.questions:spanishQuestions,sources};
}
