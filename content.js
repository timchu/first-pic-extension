function grabImages() {
    const images = document.querySelectorAll("img");
    return Array.from(images).map(image=>image.src);    
}
let image_srcs = grabImages();
let first_image_src = image_srcs[0];
chrome.storage.local.set({key:first_image_src}).then(() => {
	console.log("Value set!");
});
console.log("content JS loaded!")
