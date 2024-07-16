browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//    console.log("Received request: ", request);
    if (request.title == "freeMediumPosts") {
        reLocationFreePost(document.URL);
    }
});


function freeUrl(url) {
    const urlObj = new URL(url);
//    if (url.host !== "freedium.cfd") {
//        urlObj.host = "freedium.cfd";
//    }
    if (url.host !== "readmedium.com") {
        urlObj.host = "readmedium.com";
    }
    return urlObj.href;
}

function reLocationFreePost(postUrl) {
    let reLocaitonUrl = freeUrl(document.URL);
//    console.log("Redirecting to: ", reLocaitonUrl);
    window.location.href = reLocaitonUrl;
}
