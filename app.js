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


const toggleFunctionBoxButton = document.getElementById("toggleFunctionBox")
const functionBox = document.getElementById("functionBox")
const searchBox = document.getElementById("searchContainer")
toggleFunctionBoxButton.addEventListener("click", () => {
  functionBox.classList.remove("no-show-box");
  functionBox.classList.add("show-box");
  searchBox.classList.remove("show-box");
  searchBox.classList.add("no-show-box");
}
)

const toggleSearchBoxButton = document.getElementById("toggleSearchBox")
toggleSearchBoxButton.addEventListener("click", () => {
  searchBox.classList.remove("no-show-box");
  searchBox.classList.add("show-box");
  functionBox.classList.remove("show-box");
  functionBox.classList.add("no-show-box");

})


const toggleSortTable = document.querySelectorAll(".sortable")

toggleSortTable.forEach(sortTable => {
  sortTable.addEventListener("click", () => {
    const asc = sortTable.classList.contains("asc")
    const desc = sortTable.classList.contains("desc")
    toggleSortTable.forEach(sortTable => {
      sortTable.classList.remove("asc", "desc")
    })
    if (desc || !asc && !desc) {
      sortTable.classList.add("asc")
    } else {
      sortTable.classList.add("desc")
    }
  })
})