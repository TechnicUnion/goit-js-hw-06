const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEL = document.querySelector("#ingredients");

const ingredientsListEl = ingredients.map((ingredient) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList.add("item");
  ingredientsItemEl.textContent = ingredient;
  return ingredientsItemEl;
});

listEL.append(...ingredientsListEl);
