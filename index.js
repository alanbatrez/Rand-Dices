
let randNumber1 = Math.floor(Math.random()* 6) +1;

let randNumber2 = Math.floor(Math.random()* 6) +1;



const dicesExamples = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png'
]

let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");

//We set the random n

let randRestIndex = randNumber1 -1;
let randRestIndex2 = randNumber2 -1;

let selectedSrc1 = dicesExamples[randRestIndex];
console.log(selectedSrc1);


dice1.setAttribute("src", selectedSrc1);


let selectedSrc2 = dicesExamples[randRestIndex2];
console.log(selectedSrc2);

dice2.setAttribute("src", selectedSrc2);


const winner = (n1, n2) => {
    setTimeout(() => {
        if (n1 > n2) {
            alert("Jugador 1 gana 🎉");
        } else if (n2 > n1) {
            alert("Jugador 2 gana 🎉");
        } else {
            alert("Empate 🤝");
        }
    }, 1500);
};

winner(randNumber1 , randNumber2);