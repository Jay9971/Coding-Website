var x = 100;
var y1 = 166;
var b1 = 166;
var speed = 5;

draw = function() {
  background(255, 255, 255);

//doughnut
fill(102, 38, 38);
ellipse(x+100,x+100,170,170);
fill(255, 255, 255);
ellipse(x+100,x+100,80,80);

//frosting
noFill();
stroke(255, 0, 149);
strokeWeight(2);
bezier(x+40,x+39,x+96,x+75, x+148, x+17, x+164, x+47);
bezier(x+42,x+161,x+38,x+167, x+120, x+120, x+155, x+165);
bezier(x+128,x+130,x+281,x+67, x+55, x+113, x+177, x+65);
bezier(x+21,x+130,x+114,x+77, x+1, x+103, x+23, x+66);

//sprinkles
stroke(255, 255, 255);
line(x+75,x+31,x+77,x+40);
line(x+145,x+51,x+147,x+60);
stroke(109, 87, 255);
line(x+45,x+61,x+47,x+70);
line(x+45,x+147,x+49,x+140);
stroke(0, 255, 55);
line(x+165,x+101,x+167,x+110);
line(x+155,x+141,x+157,x+130);
stroke(255, 251, 0);
line(x+115,x+171,x+117,x+160);
line(x+125,x+31,x+117,x+40);

//two eyes and mouth
stroke(0, 26, 255);
strokeWeight(10);
point(x+80,x+100);
point(x+120,x+100);
strokeWeight(2);
stroke(255, 0, 0);
arc(x+100, x+110, 30, 35, 15, 170);

//hands
stroke(0, 0, 0);
line(x-22, y1, x+15, x+94);
line(x+217, b1, x+185, x+94);  
  
if (y1 < x) {
 speed = -5;   
}

if (y1 > x+200) {
    speed = 5;
}


y1 = y1-speed;
b1 = b1-speed;
  
  
};

draw();