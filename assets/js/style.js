const cardss = ['a', 'b', 'c', 'd'];

const cardContainerr = document.getElementById('card-containerr');

for (let i = 0; i <= cardss.length - 1; i++) {
  const cardDiv = document.createElement('div');
  cardDiv.innerText = cardss[i];
  cardDiv.classList.add('card');
 
 
  cardContainerr.appendChild(cardDiv);
}

console.log(cardContainer); 

// https://www.w3schools.com/js/js_objects.asp
// https://www.w3schools.com/jsref/prop_img_src.asp


// Inspiration for flipCard function https://www.youtube.com/watch?v=IMz_68rfhXA&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw&index=6 //

const cards = document.querySelectorAll(".card-container");

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

const charmander = {
    id: 'card 1',
    image: { src : "assets/images/charmander.png" }
}

console.log(charmander.image);