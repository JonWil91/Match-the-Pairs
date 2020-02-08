const pokemons = [
    'charmander',
    'bulbasaur',
    'pikachu',
    'crocodile',
    'eevee',
    'gengar',
    'sandslash',
    'squirtle'
];

createStyle();

let cards = [];

for (let i = 0; i <= pokemons.length - 1; i++) {
    const pokemon = pokemons[i];
    addPokemonToStyles(pokemon);
    cards.push(createCard(pokemon));
    cards.push(createCard(pokemon));
}

shuffle(cards);

const cardContainer = document.getElementById('card-container');
for (let i = 0; i <= cards.length - 1; i++) {
    cardContainer.appendChild(cards[i]);
}

function createCard(a) {
    const card = document.createElement('div');
    card.id = a;
    card.classList.add('card');
    card.classList.add('back');
    card.addEventListener('click', flipCard);
    return card
}

function flipCard() {
    this.classList.toggle(this.id);
}

function createStyle() {
    const currentStyle = document.getElementsByTagName('style')[0]
    const body = document.getElementsByTagName('body')[0];
    let style = document.createElement('style');
    style.type = 'text/css';
    body.appendChild(style);
}

function addPokemonToStyles(a) {
    const body = document.getElementsByTagName('body')[0];
    const style = body.getElementsByTagName('style')[0];
    style.innerHTML += `.card.${a} { background: url("/assets/images/${a}.png") no-repeat center; background-size: contain; background-color: #fafafa; transform: rotateY(180deg); }\n`;
}

//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}