const cards = [
    'charmander',
    'bulbasaur',
    'charmander',
    'bulbasaur',
    'pikachu'
];

const cardContainer = document.getElementById('card-container');

for (let i = 0; i <= cards.length - 1; i++) {
    const pokemon = cards[i];
    createStyleIfRequired(pokemon);
    createCard(pokemon);
}

function createCard(a) {
    const card = document.createElement('div');
    card.id = a;
    card.classList.add('card');
    card.classList.add('back');
    card.addEventListener('click', flipCard);
    cardContainer.appendChild(card);
}

function flipCard() {
    this.classList.toggle(this.id);
}

function createStyleIfRequired(a) {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.card.${a} { background: url("/assets/images/${a}.png") no-repeat center; background-size: contain; background-color: #fafafa; }`;
    document.getElementsByTagName('body')[0].appendChild(style);
}