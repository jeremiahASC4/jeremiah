function setup(){
    createCanvas(1000,1000);
    background(200);
    

}

function mouseDragged(){
   fill(random(255),random(255),random(255));
   var ellwidth = random(50);
   var ellheight = random(50);
    
    ellipse(mouseX,mouseY,ellwidth,ellheight);
    rect(mouseX,mouseY,ellwidth,ellheight);
    arc(mouseX,mouseY,ellwidth,ellheight);

}

function keyPressed(){
    if (key=="S"){
        saveCanvas("jeremiah","jpg");
    }
}