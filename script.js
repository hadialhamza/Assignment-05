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
for (const icon of heartIcons) {
  icon.addEventListener("click", function () {
    const heartCount = parseInt(getId("heart-counter").innerText);
    const newHeartCount = heartCount + 1;
    getId("heart-counter").innerText = newHeartCount;
  });
}

// Call Button Functionality
const callButtons = getClass("call-button");
for (const button of callButtons) {
  button.addEventListener("click", function () {
    const balance = parseInt(getId("balance").innerText);
    if (balance < 20) {
      alert(
        "❌ You do not have enough coins to make a call! You need minimum 20 coins to make a call."
      );
      return;
    }
    const serviceName = button.parentNode.parentNode.children[2].innerText;
    const serviceNumber = button.parentNode.parentNode.children[3].innerText;
    alert(`📞 Calling ${serviceName} ${serviceNumber} ...`);
    const newBalance = balance - 20;
    getId("balance").innerText = newBalance;
  });
}
