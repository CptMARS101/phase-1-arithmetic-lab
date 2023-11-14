const divTag = document.querySelector("div");
const imgArray = "https://static.wixstatic.com/media/d87dbc_bcd7c0387ef843e0ba4a5ce518cc92f4~mv2.gif"
function addImage(url) {const image = document.createElement("img");
image.src = url;
image.alt = `Sunrise`;
divTag.appendChild(image);
}
addImage(imgArray)
