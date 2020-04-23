// console.log(menu)
// const container = document.querySelector('.js-main-content');

// Small exercises: Category list

// Extract names of categories
function getCategories(menu) {
    return Object.keys(menu);
}

// Wrap names in <li> elements
function nameToListItem(categoryName) {
  const listItem = document.createElement('li');
  listItem.textContent = categoryName
  return listItem
}

// Write a function that transforms an array of category names to an array of <li>
// function categoriesToListItem(categories) {
//   const arrOfListItems = []
//   for (let i = 0; i < categories.length; i++) {
//     const listItem = nameToListItem(categories[i]);
//     arrOfListItems.push(listItem)
//   }
//   return arrOfListItems;
// }
// Same thing using .map()
function categoriesToListItem(categories) {
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
// arrOfListItems.forEach(appendItems)

// Render using .map()
arrOfListItems.map(appendItems)

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
// function itemToCard(obj) {
//   const itemDiv = document.createElement('div');
//   itemDiv.setAttribute('class', 'card');
//   const itemH2 = document.createElement('h2');
//   const itemH3 = document.createElement('h3');
//   const pic = document.createElement('img')
//   itemH2.textContent = obj.name;
//   itemH3.textContent = obj.price;
//   pic.setAttribute('src', obj.photo);
//   pic.style.width = "80%";
//   // pic.style.height = "80%"
//   itemDiv.appendChild(itemH2);
//   itemDiv.appendChild(itemH3);
//   itemDiv.appendChild(pic)
//   return itemDiv
// }

// Create an itemToCard function using render function
function itemToCard(obj) {
  return `
    <div class="card">
      <h2>${obj.name}</h2>
      <h3>${obj.price}</h3>
      <img src=${obj.photo} width="80%">
    </div>
  `
}

// Create an appendCardToMainContent function
function appendCardToMainContent(card) {
  const container = document.querySelector('.js-main-content');
  // container.appendChild(card)
  let thingToAppend = document.createElement("div");
  thingToAppend.innerHTML = card
  container.appendChild(thingToAppend)
}

// Bonus 

// Add a vegetarian filter
// function createOptions() {
//   return `
//     <div class="options">
//       <input type="radio" name="options" value="Vegetarian" id="Vegetarian">
//       <label for="Vegetarian">Vegetarian</label>
//       <input type="radio" name="options" value="Vegan" id="Vegan">
//       <label for="Vegan">Vegan</label>
//     </div>
//   `
// }

// Add a vegetarian filter the old way
function createOptions() {
  const jsMenu = document.querySelector('.js-menu');
  const optionsDiv = document.createElement('div');
  const vegetarianDiv = document.createElement('div');
  const veganDiv = document.createElement('div');
  const p = document.createElement('p');
  const vegetarianButton = document.createElement('input');
  const vegetarianLabel = document.createElement('label');
  vegetarianButton.setAttribute('type', 'radio');
  vegetarianButton.setAttribute('id', 'Vegetarian');
  vegetarianLabel.textContent = "Vegetarian";
  vegetarianLabel.setAttribute('for', 'Vegetarian');
  const veganButton = document.createElement('input');
  const veganLabel = document.createElement('label');
  veganButton.setAttribute('type', 'radio');
  veganButton.setAttribute('id', 'Vegan');
  veganLabel.textContent = "Vegan";
  veganLabel.setAttribute('for', 'Vegan');
  vegetarianDiv.appendChild(vegetarianButton);
  vegetarianDiv.appendChild(vegetarianLabel);
  veganDiv.appendChild(veganButton);
  veganDiv.appendChild(veganLabel);
  optionsDiv.appendChild(vegetarianDiv);
  optionsDiv.appendChild(veganDiv);
  jsMenu.appendChild(optionsDiv);
}

// Render the list items to .js-menu
// const options = createOptions()
// appendItems(options)
createOptions()

// function appendOptions(element) {
//   const jsMenu = document.querySelector('.js-menu');
//   jsMenu.appendChild(element);
// }

// appendOptions(options);


///////BONUS GOODIES////////

// function handleClick(e) {
//   let element = event.target;
//   if (element.style.backgroundColor === "orange") {
//     element.style.backgroundColor = "white";
//   } else {
//     element.style.backgroundColor = "orange";
//   }
// }