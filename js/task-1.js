const categoriesList = document.querySelectorAll(".item")
//console.log(categoriesList)
console.log(`Number of categories: ${categoriesList.length}`)
const listCategirias = document.querySelectorAll("h2")
//console.log(listCategirias)
listCategirias.forEach(function (listCategiria) {
    const nameTitle = listCategiria.textContent;
    console.log(`Category; ${nameTitle}`)
    const numberTitles = document.querySelectorAll("ul>li")
    console.log(`Elements: ${numberTitles.length}`)
}
)