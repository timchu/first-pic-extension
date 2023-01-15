function renderInPopup(popup, imageSrc){
//  popup.document.body.innerHTML +='<img src="' + imageSrc + '>';

// This line works fine.
//  console.log("Hello");
// THis line fails iwth DOMException: blocked a frame...
  console.log(popup.document);
//  console.log(popup.document.body.innerHTML);
}
function log(){
console.log("Logged the function!")
}
function wrapImages(popup) {
  console.log("Wrap images");
  const images = document.querySelectorAll("img");
  console.log("Image length: " + images.length);
  for (let i = 0; i < images.length; i++) {
    const image = images[i]
//    const clickFn = "renderInPopup(popup,'" + image.src + "')";
    console.log("Image :" + image.outerHTML);
    image.onclick = function(){renderInPopup(popup, image.src)};
    //image.onclick = function(){log()};
    console.log("Image postProcess :" + image.outerHTML);
  }
  console.log("Done wrapping images");
}
let popup = window.open(
    chrome.runtime.getURL("normal_popup.html"),
    "exampleName",
    "width=400,height=400"
);
function onLoad(popup) { 
  console.log("WINDOW LOADED");
  wrapImages(popup);
}
popup.window.addEventListener('load', onLoad(popup), false);
