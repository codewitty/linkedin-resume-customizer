chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "openPopup") {
        // In Manifest V3, chrome.browserAction.openPopup() is not available.
        // You can send a message back to the content script to handle the action.
        sendResponse({type: "openPopup"});
    }
    return true; // This keeps the message channel open until sendResponse is called.
});