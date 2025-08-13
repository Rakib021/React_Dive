const circle = document.getElementById("circle");

const observer = new IntersectionObserver((items) =>{
const tracking = items[0];

if(tracking.isIntersecting){
  console.log("Items is visible");
}
else{
  console.log("Items is not visible")
}
})

observer.observe(circle)