self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/textarea/',
        '/textarea/webapp.html',
        '/textarea/webapp.css'
      ]);
    })
  );
});