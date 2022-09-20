
let randomItem = 0;
let weapon = 0;
let returnas = 0;
let rez = 0;
let rck,ppr,scc;
let player = 0;
let computer =0;
let rock = document.querySelector(".Rock");
let paper = document.querySelector(".Paper");
let scissors = document.querySelector(".Scissors");
rock.addEventListener("click",()=> (playerSelection("rock")));
paper.addEventListener("click",() => (playerSelection("paper")));
scissors.addEventListener("click",() => (playerSelection("scissors")));

let rezultatas_p = document.querySelector(".lifes_p");
let rezultatas_c = document.querySelector(".lifes_c");

let win = document.querySelector(".congrats");
let loose = document.querySelector(".not_congrats");



function getComputerChoice(){ // random kompiuterio pasirinkimas
    const C = [
    'rock',
    'paper',
    'scissors'
];
    randomItem = C[Math.floor(Math.random()*C.length)];
    
    
}

function playerSelection(X){

    if(X == "rock"){
        weapon = "rock";
    }
    else if(X == "paper"){
        weapon = "paper";
    }
    else weapon = "scissors";
    return(game());
}
     


///////////////////////////////////////
function SelectionA(){
    if(randomItem == weapon){
        rez = 0;
        returnas = "it's a tie!";
        return(returnas);
    }
    else if(randomItem == "rock" && weapon == "paper"){
        rez = 1;
        returnas = "You win, paper beats rock";
        return(returnas);
    }
    else if (randomItem == "rock" && weapon == "scissors"){
        rez = -1;
        returnas = "You loose, rock beats scissors";
        return(returnas);
    }
    else if (randomItem == "paper" && weapon == "rock"){
        rez = -1;
        returnas = "You loose, paper beats rock";
        return(returnas);
    }
    else if (randomItem == "paper" && weapon == "scissors"){
        rez = 1;
        returnas = "You win, scissors beats paper";
        return(returnas);
    }
    else if (randomItem == "scissors" && weapon == "rock"){
        rez = 1;
        returnas = "You win, rock beats scissors";
        return(returnas);
    }
    else if (randomItem == "scissors" && weapon == "paper"){
        rez = -1;
        returnas = "You loose, scissors beats paper";
        return(returnas);
    }
    //////////////////////////////////////////
}

function game(){

        rez = 0;
        getComputerChoice();
        SelectionA();
        
        
        if(rez == 1){
            alert (returnas);
            alert ( "you get one point");
            player++;
        }
        else if(rez == -1){
            alert (returnas);
            alert ( "Computer gets one point");
            computer++;
        }
        else{
            alert ("its, a tie");
            player++;
            computer++;
        }
        
    rezultatas_p.innerHTML = ("your points - " + player);
    rezultatas_c.innerHTML = ("computer points - " + computer);
    
    if(player >= 5){
        win.innerHTML = ("Congratulations! You win!");
        
    }
    else if(computer >= 5){
        loose.innerhTML = ("Well too bad, computer won");

    }
}
/////////////////////////////////

// o cia tai vapse su tuo gitu