const decrementButton = document.querySelector(
  `button[data-action="decrement"]`
);
const incrementButton = document.querySelector(
  `button[data-action="increment"]`
);

const counterValue = document.querySelector("#value");
counterValue.textContent = "0";

decrementButton.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

incrementButton.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});
