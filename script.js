//start with a 16x16 grid

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");

    square.classList.add("square");
    square.style.width = "60px";
    square.style.height = "60px";
    
    container.appendChild(square);
};

//for each div add a mouse event which changes the background colour when the mouse enters the div

const divs = document.querySelectorAll(".square");

divs.forEach(div => {
    div.addEventListener("mouseenter", (event) => {
        div.style.backgroundColor = selectedColor;
    })
});

//add function to change the colour of every square with the click of the background button

const background = document.querySelector("#background"); 

background.addEventListener("click", changeAll);

function changeAll() {
   divs.forEach(div => {
        div.style.backgroundColor = selectedColor;
    });
};

//add click event listener on button to call the new grid function

const btn = document.querySelector("#prompt");

btn.addEventListener("click", newGrid);

function newGrid() {

    //get a user input for the number of squares in each row
    
    let squaresPerRow = prompt("Enter number of squares in each row");

    //find the width and height of each square if the container is 1000px wide

    let width = (960 / squaresPerRow);

    const container = document.querySelector("#container");

    //clear the previous grid

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

    //for each div add a mouse event which changes the background colour when the mouse enters the div

    const divs = document.querySelectorAll(".square");

    divs.forEach(div => {
        div.addEventListener("mouseenter", (event) => {
            div.style.backgroundColor = selectedColor;
        })
    });

    //add function to change the colour of every square with the click of the background button

    background.addEventListener("click", changeAll);

    function changeAll() {
    divs.forEach(div => {
            div.style.backgroundColor = selectedColor;
        });
};
};

//add function for user to pick the colour of the squares 

let colorPicker = document.querySelector("#colorPicker");

function updateColor(event) {
    selectedColor = event.target.value;
};

colorPicker.addEventListener("input", updateColor);
