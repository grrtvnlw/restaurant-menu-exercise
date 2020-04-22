// console.log(menu)
const container = document.querySelector('.js-main-content');

function getCategories(obj) {
    return Object.keys(obj);
}

// console.log(getCategories(menu));

function nameToListItem(categoryName) {
  const listItem = document.createElement('li');
  listItem.textContent = categoryName
  // console.log(listItem)
  return listItem
}

// nameToListItem("breakfast")

function categoriesToListItem(categories) {
  // categories.forEach(function (item) {
  //     return nameToListItem(item)
  // });
    ////
    const arrOfListItems = []
    for (let i = 0; i < categories.length; i++) {
      const listItem = nameToListItem(categories[i]);
      arrOfListItems.push(listItem)
    }
    return arrOfListItems;
}

function categoriesToListItem2(categories) {
  return categories.map(nameToListItem)
}

const arrOfListItems = categoriesToListItem2(getCategories(menu));
console.log(arrOfListItems)
function appendItems(element) {
  const jsMenu = document.querySelector('.js-menu');
  jsMenu.appendChild(element);
}

// arrOfListItems.forEach(appendItems)
arrOfListItems.map(appendItems)

// appendItems(categoriesToListItem(getCategories(menu)));

// const test = document.createElement('p')
// test.textContent = "I am Gerrit"
// appendItems(test)

function handleClick(e) {
  console.log(e);
}

const listElement = document.querySelector('li');
console.log(listElement)

listElement.addEventListener('click', )