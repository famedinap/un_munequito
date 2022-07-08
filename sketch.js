var tamano=200
let fondo;
let slider;
let muñequito;
function setup() {
  createCanvas(500, 500);
  colorMode(RGB,1)
  frameRate(100)
  fondo = loadImage('fondo.jpg');
  muñequito = loadImage('muñequito.png');
  slider = createSlider(0, 100, 50)
  slider.position(5, 230);
  slider.style('width', '300px');
}

function draw() {  
  let val = slider.value();
  image(fondo, 0, 0);
  muñequitor(val)
  camino();
  
}

function camino(){
  push();
  strokeWeight(4);
  stroke(0,0,0);
  line(0, 220, 82, 213);
  line(82, 213, 126, 194);
  line(126, 194, 188, 139);
  line(188, 139, 293, 120);
  line(293, 120, 326, 77);
  line(326, 77, 340, 73);
  pop();
}
function muñequitor(pos){
  x=(pos*326)/100
  y=calcularY(x);
  image(muñequito, x, y,20,20);
  console.log("x: " + x+" y: " + y);

}
function calcularY(x){
  if(x<=82){
    hip=Math.sqrt(Math.pow(82,2)+49)    
    a=Math.asin(7/hip)
    y=(x*Math.sin(a))/Math.sin((Math.PI/2)-a)
    //console.log(hip)
    //console.log(a)
    //console.log(y)    
    console.log("hip: " + hip+" a: " + a+" y: " + y, 50, 20);
    return 200-y
  }
  if(x>82 && x<=126){
    hip=Math.sqrt(Math.pow(44,2)+Math.pow(19,2))    
    a=Math.asin(19/hip)
    y=(x*Math.sin(a))/Math.sin((Math.PI/2)-a)
    console.log("hip: " + hip+" a: " + a+" y: " + y, 50, 20);
    return 193-y
  }
  if(x>126 && x<=188){
    hip=Math.sqrt(Math.pow(62,2)+Math.pow(55,2))    
    a=Math.asin(55/hip)
    y=(x*Math.sin(a))/Math.sin((Math.PI/2)-a)
    console.log("hip: " + hip+" a: " + a+" y: " + y, 50, 20);
    return 200-y
  }
  if(x>188 && x<=293){
    hip=Math.sqrt(Math.pow(105,2)+Math.pow(19,2))    
    a=Math.asin(19/hip)
    y=(x*Math.sin(a))/Math.sin((Math.PI/2)-a)
    console.log("hip: " + hip+" a: " + a+" y: " + y, 50, 20);
    return 119-y
  }
  if(x>293 && x<=326){
    hip=Math.sqrt(Math.pow(33,2)+Math.pow(43,2))    
    a=Math.asin(43/hip)
    y=(x*Math.sin(a))/Math.sin((Math.PI/2)-a)
    console.log("hip: " + hip+" a: " + a+" y: " + y, 50, 20);
    return 100-y
  }
  
}