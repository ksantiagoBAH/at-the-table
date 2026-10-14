import {mkdirSync,writeFileSync} from 'node:fs';
const destination = "https://ksantiagobah.github.io/mass-adventure/at-the-table/";
mkdirSync('dist',{recursive:true});
writeFileSync('dist/index.html',`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>At the Table — New location</title><link rel="canonical" href="${destination}"><meta name="description" content="Understand the Mass, one step at a time. Explore 28 illustrated lessons, prayers, and guided narration for your OCIA journey."/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="At the Table"/>
<meta property="og:title" content="At the Table: An OCIA Companion"/>
<meta property="og:description" content="Understand the Mass, one step at a time. Illustrated lessons, prayers, and guided narration for your OCIA journey."/>
<meta property="og:url" content="https://ksantiagobah.github.io/mass-adventure/at-the-table/"/>
<meta property="og:image" content="https://ksantiagobah.github.io/mass-adventure/at-the-table/share-card.png"/>
<meta property="og:image:type" content="image/png"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="At the Table: Understand the Mass, one step at a time, beside an illustrated church."/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="At the Table: An OCIA Companion"/>
<meta name="twitter:description" content="Understand the Mass, one step at a time. Illustrated lessons and prayers for your OCIA journey."/>
<meta name="twitter:image" content="https://ksantiagobah.github.io/mass-adventure/at-the-table/share-card.png"/>
<meta name="twitter:image:alt" content="At the Table: Understand the Mass, one step at a time, beside an illustrated church."/><meta http-equiv="refresh" content="0;url=${destination}"><script>location.replace(${JSON.stringify(destination)}+location.search+location.hash);</script></head><body><h1>At the Table has moved</h1><p><a href="${destination}">Continue to At the Table</a></p><nav><a href="https://ksantiagobah.github.io/mass-adventure/">Mass Adventure</a> · <a href="https://ksantiagobah.github.io/mass-adventure/rosary/">Rosary & Divine Mercy</a></nav></body></html>`);
