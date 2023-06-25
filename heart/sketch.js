var img;
var zoff;
var hearts = [];
var extraCanvas;

function preload() {
  img = loadImage('heart.png');
  font = loadFont('硬笔楷书简.TTF');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  pixelDensity(1);
  extraCanvas = createCanvas(windowWidth, windowHeight);
  extraCanvas.clear();
}

function draw() {

  var yoff = 0;
  loadPixels();
  for (var y = 0; y < height; y++) {
    var xoff = 0;
    for (x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff) * 255;
      var g = noise(xoff, yoff) * 150;
      var b = noise(xoff, yoff) * 190;
      pixels[index + 0] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = 200;
      xoff += 0.01;
    }
    yoff += 0.1;



  }


  updatePixels();
  noLoop();

  // extraCanvas.noStroke();
  // extraCanvas.fill(244, 166, 196);
  // extraCanvas.textFont(font);
  // extraCanvas.textAlign(CENTER, CENTER);
  // extraCanvas.textSize(100);
  var p = createP("Love u and need u forever, my banban", 10, 520);
  p.style('font-family', font);

  p.style('color', '#ff97bf')
  p.style('font-size', '32px')
  p.position(width / 2, 520);

  // image(extraCanvas, 0, 0);

  //   for(let i = 0; i < hearts.length; i++) {
  //   hearts[i].move();
  //   hearts[i].show();
  // }


}

function mousePressed() {
  var r = random(100, 200);
  image(img, mouseX, mouseY, r, r)

}

// class Heart {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//   }
//   move() {
//     this.y += 1;
//     this.x = this.x + random(-1, 1);
//   }
//   show() {
//     image(img, this.x, this.y, this.r, this.r);
//   }
// }