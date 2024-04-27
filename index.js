const container = document.querySelector(".container");
let size = 16;
let numOfSq = size*size;
let count = 0;

let opacityChange = 0.1;

createGrid(numOfSq, size);

function createGrid(numOfSq, size){
    let measurement = 960/size;
    while(count < numOfSq){
        const div = document.createElement("div");
        div.style.width = measurement+'px';
        div.style.height = measurement+'px';
        container.appendChild(div);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        div.addEventListener("mouseenter", (e) => {
            div.style.backgroundColor = "#" + randomColor;
            let brightness = getBrightness(div);
            let updateBrightness = brightness-0.1;
            div.style.filter = `brightness(${updateBrightness})`;
        });
        count++;
    }
    
}

function getBrightness(element){
    const computedStyle = window.getComputedStyle(element);
    const filterValue = computedStyle.getPropertyValue('filter');
    const brightnessMatch = filterValue.match(/brightness\(([^)]+)\)/);
    if (brightnessMatch) {
        return parseFloat(brightnessMatch[1]);
    }
    return 1; 
}

function newGrid(){
    let size = prompt("Enter how many squares you want your canvas to have per side.");
    let validSize = false;

    while (!validSize){

        if(size > 0 && size < 100){
            count = 0;
            numOfSq = size*size;

            const removeContainer = document.querySelector(".container");

            while (removeContainer.firstChild){
                removeContainer.removeChild(removeContainer.firstChild);
            }

            validSize = true;
            createGrid(numOfSq, size);
        } else {
            size = prompt("Make sure you pick a number between 0-100.");
        }
    }
    
    
}