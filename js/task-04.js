let counterValue = 0;

const counterValueEL = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", onDecrementBtnClick);

incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  if (counterValueEL.textContent > 0) {
    counterValue -= 1;
    return (counterValueEL.textContent = counterValue);
  }
}

function onIncrementBtnClick() {
  counterValue += 1;
  return (counterValueEL.textContent = counterValue);
}
