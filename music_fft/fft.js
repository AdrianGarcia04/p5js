function preload() {
    sound = loadSound('assets/Sunday_Afternoon.mp3');
    // by True Lovers (https://www.truelovesband.com/)
}

function setup() {
    var cnv = createCanvas(800, 800);
    cnv.mouseClicked(togglePlay);
    fft = new p5.FFT(0.8, 64);
    sound.amp(0.2);
}

function draw() {
    background(0);
    var spectrum = fft.analyze();
    let rectWidth = width / spectrum.length;

    noStroke();
    fill(255, 255, 255);
    for (var i = 0; i < spectrum.length; i++){
        var x = map(i, 0, spectrum.length, 0, width);
        var y = map(spectrum[i], 0, 255, height, 0);
        beginShape();
            vertex(x, height - 5);
            vertex(x, y + 5);
            vertex(x + (rectWidth / 2), y);
            vertex(x + rectWidth, y + 5);
            vertex(x + rectWidth, height - 5);
            vertex(x + (rectWidth / 2), height);
        endShape(CLOSE);
    }
}

function togglePlay() {
    if (sound.isPlaying())
        sound.pause();
    else
        sound.loop();
}
