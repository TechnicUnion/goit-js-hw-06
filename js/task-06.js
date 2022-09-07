const input = document.querySelector("input");

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  input.classList.add("invalid");
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.replace("invalid", "valid");
  } else if (input.value.length === 0) {
    input.classList.remove("invalid", "valid");
  }
}
