const cards = [
    'charmander',
    'bulbasaur',
    'charmander',
    'bulbasaur',
    ];

const cardContainer = document.getElementById('card-container');

for (let i = 0; i <= cards.length - 1; i++) {
  const card = document.createElement('div');
  card.id = cards[i]
  card.classList.add('card');
  card.classList.add('back');
  card.addEventListener('click', flipCard);
  cardContainer.appendChild(card);
}

function flipCard() {
    this.classList.toggle(this.id);
}
