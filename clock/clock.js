function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
	let hrs = hour();
	let mins = minute();
	let secs = second();

	noFill();
	stroke(14, 124, 12);
	strokeWeight(8);
	let end1 = map(secs, 0, 60, -HALF_PI, HALF_PI + PI);
	arc(width/2, width/2, 300, 300, -HALF_PI, end1);

	stroke(140, 10, 12);
	let end2 = map(mins, 0, 60, -HALF_PI, HALF_PI + PI);
	arc(width/2, width/2, 280, 280, -HALF_PI, end2);

	stroke(30, 80, 120);
	let end3 = map(hrs % 12, 0, 12, -HALF_PI, HALF_PI + PI);
	arc(width/2, width/2, 260, 260, -HALF_PI, end3);

	strokeWeight(1);
	stroke(255);
	text(hrs + ":" + mins + ":" + secs, width/2 - 25, width/2);
}
