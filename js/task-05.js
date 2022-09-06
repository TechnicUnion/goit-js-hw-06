const refs = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("h1 > span"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value) {
    return (refs.name.textContent = event.currentTarget.value);
  }
  return (refs.name.textContent = "Anonymous");
}
