let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let radio = 50;
canvas.width = innerWidth;
canvas.height = innerHeight;


//pintar bola

let circulo = (x,y,radio)=>{
context.beginPath();
const PI= Math.PI;
//context.fillStyle ='black';

context.arc(x,y,radio,0,2*PI);/* */
context.fill();

context.stroke();

}

let coordenadaX = 100;
let coordenadaY = 200;
let acelerador = 10;
//circulo(coordenadaX,coordenadaY);

//creamos una funcion que se invoca a si misma 

 function animar() {


     context.clearRect(0,0,innerWidth,innerHeight);//borra la bola anterio
     
    //initCanvas
    canvas.style.backgroundColor='darkgreen';
    circulo(coordenadaX,coordenadaY,radio);//pinta

   if(coordenadaX>innerWidth-30 || coordenadaX<30) {acelerador=-acelerador;}

    coordenadaX += acelerador;
    //let final = false;

    //if(final)
   /* if (coordenadaX<=innerWidth-30) coordenadaX +=acelerador;
    if (coordenadaX>=innerHeight-30)  coordenadaX -=acelerador;*/
        
    
    requestAnimationFrame(animar);
 
    //coordenadaX++;//mueve
 }

 //llamar funcion
 animar();

