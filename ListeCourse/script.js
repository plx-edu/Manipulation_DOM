"use strict";
console.log(":: Liste de Course");


let list = [];
let removedList = [];

let inputField = document.getElementById("itemName");
inputField.addEventListener('keyup', enterKeyPressed);

let addButton = document.getElementById("addButton");
addButton.addEventListener('click', addItem);

let removeButton = document.getElementById("removeButton");
removeButton.addEventListener('click', removeItem);


function addItem(){
    console.log(":: Added an item.");

    // let item = document.getElementById("itemName").value;
    let item = inputField.value;

    inputField.value = "";
    inputField.focus();

    if(item.trim() === "" || list.includes(item)) return;

    list.push(item);
    getItemList().append(createArticle(item));
}

function removeItem(){
    console.log("Removing item(s).");
    
    // DO NOT DELETE THE SELECT ALL OPTION ;_;
    let selectAll = document.getElementById("selectAll");

    let checked = document.getElementsByTagName("input");

    for(const k of checked){
        if(k.checked && k !== selectAll){
            // console.log(k.parentElement);
            removedList.push(k.parentElement);
        }
    }

    while(removedList.length > 0){
        list.splice(list.indexOf(removedList[0].id),1);
        removedList[0].remove();
        removedList.shift();
    }
}// removeItem()

function deleteItem(elem){
    console.log("Deleted an item.");
}


function getItemList(){
    return document.getElementById("itemList");
}

function createArticle(param){
    let article = document.createElement('article');
    article.id = param;
    article.classList.add("rflx");

    article.append(createLabel(param));
    article.append(createInput(param));

    return article;
}

function createLabel(param){
    let label = document.createElement('label');
    label.innerText = param;
    label.for = param;
    label.classList.add("fullWidth");

    return label;
}

function createInput(param) {
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.value = param;

    return input;
}


function enterKeyPressed(event){
    if(event.keyCode === 13){
        // event.preventDefault(); // ???
        addItem();
    }
}