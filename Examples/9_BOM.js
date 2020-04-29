/*BOM: Browser Object Model
window
screen
navigator
location
history*/

window.onload = function () {
    //there is no need to write script below the body or in between the body, just include code in the window.onload function and 
    //it will be executed after the window has been loaded
}

function windowOps() {
    var win = window.open("https://www.google.com", "GoogleWindow", "height=500, width=500");
    win.moveTo(100, 100);
    win.close();
    //window.close();
}

function navigatorProp() {
    document.write("<br>" + "AppCodeName:       " + navigator.appCodeName + "<br>" +
        "Platform:      " + navigator.platform + "<br>" +
        "AppName:       " + navigator.appName + "<br>" +
        "CookieEnabled: " + navigator.cookieEnabled + "<br>" +
        "Product:       " + navigator.product + "<br>" +
        "Language:      " + navigator.language + "<br>" +
        "AppVersion:    " + navigator.appVersion);
}

navigatorProp();