let colors = [ "#AD3945", "#FAF79C",  "#52C2FA", "#FC678B", "#9767FC", "#FCA067", "#C4FD79"];
let myCanvas;

const p5Container = document.querySelector('#p5-cont')
var clientHeight = p5Container.clientHeight;
var clientWidth = p5Container.clientWidth;

function setup() {
  
  let bg_ = 800;
  //1080x2340
	

  var cnv = createCanvas(clientWidth, clientHeight);
  cnv.parent(p5Container);
  cnv.style('position', 'fixed');
  cnv.style('inset', 0);
  cnv.style('z-index', -1);

//   createCanvas(windowWidth, windowHeight);
  background(bg_);
  
  //noFill();
  fill(bg_);
  strokeWeight(2);
  noLoop();
}

function draw() {
  
  for(let i = 0; i<=200; i++){
    x = random(0, width);
    y = random(0, height);
    
    groves(x, y, noise(x,y), getColor(y), 100*noise(x,y))
  }
  
}

function groves(x, y, n, c, r){
  stroke(c);
  ellipse(x, y, 2*r,2*r);
}

function getColor(y){
  if(y >= 0 && y < height/2)
    return (lerpColor(color(colors[4]), color(colors[5]), 2*y/height));
  else
    return (lerpColor(color(colors[5]), color(colors[2]), 2*(y - height/2)/height));
}