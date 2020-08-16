function handleMouseOver() {
    var id2Element = document.querySelector(".beautify");
    id2Element.style.background = "pink";
    id2Element.style.color = "royalblue";

    id2Element.innerHTML = "Hello Selectors!";
}

function handleMouseOut() {
    let id2Element = document.querySelector(".beautify");
    id2Element.style.background = "black";
    id2Element.style.color = "white";

    id2Element.innerHTML = "Hello World";
}