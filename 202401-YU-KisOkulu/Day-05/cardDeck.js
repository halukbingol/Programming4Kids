const deckSize = 10;

const initDeck = function () {
    let deck = [];
    for (let i = 0; i < deckSize; i++) {
        deck.push(i);
    }
    return deck;
};

const deckShuffle = function (deck) {
    for (let k = 0; k < deckSize / 2; k++) {
        let i = randomIndex(deckSize);
        let j = randomIndex(deckSize);
        swapCards(deck, i, j);
    }
};

const swapCards = function (deck, i, j) {
    let tmp = deck[i];
    deck[i] = deck[j];
    deck[j] = tmp;
};

const deckCut = function (deck) {
    let deckNew = [];
    const indexCut = randomIndex(deckSize);
    // move the second half
    for (let i = indexCut + 1; i < deck.length; i++) {
        deckNew.push(deck[i]);
    }
    // move the first half
    for (let i = 0; i <= indexCut; i++) {
        deckNew.push(deck[i]);
    }

    return deckNew;
};

const randomIndex = function (n) {
    let i = Math.floor(n * Math.random());
    return i;
};

//  do it
let deck = [];
deck = initDeck();
deckShuffle(deck);
deck = deckCut(deck);
