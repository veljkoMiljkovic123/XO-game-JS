let container = document.querySelector(".game-container");
let message = document.querySelector("#message");
createGrid()

let boxes = document.querySelectorAll(".box")
let lines = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
]
boxes.forEach(box=>box.addEventListener("click",insertSimbol))
let simbol = "O";

function insertSimbol(){
    this.removeEventListener("click",insertSimbol)
    if(simbol==="X"){
        simbol="O"
    }else{
        simbol="X"
    }
    this.innerHTML=simbol;
   
    checkLines();
}

function checkLines(){
lines.forEach(function(line){
let box1 = boxes[line[0]]
let box2 = boxes[line[1]]
let box3 = boxes[line[2]]

if(box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML && box2.innerHTML!==""){
    box1.style.background='red';
    box2.style.background='red';
    box3.style.background='red';
    message.innerHTML='Pobeda!'
    stopGame();
}
})

}

function stopGame(){
    boxes.forEach(box=>box.removeEventListener("click",insertSimbol))
}


function createGrid(){
    let prom = '';
    for(let i =0;i<9;i++){
    prom+=`<div class="box"></div>`;
    }
    container.innerHTML=prom;
   
}

 