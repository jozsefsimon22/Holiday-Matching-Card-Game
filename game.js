
//Allocates the images cards randomly
const cardBacks = document.querySelectorAll('.card-back');

const randomNumbers = new Set();

while (randomNumbers.size < 8) {
     var randomNumber = Math.floor(Math.random() * 8 + 1);
     randomNumbers.add(randomNumber);
}

const imageOrder = [...randomNumbers, ...randomNumbers];

const shuffleArray = (array) => {
     for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)); // Random index
          [array[i], array[j]] = [array[j], array[i]]; // Swap
     }
};
shuffleArray(imageOrder);

cardBacks.forEach((div, index) => {
     const img = document.createElement('img');
     img.src = `./assets/icon-${imageOrder[index]}.png`
     img.alt = `Image ${imageOrder[index]}`
     // div.id = imageOrder[index];
     // div.parentElement.id = imageOrder[index];
     div.parentElement.setAttribute("card-id", imageOrder[index])

     div.appendChild(img);
})


//Flips the card on click

let flipCount = 0;
let flippedCards = [];

// Add event listeners to all cards
document.querySelectorAll('.card-inner').forEach(element => {
     element.addEventListener("click", function () {
          if (!element.classList.contains("flip") && flippedCards.length < 2) {
               element.classList.add("flip");
               flippedCards.push(element);

               flipCount++;
               document.getElementById("flip-count").innerHTML = flipCount;

               if (flippedCards.length === 2) {
                    checkForMatch();
               }
          }
     });
});

// Function to check for a match
function checkForMatch() {

     const [firstCard, secondCard] = flippedCards;

     console.log(firstCard);
     console.log(secondCard);


     // Check if the two flipped cards match
     if (firstCard.getAttribute('card-id') === secondCard.getAttribute('card-id')) {
          // Cards match, keep them flipped
          flippedCards = []; // Reset for the next pair
     } else {
          // Cards don't match, flip them back after a short delayF
          setTimeout(() => {
               document.getElementById(firstCard.id).classList.remove("flip");
               document.getElementById(secondCard.id).classList.remove("flip");
               flippedCards = []; // Reset for the next pair
          }, 1000); // Adjust delay as needed
     }
}

// Restart the game
function restartGame() {
     document.querySelectorAll('.card-inner').forEach(element => { element.classList.remove("flip") });
     flipCount = 0;
     document.getElementById("flip-count").innerHTML = flipCount;
}

document.getElementById('restart-game').addEventListener("click", restartGame);
