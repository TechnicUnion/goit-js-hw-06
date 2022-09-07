const textForChangeEl = document.querySelector("#text");
const inputEl = document.querySelector("#font-size-control");
// inputEl.value = inputEl.min;
textForChangeEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener("input", onInputChenge);

function onInputChenge() {
  textForChangeEl.style.fontSize = `${inputEl.value}px`;
}
