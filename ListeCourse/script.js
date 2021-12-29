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

let selectAll = document.getElementById("selectAll");
selectAll.addEventListener('change', checkAll);

function addItem(){
    let item = inputField.value;

    inputField.value = "";
    inputField.focus();

    if(item.trim() === "" || list.includes(item)) return;

    list.push(item);
    getItemList().append(createArticle(item));
}

function removeItem(){
    let checked = getCheckedInput();

    for(const k of checked){
        if(k.checked){
            removedList.push(k.parentElement);
        }
    }

    while(removedList.length > 0){
        list.splice(list.indexOf(removedList[0].id),1);
        removedList[0].remove();
        removedList.shift();
    }

    checkAll();
    showRemoveButton();
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
    input.addEventListener("change", isChecked);

    return input;
}

function enterKeyPressed(event){
    if(event.keyCode === 13){
        addItem();
    }
}

function checkAll(){
    let checked = getCheckedInput();

    if(checked.length === 0){
        selectAll.checked = false;
        return
    }

    if(selectAll.checked) {
        for(const k of checked){
            if(k.type === "checkbox") k.checked = true;
        }
    }else {
        for(const k of checked){
            if(k.type === "checkbox") k.checked = false;
        }
    }

    showRemoveButton()
}

function getCheckedInput(){
    let checked = document.getElementsByTagName("input");
    let arr = [];

    // DO NOT ADD THE SELECT ALL OPTION ;_;
    for(const k of checked){
        if(k !== selectAll && k.type === "checkbox"){
            arr.push(k);
        }
    }

    return arr;
}

function isChecked(e){
    let current = e.currentTarget.checked;
    let checked = getCheckedInput();
    let nChecked = 0;

    if(current){
        for(const k of checked){
            if(k.checked) nChecked++;
        }

        if(nChecked === checked.length){
            selectAll.checked = true;
            showRemoveButton()
            return
        }
    }
    
    selectAll.checked = false;
    showRemoveButton()
}

function showRemoveButton(){
    let checked = getCheckedInput();

    for(const k of checked){
        if(k.checked){
            removeButton.style.display = '';
            return
            
        }
    }
    
    removeButton.style.display = "none";
}

