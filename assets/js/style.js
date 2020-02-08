const cards = ['a', 'b', 'c', 'd'];

const cardContainer = document.getElementById('card-container');

for (let i = 0; i <= cards.length - 1; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add('card-back');
  
//   const front = document.createElement('div');
//   front.classList.add('card-front');
//   card.appendChild(front);
//   const back = document.createElement('div');
//   back.classList.add('card-back');
//   card.appendChild(back);
  
  card.innerText = cards[i];
  card.addEventListener('click', flipCard);
  cardContainer.appendChild(card);
}

function flipCard() {
    this.classList.toggle('front');
}