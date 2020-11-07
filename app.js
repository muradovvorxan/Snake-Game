var snake=document.querySelector(".snake");
var box=document.querySelector(".box");
var posX=20;
var posY=20;
var inter;
var rightswitch = false;
var upswitch = false;
var leftswitch = false;
var downswitch = false;

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
    rightswitch = true;
    upswitch = false;
    leftswitch = false;
    downswitch = false;
    inter = setInterval(function(){
        if (rightswitch){
            snake.style.marginLeft=posX-40+"px"
            posX-=20;
        }
        if (posX == 0) {
            setModal()
        }
        else {
            ChangeBoxCordinate()
        }
    },150)
}

function Up(){
    rightswitch = false;
    upswitch = true;
    leftswitch = false;
    downswitch = false;
    inter = setInterval(function(){
        if (upswitch){
            snake.style.marginTop=posY-40+"px"
            posY-=20; 
        }
        if (posY == 0) {
            setModal()
        }
        else {
            ChangeBoxCordinate()
        }
    },150)
}

function Left(){
    rightswitch = false;
    upswitch = false;
    leftswitch = true;
    downswitch = false;
    inter = setInterval(function(){
        if (leftswitch){
            snake.style.marginLeft=posX+"px"
            posX+=20;
        }
        if (posX >= 1340) {
            setModal();
        }
        else {
            ChangeBoxCordinate()
        }
    },150)
}

function Down(){
    rightswitch = false;
    upswitch = false;
    leftswitch = false;
    downswitch = true;
    inter = setInterval(function(){
        if(downswitch){
            snake.style.marginTop=posY+"px"
            posY+=20;
        }
        if (posY >= 600) {
            setModal();
        }
        else {
            ChangeBoxCordinate()
        }
    },150)

}

document.onkeydown = function(e) {
    if(e.which == 37) {
        Right()
    }

    else if(e.which == 38) {
        Up()
    }

    else if(e.which == 39) {
        Left()
    }

    else if(e.which == 40) {
        Down()
    }
    e.preventDefault(); 
}
function ChangeBoxCordinate(){
    if (posY == h+20 && posX == w+20){
        TakeBoxRndCordinate()
    }
}

function setModal(){
    // setTimeout(function() { alert("YOU FAILED! PLAY AGAIN:)");location.reload() }, 60);
    alert("YOU FAILED! PLAY AGAIN:)");
    location.reload()
}
