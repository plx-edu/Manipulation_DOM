console.log(":: Carousel Project ::");




let imgIndex = 0;


function showNext(){
    imgIndex++;

    if(imgIndex > getCarousel().children.length - 1){
        imgIndex = 0;
    }

    // console.log("Next image", imgIndex);
    showCarouselImage(imgIndex);
}

function showPrevious(){
    imgIndex--;
    if(imgIndex < 0){
        imgIndex = getCarousel().children.length - 1;
    }
    
    // console.log("Previous image", imgIndex);
    showCarouselImage(imgIndex);
}

function getBody(){
    return document.body;
}

function getCarousel(){
    return document.getElementById("carousel");
}

function showCarouselImage(elem){
    let current = getCarousel().children[elem];
    let list = getCarousel().children;

    for(const k of list){
        if(k === current) {
            // console.log(current);
            showElem(current);
        }else{
            hideElem(k);
        }
    }
}

function showElem(elem){
    elem.classList.remove("displayNone");
}

function hideElem(elem){
    if(elem.classList.contains("displayNone")) return;
    elem.classList.add("displayNone")
}