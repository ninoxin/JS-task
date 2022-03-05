function getDomNodesBySelector(selector) {

  return Array.from(document.querySelectorAll(selector));
  }

  let count = 0
  document.querySelector('.total__button').addEventListener('click', () =>{
    if (count == 0) {
      applyDiscount()
      count++
    }
  });

function applyDiscount() {
  
  let array = getDomNodesBySelector('.price-value')
  let totalPrice = document.querySelector('.total-price-value')

  let sum = 0;

  for(let i = 0; i < array.length; i++){
    sum = +array[i].textContent * 0.15;
    array[i].textContent -= sum
  }

  array.forEach(elem => {
    sum += +elem.textContent 
    
  })
  totalPrice.textContent = sum
}
