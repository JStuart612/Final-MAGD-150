var y = [];
let sound1;
let sound2;
let playMode = 'sustain'

let asteroidsArray = [];
let showbutton = false;
let asteroidspeed = 4;
let button;

function preload() {
  sound1 = loadSound("sounds/Chime.mp3");
  sound2 = loadSound("sounds/Tada.mp3");
}

function setup() {

    createCanvas(300, 800);
    let _button = document.getElementById("button");
    if (_button != null) {
        _button.remove();
    }
    colorMode(RGB, 100, 100, 100, 1);
    for (var i = 0; i < 300; i++) {
        let x = random(0, 300);
        let y = 50 - i * 100;
        asteroidsArray[i] = {
            x: x, y: y
        }
    }
    showbutton = false;
    button = createButton('Restart');
    button.id("button");
    button.mousePressed(setup);
    button.position(150, 1000);
    }


function draw() {
    colorMode(RGB, 100, 100, 100)
    background(0);
    stroke(200);
    strokeWeight(2);
    point(25, 36);
    point(258, 184);
    point(285, 428);
    point(312, 487);
    point(299, 56);
    point(122, 348);
    point(268, 357);
    point(157, 587);
    point(199, 599);
    point(182, 123);
    point(87, 445);
    point(49, 128);
    point(140, 756);
    point(106, 580);
    point(65, 117);
    point(97, 139);
    point(173, 14);
    point(152, 52);
    point(128, 173);
    point(365, 84);
    point(240, 56);
    point(110, 30);
    point(287, 79);
    point(275, 67);
    point(258, 29);
    point(132, 100);
    point(174, 110);
    point(195, 182);
    point(203, 67);
    point(91, 678);
    point(180, 565);
    point(260, 476);
    point(192, 793);
    point(80, 24);
    point(273, 75);
    point(15, 242);
    point(155, 429);
    point(222, 570);
    point(11, 516);
    point(260, 51);
    point(276, 43);
    point(53, 686);
    point(202, 332);
    point(174, 464);
    point(100, 579);
    point(42, 140);
    point(150, 421);
    point(55, 279);
    point(139, 739);
    point(96, 324);
    point(97, 507);
    point(151, 715);
    fill(0, 100, 0, 1);
    stroke(0, 50, 50, .5);
    strokeWeight(4);
    ellipse(60, 650, 45, 45);
    fill(0, 60, 40, 1);
    ellipse(200, 475, 50, 50);
    fill(0, 10, 90, 1);
    stroke(0, 0, 100, .1);
    ellipse(40, 400, 30, 30);
    strokeWeight(3);
    stroke(0, 100, 0, .75);
    curve(15, 420, 15, 430, 65, 375, 45, 370);
    fill(100, 0, 100, 1)
    stroke(40, 0, 60, .3);
    ellipse(230, 265, 65);
    fill(100, 0, 0, 1);
    stroke(20, 0, 0, .5);
    ellipse(150, 100, 80, 80);
    stroke(0, 0, 100, .2);
    strokeWeight(0);
    fill(50);
    rect(mouseX, mouseY, 10, 32);
    triangle(mouseX, mouseY, mouseX + 5, mouseY - 15, mouseX + 10, mouseY);
    triangle(mouseX, mouseY + 15, mouseX, mouseY + 30, mouseX - 5, mouseY + 30);
    triangle(mouseX + 10, mouseY + 15, mouseX + 10, mouseY + 30, mouseX + 15, mouseY + 30);
    fill(25);
    ellipse(mouseX + 5, mouseY + 5, 5, 5);
    fill(100);
    triangle(mouseX, mouseY + 32, mouseX + 10, mouseY + 32, mouseX + 5, mouseY + 45)
    console.log("mouse: " + mouseX + " " + mouseY);
    for (let i = 0; i < Object.keys(asteroidsArray).length; i++) {
        fill(30);
        ellipse(asteroidsArray[i].x, asteroidsArray[i].y, 15, 15);
        let d = dist(asteroidsArray[i].x, asteroidsArray[i].y, mouseX, mouseY);
        if (d < 15) {

            showbutton = true;
        }
        if (!showbutton){
            array = true;
            asteroidsArray[i].y += asteroidspeed;
        }
    }
    if (showbutton) {
        button.position(125, 750);
    }  
}
function mousePressed() {
    if (mouseY > 180){
        sound1.play()
    }else{
        sound2.play()
    }
    let p = dist(mouseX, mouseY, 150, 100);
    if (p > 80/2){
        fill(100, 100, 100, 1);
        textSize(40);
        text('WINNER!', 0, 0);
    }else{
    }
}

