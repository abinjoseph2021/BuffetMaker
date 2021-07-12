self.addEventListener("install" , ev =>  {
    ev.waitUntil( caches.open("static").then(cache =>{
        return cache.addAll(["./","./style.css","./image_only_1_512x512.png","./image_only_64x64.png"])
    }))
})

self.addEventListener("fetch" , ev =>{
    ev.respondWith(caches.match(ev.request).then(response => {
         return response || fetch(ev.request)
    }))
})