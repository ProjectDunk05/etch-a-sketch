//add click event listener on button to call the new grid function

const btn = document.querySelector("#prompt");

btn.addEventListener("click", newGrid);

function newGrid() {

    //get a user input for the number of squares in each row
    
    let squaresPerRow = prompt("Enter number of squares in each row");

    //create new divs in the container div
    
    let gridSquares = squaresPerRow * squaresPerRow;

    //find the width and height of each square if the container is 1000px wide

    let width = (1000 - (squaresPerRow + 1)) / squaresPerRow;

    const container = document.querySelector("#container");

    for (let i = 1; i <= gridSquares; i++) {
        const square = document.createElement("div");

        
        square.classList.add("square");
        square.style.width = width + "px";
        square.style.height = width + "px";
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
};