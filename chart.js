import data from "./data.json" assert {type: "json"}


let chart = document.querySelector(".chart__container");
let amountValues = [];

data.forEach(element => {

  chart.innerHTML += `
  <div class="chart__bar">

  <div class="chart__label">$${element.amount}</div>
  <div class="chart__x__axis">${element.day}</div>

  </div>
  `
  
  amountValues.push(element.amount);

});

let maxValue = Math.max(...amountValues);
let heightFactor  = 200 / maxValue;


let chartBar = [...document.querySelectorAll(".chart__bar")];

 chartBar.forEach(bar => {

  let currentValue =parseFloat(bar.firstElementChild.innerHTML.slice(1))

  let newValue = currentValue * heightFactor;

  bar.style.height = `${newValue}px`;


  bar.addEventListener("mouseover", (event) => {
    let label = event.target.childNodes[1];
    label.style.display = "block";
    bar.style.background = "rgb(236, 119, 95, 0.8)";
  })


 })


 chartBar.forEach(bar => {
  bar.addEventListener("mouseout", (event) => {
    let label = event.target.childNodes[1];
    label.style.display = "none";
    bar.style.background = "rgb(236, 119, 95)";
  })
 })



