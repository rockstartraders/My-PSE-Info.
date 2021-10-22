
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    StatusBar.backgroundColorByHexString("#26547C");  // primary
    StatusBar.overlaysWebView(false);
}
