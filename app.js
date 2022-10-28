const menuButton = document.querySelector("#menu-btn");
const sidebar = document.querySelector("#sidebar");
const container = document.querySelector(".my-container");
menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
  menuButton.innerHTML === "x" ? menuButton.innerHTML = ">" : menuButton.innerHTML = "x";
});
