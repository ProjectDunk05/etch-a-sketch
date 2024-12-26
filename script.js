// select elements with ID = "container"

const container = document.querySelector("#container");

//create 256 new divs in the container div

for (let i = 1; i <= 256; i++) {
    const square = document.createElement("div");

    
    square.classList.add("square");
    container.appendChild(square);
};

//select all elements with class = "square"

const divs = document.querySelectorAll(".square");

//for each div add a mouse event which changes the background colour when the mouse enters the div

divs.forEach(div => {
    div.addEventListener("mouseenter", (event) => {
        div.style.backgroundColor = "red";
    })
});