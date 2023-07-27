chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'getText') {
        sendResponse({text: document.body.innerText});
    }
});
