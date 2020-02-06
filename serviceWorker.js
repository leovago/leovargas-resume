const staticLeoVargas = "leovargas-site-v1";
const assets = [
  "./",
  "./index.html",
  "./style/initial-load.css",
  "./style/styles.css",
  "./js/script.js",
  "./img/zonda.webp",
  "./img/jabil.webp",
  "./img/l2h.webp",
  "./img/intel.webp",
  "./img/magno.webp"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticLeoVargas).then(cache => {
      cache.addAll(assets)
    })
  )
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
});