// (function() {
//     const script1 = document.createElement('script');
//     script1.src = "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
//     document.head.appendChild(script1);

//     script1.onload = function() {
//         const script2 = document.createElement('script');
//         script2.src = "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
//         document.head.appendChild(script2);

//         script2.onload = function() {
//             // Load the custom control script from your local server
//             const customScript = document.createElement('script');
//             customScript.src = "http://localhost:5500/js/form-control.js"; // Point to your local server
//             document.head.appendChild(customScript);
//         };
//     };
// })();
function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  script.onload = function() {
      if (callback) callback();
  };

  script.onerror = function() {
      console.error('The script ' + url + ' failed to load.');
  };

  document.head.appendChild(script);
}

function loadFirebaseLibraries() {
  loadScript('https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js', function() {
      console.log('Firebase app loaded successfully.');
      loadScript('https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js', function() {
          console.log('Firebase Firestore loaded successfully.');
          loadCustomScript();  // Load custom script after Firebase libraries
      });
  });
}

function loadCustomScript() {
  loadScript('https://z2mg4d-5000.csb.app/js/form-control.js', function() {
      console.log('Custom script loaded successfully.');
  });
}

// Start loading Firebase SDK libraries
loadFirebaseLibraries();
