let h = 225;
let k = 400;
var circRadius;
var sliderRWidth;
var sliderRadius;

function preload() {
    sound = loadSound('assets/Sunday_Afternoon.mp3');
    // by True Lovers (https://www.truelovesband.com/)
    sliderRWidth = createSlider(1, 30, 2, 0.5);
    sliderRadius = createSlider(-150, 150, 100, 10);
}

function setup() {
    var cnv = createCanvas(450, 800);
    cnv.mouseClicked(togglePlay);
    fft = new p5.FFT(0.8, 512);
    sound.amp(0.8);
}

function draw() {
    background(0);
    var spectrum = fft.analyze();
    let rectWidth = width / spectrum.length;

    noStroke();
    fill(255, 255, 255);

    var newAngle;
    var rombhusWidth = sliderRWidth.value();
    var circRadius = sliderRadius.value();
    for (var i = 0; i < spectrum.length; i++) {
        var angle = map(i, 0, spectrum.length, 0, TWO_PI);

        var r1 = circRadius;
        var x1 = h + (r1 * cos(angle));
        var y1 = k + (r1 * sin(angle));

        var r2 = circRadius + 10;
        newAngle = angle - Math.atan((rombhusWidth / 2) / r2);
        var x2 = h + (r2 * cos(newAngle));
        var y2 = k + (r2 * sin(newAngle));

        var r3 = circRadius + 10 + map(spectrum[i], 0, 255, 0, 100);
        newAngle = angle - Math.atan((rombhusWidth / 2) / r3);
        var x3 = h + (r3 * cos(newAngle));
        var y3 = k + (r3 * sin(newAngle));

        var r4 = circRadius + 20 + map(spectrum[i], 0, 255, 0, 100);
        var x4 = h + (r4 * cos(angle));
        var y4 = k + (r4 * sin(angle));

        var r5 = circRadius + 10 + map(spectrum[i], 0, 255, 0, 100);
        newAngle = angle + Math.atan((rombhusWidth / 2) / r5);
        var x5 = h + (r5 * cos(newAngle));
        var y5 = k + (r5 * sin(newAngle));

        var r6 = circRadius + 10;
        newAngle = angle + Math.atan((rombhusWidth / 2) / r6);
        var x6 = h + (r6 * cos(newAngle));
        var y6 = k + (r6 * sin(newAngle));

        beginShape();
        vertex(x1, y1);
        vertex(x2, y2);
        vertex(x3, y3);
        vertex(x4, y4);
        vertex(x5, y5);
        vertex(x6, y6);
        endShape(CLOSE);
    }
}

function togglePlay() {
    if (sound.isPlaying())
        sound.pause();
    else
        sound.loop();
}
