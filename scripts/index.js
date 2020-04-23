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
function handleClick(e) {
  const menuItem = (e.target.textContent);
  const cards = menu[menuItem].map(itemToCard);
  const container = document.querySelector('.js-main-content');
  // Update click handler / Clear out the .js-main-content area 
  if (container.innerHTML.length > 0) {
    container.innerHTML = ""; 
    cards.map(appendCardToMainContent); 
  } else {
    cards.map(appendCardToMainContent); 
  }
}
// console.log(listElement)

// add the click event listener on the specific element
const listElement = document.querySelector('li');
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
  return menu[name];
}
console.log(getValue("dinner"))

// Large exercise: Render food items to page

// Create an itemToCard function
function itemToCard(obj) {
  const itemDiv = document.createElement('div');
  itemDiv.setAttribute('class', 'card');
  const itemH2 = document.createElement('h2');
  const itemH3 = document.createElement('h3');
  const pic = document.createElement('img')
  itemH2.textContent = obj.name;
  itemH3.textContent = obj.price;
  pic.setAttribute('src', obj.photo);
  pic.style.width = "80%";
  // pic.style.height = "80%"
  itemDiv.appendChild(itemH2);
  itemDiv.appendChild(itemH3);
  itemDiv.appendChild(pic)
  return itemDiv
}
// console.log(itemToCard(menu.lunch[0]))

// Create an appendCardToMainContent function
function appendCardToMainContent(card) {
  const container = document.querySelector('.js-main-content');
  container.appendChild(card)
}



///////BONUS GOODIES////////

// function handleClick(e) {
//   let element = event.target;
//   if (element.style.backgroundColor === "orange") {
//     element.style.backgroundColor = "white";
//   } else {
//     element.style.backgroundColor = "orange";
//   }
// }