function setup(){
    createCanvas(1200,1200);
    background(0);
    

}

var x = 525
var y = 1000



function draw(){
     background(0);
     fill(255,0,0);
for (var j =0; j<3;  j++){
         for (var i = 0; i<8; i++){
        rect(45+150*i,100+100*j,60,70);
    }
 }
     
   
   if (keyIsDown(LEFT_ARROW))
   x-=5;

   if(keyIsDown(RIGHT_ARROW))
   x+=5;

   

 fill(0,190,80);
 rect(x,y,100,50);

}



   
