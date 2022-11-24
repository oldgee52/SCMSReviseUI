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
    const desc = sortTable.classList.contains("desc")
    toggleSortTable.forEach(sortTable => {
      sortTable.classList.remove("asc", "desc")
    })
    if (desc) {
      sortTable.classList.add("asc")
    } else {
      sortTable.classList.add("desc")
    }
  })
})


const userData = [{
  system: "TWM",
  subID: 646456,
  number: "0909123321",
  name: "小小王",
  createDate: "2018-12-30",
  numberStatus: "正常使用中",
  contract: "Y"
},
{
  system: "070",
  subID: 1232,
  number: "07012325687",
  name: "小小王",
  createDate: "2019-12-30",
  numberStatus: "正常使用中",
  contract: ""
},
{
  system: "INPPS",
  subID: 645645,
  number: "0909123548",
  name: "小小王",
  createDate: "2019-11-30",
  numberStatus: "失效",
  contract: ""
}
]
const userPhoneInfo = document.getElementById("userPhoneInfo")

const createRow = (obj, i) => {
  const row = document.createElement("tr");
  const objKeys = Object.keys(obj);
  objKeys.map((key) => {
    const cell = document.createElement("td");
    cell.setAttribute("data-attr", key);
    cell.innerHTML = obj[key];
    row.appendChild(cell);
  });
  const indexRow = document.createElement("td");
  const indexNode = document.createTextNode(i);
  indexRow.appendChild(indexNode);
  row.insertBefore(indexRow, row.children[0]);
  return row;
};

const getTableContent = (data) => {
  data.map((obj, i) => {
    const row = createRow(obj, i + 1);
    userPhoneInfo.appendChild(row);
  });
};

const sortData = (data, param, direction = "asc") => {
  userPhoneInfo.innerHTML = '';
  const sortedData =
    direction == "asc"
      ? [...data].sort(function (a, b) {
        if (a[param] < b[param]) {
          return -1;
        }
        if (a[param] > b[param]) {
          return 1;
        }
        return 0;
      })
      : [...data].sort(function (a, b) {
        if (b[param] < a[param]) {
          return -1;
        }
        if (b[param] > a[param]) {
          return 1;
        }
        return 0;
      });

  getTableContent(sortedData);
};

window.addEventListener("load", () => {
  getTableContent(userData);
  [...toggleSortTable].map((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-dir") == "desc") {
        sortData(userData, e.target.id, "desc");
        e.target.setAttribute("data-dir", "asc");
      } else {
        sortData(userData, e.target.id, "asc");
        e.target.setAttribute("data-dir", "desc");
      }
    });
  });
});