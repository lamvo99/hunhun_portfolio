'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "fd1f7ba261d553a895c90f9ab949af9a",
".git/config": "0e582fc58c72cd0758d16f2fce2f6961",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "82f86df58eb05d49c9f18305d13c6fab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e66fa43bc0a5bff254f3646690b02131",
".git/logs/refs/heads/master": "e66fa43bc0a5bff254f3646690b02131",
".git/logs/refs/remotes/origin/master": "4f14e08d67ed8b88af18cd1ba1bd584d",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/06/5aaf803f9056d12bca92c598125f04823797a3": "f561e4076722cf13361f5ce41b8198d6",
".git/objects/09/f129a81ea75d523d640a0de753c16850144f83": "40454e2b04a570ea97d72f35d3069a6b",
".git/objects/11/4b0a883dc6e022aac6f9a4e28ac48dda6a556f": "d34a8e0139c91d9fa077431ca2843f1e",
".git/objects/17/0cab710028f977feb18539bd191a29c82313fa": "b8666f33a8e09f93b5ea9a46225ca5d8",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/73d94bb774ee72a0d1028ad845431b4c1af389": "84ea13020003fd5c042f27a8cb6634cd",
".git/objects/23/a47d6cae361c941280ea763c80e15c9f64fc44": "a264c6f55d558941b1fb0af48be13458",
".git/objects/28/ef89a98fb6fc56ef2fa7312dc56728cea7beb9": "efc47abb009d08206f226777ed352b1f",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/3c/4efeb3528359c9df83d133c376867a60b7f69f": "392d1774c7a8309c9dffde6efbb25539",
".git/objects/3d/3ee276a97139be14c00e16e25893c21c6f782d": "5c733195cfa6649a44bead6e161c847b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/43/976ab6c522f566ea45aa3f8313f27815983399": "7ff113da344113eb625314d57a4bf585",
".git/objects/4a/5f193745351bebc51a2b2b24890ef66fb78ab0": "586a495531d41848c0b861550b441d03",
".git/objects/57/94273a036e8ea3df01328194517ac9d4653cf9": "e5eb60092c94e7bc7e5a29d9ba389896",
".git/objects/58/73ce0312813bdb76ea32a7c6311c69a4809c40": "8564fbf31ed72ff2cab80eae9544216b",
".git/objects/64/e661ea19d4226b797cfdbadd21a4b998cd1fcc": "12675ea2e99085b13c1c3092edcbbf06",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/d713b341f5458f61a8e9bcd9caaa8e742e6fd9": "321e140ad365b6b0b0a602c8a3344f09",
".git/objects/6b/ee485abd6511f55238c9151fe4c3e8b45a5ba4": "cd26434ee0d65c1d6ba8f22791174854",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/22264581026815345873a4da89e173dcd6691a": "b64efe1d70f31097cc7e9bc12a1600f4",
".git/objects/7b/8e76c81fb34798dbaf256f9e9ce42ae057c861": "6d726f77f7e519824eca0d1259ec83f4",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/ded33b91792bc0d8fa46075e287f5ff91cec2d": "2b9075b10f1cadf437502f5cb8d7db4f",
".git/objects/84/7349acd5336b69080d71b9f2cb239432f64dfd": "cf6304832c1b322db6b33839845bf6e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/6121cc73a68b83bcf73f92629074c43c31e7e2": "ac2d1d12bab492ab2dfa821c5ee42602",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/0ffa83f66d4d58010fbfcf43c72763ca7f5aae": "fceb612b0bd8a5baf315759210eceb52",
".git/objects/aa/99387eb5fe370b2dc0f4bfc24e3d852a624b43": "a739b64c37e7587390e44f828834626c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/fca3bae7f25efe932374949982b9cbd4645491": "edb874e02f85ae0841b089800d7ef888",
".git/objects/b1/b9822bd364e0054b3c028218a9ed546ecdbfad": "9b7c03afdf015b5b286e2dcb89c9a2aa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/761eb31ac767b6d3a7844a6f840e31a400c4bd": "b12b4e1a8a2721bb30ab8ac1857aee54",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/ebc29b21aca543108f9e64790095ddc23d91b6": "b153ae1f4ed4324cf23363964214f763",
".git/objects/cb/6792b3987d2a2c722197aec205dd192f643f8f": "02c393633c0d71c4d6033f7ea28cf866",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/25aea6b146422794b122d40222ad9278cf7761": "b644f7fd97737c0c57d914f511fd7d58",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/ef64af7f095e991ac1b67fdda0ddb3738ebed6": "430c1faf27afa4c2401a84fcadaae7db",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b8433e0b115b6aaf0cc6821f3e3a97e0480394": "2d8a31a3dbde189c3606effb19c4341c",
".git/objects/e9/97c594533746574d31c1c5f77dba81027665e0": "0eccb10009b2b998c4b216a066812023",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/de5afa81f5e0905bc8c9e193149e14869056d5": "0ba02a00fe2c2691e36830d6d33a411c",
".git/refs/heads/master": "f5c7f25196d8971faef369e9d5d0d41d",
".git/refs/remotes/origin/master": "f5c7f25196d8971faef369e9d5d0d41d",
"assets/AssetManifest.json": "a7b46592c33c5aac157bd72f6e8179a6",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/icon/facebook_image.png": "b4a47c405c585d74c17cd1dfc99a12f6",
"assets/assets/icon/github_image.png": "f47a854a74c80a7c7e6528ce8a66975f",
"assets/assets/icon/ic_download.svg": "8f1fca53e01a8b6b4272d20e172553ed",
"assets/assets/icon/instagram_image.png": "61f3d816c07595704344efed4411e97c",
"assets/assets/icon/linkedin_image.png": "9208c5c6cece8a4fbe8814a2dd83b94e",
"assets/assets/image/image_avatar.png": "1aa3d0eaf1b60d15dfffe72b32485091",
"assets/assets/image/image_background.jpg": "87706978393bdac4472eddc9a12353d8",
"assets/FontManifest.json": "ecc5d089c1003d9fcfed41900e35d08e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2ea0f530180841e33bf87fcbb91ed9ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9eb8a7030c1073cc04ae1667e267e9e2",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3d0cf600caa6c16af39301d4843a1b7f",
"/": "3d0cf600caa6c16af39301d4843a1b7f",
"main.dart.js": "c4f57bb0b682a881f0e997ac76bed881",
"manifest.json": "ffd5f1a0afadaec48dd87343a9827233",
"version.json": "2a2c47bae25c99d743fb55f461cefe8e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
