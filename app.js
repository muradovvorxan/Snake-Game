var snake=document.querySelector(".snake");
var box=document.querySelector(".box");
var posX=20;
var posY=20;
var inter;
var score = 0;
var textDiv = document.querySelector(".text");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function TakeBoxRndCordinate() {
    h = getRndInteger(0, 560);
    w = getRndInteger(0, 1282);

    while (h%20!=0 || w%20!=0){
        h = getRndInteger(0, 560);
        w = getRndInteger(0, 1282);
    }

    box.style.marginTop=h+"px";
    box.style.marginLeft=w+"px";
}

TakeBoxRndCordinate()


function Right(){
    clearInterval(inter);
    inter = setInterval(function(){
        snake.style.marginLeft=posX+"px";
        posX+=20;
        if (posX == 1340) {
            setModal()
        }
        else {
            ChangeBoxCordinate()
        }
    },100)
}

function Up(){
    clearInterval(inter);
    inter = setInterval(function(){
        snake.style.marginTop=posY-40+"px"
        posY-=20; 
        if (posY == 0) {
            setModal()
        }
        else {
            ChangeBoxCordinate()
        }
    },100)
}

function Left(){
    clearInterval(inter);
    inter = setInterval(function(){
        snake.style.marginLeft=posX-40+"px"
        posX-=20;
        if (posX == 0) {
            setModal();
        }
        else {
            ChangeBoxCordinate()
        }
    },100)
}

function Down(){
    clearInterval(inter);
    inter = setInterval(function(){
        snake.style.marginTop=posY+"px"
        posY+=20;
        if (posY == 600) {
            setModal();
        }
        else {
            ChangeBoxCordinate()
        }
    },100)

}

document.onkeydown = function(e) {
    if(e.which == 37) {
        Left()
    }

    else if(e.which == 38) {
        Up()
    }

    else if(e.which == 39) {
        Right()
    }

    else if(e.which == 40) {
        Down()
    }
    e.preventDefault(); 
}

function ChangeBoxCordinate(){
    if (posY == h+20 && posX == w+20){
        score += 1;
        textDiv.innerHTML = `Score : ${score}`;
        TakeBoxRndCordinate();
    }
}

function setModal(){
    setTimeout(function() { 
        alert("YOU FAILED! PLAY AGAIN:)"); 
        score = 0; 
        location.reload(); 
    }, 100);
}
