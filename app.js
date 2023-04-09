const dayInput = document.querySelector(".day");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year");

const btn = document.querySelector(".btn");

const daysSpan = document.querySelector(".days");
const monthsSpan = document.querySelector(".months");
const yearsSpan = document.querySelector(".years");

const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");

let date = new Date();
let d2 = date.getDate();
let m2 = 1 + date.getMonth();
let y2 = date.getFullYear();
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const calculate = () => {
  let d1 = dayInput.value;
  let m1 = monthInput.value;
  let y1 = yearInput.value;

  if (d1 > d2) {
    d2 = d2 + daysInMonth[m2 - 1];
    m2 = m2 - 1;
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  yearsSpan.textContent = y;
  monthsSpan.textContent = m;
  daysSpan.textContent = d;
};

const result = (e) => {
  e.preventDefault();

  yearsSpan.textContent = "--";
  monthsSpan.textContent = "--";
  daysSpan.textContent = "--";

  dayError.classList.remove("error");
  monthError.classList.remove("error");
  yearError.classList.remove("error");
  dayInput.classList.remove("border-red");
  monthInput.classList.remove("border-red");
  yearInput.classList.remove("border-red");
  document.getElementById("day").classList.remove("red-color");
  document.getElementById("month").classList.remove("red-color");
  document.getElementById("year").classList.remove("red-color");

  let d1 = dayInput.value;
  let m1 = monthInput.value;
  let y1 = yearInput.value;

  if (d1 > daysInMonth[m1 - 1]) {
    dayError.classList.add("error");
    dayInput.classList.add("border-red");
    monthInput.classList.add("border-red");
    yearInput.classList.add("border-red");
    document.getElementById("day").classList.add("red-color");
    document.getElementById("month").classList.add("red-color");
    document.getElementById("year").classList.add("red-color");
  } else if (m1 > 12) {
    monthError.classList.add("error");
    dayInput.classList.add("border-red");
    monthInput.classList.add("border-red");
    yearInput.classList.add("border-red");
    document.getElementById("day").classList.add("red-color");
    document.getElementById("month").classList.add("red-color");
    document.getElementById("year").classList.add("red-color");
  } else if (
    y1 > y2 ||
    (d1 > d2 && m1 >= m2 && y1 == y2) ||
    (m1 > m2 && y1 == y2)
  ) {
    yearError.classList.add("error");
    dayInput.classList.add("border-red");
    monthInput.classList.add("border-red");
    yearInput.classList.add("border-red");
    document.getElementById("day").classList.add("red-color");
    document.getElementById("month").classList.add("red-color");
    document.getElementById("year").classList.add("red-color");
  } else {
    calculate();
  }
};

btn.addEventListener("click", result);
