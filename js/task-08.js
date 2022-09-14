const form = document.querySelector(".login-form");
const emailInput = document.querySelector('[type="email"]');
const passwordInput = document.querySelector('[type="password"]');
const submitBtn = document.querySelector('[type="submit"]');

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  onInputAlert();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  console.log(formData);

  form.reset();
}

function onInputAlert() {
  if (passwordInput.value === "" || emailInput.value === "") {
    alert("Не всі поля заповненні, перевірте данні.");
  }
}
