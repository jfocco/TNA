console.log("Service Worker Registered!!");

// const CACHE = "cache_v1";

// self.addEventListener("install", (e) => {
//   e.waitUntil(caches.open(CACHE));
// });

// //Estrategia Cache with network fallback
// self.addEventListener("fetch", (e) => {
//   //Ya existe el archivo en cache? Entonces lo devuelvo
//   if (e.request.url.includes("jpg") || e.request.url.includes("png")) {
//     const cacheResponse = caches.match(e.request).then((res) => {
//       if (res) return res;

//       //No existe el archivo y tengo que ir a la web
//       return fetch(e.request).then((res) => {
//         caches.open(CACHE).then((cache) => {
//           cache.put(e.request, res);
//         });
//         return res.clone();
//       });
//     });

//     e.respondWith(cacheResponse);
//   }
// });
