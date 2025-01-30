// service-worker.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-cache').then(cache => {
      return cache.addAll([
        'https://fabiogrisard.github.io/apphome/', // Certifique-se de que este é o caminho certo
        'https://fabiogrisard.github.io/apphome/index.html',
        'https://fabiogrisard.github.io/apphome/iconhome.ico',
        'https://raw.githubusercontent.com/fabiogrisard/apphome/refs/heads/main/Imagem%20do%20WhatsApp%20de%202025-01-23%20%C3%A0(s)%2022.54.38_38e2ee8a.jpg'
      ]);
    }).catch(error => {
      console.error('Falha ao abrir o cache:', error);
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
