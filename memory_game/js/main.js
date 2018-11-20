var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
];

let cardsInPlay = [];

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i); 
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

const checkForMatch = function() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert('You found a match!');
        } else {
            alert('Sorry, try again.');
        }
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    console.log('User flipped ' + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();
}

function removeElement() {
	let divParent = document.getElementById('parent');
	while (divParent.hasChildNodes()) {
		divParent.removeChild(divParent.firstChild);
	}
}

function createDiv() {
	let newDiv = document.createElement('div');
	newDiv.setAttribute('id', 'game-board');
	newDiv.setAttribute('class', 'board clearfix');
	document.getElementById('parent').appendChild(newDiv);
}


function resetBoard() {
    cardsInPlay = [];
    removeElement();
    createDiv();
    createBoard();
}

document.getElementsByTagName('button')[0].addEventListener('click', resetBoard);

createBoard();
