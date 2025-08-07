let userscore = 0;
let compscore = 0;
let userwin = true;

const choices = document.querySelectorAll(".choice");
const msgele = document.getElementById("msg");
const playerscore = document.getElementById("player-score");
const computerscore = document.getElementById("comp-score");

function compplay(){
    const arr = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return arr[randomidx];
}

function draw(){
    msgele.innerText = `Draw!!`
    msgele.style.backgroundColor="darkslategray"
}

function showwinner(userwin,userchoice,compchoice){
    if(userwin){
        msgele.innerText = `You Win!! ${userchoice} beats ${compchoice}`
        msgele.style.backgroundColor = "green";
        userscore++;
        playerscore.innerText = userscore;
    }
    else{
        msgele.innerText = `You Lose!! ${compchoice} beats ${userchoice}`;
        msgele.style.backgroundColor = "red";
        compscore++;
        computerscore.innerText = compscore;
    }
}

function playgame(userchoice){
    const compchoice = compplay();
    
    if(userchoice === compchoice){
        draw();
    }

    else{
        
        if(userchoice === "rock"){
            // scissors,paper
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            // rock,scissors
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            // rock,paper
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

    
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})
