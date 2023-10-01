function generateDeepLink() {
    const host = "uearrow.com";
    const scheme = "http";

    const uri = `https://uearrow.com/`;
    return uri;
}

function openApp() {
    const deepLink = generateDeepLink();
    window.location.href = deepLink;
}