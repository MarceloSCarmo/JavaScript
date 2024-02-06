/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Marcelo dos Santos Carmo';

const date = new Date;
const currentYear = date.getFullYear();

const profilePicture = 'images/Marcelo.png'; 

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#Profile');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = `${currentYear}`;

/* Step 5 - Array */
const favoriteFood = ["pizza","sushi","barbecue","ice cream"];
const item = "Banana";
favoriteFood.push(item);
foodElement.innerHTML +=`<strong><br>${favoriteFood}</strong>`;
favoriteFood.shift(item);
foodElement.innerHTML += `<strong><br>${favoriteFood}</strong>`;
favoriteFood.pop(item);
foodElement.innerHTML += `<strong><br>${favoriteFood}</strong>`;


imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute('alt',`Profile image of ${profilePicture}`);