const MIN_SIZE = 10;
const MAX_SIZE = 20;
const MIN_DURATION = 2000;
const MAX_DURATION = 5000;

const snowflakesContainer = document.getElementById("snowflakes-container");
const snowVsRainInput = document.querySelector("#snow-vs-rain");
let quantityInput = document.querySelector("#quantity");
let quantity = 500
let color = document.querySelector("#click-color");
color.addEventListener("click", () => {
  let color = color.value
})
let wind = document.querySelector("#wind");


let creating = setInterval(() => createSnowflake(), quantity);
quantityInput.addEventListener("input", () => {
  switch (quantityInput.value) {
    case "0":
      quantity = 100000000000000;
      break;
    case "1":
      quantity = 500;
      break; 
    case "2": 
      quantity = 250;
      break;
    case "3":
      quantity = 167;
      break;
    case "4":
      break;
  }
    clearInterval(creating)
    creating = setInterval(() => createSnowflake(), quantity);
  })

function randint(lo, hi) {
  return Math.random() * (hi - lo) + lo;
}

function randomIcon() {
  if (Math.random() > snowVsRainInput.value) {
    return "fa-snowflake";
  } else {
    return "fa-tint";
  }
}

function createSnowflake() {
  const snowFlake = document.createElement("i");

  snowFlake.classList.add("fas", randomIcon());
  snowFlake.style.left = randint(0, 100) + "%";
  snowFlake.style.opacity = Math.random();
  snowFlake.style.fontSize = randint(MIN_SIZE, MAX_SIZE) + "px";
  snowFlake.style.color = color.value

  snowflakesContainer.appendChild(snowFlake);

  snowFlake
    .animate(
      { transform: `translate(${wind.value}vw, 100vh)` },
      { duration: randint(MIN_DURATION, MAX_DURATION) }
    )
    .finished.then(() => snowFlake.remove());
}
