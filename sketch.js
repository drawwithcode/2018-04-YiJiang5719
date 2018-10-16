var myBall;
var balls = [];

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  //angleMode(DEGREES);
  //myBall.speed = random(10,20);
  var ballNumber = 8;
  for (var i = 0 ; i < ballNumber; i ++){
    var myBall = new Ball (random(0,340),random(0,120),10);
    myBall.speed = random(8);
    myBall.diameter = random(10,20);
    myBall.color = color(random(255),random(255),random(255));

    balls.push(myBall); //把创建的ball放置到原本是空的balls的array里


  }
}

function draw() {
  // put drawing code here
  background(255,80);
  push();
  translate(width/2,height/2);
  rotate(sin(frameCount/100));
  strokeWeight(3);
  rectMode(CENTER);
  rect(255,30);
  rect(0,0,680,240);
  for (var j = 0 ; j < balls.length; j ++){
    balls[j].move();
    balls[j].display();
    //balls[j].diameter += random(-10,10);
    balls[j].color = color(0);
  }
  pop();
  text('Click or Press ,something magic could happen', windowWidth/2-150, height/2+400);
}

function Ball (_x,_y,_diameter) {

  this.x = _x ;
  this.y = _y ;
  this.diameter = _diameter ;
  this.color = 'blue';
  this.speed = 2;

  var xDirection =1 ; //x direction
  var yDirection =1 ; //y direction
    //objetct

    this.display = function(){
      stroke(this.color);
      strokeWeight(3);
      noFill();
      ellipse(this.x , this.y , this.diameter);
    }
      this.move = function(){
      this.x += this.speed * xDirection;
      this.y += this.speed * yDirection;
      if (mouseIsPressed||this.y > 100 || this.y < -100 ){
        yDirection = yDirection * -1;
      }

      if (mouseIsPressed||this.x > 320|| this.x < -320 ){
        xDirection = xDirection * -1;
      }

      line(this.x,this.y)

    }

}
