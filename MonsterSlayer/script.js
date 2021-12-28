"use strict";
console.log(":: Monster Slayer");

let attackBttn = document.getElementById("attack");
attackBttn.addEventListener("click", act);
let specialBttn = document.getElementById("special");
specialBttn.addEventListener("click", act);
let healBttn = document.getElementById("heal");
healBttn.addEventListener("click", act);
let giveUpBttn = document.getElementById("giveUp");
giveUpBttn.addEventListener("click", showButtons);

let startBttn = document.getElementById("start");
startBttn.addEventListener("click", showButtons);

let playerHealth = 100;
let playerBar =  document.getElementById("playerBar").children[0];
let playerHealtTxt =  document.getElementById("playerBar").children[1];

let monsterHealth = 100;
let monsterBar =  document.getElementById("monsterBar").children[0];
let monsterHealthTxt =  document.getElementById("monsterBar").children[1];


let round = 0;
initGame();

function act(e){

    // player deals between 3 and 10 base
    // 10 and 20 special
    // 10 flat +health
    let dmgDealt = 0;
    let ptxt = "";

    // monster attacks between 5 and 10
    let dmgTaken = -getRandomIntInclusive(5, 10);
    let mtxt = `Hits player for ${-dmgTaken}pts`;

    switch(e.currentTarget.id){

        case "attack":
            dmgDealt = getRandomIntInclusive(3, 10);
            ptxt += `Hit Monster for ${dmgDealt}pts`;
            break;
        case "special":
            dmgDealt = getRandomIntInclusive(10, 20);
            ptxt += `Deals ${dmgDealt}pts damage!`;
            break;
        case "heal":
            setPlayerHealth(10);
            ptxt += `Heal 10pts`;
            break;
        default:
            console.log("Oops!");
    }

    if(setMonsterHealth(dmgDealt) === 0 || setPlayerHealth(dmgTaken) === 0){
        if(playerHealth <= 0){
            editLogs("Player is defeated", mtxt);
        }else{
            editLogs(ptxt, "Monster is defeated");
        }

        gameOver();
    }else{
        editLogs(ptxt, mtxt);
    }

    // console.log(dmgTaken);
}

function setPlayerHealth(pts){
    playerHealth += pts;

    if(playerHealth < 0 ) playerHealth = 0;
    else if(playerHealth > 100) playerHealth = 100;

    // console.log(playerHealth);
    playerBar.style.width = playerHealth + "%";
    playerHealtTxt.innerHTML = playerHealth;

    return playerHealth;
}

function setMonsterHealth(pts){
    monsterHealth -= pts;
    if(monsterHealth < 0) monsterHealth = 0;
    
    // console.log(monsterHealth);
    monsterBar.style.width = monsterHealth + "%";
    monsterHealthTxt.innerHTML = monsterHealth;

    return monsterHealth;
}

function giveUp(){
    console.log("Player is giving up.");
}


let actBttns = document.getElementById("actionBttns");
function showButtons(){
    if(startBttn.classList.contains("displayNone")){
        startBttn.classList.remove("displayNone");

        actBttns.classList.add("displayNone");
        disableBttns(actBttns.children, true);
    }else{
        startBttn.classList.add("displayNone");
        initGame();

        actBttns.classList.remove("displayNone");
        disableBttns(actBttns.children, false);
    }
}
function disableBttns(arr, val){
    // console.log(value);
    for(const k of arr){
        k.disabled = val;
        // console.log(k.disabled);
    }
}

function editLogs(pText, mText){
    round++;
    let roundtxt = ` (round n°${round})`;

    let playerLog = document.getElementById("player").children[1].lastElementChild;
    let monsterLog = document.getElementById("monster").children[1].lastElementChild;

    let pli = document.createElement("li");
    pli.append(pText, roundtxt);
    playerLog.append(pli);
    
    let mli = document.createElement("li");
    mli.append(mText, roundtxt);
    monsterLog.append(mli);


    if(round % 2 === 0){
        pli.classList.add("v1");
        mli.classList.add("v2");
    }else{
        pli.classList.add("v2");
        mli.classList.add("v1");
    }

    if(round >= 13){
        document.getElementById("player").children[1]
            .lastElementChild.firstElementChild.remove();
        document.getElementById("monster").children[1]
            .lastElementChild.firstElementChild.remove();
    }
}

function gameOver(){
    disableBttns(actBttns.children, true);
    startBttn.classList.remove("displayNone");
}

function initGame(){
    round = 0;

    playerHealth = 100;
    playerBar.style.width = playerHealth + "%";
    playerHealtTxt.innerHTML = playerHealth;
    
    monsterHealth = 100;
    monsterBar.style.width = monsterHealth + "%";
    monsterHealthTxt.innerHTML = monsterHealth;

    let arr = document.getElementsByTagName("ul");
    for(const k of arr){
        k.innerHTML = '';
    }
}


// Thanks MDN
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



