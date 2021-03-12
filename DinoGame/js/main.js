//let canvas = document.getElementById("canvas");
//let ctx = canvas.getContext("2d");

document.addEventListener("keydown", function(e){
    if (e.keyCode == 32) {
        console.log("salta");
    }

});

var ANCHO = 700;
var ALTO = 500;
var canvas,ctx;

var img1, img2, img3;


function cargaImagenes() {
    img1 = new Image();
    img2 = new Image();
    img3 = new Image();

    img1.src = "img/angy.png";
    img2.src = "img/dron.png";
    img3.src = "img/neo.png";
}

function inicializa() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    cargaImagenes();
}

function borraCanvas() {
    canvas.width = ANCHO;
    canvas.height = ALTO;
}


//ANGEL---------------------------------------
var angy = {
    x: 100,
    y: 200,
    sizeH: 32,
    sizeV: 32,
    scaleX: 100,
    scaleY: 100
}

function dibujaAngy() {
    ctx.drawImage(img1,0,0,angy.sizeH,angy.sizeV,angy.x,angy.y,angy.scaleX,angy.scaleY);    
}

function moveAngy() {
    angy.x++;
}

//DRON----------------------------------------
var dron = {
    x: 50,
    y: 100,
    clipX: 0,//Recorte de imagen en X
    clipY: 0,//Recorte de imagen en Y
    sizeH: 32,
    sizeV: 32,
    scaleX: 100,
    scaleY: 100

}

function dibujaDron() {
    ctx.drawImage(img2,dron.clipX,dron.clipY,dron.sizeH,dron.sizeV,dron.x,dron.y,dron.scaleX,dron.scaleY);
}

function moveDron() {
    dron.x +=2;
}


//-------------------------------------------------

//NEO---------------------------------------------
var neo = {
    x: 100,
    y: 300,
    sizeH: 32,
    sizeV: 32,
    scaleX: 100,
    scaleY: 100
}

function dibujaNeo() {
    ctx.drawImage(img3,0,0,neo.sizeH,neo.sizeV,neo.x,neo.y,neo.scaleX,neo.scaleY);
}

function moveNeo() {
    neo.x +=2.5;
    neo.y--;
}
//--------------------------------------------------

//------------------------------------------------------------
//BUCLE PRINCIPAL
var FPS = 10;
setInterval(() => {
    principal();
}, 1000/10);

function principal() {
    //console.log("principal ejecutandose");
    borraCanvas();

    dibujaAngy();
    moveAngy();

    dibujaDron();
    moveDron();

    dibujaNeo();
    moveNeo();
}