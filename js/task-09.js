function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEL = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");

btnEl.addEventListener("click", onBodyColorChange);

function onBodyColorChange() {
  const randomColor = getRandomHexColor();
  bodyEL.style.backgroundColor = `${randomColor}`;
  colorNameEl.textContent = randomColor;
}
