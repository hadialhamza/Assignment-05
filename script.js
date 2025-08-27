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
    // Coin Validation
    const balance = parseInt(getId("balance").innerText);
    if (balance < 20) {
      alert(
        "❌ You do not have enough coins to make a call! You need minimum 20 coins to make a call."
      );
      return;
    }

    // Calling Functionality
    const serviceName = button.parentNode.parentNode.children[2].innerText;
    const serviceNumber = button.parentNode.parentNode.children[3].innerText;
    alert(`📞 Calling ${serviceName} ${serviceNumber} ...`);

    const newBalance = balance - 20;
    getId("balance").innerText = newBalance;

    // Calling History
    const currentTime = new Date().toLocaleTimeString();
    const callHistoryContainer = getId("call-history-container");
    const newElement = document.createElement("div");
    newElement.innerHTML = `
    <div class="bg-[#fafafa] p-4 my-3 flex justify-between items-center rounded-lg">
         <div class="w-[65%]">
           <h2 class="font-inter font-semibold text-lg">${serviceName}</h2>
           <p class="font-hind-madurai text-lg text-[#5c5c5c]">${serviceNumber}</p>
         </div>
         <div>
           <span class="font-hind-madurai text-lg text-[#111111]">${currentTime}</span>
         </div>
       </div>
       `;

    callHistoryContainer.appendChild(newElement);
  });
}

// History Clear Button Functionality
const historyClearBtn = getId("history-clear-btn");
historyClearBtn.addEventListener("click", function () {
  const callHistoryContainer = getId("call-history-container");
  callHistoryContainer.innerHTML = "";
});
