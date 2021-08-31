const gridWrapper = document.querySelector('.grid-wrapper');
const clearBtn = document.querySelector('.clear-btn');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const colorPicker = document.querySelector('.color-picker');

let chosenColor = colorPicker.value;
let gridBoxesArray = [];

// Creating divs and adding hover effects
function createGrid() {
for (i = 0; i < slider.value * slider.value; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridBox');
        gridItem.addEventListener('mouseenter', function(e) {
            e.target.style.backgroundColor = chosenColor;
            gridItem.classList.add('gridBoxOnHover');
        })
        // This is just a cool mouse tracking function I accidently made
        /*gridItem.addEventListener('mouseleave', function(e) {
            e.target.style.backgroundColor = 'white';
            gridItem.classList.remove('gridBoxOnHover');
     })*/
        gridWrapper.appendChild(gridItem);
        gridBoxesArray.push(gridItem);
    }
}

// Clear button function
function clearSketch() {
    gridBoxesArray.forEach((div) => {
        div.style.backgroundColor = 'white'
        div.classList.remove('gridBoxOnHover');
    })
}

function changeColor() {
    chosenColor = colorPicker.value;
}

slider.addEventListener('input', function() {
    sliderValue.textContent = "Grid Size: " + slider.value;
    gridWrapper.style = 'grid-template-rows: repeat(' + slider.value + ' , 1fr); grid-template-columns: repeat(' + slider.value + ', 1fr);';
    gridBoxesArray.forEach((div) => {
        div.remove();
    })
    createGrid();
})

clearBtn.addEventListener('click', clearSketch);
colorPicker.addEventListener('input', changeColor);
window.onload = (createGrid);