const container = document.querySelector(".container");
const numOfSq = 16*16;
let count = 0;

while(count < numOfSq){
    const div = document.createElement("div");
    div.classList.add("squares");
    container.appendChild(div);
    div.addEventListener("mousemove", (e) => {
        div.classList.add("etch");
    });
    count++;
}



