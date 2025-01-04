"use-strict";

const theme = ["🙂", "😎", "🤷🏼‍♀️", "👩🏼‍🏫", "🤷🏻‍♂️", "👨🏻‍💻"];

let cards = [];
let history = [];
let flipped = 0;
let need = 2;
let paused = false;

document.getElementById("Grid").addEventListener("click", click);

function start() {
     theme.forEach((i) => {
          cards.push(i);
          cards.push(i); // Do it twice!
     });

     let i = 0;

     while (cards.length > 0) {
          i++
          let r = Math.floor(Math.random() * cards.length); // Random Card
          let c = cards[r];
          document.getElementById("Front-" + i).innerText = c;
          cards.splice(r, 1);
     }
}

start();


function click(e) {
     let t = e.target.id; // “t” is the target element
     if (!paused && t.startsWith("Back") && !e.target.classList.contains("Flip")) { // Is it a selectable card?
          let a = t.split("-") // Target array…
          let n = a[1]; // Number
          console.log("Card " + n + " was selected.");
          history.push(n);
          flip(n);
          flipped++;
          if (flipped == need) {
               h1 = history[history.length - 2]
               h2 = history[history.length - 1]
               c1 = document.getElementById("Front-" + h1);
               c2 = document.getElementById("Front-" + h2);
               if (c1.innerText == c2.innerText) {
                    console.log("Match! 🙂");
                    flipped = 0;
               } else {
                    console.log("No Match! 🙁");
                    paused = true;
                    setTimeout(function () {
                         flip(h1);
                         flip(h2);
                         flipped = 0;
                         paused = false;
                    }, 1000);
               }
          }
     }
}

function flip(n) {
     document.getElementById("Front-" + n).classList.toggle("Flip");
     document.getElementById("Back-" + n).classList.toggle("Flip");
}