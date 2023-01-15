var popupWindow = window.open(
    chrome.runtime.getURL("normal_popup.html"),
    "exampleName",
    "width=400,height=400"
);
popupWindow.window.onload = function() { 
  console.log(popupWindow.document.body.innerHTML);
  popupWindow.document.body.innerHTML = 'Inner HTML set on popup worked!';
}
console.log("Popup js working!")
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    console.log('url: ' + url);
  chrome.storage.local.get([url]).then((result) => {
  console.log("Result:" + JSON.stringify(result));
  console.log("Result at url:" + JSON.stringify(result[url]));
  var keyed_image_srcs = result[url];
  for (let key in keyed_image_srcs){
    console.log("Key : " + key);
    console.log("Image src: " + keyed_image_srcs[key]);
    document.body.innerHTML = '<div> Keyed <img src="' + keyed_image_srcs[key] + '"></div>'
  }
//    document.body.innerHTML = '<div class=image-container><br><div class="close-button">X</div><img src="' + result.key + '"></div>'
//    let close_buttons = document.getElementsByClassName("close-button")
//    for (i = 0; i < close_buttons.length; i++){
//      console.log("Close button obtained!");
//      close_buttons[i].addEventListener("click", removeImage);
//    }
  });
});


function removeImage() {
  console.log("Removing parentNode");
  console.log(this.outerHTML);
  this.parentNode.remove();
  //element.parentNode.remove();
};
