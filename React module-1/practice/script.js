//catch product elements

const button = document.getElementById('button');
const price = document.getElementById('price');
const total = document.getElementById('total');


// state or data

const productPrice = 5000;

let totalPrice = 0;

price.innerText = `${productPrice}`
total.innerText = "total : 0"

button.addEventListener('click',()=>{

  totalPrice +=productPrice;

  //update ui
  total.innerText = `${totalPrice}`
})
