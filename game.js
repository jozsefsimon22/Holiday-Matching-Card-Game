const cardBacks = document.querySelectorAll('.card-back');

const randomNumbers = new Set();

while(randomNumbers.size < 8){
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

cardBacks.forEach((div, index) =>{
     const img = document.createElement('img');
     img.src = `./assets/icon-${imageOrder[index]}.png`
     img.alt = `Image ${imageOrder[index]}`
     
     
     div.appendChild(img);
})

document.querySelectorAll('.card-inner').forEach(element => {
     element.addEventListener("click",function(){element.classList.add("flip")})
});
