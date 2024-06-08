let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".rstbtn");
let newbtn = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;

let winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("hello");
        if (turnO === true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;  
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
    for(pattern of winning){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
}

const rstgame = ()=>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}

newbtn.addEventListener("click", rstgame);
rstbtn.addEventListener("click", rstgame);