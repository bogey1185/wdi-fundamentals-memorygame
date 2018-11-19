var cards = ['queen', 'queen', 'king', 'king'];

let cardsInPlay = [];

const checkForMatch = function() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            // console.log('You found a match!');
            alert('You found a match!');
        } else {
            // console.log('Sorry, try again.');
            alert('Sorry, try again.');
        }
    }
}

function flipCard(cardId) {
    console.log('User flipped ' + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    checkForMatch();
}

flipCard(0);
flipCard(2);

