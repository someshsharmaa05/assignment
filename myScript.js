let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const cardsWrapper = document.querySelector('.cards-wrapper');
const numCards = cards.length;
const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);

function moveSlider(direction) {
  currentIndex = currentIndex + direction;
  if (currentIndex < 0) {
    currentIndex = numCards - 1;
  } else if (currentIndex >= numCards) {
    currentIndex = 0;
  }
  const offset = -1 * currentIndex * cardWidth;
  cardsWrapper.style.transform = `translateX(${offset}px)`;
}
