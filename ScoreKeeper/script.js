"use strict";
console.log(":: Score Keeper");

let maxScore = document.getElementById("maxScore");
maxScore.addEventListener("change", reset)
let resetBttn = document.getElementById("reset");
resetBttn.addEventListener("click", reset)

let score1 = 0;
let score2 = 0;


let p1 = document.getElementById("player1").children[0];
let bttn1 = document.getElementById("player1").children[1];
bttn1.addEventListener("click", addPoint)


let p2 = document.getElementById("player2").children[0];
let bttn2 = document.getElementById("player2").children[1];
bttn2.addEventListener("click", addPoint)



function addPoint(e){
    switch(e.currentTarget){
        case bttn1:
            score1++;
            break;
        case bttn2:
            score2++;
            break;
        default:
            score1 = score2 = 0;
            console.log("Something went wrong");
    }

    p1.innerText = score1;
    p2.innerText = score2;

    let sc = +maxScore.value;
    if(score1 >= sc || score2 >= sc){
        bttn1.disabled = bttn2.disabled = true;
        console.log(
            score1 > score2 ? "Player 1 Wins!" : "Player 2 Wins!"
        );
    }
}

function reset(){
    p1.innerText = p2.innerText = score1 = score2 = 0;
    bttn1.disabled = bttn2.disabled = false;
}