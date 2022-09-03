const listEl = document.querySelectorAll(".item");
const categoryTitleEl = document.querySelectorAll("h2");
const elementsListEl = document.querySelectorAll(".item ul");

console.log("Number of categories:", listEl.length);

for (let i = 0; i < listEl.length; i += 1) {
  console.log("Category:", categoryTitleEl[i].textContent);
  console.log("Elements:", elementsListEl[i].children.length);
}
