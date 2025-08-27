// Function for Get ID
function getId(id) {
  return document.getElementById(id);
}

// Function for Get Class
function getClass(className) {
  return document.getElementsByClassName(className);
}

// Heart Icon Functionality
const heartIcons = getClass("heart-btn");
for (icon of heartIcons) {
  icon.addEventListener("click", function () {
    const heartCount = parseInt(getId("heart-counter").innerText);
    const newHeartCount = heartCount + 1;
    getId("heart-counter").innerText = newHeartCount;
  });
}
