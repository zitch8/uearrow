function generateDeepLink() {
    const host = "zitch8.github.io";
    const scheme = "https";

    const uri = `https://zitch8.github.io/uearrow/`;
    return uri;
}

function openApp() {
    const deepLink = generateDeepLink();
    window.location.href = deepLink;
}
