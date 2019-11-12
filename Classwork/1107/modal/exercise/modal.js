// create a function for closing button

// create a function for loading the image with a parameter that sets file path

var img = document.createElement("img");

// apprendChild(img) to modal

// style the image (style.src, style.position with left/right/transform, style.width, style.maxHeight)
function closeModal(){
  document.getElementById('modal').style.display = "none";
}

// style the image (style.src, style.position with left/right/transform, style.width, style.maxHeight)
function openModal(imagePth){
  document.getElementById('modal').style.display = "block";

  document.getElementById('modal').appendChild(img);
  img.src = imagePth;
  img.style.position="relative";
  img.style.maxHeight="80vh";
  img.style.left="50%";
  img.style.top="50%";
  img.style.transform="translate(-50%,-50%)";
}
