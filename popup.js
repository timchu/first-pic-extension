console.log("Popup js working!")
chrome.storage.local.get(["key"]).then((result) => {
	console.log(result);
	console.log("Value currently is " + result.key);
	console.log(document.documentElement.innerHTML);
	console.log(document.body.innerHTML);
	document.body.innerHTML = '<img src="' + result.key + '">'
});
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    console.log('url: ' + url);
});
