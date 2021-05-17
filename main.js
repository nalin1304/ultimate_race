canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d") ;
 car1_width = 85 ;
 car1_height = 185 ;
 car1_x =10 ;
 car1_y = 400 ;
 backgroundimage = "car_track.jpg" ;
 carimage1 = "LAMBORGHINI.png" ;
 car2_width = 85 ;
 car2_height = 170 ;
 car2_x = 100 ;
 car2_y = 400 ;
 carimage2 = "TESLA.png" ;
 function add() {
     backgroundimage_img = new Image() ;
     backgroundimage_img.onload=uploadbackground ; 
     backgroundimage_img.src=backgroundimage ;
     carimage1_img = new Image() ;
     carimage1_img.onload=uploadcar1; 
     carimage1_img.src=carimage1  ;
     carimage2_img = new Image() ;
     carimage2_img.onload=uploadcar2; 
     carimage2_img.src=carimage2 ;

 }
 
function uploadbackground(){
    ctx.drawImage(backgroundimage_img,0,0,canvas.width,canvas.height) ;
}
function uploadcar1(){
    ctx.drawImage(carimage1_img,car1_x,car1_y,car1_width,car1_height) ;
}
function uploadcar2(){
    ctx.drawImage(carimage2_img,car2_x,car2_y,car2_width,car2_height) ;
}
window.addEventListener("keydown",my_keydown) ;
function my_keydown(e){
key_pressed = e.keyCode ;
console.log(key_pressed) ;

if(key_pressed=='65'){
    left2() ;
    console.log("left") ;
} 
if(key_pressed=='87'){
    up2() ;
    console.log("up") ;
} 
if(key_pressed=='68'){
    right2() ;
    console.log("right") ;
} 
if(key_pressed=='83'){
    down2() ;
    console.log("down") ;
} 
if(key_pressed=='37'){
    left() ;
    console.log("left") ;
} 
if(key_pressed=='38'){
    up() ;
    console.log("up") ;
} 
if(key_pressed=='39'){
    right() ;
    console.log("right") ;
} 
if(key_pressed=='40'){
    down() ;
    console.log("down") ;
} 
if(car1_y<=100){
    document.getElementById("game_status").innerHTML="Car 1 has won the game";
}
else if(car2_y<=100){
    document.getElementById("game_status").innerHTML="Car 2 has won the game";
}
}
function left(){
    if(car1_x>=0){
        car1_x=car1_x -10 ;
        console.log("when left is pressed,x="+car1_x+"y="+car1_y);
        uploadbackground() ;
        uploadcar2();
        uploadcar1();
    }
}
function up(){
    if(car1_y>=0){
        car1_y=car1_y-10 ;
        console.log("when up is pressed,x="+car1_x+"y="+car1_y);
        uploadbackground() ;
        uploadcar2();
        uploadcar1();
    }
}
function right(){
    if(car1_x<=700){
        car1_x=car1_x+10 ;
        console.log("when right is pressed,x="+car1_x+"y="+car1_y);
        uploadbackground() ;
        uploadcar2();
        uploadcar1();
    }
}
function down(){
    if(car1_x<=550){
        car1_y=car1_y+10 ;
        console.log("when down is pressed,x="+car1_x+"y="+car1_y);
        uploadbackground() ;
        uploadcar2();
        uploadcar1();
    }
}
function left2(){
    if(car2_x>=0){
        car2_x=car2_x -10 ;
        console.log("when left is pressed,x="+car2_x+"y="+car2_y);
        uploadbackground() ;
        uploadcar1();
        uploadcar2();
    }
}
function up2(){
    if(car2_y>=0){
        car2_y=car2_y-10 ;
        console.log("when up is pressed,x="+car2_x+"y="+car2_y);
        uploadbackground() ;
        uploadcar1();
        uploadcar2();
    }
}
function right2(){
    if(car2_x<=700){
        car2_x=car2_x+10 ;
        console.log("when right is pressed,x="+car2_x+"y="+car2_y);
        uploadbackground() ;
        uploadcar1();
        uploadcar2();
    }
}
function down2(){
    if(car2_x<=550){
        car2_y=car2_y+10 ;
        console.log("when down is pressed,x="+car2_x+"y="+car2_y);
        uploadbackground() ;
        uploadcar1();
        uploadcar2();
    }
}


