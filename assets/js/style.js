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

// array for pokemon background images
let cards = [];

// array for clicked cards with a class of open
let openCards = [];

// array for matched cards
let matchedCards = [];

// add pokemon image to cards, double the number of pokemon images
for (let i = 0; i <= pokemons.length - 1; i++) {
    cards.push(createCard(pokemons[i]), createCard(pokemons[i]));
}

shuffle(cards);

const cardContainer = document.getElementById('card-container');
for (let i = 0; i <= cards.length - 1; i++) {
    cardContainer.appendChild(cards[i]);
}

// create a div, with the card layout with pokemon name class
function createCard(pokemonName) {
    const card = document.createElement('div');
    card.id = pokemonName;
    card.classList.add('card');
    card.classList.add(pokemonName);
    // card.addEventListener('click', clickCard);
    return card
}

// clicking on a card
function clickCard() {

    // add open class
    this.classList.add('open');

    // add class to open array
    openCards.push(this.id);

    // check if total items in open array is 2
    if (openCards.length === 2) {

        // get the unique items in this array
        let unique = openCards.filter(onlyUnique);

        // if total is equal to 1, a match was found, add to matched array.
        if (unique.length === 1) {
            matchedCards.push(this.id);
        }

        // if total matched cards is total cards, reset game by removing all matched cards
        if (matchedCards.length === cards.length / 2) {

            // game finshed.

            window.setTimeout(() => {
                victory();
                matchedCards = [];
            }, 500);
        }

        // reset cards, with a short delay
        window.setTimeout(() => {
            resetCards();
        }, 500);
    }
}



// this function adds a previously hidden div after the game is won
function victory() {
    document.getElementById('victory-text').classList.add('visible');
    $("#victory-time").html(`You finished the game in ${seconds} seconds!`)
    stopTimer();
}


// this function starts the timer and allows cards to be clicked after Start Game has been clicked

$("#start-game").click(function () {
    startTimer();
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", clickCard);
    });

});




let seconds = 0;
let timeInterval;

function startTimer() {
    timeInterval = window.setInterval(function () {
        $('#countdown').html(`Seconds:  ${seconds++}`);
    }, 1000);
}

function stopTimer() {
    clearInterval(timeInterval);
}




// this function resets all cards but leaves matched cards turned over
function resetCards() {
    // clear out open cards
    openCards = [];

    // get card elements
    const cardElements = document.querySelectorAll('.card');

    // remove open class from all cards
    [].forEach.call(cardElements, function (card) {
        card.classList.remove("open");
    });

    matchedCards.forEach(card => {
        var matchedCardsElements = document.querySelectorAll('.card.' + card);
        [].forEach.call(matchedCardsElements, function (card) {
            card.classList.add("open");
        });
    });
}

//https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
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



