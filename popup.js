console.log("Popup js working!")
chrome.storage.local.get(["key"]).then((result) => {
  console.log(result);
  console.log("Value currently is " + result.key);
  console.log(document.documentElement.innerHTML);
  console.log(document.body.innerHTML);
  document.body.innerHTML = '<div class=image-container><br><div class="close-button">X</div><img src="' + result.key + '"></div>'
  let close_buttons = document.getElementsByClassName("close-button")
  for (i = 0; i < close_buttons.length; i++){
    console.log("Close button obtained!");
    close_buttons[i].addEventListener("click", removeImage);
  }
});
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    console.log('url: ' + url);
});


function removeImage() {
  console.log("Removing parentNode");
  console.log(this.outerHTML);
  this.parentNode.remove();
  //element.parentNode.remove();
};
