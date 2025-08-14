// Generate two random numbers between 1 and 6
const randNumber1 = Math.floor(Math.random() * 6) + 1;
const randNumber2 = Math.floor(Math.random() * 6) + 1;

// Array of dice images (index 0 to 5)
const dicesExamples = [
  './images/dice1.png',
  './images/dice2.png',
  './images/dice3.png',
  './images/dice4.png',
  './images/dice5.png',
  './images/dice6.png'
];

// Select both dice image elements from the DOM
const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");

// Calculate image index based on random number (subtract 1 because arrays are zero-based)
const randRestIndex1 = randNumber1 - 1;
const randRestIndex2 = randNumber2 - 1;

// Set the correct dice image source for each player
dice1.setAttribute("src", dicesExamples[randRestIndex1]);
dice2.setAttribute("src", dicesExamples[randRestIndex2]);

// Select the title element inside the container to show the result
const result = document.querySelector(".container").firstElementChild;

// Compare both random numbers and show who wins
if (randNumber1 > randNumber2) {
  result.textContent = "Player One Wins!";
} else if (randNumber1 < randNumber2) {
  result.textContent = "Player Two Wins!";
} else {
  result.textContent = "Draw";
}
