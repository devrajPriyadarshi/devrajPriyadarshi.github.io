let myCanvas;

const p5Container = document.querySelector('#p5-cont')
var clientHeight = p5Container.clientHeight;
var clientWidth = p5Container.clientWidth;

var num_ring = 20;


function setup() {
    // createCanvas(windowWidth, windowHeight);
    var cnv = createCanvas(clientWidth, clientHeight);
  cnv.parent(p5Container);
  cnv.style('position', 'fixed');
  cnv.style('inset', 0);
  cnv.style('z-index', -1);

    background("#000");
    noLoop();
    noFill();
  }
  
  function pref(n){
    let a = 0.3
    return 0.75*(1/exp(a*5))*exp(a*n);
  }
  
  function land(R, n, c, X, Y) {
    sw = random(0.5,4)
    stAlpha = random(200, 255)
    for(let j = c.length-1; j >= 0; j--){
      beginShape();
      
      stCol = color(c[j])
      stCol.setAlpha(stAlpha)
      stroke(stCol);
      strokeWeight(sw*(c.length-j)/c.length)
      // -1th point
      ang = ((n-1)/n)*2*PI;
      r = noise((n-1)*(n-1) , n*n - (n-1)*(n-1));  
      curveVertex(X + (R - 100*r*pref(j) )*cos(ang), Y + (R - 100*r*pref(j) )*sin(ang));
      for(let i = 0; i < n; i++){
        ang = (i/n)*2*PI;
        r = noise(i*i , n*n - i*i);
        curveVertex(X + (R - 100*r*pref(j) )*cos(ang), Y + (R - 100*r*pref(j) )*sin(ang));
      }
      
      //n+1 th point
      ang = (0/n)*2*PI;
      r = noise((0)*(0) , n*n - (0)*(0));  
      curveVertex(X + (R - 100*r*pref(j) )*cos(ang), Y + (R - 100*r*pref(j) )*sin(ang));
      
      //n+2 th point
      ang = (1/n)*2*PI;
      r = noise((1)*(1) , n*n - (1)*(1));  
      curveVertex(X + (R - 100*r*pref(j) )*cos(ang), Y + (R - 100*r*pref(j) )*sin(ang));
      endShape();
    }
  }
  
  function draw(){
    c1 = ["#001219", "#005f73", "#0a9396", "#94d2bd"] 
    c2 = ["#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226"]
    c3 = ["#000000", "#1D4B73", "#296CA6", "#4BA4F2", "#91C5F2", "#F2F2F2"]
    c4 = ["#d9ed92", "#b5e48c", "#99d98c", "#76c893", "#52b69a", "#34a0a4", "#168aad", "#1a759f", "#1e6091", "#184e77"]
    c5 = ["#edafb8","#f7e1d7","#dedbd2","#b0c4b1","#4a5759"]
    c6 = ["#f7b267","#f79d65","#f4845f","#f27059","#f25c54"]
    c7 = ["#c9e4ca", "#87bba2", "#55828b", "#3b6064", "#364958"]
    
    col = [c1,c2,c3,c4,c5,c6,c7]
    for(let k = 0; k <num_ring; k++){
        X = random(-10, width+10)
        Y = random(-10, height+10)
        land(random(10, 200*min(0.5,clientWidth/1920)), random(20, 100*min(0.5,clientWidth/1920)), random(col), X, Y);
        land(random(10, 200*min(0.5,clientWidth/1920)), random(20, 100*min(0.5,clientWidth/1920)), random(col), X, Y);
        land(random(10, 200*min(0.5,clientWidth/1920)), random(20, 100*min(0.5,clientWidth/1920)), random(col), X, Y);
    // land(random(50, 300), random(100, 1000), random(col), X, Y);
    // land(random(50, 300), random(100, 1000), random(col), X, Y);
    // land(random(50, 300), random(100, 1000), random(col), X, Y);
    // land(random(50, 300), random(100, 1000), random(col), X, Y);
    // land(random(50, 300), random(100, 1000), random(col), X, Y);
    }
  }