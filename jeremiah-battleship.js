function setup(){
    createCanvas(500,500);
    background(200);

}
function mouseClicked(){
    strokeWeight(5);
    fill(255,0,0);

}


function draw(){
    createCanvas(500,500);
    background(200);
    strokeWeight(5);
    fill(200,100,200);

    for (var i=0; i<4; i++){
    rect(125*i, 0, 125, 125);
    rect(125*i ,125, 125, 125);
    rect(125*i, 250, 125, 125);
    rect(125*i, 375, 125, 125);
    
}

}

var myBoard =[row1,row2,row3,row4]

var row1 = [false, false, false,false];
var row2 = [true, true, false, false];
var row3 = [false, false, true, true];
var row4 = [false, false, false, true];
