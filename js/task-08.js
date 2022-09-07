const form = document.querySelector(".login-form");
const btnEl = document.querySelector("button");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email && password) {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    event.currentTarget.reset();
  } else {
    alert("Всі поля мають бути заповнені");
  }
}
