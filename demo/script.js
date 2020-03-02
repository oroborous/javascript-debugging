var deck = [];
var faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var suits = ["C", "D", "H", "S"];

function dealCard() {
    // Generate a random number between 0 and the number of cards in the deck
    var randomIndex = Math.floor(Math.random() * deck.length);

    var cardObject = deck.splice(randomIndex, 1)[0];

    var cardElement = $("<img>").attr("src", getImageSource(cardObject)).attr("alt", getPrettyName(cardObject));

    $("#table").append(cardElement);

    printCard(cardObject);

    updateCardsDealt();

    if (deck.length == 0) {
        $("#dealButton").remove();
    }
}

function printCard(card) {
    $("#cardInfo").text(getPrettyName(card));
}

function updateCardsDealt() {
    var cardsInDeck = deck.length;
    var cardsDealt = 52 - cardsInDeck;

    $("#cardsDealt").text(cardsDealt);
    $("#cardsLeft").text(cardsInDeck);
}

function getImageSource(card) {
    return "img/smallcards/" + card.image;
}

/*
Given an abbreviation for a suit (like "C" or "S"), returns the
pretty version ("of Clubs" or "of Spades")
 */
function getPrettyName(card) {
    var prettyName = card.face;
    if (card.suit == "C")
        prettyName += "of Clubs";
    else if (card.suit == "D")
        prettyName += "of Diamonds";
    else if (card.suit == "H")
        prettyName += "of Hearts";
    else if (card.suit == "S")
        prettyName += "of Spades";
    return prettyName;
}

/*
Given a face (like "3" or "K"), returns the points that
the card is worth (3 or 13)
 */
function getPoints(face) {
    int index = faces.indexOf(face);
    if (index == -1) {
        console.log("Unknown face: " + face);
        return 0;
    }
    return index + 2;
}

/*
Generates a deck of card objects
 */
function generateDeck() {

    for (var i = 0; i < faces.length; i++) {
        for (var j = 0; j < suits.length; j++) {
            var card = {
                face: faces[i], // The card face, like "10"
                suit: suits[j], // The card suit, like "H"
                image: faces[i] + suits[j] + ".png"  // Create strings for all the image file names, like "2C.png"
            };
            deck.push(card); // Add the card to the deck
        }
    }
}

function init() {
    generateDeck();

    $("dealButton").click(dealCard);
}

$(init);

