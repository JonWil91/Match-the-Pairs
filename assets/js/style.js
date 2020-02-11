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

createEmptyStyleTags();

let cards = [];

let clickedCards = [];

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

function createCard(pokemonName) {
    const card = document.createElement('div');
    card.id = pokemonName;
    card.classList.add('card');
    card.addEventListener('click', flipCard);
    return card
}

function flipCard() {
    this.classList.add('open');
    clickedCards.push(this.id);

    const contains = clickedCards.filter(card => {
        
    });
    
    console.log(clickedCards);
}

function createEmptyStyleTags() {
    const body = document.getElementsByTagName('body')[0];
    let style = document.createElement('style');
    style.type = 'text/css';
    body.appendChild(style);
}

function addPokemonToStyles(pokemonName) {
    const body = document.getElementsByTagName('body')[0];
    const style = body.getElementsByTagName('style')[0];
    style.innerHTML += `.card#${pokemonName} { background: url("/assets/images/${pokemonName}.png") no-repeat center; background-size: contain; background-color: #fafafa; transform: rotateY(180deg); }\n`;
}

//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(pokemonName) {
    var j, x, i;
    for (i = pokemonName.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = pokemonName[i];
        pokemonName[i] = pokemonName[j];
        pokemonName[j] = x;
    }
    return pokemonName;
}