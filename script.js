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

    const heart = icon.children[0];
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid", "fa-bounce", "text-red-500");
    setTimeout(() => {
      heart.classList.remove("fa-bounce");
    }, 1000);
  });
}

// Call Button Functionality
const callButtons = getClass("call-button");
for (const button of callButtons) {
  button.addEventListener("click", function () {
    // Coin Validation
    const balance = parseInt(getId("balance").innerText);
    if (balance < 20) {
      calling_modal_2.showModal();
      return;
    }

    // Calling Functionality
    const serviceName = button.parentNode.parentNode.children[2].innerText;
    const serviceNumber = button.parentNode.parentNode.children[3].innerText;
    getId("modalServiceName").innerText = serviceName;
    getId("modalServiceNumber").innerText = serviceNumber;

    const newBalance = balance - 20;
    getId("balance").innerText = newBalance;

    calling_modal.showModal();

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

for (const button of callButtons) {
  button.addEventListener("mouseenter", function () {
    button.children[0].classList.add("fa-beat-fade");
  });
}

for (const button of callButtons) {
  button.addEventListener("mouseleave", function () {
    button.children[0].classList.remove("fa-beat-fade");
  });
}

// History Clear Button Functionality
const historyClearBtn = getId("history-clear-btn");
historyClearBtn.addEventListener("click", function () {
  const callHistoryContainer = getId("call-history-container");
  callHistoryContainer.innerHTML = "";
});

// History and Contact number Button functionality for mobile device
const contactNumberBtn = getId("contact-number-btn");
const callHistoryBtn = getId("call-history-btn");
contactNumberBtn.addEventListener("click", function () {
  const contactNumberSection = getId("contact-number-section");
  contactNumberSection.classList.remove("hidden");
  const callHistorySection = getId("call-history-section");
  callHistorySection.classList.add("hidden");
  contactNumberBtn.classList.add("bg-[#00a63e]", "text-white");
  contactNumberBtn.classList.remove("text-[#5c5c5c]", "bg-white");
  callHistoryBtn.classList.remove("bg-[#00a63e]", "text-white");
  callHistoryBtn.classList.add(
    "text-[#5c5c5c]",
    "bg-white",
    "border",
    "border-[#d4d6d5]"
  );
});

callHistoryBtn.addEventListener("click", function () {
  const contactNumberSection = getId("contact-number-section");
  contactNumberSection.classList.add("hidden");
  const callHistorySection = getId("call-history-section");
  callHistorySection.classList.remove("hidden");
  callHistoryBtn.classList.add("bg-[#00a63e]", "text-white");
  callHistoryBtn.classList.remove("text-[#5c5c5c]", "bg-white");
  contactNumberBtn.classList.remove("bg-[#00a63e]", "text-white");
  contactNumberBtn.classList.add(
    "text-[#5c5c5c]",
    "bg-white",
    "border",
    "border-[#d4d6d5]"
  );
});

// Copy contact number functionality
const copyNumberBtn = getClass("copy-number-btn");
let toastTimeout;

for (const button of copyNumberBtn) {
  button.addEventListener("click", function () {
    const number = button.parentNode.parentNode.children[3].innerText;
    navigator.clipboard.writeText(number);

    // Copy counter functionality
    const copyCount = parseInt(getId("copy-counter").innerText);
    const newCopyCount = copyCount + 1;
    getId("copy-counter").innerText = newCopyCount;

    // Clear toast timeout
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }
    // Toast function
    const toast = getId("toast");
    const toastText = getId("toast-text");
    toast.classList.remove("hidden", "opacity-0", "scale-95");
    toast.classList.add("opacity-100", "scale-100");
    toastText.innerText = ` ${number} `;

    // Toast Timeout
    toastTimeout = setTimeout(function () {
      toast.classList.remove("opacity-100", "scale-100");
      toast.classList.add("opacity-0", "scale-95");
      setTimeout(() => toast.classList.add("hidden"), 500);
    }, 2500);
  });
}

for (const button of copyNumberBtn) {
  button.addEventListener("mouseenter", function () {
    button.children[0].classList.add("fa-beat-fade");
  });

  button.addEventListener("mouseleave", function () {
    button.children[0].classList.remove("fa-beat-fade");
  });
}
