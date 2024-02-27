let black;
let img;
let s = 225; //image size

function preload() {
    img = loadImage('main.png');
}

function setup() {
    pixelDensity(1);
    createCanvas(1080, 1080); //set for letter size paper
    // black = new Riso('TURQUOISE'); //new riso object
    // black = new Riso('FLUORESCENTPINK');
    // black = new Riso('PURPLE');
    // black = new Riso('BRIGHTGOLD');
    // black = new Riso('STEEL');
    // black = new Riso('IVY');
    // black = new Riso('WINE');
    black = new Riso('SCARLET');
}


function draw() {
    background(255);
    for (let x = 0; x < 4; x = x + 1) { //iterate through each image
        for (let y = 0; y < 4; y = y + 1) {
            let ditherType;
            if (x == 0) ditherType = 'atkinson';
            else if (x == 1) ditherType = 'floydsteinberg';
            else if (x == 2) ditherType = 'bayer';
            else if (x == 3) ditherType = 'none';
            let dithered = ditherImage(img, ditherType, 150 - (20*y)); //dither image
            black.image(dithered, 90 + (x * s), 90 + (y * s), 225, 225); //place it on black riso object
        }
    }

    drawRiso();
    noLoop();
}

function mouseClicked() {
    // exportRiso(); 
}