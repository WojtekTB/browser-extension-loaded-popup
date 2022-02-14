// add this script to your manifest.json in background scripts to make your "browser_action" pop up stay loaded
let popUpFile = "popup.html";
let popUpHeight = 600;
let popUpWidth = 300;

chrome.browserAction.onClicked.addListener(onBrowserActionClicked);
var popUpWindow = null;
function onBrowserActionClicked() {
    chrome.windows.create(
        {
            url: popUpFile,
            type: "popup",
            focused: true,
            width: popUpWidth,
            height: popUpHeight
        },
        (window) => {
            console.log(window);
            popUpWindow = window;
            window.width = 1000;
            
        }
    );
}
