let gameSequ=[];
let userSequ=[];

let btns=["red","yellow","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener('keypress',()=>{
    if(started==false){
    console.log("game is Started");
    started=true;
    }

   levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },150);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },150);
}


function levelUp(){
    userSequ=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    //random btn choose
    let ranIdx=Math.floor(Math.random()*3);
    let ranColor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranColor}`);
    
    gameSequ.push(ranColor);
    console.log(gameSequ);
    gameFlash(ranBtn);
}

function checkAns(idx){

    if (userSequ[idx]===gameSequ[idx]){
        if(userSequ.length==gameSequ.length){
            setTimeout(levelUp,700);
        }
    }else {
        h2.innerHTML=`Game Over ! Your Score was ${level} <br></br> Press any key to Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSequ.push(userColor);

    checkAns(userSequ.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSequ=[];
    userSequ=[];
    level=0;
}