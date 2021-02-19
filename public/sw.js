const staticCacheName = 'static-site-v1';
const dynamicCacheName = 'dynamic-site-v1';

const assets = [
    '/',
    '/index.html',
    '/static/js/main.chunk.js',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js'
];

const dynamicAssets = [
    'https://newsapi.org/v2/top-headlines?country=gb&apiKey=ba6499bad4eb4af7a54f42954e1807fd'
]



self.addEventListener('install', evt => {
    console.log("Service Worker has been installed")

    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log("Caching Assets");
            cache.addAll(assets);
        })
    )

});

self.addEventListener('activate', evt => {
    console.log("Service Worker has been activated")

    evt.waitUntil(
        caches.keys().then(keys =>{
            console.log(keys)
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            )
        })
    )
});

//possibly edit this to speed up load times

self.addEventListener('fetch', evt => {
    console.log("fetching event", evt);

    if(navigator.onLine){

        evt.waitUntil(
            caches.keys().then(keys =>{
                console.log(keys)
                return Promise.all(keys
                    .filter(key => key !== dynamicCacheName && key !== staticCacheName)
                    .map(key => caches.delete(key))
                )
            })
        )
        
        evt.waitUntil(

            caches.open(dynamicCacheName).then(cache => {
                console.log("Caching Assets");
                cache.addAll(dynamicAssets);
            })
        )
    } else{
        console.log("you are offline");

        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                })
            })
        })
    }


})

// /static/js/main.chunk.js
// /static/js/bundle.js
// /static/js/0.chunk.js
// https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css
// https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css
// https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js
// https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js
// https://fonts.gstatic.com
// https://fonts.googleapis.com/css2?family=Mukta&display=swap
// https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap