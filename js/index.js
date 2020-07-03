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

function calculateCost() {
  let money = document.getElementsByClassName("amount");

  money = Array.from(money);

  var total = 0;
  let sum = 0;
  money.forEach(function (element) {
    sum = Number(element.textContent);
    total += sum;
  });
  console.log(total);
}

// **************************************************************************************************************************************************************************************

let xIcons = document.getElementsByClassName("fas");

for (i = 0; i < xIcons.length; i++) {
  let parent = xIcons[i].parentElement.parentElement;

  xIcons[i].addEventListener("click", () => {
    parent.remove();
    boxContent.textContent = "Gh¢ " + calculateCost();
    if (cartCont.childElementCount === 0) {
      cartCont.innerHTML = "No item in cart";
      cartCont.style.height = "10rem";
    }

    console.log(cartCont.childElementCount);
  });
}
let cartCont = document.getElementById("orders");

let clear = document.getElementById("Clear");

clear.addEventListener("click", () => {
  let order = document.getElementById("orders");

  let text = document.createElement("ul");
  text.innerHTML = "No item in cart";
  text.style.width = "100%";
  text.style.height = "10rem";
  text.style.border = "1px solid #fff";
  text.style.borderRadius = "4px";

  order.replaceWith(text);
  boxContent.textContent = "Gh¢ " + calculateCost();
});
