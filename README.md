# Card Counting Assistant

A simple JavaScript implementation of a **card counting assistant** inspired by the classic "Hi-Lo" counting system used in Blackjack.  
This project demonstrates clean, maintainable code and the use of **conditional logic**, **global state**, and **ternary operators** in JavaScript.

---

## 🚀 Features

- Counts cards in real time based on Blackjack strategy.
- Increments count for low cards (`2` through `6`).
- Decrements count for high cards (`10`, `J`, `Q`, `K`, `A`).
- Returns a recommendation to **Bet** (if the count is positive) or **Hold** (if the count is zero or negative).

---

## 🧠 How It Works

```javascript
let count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count++; // Increment count for lower cards
  } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--; // Decrement count for higher cards
  }
  
  return count + (count > 0 ? ' Bet' : ' Hold');
}
