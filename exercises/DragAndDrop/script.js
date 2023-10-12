let leftContainer = document.querySelector(".left-container");
let rightContainer = document.querySelector(".right-container");
let listItem = [...document.querySelectorAll(".list-item")];

// listItem.forEach((item) => {
for (item of listItem) {
  item.addEventListener("dragstart", function (e) {
    let selected = e.target;
    rightContainer.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightContainer.addEventListener("drop", (e) => {
      rightContainer.appendChild(selected);
      selected = null;
    });

    leftContainer.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftContainer.addEventListener("drop", (e) => {
      leftContainer.appendChild(selected);
      selected = null;
    });
  });
}

// let lists = document.getElementsByClassName("list");
// let rightBox = document.getElementById("right");
// let leftBox = document.getElementById("left");
// for(list of lists) {
//  list.addEventListener("dragstart", function(e){
//  }
// e.preventDefault();
// });
// rightBox.addEventListener("drop", function(e){
// rightBox.appendChild(selected);
// selected = null;
// })
// })

// let lists = document.getElementsByClassName("list");
// let rightBox = document.getElementById("right");
// let leftBox = document.getElementById("left");
// for(list of lists) {
//  list.addEventListener("dragstart", function(e){
// e.preventDefault();
// });
// rightBox.addEventListener("drop", function(e){
// rightBox.appendChild(selected);
// selected = null;
// })
// })
// let selected = e.target;
// rightBox.addEventListener("dragover", function(e) {
