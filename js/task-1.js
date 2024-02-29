const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`)
const listCategirias = document.querySelectorAll("h2");
categoriesList.forEach(function (categoryItem) {
    const nameTitle = categoryItem.querySelector('h2').textContent;
    console.log(`Category: ${nameTitle}`);
    const numberTitles = categoryItem.querySelectorAll("ul li").length; 
    console.log(`Elements: ${numberTitles}`);
});
