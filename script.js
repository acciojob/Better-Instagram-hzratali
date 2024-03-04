function allowDrop(ev) {
  console.log("allowDrop");
  ev.preventDefault();
}

function drag(ev) {
  console.log("drag");
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var target = ev.target;

  // Ensure that the target is a div with the "image" class
  if (target.classList.contains("image")) {
    // Swap background images
    console.log("Swapping images...");
    var draggedImage = document.getElementById(data);
    var tempBackground = target.style.backgroundImage;
    target.style.backgroundImage = draggedImage.style.backgroundImage;
    draggedImage.style.backgroundImage = tempBackground;
  }
}