const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");

const counter = document.querySelector("span");

let count = 0;
counter.innerText = count;

const updateCounter = () => {
  counter.innerText = count;
};

const handlePlusButtonClick = () => {
  count += 1;
  updateCounter();
};

const handleMinusButtonClick = () => {
  count -= 1;
  updateCounter();
};

plusButton.addEventListener("click", handlePlusButtonClick);
minusButton.addEventListener("click", handleMinusButtonClick);
