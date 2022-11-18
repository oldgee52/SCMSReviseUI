const menuButton = document.querySelector("#menu-btn");
const sidebar = document.querySelector("#sidebar");
const container = document.querySelector(".my-container");
const workingArea = document.querySelector("#workingArea");
menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
  workingArea.classList.toggle("active-working-area")
  menuButton.classList.toggle("change")
});

const postPaidButton = document.getElementById("postPaidButton");
const internetPhoneButton = document.getElementById("internetPhoneButton");
const prePaidButton = document.getElementById("prePaidButton");
const postPaidBox = document.getElementById("postPaidInfoBox");
const internetPhoneBox = document.getElementById("internetPhoneInfoBox");
const prePaidInfoBox = document.getElementById("prePaidInfoBox");

function buttonActionForInfoBox(clickButton, showBox, hiddenBoxes) {
  clickButton.addEventListener("click", () => {
    hiddenBoxes.map((hiddenBox) => hiddenBox.style.display = "none")
    if (showBox.style.display === "none") showBox.style.display = "";
    return
  })
}

buttonActionForInfoBox(postPaidButton, postPaidBox, [internetPhoneBox, prePaidInfoBox])
buttonActionForInfoBox(internetPhoneButton, internetPhoneBox, [postPaidBox, prePaidInfoBox])
buttonActionForInfoBox(prePaidButton, prePaidInfoBox, [internetPhoneBox, postPaidBox])
