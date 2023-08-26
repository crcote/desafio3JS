let color;

document.addEventListener('keydown', function (event) {
    let square = document.createElement("div");
    square.style.width = "200px";
    square.style.height = "200px";
    square.style.border = "1px solid black";
    if (event.key === 'q') {
        color = "purple";
    } else if (event.key === 'w') {
        color = "gray";
    } else if (event.key === 'e') {
        color = "brown";
    } 
    square.style.backgroundColor = color;
    
    document.body.appendChild(square);
})

