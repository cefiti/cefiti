const cacheKey = 'CEFiTI600';

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(cacheKey).then((cache) => { 
      return cache.addAll([
        './196.png',
        './512.png', 
        './favicon.ico',  
        './index.css',
        './index.html',
        './index.js',
        './leg/IN02-2014.pdf',
        './leg/IN08-2012.pdf',
        './leg/IN17-2005.pdf',
        './leg/IN19-2014.pdf',
        './leg/IN21-2018.pdf',
        './leg/IN23-2008.pdf',
        './leg/IN28-2017.pdf',
        './leg/IN37-2016.pdf',
        './leg/IN44-2018.pdf',
        './leg/IN48-2007.pdf',
        './leg/IN54-2007.pdf',
        './leg/IN03-2008.pdf',
        
        './leg/IN09-2011.pdf',
        './leg/IN17-2009.pdf',
        './leg/IN20-2013.pdf',
        './leg/IN23-2007.pdf',
        './leg/IN28-2016.pdf',
        './leg/IN34-2017.pdf',
        './leg/IN38-2018.pdf',
        './leg/IN46-2010.pdf',
        './leg/IN53-2008.pdf',
        './leg/PORT125-1998.pdf',
        './leg/RES06-2019.pdf',
        './leg/RES04-2019.pdf'
      ]);
    }));
  });

  self.addEventListener('activate', (event) => {
    event.waitUntil(caches.keys().then((keys) => {
      return Promise.all(keys.map((key) => {
        if (!cacheKey.includes(key)) {
          return caches.delete(key);
        }
      }));
    }));
  });

  self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
      event.respondWith(caches.open(cacheKey).then((cache) => {
        return fetch(event.request.url).then((fetchedResponse) => {
          cache.put(event.request, fetchedResponse.clone());
          return fetchedResponse;
        }).catch(() => {
          return cache.match(event.request.url);
        });
      }));
    } else {
      return;
    }
  });

  self.addEventListener('fetch', (event) => {
      event.respondWith(caches.open(cacheKey).then((cache) => {
        // Go to the cache first
        return cache.match(event.request.url).then((cachedResponse) => {
          // Return a cached response if we have one
          if (cachedResponse) {
            return cachedResponse;
          }
          // Otherwise, hit the network
          return fetch(event.request).then((fetchedResponse) => {
            // Add the network response to the cache for later visits
            cache.put(event.request, fetchedResponse.clone());
            return fetchedResponse;
          });
        });
      }));
  });