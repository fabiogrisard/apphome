// service-worker.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-cache').then(cache => {
      return cache.addAll([
        'https://fabiogrisard.github.io/apphome/', // Raiz do app
        'https://fabiogrisard.github.io/apphome/index.html',
        'https://fabiogrisard.github.io/apphome/iconhome.ico',
        'https://fabiogrisard.github.io/apphome/logo.png',
        // Adicione mais recursos que deseja cachear
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
