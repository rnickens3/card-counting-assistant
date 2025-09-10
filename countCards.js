let count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count++; // Increment count for lower cards
  } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--; // Decrement count for higher cards
  } return count + (count > 0 ? ' Bet' : ' Hold'); // This is a ternary operator. Shorthand for if/else. Ex: condition ? valueIfTrue : valueIfFalse
}
