const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click",listener,{
  capture:true,
});
form.addEventListener("click",listener,{
capture:true,
});
button.addEventListener("click",listener);


function listener(event){
  console.log(this.tagName);

} 