function pintar(tag, color="green") {
    tag.style.backgroundColor = color;
}

const paragraph = document.getElementById("ele1");

paragraph.addEventListener("click",() => {
    pintar(paragraph, "yellow");
});