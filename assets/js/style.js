const cards = ['a', 'b', 'c', 'd'];

const cardContainer = document.getElementById('card-container');

for (let i = 0; i <= cards.length - 1; i++) {
  const cardDiv = document.createElement('div');
  cardDiv.innerText = cards[i];
  cardDiv.classList.add('card');
  cardDiv.classList.add('card-back');
  cardContainer.appendChild(cardDiv);
}

console.log(cardContainer);