//add click event listener on button to call the new grid function

const btn = document.querySelector("#prompt");

btn.addEventListener("click", newGrid);

function newGrid() {

    //get a user input for the number of squares in each row
    
    let squaresPerRow = prompt("Enter number of squares in each row");

    

    //find the width and height of each square if the container is 1000px wide

    let width = (960 / squaresPerRow);

    const container = document.querySelector("#container");

    container.textContent = "";

    // Check if input is a valid number and within a reasonable range
    
    if (isNaN(squaresPerRow) || squaresPerRow <= 0 || squaresPerRow > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    } else {

        // create a user inputted amount of divs 
        
        for (let i = 0; i < squaresPerRow * squaresPerRow; i++) {
            const square = document.createElement("div");

            
            square.classList.add("square");
            square.style.width = width + "px";
            square.style.height = width + "px";
            
            container.appendChild(square);
        };
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