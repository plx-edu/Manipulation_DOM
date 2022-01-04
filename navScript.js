let navIsSet = false;

setNav();

function setNav(){
    if(!navIsSet){
        navIsSet = createNav();
    }else{
        console.log("nav is already set");
    }
}
function createNav(){
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    let items = ["Home", "Carousel", "ListeCourse", "ScoreKeeper", "MonsterSlayer"];
    
    for(const k of items){
        let li = document.createElement('li');
        let a = document.createElement('a');
        
        if(k === "Home"){
            a.innerText = k;
            a.href = `..`;
        }else{
            if(k === getCurrentPath()) continue;
            a.innerText = k;
            a.href = `../${k}`;
        }
        
        li.append(a);
        ul.append(li);
    }
    
    nav.append(ul);
    // document.querySelector('body').append(nav);
    document.querySelector('body').prepend(nav);
    return true;
}
function getCurrentPath(){
    let str = "/Manipulation_DOM/"
    let path = window.location.pathname.replace(str, "");
    path = path.replace("/index.html", "").replace("/", "");
    return path;
}