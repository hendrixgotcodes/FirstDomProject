

console.log(document.getElementById("task-header"));

let boxContent = document.getElementById("task-box");

boxContent.style.placeholder = "Walk the dog";
boxContent.style.padding = ".5rem";

console.log(boxContent);

let title = document.getElementById("task-title");
// title.style.background = '#000';
title.style.padding = ".4rem";

let form = document.querySelector("form");
form.style.backgroundColor = "#882ff1";
form.style.color = "#fff";

let h1 = document.querySelector("h2");
let h2 = document.querySelector("h3");
let label = document.querySelector("label");
let h4 = document.querySelector("h5");

h1.style.color = "#fff";
h2.style.color = "#fff";
label.style.color = "#fff";

// creating new list item

function createList(type, className, content, price) {
  //   const newList = document.createElement("li");
  const newList = document.createElement(type);

  //   newList.className = "task-items";
  newList.className = className;

  newList.appendChild(document.createTextNode(content));

  const i = document.createElement("span");
  i.innerHTML = `<i class="fas fa-times"></i>`;

  const span1 = document.createElement("span");
  span1.className = "money-section";

  const span2 = document.createElement("span");
  span2.className = "money";
  span2.appendChild(document.createTextNode("Gh¢ "));

  const span3 = document.createElement("span");
  span3.className = "amount";
  span3.appendChild(document.createTextNode(price));

  span1.appendChild(span2);

  span2.appendChild(span3);
  span1.appendChild(i);

  newList.appendChild(span1);

  return newList;
}

const tasks = document.querySelector("ul.tasks");
//Appending newList to main UL (tasks)
tasks.appendChild(createList("li", "task-items", "Vanilla Essence", "2.00 "));

tasks.appendChild(createList("li", "task-items", "Whip Cream", "20.00 "));

tasks.appendChild(createList("li", "task-items", "Flour", "50.00 "));

//Setting Vertical SCROLL If number Of Items In Cart Surpasses 6
if (document.querySelector("ul.tasks").children.length > 6) {
  document.querySelector("ul.tasks").style.overflowY = "scroll";
  // document.querySelector("ul.tasks").style.scrollbar.display = "none";
}

let money = document.getElementsByClassName("amount");

money = Array.from(money);

function calculateCost() {
  var total = 0;
  let sum = 0;
  money.forEach(function (element) {
    sum = Number(element.textContent);
    total += sum;
  });
  console.log(total);
  return total;
}
boxContent.textContent = "Gh¢ " + calculateCost();
