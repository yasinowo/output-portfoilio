'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a39e52b82940e750b8f0cc447bf82c65",
"assets/AssetManifest.bin.json": "00721899a50423a4bbc7625739f1551b",
"assets/AssetManifest.json": "ea44b62e6fb00fd07bd5bb1dcb12f91b",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "9a3a3c0803219892727ed9d85ad5caea",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "4252dae8574e434c7bb0127b8ffd06df",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "a0f2eadb0002101ea5da28381ce16cde",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "07502c4fe46025097dd8b1e331182ee0",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "614a91afc751f09d049231f828801c20",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/assets/fonts/shantell_sans/ShantellSans-Bold.ttf": "3f27bd4b2d3b52e2a070784ccc0bb6f2",
"assets/assets/fonts/shantell_sans/ShantellSans-ExtraBold.ttf": "7f33160b6a6ff926451c11fa753659cd",
"assets/assets/fonts/shantell_sans/ShantellSans-Italic.ttf": "dd649de8940523775efcace606541e62",
"assets/assets/fonts/shantell_sans/ShantellSans-Light.ttf": "4c7abd86e9797d0c26f93f5fb34ce938",
"assets/assets/fonts/shantell_sans/ShantellSans-Medium.ttf": "e7e23424662df693e295dbce4e29ab57",
"assets/assets/fonts/shantell_sans/ShantellSans-Regular.ttf": "eea56a073c0622f7157892918d1c336b",
"assets/assets/fonts/shantell_sans/ShantellSans-SemiBold.ttf": "70f404c91428f6427571f1684a62ba56",
"assets/assets/images/certificates/deep_learning.jpg": "9a6cc3a0d5e5a51205ca2364ad9f5a2a",
"assets/assets/images/certificates/graphql.jpg": "29bef6e2f34cc3eb1e24230a1ead491f",
"assets/assets/images/certificates/intermediate_python.jpg": "b6464ffce448b572932192c728075fdd",
"assets/assets/images/certificates/jst_japan_asia.jpg": "41b3fbad48bb6d344a8774702ad86da9",
"assets/assets/images/certificates/tmesek.jpg": "ecb7b17281f8b8e4d9d85e201bbb51df",
"assets/assets/images/personal/coffee.svg": "7a23c34356aaf070b65727cde4e3beb6",
"assets/assets/images/personal/complexity.svg": "17c1001baac9aa408cd57da0aecd7dca",
"assets/assets/images/personal/earth.svg": "cfcd9e658e8b4548820c598cbd9ea1e9",
"assets/assets/images/personal/galaxy.svg": "b3eee09b3b7e4c2d46b48d7251a1172f",
"assets/assets/images/personal/logo.svg": "3f951bb925ec7805054ddd018b04a086",
"assets/assets/images/personal/me.jpg": "37b63c916cd7ad612cbccfc89c0ab3e7",
"assets/assets/images/personal/mess.svg": "b59fce5ddc693a9b94bb45cee08fe020",
"assets/assets/images/personal/message.svg": "49a173c85f947df057d909efd2ec793f",
"assets/assets/images/personal/my_showcase_style.png": "213216fd7f97575e55f9a5e2bab571c6",
"assets/assets/images/personal/work_stump.svg": "bd58f85eb6175c38388f31d105b1a29a",
"assets/assets/images/projects/ai_chat_bot.png": "9d41e8eb12bb98afd6007d8a788839df",
"assets/assets/images/projects/alibaba/1.jpg": "c260e542208027f5fb394e177fbdee38",
"assets/assets/images/projects/alibaba/10.jpg": "3b6f7d23ff04c9612201ddc0396b7918",
"assets/assets/images/projects/alibaba/11.jpg": "711d5146f3d05d58e1518035c4b6c998",
"assets/assets/images/projects/alibaba/2.jpg": "06844ceffd5dc7f4b1450fac6bdfda60",
"assets/assets/images/projects/alibaba/3.jpg": "cff254b85a3d2ac5b5c832eeab400128",
"assets/assets/images/projects/alibaba/4.jpg": "7a533e9e3ddd73486b82cd3a222b60bb",
"assets/assets/images/projects/alibaba/5.jpg": "d595234992cb098d19203cfec82c5837",
"assets/assets/images/projects/alibaba/6.jpg": "fe1e16b2d29e4819074fc57f64b1c99c",
"assets/assets/images/projects/alibaba/7.jpg": "daa20fe565ebc4458be7a620d12d01cf",
"assets/assets/images/projects/alibaba/8.jpg": "b6bde0a50c9ef092cfdfc3af4796c5c1",
"assets/assets/images/projects/alibaba/9.jpg": "cd922431886062bcbb1ce8af2b536aaa",
"assets/assets/images/projects/alibaba_logo.png": "073baaa97692bb62aca767969ead976d",
"assets/assets/images/projects/animated_buttons.png": "6adf04371ccfdb14959e97d8eee42250",
"assets/assets/images/projects/design_patterns.png": "0274f5986b14139edd72021ccbd1326c",
"assets/assets/images/projects/ggone.jpg": "4212f1730f81119ff06eb14a10a8d36a",
"assets/assets/images/projects/graphql_notes.png": "45eda8f8a37c58819a6100631b8c7465",
"assets/assets/images/projects/ichat/1.jpg": "bf29a2398c703752c97ede598a050628",
"assets/assets/images/projects/ichat/2.jpg": "b85ceb2b45b61fdec5055203028274c9",
"assets/assets/images/projects/ichat/3.jpg": "54f243ba6f8af301cafa3831f50604e6",
"assets/assets/images/projects/ichat/4.jpg": "d5b83ffb901ed17dc0b6182c4c187b34",
"assets/assets/images/projects/ichat/5.jpg": "f0926a13741021a3e11135479a4b6539",
"assets/assets/images/projects/iron_man.png": "8708dc927d907d844431378307225a16",
"assets/assets/images/projects/musicplayer/1.png": "78c6e368ce3fbeae1072ff5b5955e459",
"assets/assets/images/projects/musicplayer/2.png": "b37ecc40f0bbd6c426b2273ed394b1ec",
"assets/assets/images/projects/musicplayer/3.png": "66ed0ba740815fa44960e7c6daae0893",
"assets/assets/images/projects/musicplayer/4.png": "d0ddd3b7eed93b1dfe1949fe93f1f672",
"assets/assets/images/projects/music_player.png": "dd9e9963dd9e52ebc412b54c46dc2071",
"assets/assets/images/projects/myshop/1.png": "973789868354b6f67f67250f91a56cb1",
"assets/assets/images/projects/myshop/2.png": "5b4d9e789b5fcea99f87ca0d32c97210",
"assets/assets/images/projects/myshop/3.png": "f03b04e8586565e2a8b132d719e7b13f",
"assets/assets/images/projects/myshop/4.png": "5435d5a82efcf4fd513eca8fd29f1ca1",
"assets/assets/images/projects/myshop/5.png": "fd939c73e0488ff09a5c3b49a463eb5f",
"assets/assets/images/projects/myshop/6.png": "b122a7b0af966b35d4d8e931bc8cc576",
"assets/assets/images/projects/myshop/7.png": "f7ba8cfef23f501602e9c82e8bf4e455",
"assets/assets/images/projects/myshop/drawer.png": "44e76e5100248f0fe6880e88d3da5caa",
"assets/assets/images/projects/myshop.png": "21ceba829cb2661f01091e39536982c2",
"assets/assets/images/projects/notee.png": "264a912225cccd84854bd8ffe39658b3",
"assets/assets/images/projects/pulse_x.png": "4583c5c8f45338f72f4ac6001faff5ca",
"assets/assets/images/projects/the_golden_land.png": "c862492f15f121d0f849779928c76f74",
"assets/assets/images/projects/thread.png": "23c161c332c9518d5a6910b17d70d814",
"assets/assets/images/tools/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/images/tools/flutter.svg": "fae6a382059c0b50202d0acd3edc9d2f",
"assets/assets/images/tools/graphql.svg": "6786fc1daa147989923f76d610e71692",
"assets/assets/images/tools/html5.svg": "10328348fe4795e4153dd39118804af4",
"assets/assets/images/tools/python.svg": "26f5129d3abd6d3232bcd2d8cd80a012",
"assets/assets/images/van_gogh/blossom.jpg": "edd66f35236f9c40230f1661b6f591ba",
"assets/assets/images/van_gogh/irises.jpg": "635508d65ecf46f0d10fe99c3a7e0633",
"assets/assets/images/van_gogh/the-harvest.jpg": "728eeed80696e11c7aa2bd300a5c91e3",
"assets/assets/images/van_gogh/the-potato-eaters.jpg": "6b3d9a5439c71c19f48d5c212af731cc",
"assets/assets/images/van_gogh/the-starry-night.jpg": "e6510bbbc3323389a97301589c1d23f1",
"assets/assets/images/van_gogh/wheat-field-with-cypresses.jpg": "840970e2bd83dc59ffdf05e29f9ed5e4",
"assets/FontManifest.json": "0f73c5a79ef8f2f6d2f42497c59ed9cb",
"assets/fonts/MaterialIcons-Regular.otf": "5d1e2cc45553890e8625cbc5a8de8e6f",
"assets/NOTICES": "a0d75f016adade05aa3462cdda104518",
"assets/packages/atlas_icons/lib/fonts/achievement/achievement.ttf": "b4aaadf0bf250f17427edc2bf8d6fffa",
"assets/packages/atlas_icons/lib/fonts/arrow/arrow.ttf": "b1de896027e8f8bce86ecb62033361bb",
"assets/packages/atlas_icons/lib/fonts/audio/audio.ttf": "3f1061077885938f7d7950997d204c5d",
"assets/packages/atlas_icons/lib/fonts/basic-ui/basic-ui.ttf": "66ce98cbb527bcc6ebe7ee107c5b4c7b",
"assets/packages/atlas_icons/lib/fonts/business-finance/business-finance.ttf": "f2acea65ddcc3cc9f4f603eeda551ef0",
"assets/packages/atlas_icons/lib/fonts/christmas/christmas.ttf": "0d5b397bbefbc79ec6962cab78cdfa7a",
"assets/packages/atlas_icons/lib/fonts/cinema/cinema.ttf": "2c4d6cff8e18f0d725ff07aa98ef5951",
"assets/packages/atlas_icons/lib/fonts/communication/communication.ttf": "98765079271bc5f10b094f70ec20ef35",
"assets/packages/atlas_icons/lib/fonts/construction/construction.ttf": "cd4e1da1de050086fca243af5904e782",
"assets/packages/atlas_icons/lib/fonts/content-box/content-box.ttf": "bdac94c1cf513f6765423de96650ca97",
"assets/packages/atlas_icons/lib/fonts/data-document/data-document.ttf": "a9a08ede494be44999414f064b76e564",
"assets/packages/atlas_icons/lib/fonts/ecology/ecology.ttf": "b83e0c5a4760275984251b83c4ae8288",
"assets/packages/atlas_icons/lib/fonts/electronic-gadget/electronic-gadget.ttf": "e24858c0b60a69c5646b1547210fff28",
"assets/packages/atlas_icons/lib/fonts/fitness-gym/fitness-gym.ttf": "4271c3a0c2c52db8714961e022c43119",
"assets/packages/atlas_icons/lib/fonts/food-beverage/food-beverage.ttf": "3bd6a218528261210afd0fecba202a31",
"assets/packages/atlas_icons/lib/fonts/furniture/furniture.ttf": "a3ec0d78085d4bd960a42ad5690c74c9",
"assets/packages/atlas_icons/lib/fonts/goals/goals.ttf": "0f4c7d9e8c7493ce5c97ed3a6900f454",
"assets/packages/atlas_icons/lib/fonts/hand-gesture/hand-gesture.ttf": "23cf587d654b727258bdd2e539cbf3ef",
"assets/packages/atlas_icons/lib/fonts/hotel-service/hotel-service.ttf": "50c923469385bd7b44dcb324fe548559",
"assets/packages/atlas_icons/lib/fonts/internet-security/internet-security.ttf": "1a54b082a574356bf84cc740303ed2a2",
"assets/packages/atlas_icons/lib/fonts/laboratory/laboratory.ttf": "2ac143285c91dfeaa7bd76b1b9531503",
"assets/packages/atlas_icons/lib/fonts/leadership/leadership.ttf": "027bd6ee2dd9c7eb2fd83ce8c3112024",
"assets/packages/atlas_icons/lib/fonts/love/love.ttf": "d1bb0864325a76ac12868703585dca7e",
"assets/packages/atlas_icons/lib/fonts/marketing/marketing.ttf": "a3c9127874bdf909d03f23340ca680e2",
"assets/packages/atlas_icons/lib/fonts/medical/medical.ttf": "1870469962656e437fe59fbdc1d41f57",
"assets/packages/atlas_icons/lib/fonts/partnership/partnership.ttf": "153e3d7bf92828c0b6f344462c96b3a1",
"assets/packages/atlas_icons/lib/fonts/personal-development/personal-development.ttf": "cc1fffe7122f1837e50149b9469cb537",
"assets/packages/atlas_icons/lib/fonts/real-estate/real-estate.ttf": "6a12f5fce5044802569cafaa0468851d",
"assets/packages/atlas_icons/lib/fonts/school/school.ttf": "df386f18a52a9184d05a34e44611fc29",
"assets/packages/atlas_icons/lib/fonts/social/social.ttf": "14e2653eb89f982208a1c844d145ec0b",
"assets/packages/atlas_icons/lib/fonts/sport/sport.ttf": "35b11c59b869732d524129e81095ee7f",
"assets/packages/atlas_icons/lib/fonts/thanksgiving/thanksgiving.ttf": "3361220d1c358b8e5b9705250af2031f",
"assets/packages/atlas_icons/lib/fonts/transportation/transportation.ttf": "7fe16a999c74f8d1d1c5b380eef01d81",
"assets/packages/atlas_icons/lib/fonts/travel/travel.ttf": "ad2106403b4f3178091e5b9b65fbc636",
"assets/packages/atlas_icons/lib/fonts/virtual-reality/virtual-reality.ttf": "4f154c6974c3ca6c64e6eabdac9aca8b",
"assets/packages/atlas_icons/lib/fonts/weather/weather.ttf": "bf22ee4acf5483d84fcd4fb215f949e7",
"assets/packages/atlas_icons/lib/fonts/web-design/web-design.ttf": "63e6ea1eeede5eb6d7d1b7e7ea5c5797",
"assets/packages/atlas_icons/lib/fonts/winter/winter.ttf": "498547350c07410d7d2b5ef388786d85",
"assets/packages/atlas_icons/lib/fonts/working-together/working-together.ttf": "0bb881a4d35082e410776be5e1207d49",
"assets/packages/atlas_icons/lib/fonts/world-monuments/world-monuments.ttf": "b4838b4465611323a6f32f6085fb6629",
"assets/packages/atlas_icons/lib/fonts/yoga/yoga.ttf": "66b3143038a6ac7a5b3f98ff41ef1002",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5771039cf7637c1c0c2417bde604458a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7143aeb34600f45a7bf646106ee7aeb5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9cf740d8bfcdbcc42b8e9d8365fe6973",
"/": "9cf740d8bfcdbcc42b8e9d8365fe6973",
"main.dart.js": "71ea6f7f53487de3a2e6d180cd010111",
"manifest.json": "08d8c231ef7853de92f2db29c033755d",
"mypic.jpg": "0c8c241edffa778c27285fc518e4f86b",
"version.json": "43b06f861ebbe2a09498da4d37587553"};
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
