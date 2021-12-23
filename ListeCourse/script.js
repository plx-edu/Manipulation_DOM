"use strict";
console.log(":: Liste de Course");


let list = [];
let removedList = [];
let inputField = document.getElementById("itemName");

let addButton = document.getElementById("addButton");
addButton.addEventListener('click', addItem);

let removeButton = document.getElementById("removeButton");
removeButton.addEventListener('click', removeItem);


function addItem(){
    console.log(":: Added an item.");

    let item = document.getElementById("itemName").value;

    inputField.value = "";
    inputField.focus();

    if(item === "" || list.includes(item)) return;

    list.push(item);
    getItemList().append(createArticle(item));
}

function removeItem(){
    console.log("Removed an item.");
    
    let articles = document.getElementsByTagName("article");
    let checked = document.getElementsByTagName("input");

    for(const k of checked){
        if(k.checked){
            // console.log(k.value);
            for(const k2 of articles){
                if(k2.id === k.value){
                    console.log("removing", k2);
                    removedList.push(k2);
                    // k2.remove();
                    console.log("::::",removedList);
                    list.splice(list.indexOf(k.value),1);
                }
            }
        }
    }

    while(removedList.length > 0){
        removedList[0].remove();
        removedList.shift();
        // list.splice(list.indexOf(removedList[0].id),1);
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

    article.append(createLabel(param));
    article.append(createInput(param));

    return article;
}

function createLabel(param){
    let label = document.createElement('label');
    label.innerText = param;
    label.for = param;

    return label;
}

function createInput(param) {
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.value = param;

    return input;
}
