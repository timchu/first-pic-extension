function grabImages() {
    const images = document.querySelectorAll("img");
    return Array.from(images).map(image=>image.src);    
}
let image_srcs = grabImages();
let first_image_src = image_srcs[0];

let num_images_saved = 0;
let page_key = document.URL;
let stored_image_srcs = chrome.storage.local.get([page_key]).then(() =>{
  console.log("Stored image srcs: " + stored_image_srcs);
});
if(stored_image_srcs) {
  stored_image_srcs = {};
}
stored_image_srcs[num_images_saved] = first_image_src;
let json_obj = {}
json_obj[page_key] = stored_image_srcs
chrome.storage.local.set(json_obj).then(() => {
  console.log(JSON.stringify(json_obj));
  console.log("Value set!");
});
num_images_saved += 1;
console.log("Stored image srcs after add: " + stored_image_srcs);
console.log("content JS loaded!")
