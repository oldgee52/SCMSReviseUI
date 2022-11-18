const menuButton = document.querySelector("#menu-btn");
const sidebar = document.querySelector("#sidebar");
const container = document.querySelector(".my-container");
const  workingArea = document.querySelector("#workingArea");
menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
  workingArea.classList.toggle("active-working-area")
  menuButton.classList.toggle("change")
});


// function myFunction(x) {
//   x.classList.toggle("change");
// }