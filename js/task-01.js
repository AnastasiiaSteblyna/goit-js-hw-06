const listEl = document.querySelector("#categories");

const categories = listEl.querySelectorAll(".item");
//  array of items
const categoriesCaption = listEl.querySelectorAll(".item h2");
// array of h2

console.log(`Number of categories: ${categories.length}`);

const categoriesInsideList = categories.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("ul li").length}`);
});
