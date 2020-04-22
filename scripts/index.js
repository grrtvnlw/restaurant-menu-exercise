// console.log(menu)
// const container = document.querySelector('.js-main-content');

// Small exercises: Category list

// Extract names of categories
function getCategories(obj) {
    return Object.keys(obj);
}
// console.log(getCategories(menu));

// Wrap names in <li> elements
function nameToListItem(categoryName) {
  const listItem = document.createElement('li');
  listItem.textContent = categoryName
  // console.log(listItem)
  return listItem
}
// nameToListItem("breakfast")

// Write a function that transforms an array of category names to an array of <li>
function categoriesToListItem(categories) {
  const arrOfListItems = []
  for (let i = 0; i < categories.length; i++) {
    const listItem = nameToListItem(categories[i]);
    arrOfListItems.push(listItem)
  }
  return arrOfListItems;
}
// Same thing using .map()
function categoriesToListItem2(categories) {
  return categories.map(nameToListItem)
}

// Use getCategories() in combination with categoriesToListItem()
const arrOfListItems = categoriesToListItem(getCategories(menu));
console.log(arrOfListItems)

// Render the list items to .js-menu
function appendItems(element) {
  const jsMenu = document.querySelector('.js-menu');
  jsMenu.appendChild(element);
}

// Render using .forEach()
arrOfListItems.forEach(appendItems)
// categoriesToListItem(getCategories(menu)).forEach(appendItems)

// Render using .map()
arrOfListItems.map(appendItems)
// categoriesToListItem(getCategories(menu)).map(appendItems)

// Medium exercise: Handle category list click

// Add a click handler to each of the <li> elements
// write the handleClick function 
function handleClick(e) {
  console.log(e.target.textContent);
}

const listElement = document.querySelector('li');
// console.log(listElement)

// add the click event listener on the specific element
listElement.addEventListener('click', handleClick)

// write a function to add the click event listener to an array of elements
function addClickHandler(arrOfElements) {
  arrOfElements.forEach(function(element) {
    element.addEventListener('click', handleClick);
  })
}

// invoke the addClickHandler function on the the specific array
addClickHandler(arrOfListItems);

// Retrieve the value for a category name
function getValue(name) {
  console.log(menu[name])
}
// console.log(menu.breakfast)
getValue("breakfast")

///////BONUS GOODIES////////

function handleClick(e) {
  let element = event.target;
  if (element.style.backgroundColor === "orange") {
    element.style.backgroundColor = "white";
  } else {
    element.style.backgroundColor = "orange";
  }
}