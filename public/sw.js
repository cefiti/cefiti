var t="CEFiTI6.0.0";self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(l=>l.addAll(["./index.html","./manifest.json","./196.png","./512.png","./favicon.ico","./index.css","./index.js","./leg/IN02-2014.pdf","./leg/IN08-2012.pdf","./leg/IN17-2005.pdf","./leg/IN19-2014.pdf","./leg/IN21-2018.pdf","./leg/IN23-2008.pdf","./leg/IN28-2017.pdf","./leg/IN37-2016.pdf","./leg/IN44-2018.pdf","./leg/IN48-2007.pdf","./leg/IN54-2007.pdf","./leg/IN03-2008.pdf","./leg/IN09-2011.pdf","./leg/IN17-2009.pdf","./leg/IN20-2013.pdf","./leg/IN23-2007.pdf","./leg/IN28-2016.pdf","./leg/IN34-2017.pdf","./leg/IN38-2018.pdf","./leg/IN46-2010.pdf","./leg/IN53-2008.pdf","./leg/PORT125-1998.pdf","./leg/PORT780-2023.pdf","./leg/RES04-2019.pdf"])))});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(l=>Promise.all(l.map(d=>{if(!t.includes(d))return caches.delete(d)}))))});self.addEventListener("fetch",e=>{e.respondWith(caches.open(t).then(l=>fetch(e.request).then(d=>(new URL(e.request.url).protocol==!1&&(console.log(e.request.url,new URL(e.request.url).protocol,"xxxxxxxxx"),l.put(e.request,d.clone())),d)).catch(()=>l.match(e.request))))});
//# sourceMappingURL=sw.js.map
