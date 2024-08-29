let myCanvas;

const p5Container = document.querySelector('#p5-cont')
var clientHeight = p5Container.clientHeight;
var clientWidth = p5Container.clientWidth;

function setup() {

	// myCanvas = createCanvas(windowWidth, windowHeight);

	// createCanvas(clientWidth, clientHeight);
	var cnv = createCanvas(clientWidth, clientHeight);
	cnv.parent(p5Container);
    cnv.style('position', 'fixed');
    cnv.style('inset', 0);
    cnv.style('z-index', -1);

	background(color("#7e7e7e14"));
	strokeWeight(0.3);
}

function draw() {
	let l = random(7,12);
	lines(l);
}

function lines(l){
	for(let i = 0; i < width; i+=l){
	  for(let j = 0; j < height; j+=l){
		  left_or_right(i,j,l);
		}
  }
	noLoop();
}

function left_or_right(x,y,l){
  let ran = random(10);
	
	if(ran < 5){
		line(x,y,x+l,y+l);
	}
	else{
	  line(x+l,y,x,y+l);
	}
}