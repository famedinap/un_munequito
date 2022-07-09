var tamano=200
let fondo;
let slider;
let muñequito;
let val=0
let e=0
let inp
let mnsg=''
let bolAux=true
function setup() {
  createCanvas(500, 500);
  colorMode(RGB,1)
  //frameRate(100)
  fondo = loadImage('fondo.jpg');
  muñequito = loadImage('muñequito.png');
  slider = createSlider(0, 100, val)
  slider.position(5, 230);
  slider.style('width', '300px');

  inp = createInput(str(val));
  inp.position(0, 0);
  inp.size(100);
  button = createButton("GO");
  button.position(100, 0);
  button.mousePressed(myInputEvent);

}
function myInputEvent() {
  if(parseFloat(inp.value())>=0 && parseFloat(inp.value())<=100){
    slider.value(parseFloat(inp.value())) 
    //console.log('you are typing: ', inp.value(),' val:', val,' float: ',parseFloat(inp.value()));
    val=parseFloat(inp.value())
    mnsg=''
  }
  else if(parseFloat(inp.value())<0 ){
    mnsg='No has iniciado la carrera? crack';
  }
  else if(parseFloat(inp.value())>100 ){
    mnsg='Supongo que va bien ese postgrado';
  }else{
    mnsg='Ingresa un valor entre 0 y 100';
  }
}

function draw() {  
  val = slider.value();   
  image(fondo, 0, 0);
  camino();
  mensaje();
  noStroke();
  fill(255,255,255);
  rect(308,232,30,15)
  fill(0,0,0);
  text(val,310,243);
  console.log('val: ', val,' e: ', e);
  if(e!=val){
    push();
    frameRate(10)
    caminar(e,val)
    pop();
  }
  e= val;
  if (bolAux){
  muñequitor(val);}

}
async function caminar(ant,des){
  bolAux=false
  if(des>ant){
  for (let i = ant; i < des+1; i++){
    console.log('ant: ', ant,' des: ', des,' i: ', i,' y ',1);
    muñequitor(i);
    await sleep(50)
  }}
  else{
    for (let j = des; j > ant-1; j--){
      console.log('ant: ', ant,' des: ', des,' j: ', j,' y ',2);
      muñequitor(j);
      await sleep(100)
    }}
  bolAux=true
}
function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}
function mensaje(){
  push();
  textSize(12);
  //console.log('you are typing: ', mnsg,' w: ', textWidth(mnsg));
  if(mnsg!=''){
    fill(255,255,255);
    rect(3,25,textWidth(mnsg)+10,15,7,10,10,10)
  }
  fill(0,0,0);
  text(mnsg,8,36);
  pop();
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
}
function calcularY(x){
  if(x<=82){
    hip=Math.sqrt(Math.pow(82,2)+49)    
    a=Math.asin(7/hip)
    y=(x*Math.sin(a))/Math.sin((Math.PI/2)-a) 
    return 200-y
  }
  if(x>82 && x<=126){
    hip=Math.sqrt(Math.pow(44,2)+Math.pow(19,2))    
    a=Math.asin(19/hip)
    y=((x-82)*Math.sin(a))/Math.sin((Math.PI/2)-a)
    return 188-y
  }
  if(x>126 && x<=179){
    hip=Math.sqrt(Math.pow(62,2)+Math.pow(55,2))    
    a=Math.asin(55/hip)
    y=((x-126)*Math.sin(a))/Math.sin((Math.PI/2)-a)
    return 165-y
  }
  if(x>179 && x<=283){
    hip=Math.sqrt(Math.pow(105,2)+Math.pow(19,2))    
    a=Math.asin(19/hip)
    y=((x-188)*Math.sin(a))/Math.sin((Math.PI/2)-a)
    return 117-y
  }
  if(x>283 && x<=312){
    hip=Math.sqrt(Math.pow(33,2)+Math.pow(43,2))    
    a=Math.asin(43/hip)
    y=((x-293)*Math.sin(a))/Math.sin((Math.PI/2)-a)
    return 84-y
  }
  return 54;
}

