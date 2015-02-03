/* I guess I will need umm,


graphic interfaces for:

13 numbers
4 suits
up toward 4 decks

functions to make:
  - Timer (flip top of nertz pile up while 3, 2, 1) to kick off the game
    - take the flip top card part and repeat for remaining 12 cards
  - Deal from deck of cards (1 or 3 cards)
  - space for nertz pile
      - space for 4 cards next to nertz pile
      - space for deck
          - space for cards that come from dealing from deck
      - space for A cards in middle
  - double click to send card to 4-zone (or middle too, maybe?)
  - declare victory when nertz pile empty
  - make new card replace previous card (A of hearts replaced by 2 of hearts)
  - make cards tag on higher number + opposite color (6 spades on 7 hearts)
  -

*/

// Timer (flip top of nertz pile up while 3, 2, 1) to kick off the game

var timer = function () {
   btn.click() {
      // trigger nertz flip top of pile

      while (i = 1; i > 3; i++;) {
       // jQuery example of what i wanna achieve in JS $('.btn').addClass('active')
      }
   }
};


// FLIP function to flip top of nertz pile

var flip = function () {
    if (/*count-down timer to start game is activated || or when top card leaves the pile*/) {

    }
}


// DEAL function will deal random cards from the deck!
    // need to adjust for 1 or 3 deal

var deal = function() {
  card = Math.floor(Math.random()*52+1);
  return card;
};



// NERTZ to declare victory when nertz pile empty

var nertz = function () {
    var nertzPile =

    while (i=13; i = 0; i--) {

    }
};


 // Space for nertz pile + main area (4 cards + deck)





 // space for A cards in middle






// double click to auto-send match












/* DECK DESIGNS



var getValue = function(card) {
  // if its a face card, number should be set to 10
    if (card % 13 === 0 || card % 13 > 10) {
        return 10;
    }
  // What if it's an ace?
        else if (card % 13 === 1) {
            return 11;
        }
  // Otherwise, we just want its number value
   else {
    return card % 13;
   }
}

