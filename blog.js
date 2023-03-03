// items array that contains all todo items
// JSON.parse is used to parse the stringified items from localStorage
// if localStorage is empty, make the items letiable an empty array
let items = JSON.parse(localStorage.getItem("post-list")) || [];

// function to add item to the items array
function addItem() {
  // get the value of the input box with querySelector
  let title = document.querySelector("#title");
  let summary = document.querySelector("#summary");
  let title_cont = title.value;
  let summary_cont = summary.value;

  // If input box is empty, return and alert the user
  // You can also do some more validation if here if you want
  let alertMsg = "Please enter a ";
  let inputErr = false;
  if (title_cont === "") {
    alertMsg += "title";
    inputErr = true;
  }
  if (summary_cont === "") {
    if (inputErr === true) {
      alertMsg += " and ";
    }
    alertMsg += "summary";
    inputErr = true;
  }
  if (inputErr) {
    return alert(alertMsg);
  }

  // If input is valid, add item to items array
  items.push({
    title: title_cont,
    summary: summary_cont,
    time: new Date().toLocaleDateString("en-US"),
  });

  // then convert to a string with JSON.stringify and save to localStorage
  localStorage.setItem("post-list", JSON.stringify(items));

  // call function to list all items
  listItems();

  // clear input box
  title.value = "";
  summary.value = "";
}

// function to remove item from array with Array.splice()
// removes item, then saves new items array to localStorage
function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("post-list", JSON.stringify(items));
  listItems();
}

function editItem(index) {
  let titleBox = document.getElementById("newTitle");
  let sumBox = document.getElementById("newSummary");
  let editPrompt = document.getElementById("editPrompt");
  let cancelBtn = document.getElementById("cancelPrompt");
  let submitBtn = document.getElementById("submitPrompt");
  titleBox.value = items[index].title;
  sumBox.value = items[index].summary;
  editPrompt.showModal();
  cancelBtn.addEventListener("click", () => {
    editPrompt.close();
  });
  submitBtn.addEventListener("click", () => {
    if (titleBox.value === "" || sumBox.value === "") {
      alert("Enter title AND summary");
      editPrompt.close();
      return;
    }
    editPrompt.close();
    items[index].title = titleBox.value;
    items[index].summary = sumBox.value;
    localStorage.setItem("post-list", JSON.stringify(items));
    listItems();
  });
}

// function that generates list of items and populates the html
function listItems() {
  let list = "";
  for (let i = 0; i < items.length; i++) {
    list += "<li>";
    list += "<p class='title'>Title: ";
    list += items[i].title + "</p> ";
    list += "<p class='summary'>Summary: ";
    list += items[i].summary + "</p>";
    list += "<small class='time'>" + items[i].time + "</small> ";
    list += "<span class='editBtn' onclick='editItem(" + i + ")'>edit</span> ";
    list +=
      "<span class='deleteBtn' onclick='deleteItem(" +
      i +
      ")'>delete</span></li>";
  }
  console.log(list);
  document.getElementById("post-items").innerHTML = list;
}

// function to run when page loads
(function () {
  listItems();
})();
