const list = document.getElementById('list');
list.addEventListener("click", (e) => {
    if(e.target.matches("li")){
        e.target.style.backgroundColor = "yellow";
    }
 
});