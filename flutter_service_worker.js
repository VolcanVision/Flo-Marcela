'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "39d62dc11a7d8749211c190654abc679",
".git/config": "381cfc7c1d1e47e8eaead4ebdcf1fa53",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ca5e80e2a8dfceaccf257d09d08a100b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "884704e6b00b76d64042f9a1cc351bb5",
".git/logs/refs/heads/gh-pages": "2f21a1b1cdc730e3bf6144ddb710b33e",
".git/logs/refs/remotes/origin/gh-pages": "4e3e84332b5ac280d204e7ccbdc7fddb",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/3be5b11950641c07879199d336644e63ad9215": "4630a0a9b0c38f6c13a6fca59eafe877",
".git/objects/07/6b1d3b005700f1116eb5e48c1bdc976ed617ce": "a86f2a554891eb20a9126e810dcf8b63",
".git/objects/17/741625c94c08571278980b7344556e149882d2": "ce59fccfdb398bc15785d9666e27e2ec",
".git/objects/1a/3322868bd8082f7fa2dfabf7c9f47c873adbf8": "d4a3823efa60a319ff8748c3a2948197",
".git/objects/1a/d100493454f43aece4dcec0f353e22e3873bef": "6241edddac01f683acce2b6ef0e32cb8",
".git/objects/1a/f60926992337c63e8714c8062a36d072e571c9": "4cf7eecba79162dea1802d08a773512c",
".git/objects/22/401734a56219205c7b6716afa048ee9be58822": "7cac3db101654cfc5c6f4c5ac7d91a19",
".git/objects/23/28c3b0775a2b37234aee1f7374deaa31fcd323": "3be19259cde35dac6e26dff83a09c5c2",
".git/objects/23/79925895e074b7cf8e86958d28775033a8a663": "e3168e85c7d8c0a622b7f47b52d2d66e",
".git/objects/27/8347dc47c121e0ae482cba9ca38516af849a36": "383e16ed68f1b841cb40fc0094b48af0",
".git/objects/2b/4732716f927dab951ecf162112da983cad9710": "8d8df13204f243c273f744f5bb984991",
".git/objects/2e/b257650052deb5d68c18a2f7bc78b0fb38476e": "ba84c952c752571ea9e438b672c8ccda",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/3682fde410ba086543804c025e9a8f1b7fb52c": "d5f8edf15bb198cbe57ceb93328dde5b",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/7cc971446392f0d67b4c3c998d0b38335e979a": "85b5b0eda87d4659f325d270275f5b17",
".git/objects/39/f39b91f1417eef8c20ecfa98f0cac9dd8008d6": "8e19e2fe1e9b5ca337f2fbc233df089c",
".git/objects/3a/15136071094e7994984419d48a0002bc2c90c0": "2587b00951b743027ac852b158f53bca",
".git/objects/3a/6df61fd729222b1774bdc628e2b06e14105cf4": "c0585f0744391bde1308d083c1e7a6b0",
".git/objects/3e/4648aa5415492314635bcaf34839eeca3f1604": "c39c9fc663306af5f0bfa4f68f155b9c",
".git/objects/3f/3eef4f426171d698881c98ffd5ee6533cc2f35": "323071aacfc64078f556838aa5056e15",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/3f8bb9288ff15801d2a5d3f82f85b9952efe80": "1626a9c3da466ad520f5e5b20f5efb3b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/4a6cc093011ac4cef33ffb1ce63559bc17a68b": "e2e40c544c75e777bba8f9f508f124ff",
".git/objects/47/fea4575e57406af93925502cf4651189fb6cc4": "036765ac3f6d0a9fdc030727f73fbf7e",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/abcda3f632521e24a82e84fd6a93ee2afc3cd6": "30c7da53fe9959ba5bce31b739e04e1f",
".git/objects/59/00cdb901de8ec21b580869c01c70d32e764dae": "498630bca95d427f12739acd32c22b3c",
".git/objects/59/4ae89d89a947f71f65aa4e33a36b772488fbe8": "a345bbe2849a39237db331fbf70d714b",
".git/objects/5a/e9922a87445bf6d7c39b1a8ddb7b66e9c9304c": "244272d1c9c51786066976ce7dd5aaad",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/5c23fa54d67e640ff5d1d360d7805ec4704732": "8eb7d57aa79a18877236fba7015e8947",
".git/objects/63/35d50c8340e84451bef1c9a513bf0d57c28c24": "86f9b7fe1b8283db12ef6188df16c7c7",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/3f4ee0510c19d987b914c025513f87dd6362c8": "702034e92bf028e4649fa6e709849de5",
".git/objects/71/2d975ad2fa9cdb1c13ef986b18fb860585467d": "9fd94f840a12c962c859f24f97776026",
".git/objects/84/3feaa4b62beb0b6fd2322c0372a5601b77243b": "6da66e51ef028648419458c5bb27cc75",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8f/0772b359a77de1615e3a8de4ae9f129dd27c03": "140177f19c61fd8726052eb9901cf448",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/407e9595968ea6c13e4557c2c66bcaecd42841": "18ff752c28bf15eb9d27b28c8404ad3b",
".git/objects/92/c37cf36f8a286a336a8aff37d8df30a3eb0848": "8b6c8a88253f8c46e037edf5d67c96cd",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/95/3c24e0a400343f1478cb10ec6ba6d3952c60e2": "2baa9d42c43cdf12bf6fda576207259e",
".git/objects/9c/152299052bbca7a072e32fab5de5af17072f13": "89ef6e930163f397fb59f20325bc6287",
".git/objects/9d/5fba3b799285b350d62e38c184b1adb2798fb2": "7d80498d723ea93c5d5aa2c57b8030a7",
".git/objects/a1/6e0466501b67e48577560f9f0e6a1a0b9ca28c": "116fe135440814f47d108f69e7031b1c",
".git/objects/a2/3d98b2644fa29e08f83d3abfdf2401830746c6": "b5360b90373ba72a6bf25e47a7413548",
".git/objects/a3/c893e8af21019d1cf0b1a16e57d855e2b54989": "2cb53f5a268b0514cdcede748b51b767",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/a332f9f018a8e1b5e47721bf1a12739f62608a": "5c08cede1cdd57b363316ea08b99a72f",
".git/objects/af/0b4d05e70fe6d4336837438e8f4196780d8799": "9e1990c3549227a19d016b13afcd2f53",
".git/objects/b0/0c915a301c8891835721cd7292ff3a21a14462": "15f4d89157582971fb53d610919b9d10",
".git/objects/b5/7ab48b8a6643ceb05bbf8ab75371521e862039": "903680f6e823ed57d4adb4f39d652f3a",
".git/objects/b7/cbc3601516267debe1c32e37227d4834212734": "c9ac866730325612dd63fd4558ba3c8e",
".git/objects/bc/63d3eb599c6e9003556ce40b5d276ed4bed4cd": "3e116a42dad97dd3342f7bb055c171a3",
".git/objects/bc/984ac8e8aedcf005816ba4eb6fc95cfce72e0a": "1cb887ad96530b5751cdf14eecffaebb",
".git/objects/bf/776c1a9ae299797c07df8bbb7bafa49a76722b": "7994299db9cfccf572dcd7cdfd697b1a",
".git/objects/c3/27b45b69dd96e16b0213fb77b2d3704ff26050": "c455876c1f84e62a814425ba3a6d1d46",
".git/objects/c6/3fc1474dc82cfb140a0abe8c4dccd51177443f": "632499980070e8a82f61c21c26a71b30",
".git/objects/c7/d61f57a3cb6fca79359223c3481c6f808dcb06": "5a78e8e7115cccced403e5dc1df55afd",
".git/objects/cc/2df3e1df9d629874182d86900e14a3bf801f7a": "5e9bb5d3dc8c3fe208eab906822ca2b3",
".git/objects/ce/ea36e7007199ace5e0245e150a1bab9d850a21": "9deecce43b353bf8a8ee5cfae1235c77",
".git/objects/d2/4591cada58687b07ffeff4b7aa9c655ffaca94": "4e791583b12dd623ff44ed0dce1448af",
".git/objects/d3/2cca838ab320b6809cd5146e39747e0d7d6345": "f1eba3705c25dc359a38454b010e0c93",
".git/objects/d4/3399bbf9b5df4d17005242a38e76a0acc191bb": "4728a8ed2cd65db840d2c5fd19c40b1a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/b9b3e110f89547cc7836f0631e1cf59ad03d58": "7339de9f2d95bf9d20c5c8d0575504a8",
".git/objects/d7/36cc85b27c75ac8540fc195deb2ad15da5b07f": "6195d20ab9f70861635bfa5842c1b88d",
".git/objects/d8/5f39cc81e3bef4fb3ac7a325b230ac00d38910": "3bb983b232a3ff60389daf30e9c1ccfa",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/de/f964ad98dcc74378f82276ab9da11c9d4df833": "fc4a848f3df63ca1e04c73430070f096",
".git/objects/e1/1db3b262d569aeafa4b07ebc28ae1fa023bcbe": "0623b206c0960c84b402ef537dd4d4c6",
".git/objects/e5/74d52739878e8d6763528cc318cf2f6b4873b8": "e1534199c4b6b68e4a59b7014a0080ee",
".git/objects/e8/d43918437cddca655f92ed9e2ec441477f49fc": "d146df3152afd78c6c39f13aa8bbf430",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ed/28fb12af926dc8542f599f6294cdfb589d8149": "94b2abad666521fe04a623507aa70d48",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/76f302730bf1a0ec0c99ec824a8e17df6d00a7": "332acb148acfe1fef33a30ebad04f0c8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/6f4fa6f09b0854c44f070e43eeec8ade805ccf": "06e305ff0f56031e2df3a2c5d73444d5",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/e94639a22a273e1c78e55b500f92f9e8400059": "ed9ecdd8835ea08770e171c299e31ee1",
".git/objects/fa/48ad3cbc2b29ec409a89f029c3506b1049dc6b": "1e8fdb6ded1b46596d29882b6da4b341",
".git/objects/fd/f0c6bd0029a5a0f7b19b32b5f7b11713eff642": "388b3bbb48988446e241c927db2cd922",
".git/refs/heads/gh-pages": "25544bfc254d95e119d4041eacb0b562",
".git/refs/remotes/origin/gh-pages": "25544bfc254d95e119d4041eacb0b562",
"assets/AssetManifest.bin": "60d5588311f9e68ed2ffeae7e6492c82",
"assets/AssetManifest.bin.json": "f61bbb6d5c3bfe186328f0fb95db43da",
"assets/AssetManifest.json": "4cf5cf296b01f24ba62f96935322ebe8",
"assets/assets/images/scm_app_logo.png": "49a7d910a804402be139759d56b3ab71",
"assets/assets/images/volcan_vision_logo.png": "fffaa56c23e8a6bb9bb921a13224d4db",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "44432adcd48f941d5d112b3b5100860e",
"assets/NOTICES": "3f606d4a4e3e2bf85c0a4c15e11b2d27",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "3f5dbe612c09713d0dfb272c2e210118",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ac3861b2210a4eaddb807e5c852d8215",
"icons/Icon-192.png": "809adc1ba9b5960aeca72fe7c3a577be",
"icons/Icon-512.png": "570a8e3a126a779f6865c9c88c329124",
"icons/Icon-maskable-192.png": "809adc1ba9b5960aeca72fe7c3a577be",
"icons/Icon-maskable-512.png": "570a8e3a126a779f6865c9c88c329124",
"index.html": "9f4a0e4c8a59d2c8754c034576ca9530",
"/": "9f4a0e4c8a59d2c8754c034576ca9530",
"main.dart.js": "1a3d82efda2e020f718b690e659d7130",
"manifest.json": "7460b44f8b7ae9af29c7894c3dec72d9",
"version.json": "843503fc6da95ed7c5d0faa78b73242a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
