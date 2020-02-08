const cards = ['a', 'b', 'c', 'd', 'e'];

const cardContainer = document.getElementById('card-container');

for (let i = 0; i <= cards.length - 1; i++) {
  const cardDiv = document.createElement('div');
  cardDiv.innerText = cards[i];
  cardDiv.classList.add('card');
  cardDiv.classList.add('card-back');
  cardDiv.addEventListener('click', flipCard);
  cardContainer.appendChild(cardDiv);
}

// cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
    this.classList.toggle('flip');
}