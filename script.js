// Declare global variables and querySelectors
let selectedColor;
let isPaused = false;

const container = document.querySelector("#container");
const background = document.querySelector("#background");
const colorPicker = document.querySelector("#colorPicker");
const btn = document.querySelector("#prompt");
const toggle = document.querySelector("#brushToggle");

// start with a 16x16 grid
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");

    square.classList.add("square");
    square.style.width = "42.5px";
    square.style.height = "42.5px";
    
    container.appendChild(square);
};

// add click event to toggle the paused state where the mouse over event doesnt change background colour
const divs = document.querySelectorAll(".square");

divs.forEach(div => {
    div.addEventListener("click", () => {
        isPaused = !isPaused;
         
         // Update the brushToggle <p> based on the current isPaused state
         if (isPaused) {
            toggle.textContent = "Brush: Off";  
        } else {
            toggle.textContent = "Brush: On";  
        };

    });
});

// for each square add a mouse event which changes the background colour when the mouse enters the div
divs.forEach(div => {
    div.addEventListener("mouseenter", (event) => {
        if(!isPaused) {    
            div.style.backgroundColor = selectedColor;
        }
    })
});

// function to change the colour of every square with the click of the background button
background.addEventListener("click", changeAll);

function changeAll() {
    divs.forEach(div => {
        div.style.backgroundColor = selectedColor;
    });
};

// function for user to pick the colour of the squares 
colorPicker.addEventListener("input", updateColor);

function updateColor(event) {
    selectedColor = event.target.value;
};

// add click event listener on button to call the new grid function
btn.addEventListener("click", newGrid);

function newGrid() {

    // get a user input for the number of squares in each row
    let squaresPerRow = prompt("Enter number of squares in each row");

    // find the width and height of each square if the container is 1000px wide
    let width = (680 / squaresPerRow);

    // clear the previous grid
    container.textContent = "";

    // Check if input is a valid number and within a reasonable range
    if (isNaN(squaresPerRow) || squaresPerRow <= 0 || squaresPerRow > 100 || !Number.isInteger(+squaresPerRow)) {
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

        // Reattach the event listeners for each square after grid is updated
        const divs = document.querySelectorAll(".square");

        divs.forEach(div => {
            div.addEventListener("click", () => {
                isPaused = !isPaused; 

                if (isPaused) {
                    toggle.textContent = "Brush: Off";  
                } else {
                    toggle.textContent = "Brush: On";  
                };
            });
        });
         
        divs.forEach(div => {
            div.addEventListener("mouseenter", (event) => {
                if(!isPaused) {    
                    div.style.backgroundColor = selectedColor;
                }
            })
        });
    };
   
    // function for user to pick the colour of the squares 
    colorPicker.addEventListener("input", updateColor);
    
    function updateColor(event) {
        selectedColor = event.target.value;
    };

    // function for user to change thw background colour
     const background = document.querySelector("#background");
     const divs = document.querySelectorAll(".square");
        
     background.addEventListener("click", changeAll);

     function changeAll() {
         divs.forEach(div => {
             div.style.backgroundColor = selectedColor;
         });
     };
};
