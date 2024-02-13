/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {name: 'Marcelo Carmo',
photo: 'images/Marcelo.png',
favoriteFood: ['ice-cream', 'pizza', 'lasagna'],
hobbies: ['watch NBA games', 'going to the gyn', 'meeting new places'],
placesLived: []};

/* Populate Profile Object with placesLive objects */
myProfile["placesLived"].push({
    'place': 'Fortaleza',
    'length': '29 years',
});
myProfile["placesLived"].push({
    'place': 'Goiânia',
    'length': '2 years',
});

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').innerHTML = `<strong>${myProfile.photo}</strong>`;

//setAttribute('src', myProfile.photo);
//setAttribute('alt',`Profile image of ${myProfile.photo}`);

/* Favorite Foods List*/

const foodsElement = document.querySelector('#favorite-foods');

function createAndAppendFoodItem(food) {
  let newFavoriteFood = document.createElement('li');
  
  newFavoriteFood.textContent = food;
  foodsElement.appendChild(newFavoriteFood);
}

myProfile.favoriteFood.forEach(createAndAppendFoodItem);

/* Hobbies List */
const hobbiesElement = document.querySelector('#hobbies');

function createAndAppendHobbieItem(myHobbies) {
  let newHobbies = document.createElement('li');
  
  newHobbies.textContent = myHobbies;
  hobbiesElement.appendChild(newHobbies);
}
myProfile.hobbies.forEach(createAndAppendHobbieItem);

/* Places Lived DataList */
const placesElement = document.querySelector("#places-lived");

function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

placesElement.innerHTML = generateListMarkup(myProfile.placesLived,
    placesTemplate);