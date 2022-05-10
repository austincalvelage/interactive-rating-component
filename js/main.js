const ratingState = document.querySelector('#rating-state');
const ratedState = document.querySelector('#rated-state');
const displayRating = document.querySelector('#display-rating');

const rating = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('#submit-button');
let userRating = undefined;

function rateHandler(event) {
  rating.forEach(rate => rate.classList.contains('selected') ? rate.classList.remove('selected') : null) 
  userRating = event.target.textContent;
  event.target.classList.add('selected');
}


rating.forEach(rate => rate.addEventListener('click', rateHandler));
submitBtn.addEventListener('click', submitHandler);