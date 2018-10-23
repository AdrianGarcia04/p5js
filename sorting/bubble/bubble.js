const NUM_COLORS = 40;

function Color() {
    let color = random(255);
    this.red = color;
    this.green = color;
    this.blue = color;
    this.average = (this.red + this.green + this.blue) / 3;

    this.compareTo = function(color) {
        return this.average - color.average;
    };
}

var colors = [];
var i = 0;
var j = i + 1;
var ordered = false;

function setup() {
  createCanvas(600, 600);
  let from = 0;
  let diff = 255 / NUM_COLORS;
  for (var i = 0; i < NUM_COLORS; i++) {
      colors[i] = new Color();
  }
  shuffle(colors, true);
  let start = -HALF_PI;
  let segment = TWO_PI / NUM_COLORS;

  for (var i = 0; i < colors.length; i++) {
    stroke(colors[i].red, colors[i].green, colors[i].blue);
    arc(width/2, width/2, 400, 400, start, start + segment);
    start += segment;
  }
}


function draw() {
  if (!ordered) {
        if (colors[j].compareTo(colors[i]) >= 1) {
            let tmpColor = colors[j];
            colors[j] = colors[i];
            colors[i] = tmpColor;
            let start = -HALF_PI;
            let segment = TWO_PI / NUM_COLORS;

            for (var k = 0; k < colors.length; k++) {
                strokeWeight(16);
                stroke(colors[k].red, colors[k].green, colors[k].blue);
                arc(width/2, width/2, 400, 400, start, start + segment);
                start += segment;
            }
        }
  }
  if (++j >= colors.length) {
      i++;
      if (i >= colors.length) {
          ordered = true;
          text("Finish!", 300, 300);
      }
      j = i + 1;
  }

}

function drawColors(colors) {
    let start = -HALF_PI;
    let segment = TWO_PI / NUM_COLORS;

    for (var i = 0; i < colors.length; i++) {
      stroke(colors[i].red, colors[i].green, colors[i].blue);
      arc(width/2, width/2, 400, 400, start, start + segment);
      start += segment;
    }
}
