const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");

const pintar = (square) => {
    square.style.backgroundColor = "black";
}
square1.addEventListener("click",() =>{
    pintar(square1)
})
square2.addEventListener("click",() =>{
    pintar(square2)
})
square3.addEventListener("click",() =>{
    pintar(square3)
})
square4.addEventListener("click",() =>{
    pintar(square4)
})


let color; 
const key = document.getElementById("key")

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "pink";
    } else if (event.key === 's') {
        color = "orange";
    } else if (event.key === 'd') {
        color = "lightblue"
    } 
    key.style.backgroundColor = color;
})





    