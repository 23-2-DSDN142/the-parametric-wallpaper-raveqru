//your parameter variables go here!
let size = 1
let angle = 0
let outline = false
let cell_width = 250
let cell_height = 250
let row_offset = 100

let whiteColour = [255, 255, 255]
let brownColour = [140, 78, 71]
let greenColour = [145, 137, 1]
let blackColour = [0, 0, 0]

function setup_wallpaper(pWallpaper) {
    pWallpaper.output_mode(GRID_WALLPAPER)
    pWallpaper.resolution(NINE_LANDSCAPE)
    pWallpaper.show_guide(false) //set this to false when you're ready to print

    //Grid settings
    pWallpaper.grid_settings.cell_width = cell_width
    pWallpaper.grid_settings.cell_height = cell_height
    pWallpaper.grid_settings.row_offset = row_offset
}

function wallpaper_background() {
    background(205, 158, 152);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function  
    kiwiFruit(30, 60, size * 0.8, angle + 60, false, outline)
    kiwiFruit(70, 180, size * 0.4, angle + 140, false, outline)
    prints(30, 180, size * 0.4, angle + 250, false, outline)
    kiwiBird(120, 130, size * 0.8, angle, false, outline)
    prints(180, 30, size * 0.4, angle + 220, false, outline)
    prints(170, 60, size * 0.4, angle + 250, false, outline)
    prints(140, 100, size * 0.2, angle + 250, false, outline)
    prints(90, 140, size * 0.2, angle + 250, false, outline)
    prints(90, 10, size * 0.4, angle + 300, false, outline)
    prints(60, 10, size * 0.2, angle + 270, false, outline)
    prints(30, 10, size * 0.2, angle + 250, false, outline)


}

function kiwiFruit(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (52 * size), y + (47 * size))
    rotate(angle)
    translate(-x - (52 * size), -y - (47 * size))

    //kiwi fruit half cut
    kiwi(x + 1 * size, y + 1 * size, 1.2 * size, 0, brownColour, outline)
    kiwi(x + 5 * size, y + 4 * size, 1.2 * size * 0.9, 0, greenColour, outline)
    whiteSeed(x + 30 * size, y + 19 * size, 1.1 * size * 0.3, 320, whiteColour, outline)
    whiteSeed(x + 40 * size, y + 15 * size, 1.1 * size * 0.3, 340, whiteColour, outline)
    whiteSeed(x + 50 * size, y + 14 * size, 1.1 * size * 0.3, 360, whiteColour, outline)
    whiteSeed(x + 60 * size, y + 14 * size, 1.1 * size * 0.3, 15, whiteColour, outline)
    whiteSeed(x + 70 * size, y + 20 * size, 1.1 * size * 0.3, 45, whiteColour, outline)
    whiteSeed(x + 75 * size, y + 30 * size, 1.1 * size * 0.3, 70, whiteColour, outline)
    whiteSeed(x + 70 * size, y + 40 * size, 1.1 * size * 0.3, 100, whiteColour, outline)
    whiteSeed(x + 65 * size, y + 50 * size, 1.1 * size * 0.3, 120, whiteColour, outline)
    whiteSeed(x + 57 * size, y + 55 * size, 1.1 * size * 0.3, 140, whiteColour, outline)
    whiteSeed(x + 50 * size, y + 60 * size, 1.1 * size * 0.3, 155, whiteColour, outline)
    whiteSeed(x + 40 * size, y + 62 * size, 1.1 * size * 0.3, 185, whiteColour, outline)
    whiteSeed(x + 32 * size, y + 62 * size, 1.1 * size * 0.3, 205, whiteColour, outline)
    whiteSeed(x + 23 * size, y + 56 * size, 1.1 * size * 0.3, 230, whiteColour, outline)
    whiteSeed(x + 19 * size, y + 48 * size, 1.1 * size * 0.3, 250, whiteColour, outline)
    whiteSeed(x + 18 * size, y + 37 * size, 1.1 * size * 0.3, 270, whiteColour, outline)
    whiteSeed(x + 25 * size, y + 27 * size, 1.1 * size * 0.3, 290, whiteColour, outline)
    whiteSeed(x + 35 * size, y + 25 * size, 1.1 * size * 0.2, 320, blackColour, outline)
    whiteSeed(x + 40 * size, y + 20 * size, 1.1 * size * 0.2, 340, blackColour, outline)
    whiteSeed(x + 50 * size, y + 14 * size, 1.1 * size * 0.2, 360, blackColour, outline)
    whiteSeed(x + 60 * size, y + 14 * size, 1.1 * size * 0.2, 15, blackColour, outline)
    whiteSeed(x + 70 * size, y + 20 * size, 1.1 * size * 0.2, 45, blackColour, outline)
    whiteSeed(x + 75 * size, y + 30 * size, 1.1 * size * 0.2, 70, blackColour, outline)
    whiteSeed(x + 70 * size, y + 40 * size, 1.1 * size * 0.2, 100, blackColour, outline)
    whiteSeed(x + 65 * size, y + 50 * size, 1.1 * size * 0.2, 120, blackColour, outline)
    whiteSeed(x + 57 * size, y + 55 * size, 1.1 * size * 0.2, 140, blackColour, outline)
    whiteSeed(x + 50 * size, y + 60 * size, 1.1 * size * 0.2, 155, blackColour, outline)
    whiteSeed(x + 40 * size, y + 62 * size, 1.1 * size * 0.2, 185, blackColour, outline)
    whiteSeed(x + 32 * size, y + 62 * size, 1.1 * size * 0.2, 205, blackColour, outline)
    whiteSeed(x + 23 * size, y + 56 * size, 1.1 * size * 0.2, 230, blackColour, outline)
    whiteSeed(x + 19 * size, y + 48 * size, 1.1 * size * 0.2, 250, blackColour, outline)
    whiteSeed(x + 18 * size, y + 37 * size, 1.1 * size * 0.2, 270, blackColour, outline)
    whiteSeed(x + 25 * size, y + 27 * size, 1.1 * size * 0.2, 290, blackColour, outline)
    pop()
}

function prints(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (34 * size), y + (33 * size))
    rotate(angle)
    translate(-x - (34 * size), -y - (33 * size))

    //kiwi bird foot prints
    whiteSeed(x + 10 * size, y + 6 * size, 1 * size, 150, blackColour, outline)
    whiteSeed(x + 30 * size, y + 1 * size, 1 * size, 0, blackColour, outline)
    whiteSeed(x + 46 * size, y + 6 * size, 1 * size, 30, blackColour, outline)
    pop()
}

function kiwiBird(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (66 * size), y + (51 * size))
    rotate(angle)
    translate(-x - (66 * size), -y - (51 * size))

    //bird
    whiteSeed(x + 40 * size, y + 70 * size, 0.4 * size, 0, blackColour, outline)
    whiteSeed(x + 35 * size, y + 75 * size, 0.4 * size, 0, blackColour, outline)
    kiwi(x + 1 * size, y + 1 * size, 1 * size, 0, brownColour, outline)
    kiwi(x + 70 * size, y + 1 * size, 0.6 * size * 0.9, 20, brownColour, outline)
    whiteSeed(x + 35 * size, y + 15 * size, 0.6 * size, 70, blackColour, outline)
    whiteSeed(x + 120 * size, y + 20 * size, 0.3 * size, 120, blackColour, outline)
    pop()
}

function kiwi(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (43 * size), y + (39 * size))
    rotate(angle)
    translate(-x - (43 * size), -y - (39 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    beginShape();
    vertex((48 * size) + x, (1 * size) + y);
    bezierVertex((51 * size) + x, (1 * size) + y, (69 * size) + x, (1 * size) + y, (78 * size) + x, (14 * size) + y);
    bezierVertex((87 * size) + x, (25 * size) + y, (84 * size) + x, (38 * size) + y, (84 * size) + x, (41 * size) + y);
    bezierVertex((81 * size) + x, (59 * size) + y, (65 * size) + x, (68 * size) + y, (60 * size) + x, (71 * size) + y);
    bezierVertex((44 * size) + x, (79 * size) + y, (16 * size) + x, (81 * size) + y, (5 * size) + x, (64 * size) + y);
    bezierVertex((-5 * size) + x, (49 * size) + y, (7 * size) + x, (27 * size) + y, (8 * size) + x, (25 * size) + y);
    bezierVertex((16 * size) + x, (11 * size) + y, (31 * size) + x, (1 * size) + y, (48 * size) + x, (1 * size) + y);
    endShape();
    pop()
}


function whiteSeed(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (7 * size), y + (33 * size))
    rotate(angle)
    translate(-x - (7 * size), -y - (33 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    beginShape();
    vertex((4 * size) + x, (1 * size) + y);
    bezierVertex((7 * size) + x, (1 * size) + y, (12 * size) + x, (18 * size) + y, (12 * size) + x, (35 * size) + y);
    bezierVertex((12 * size) + x, (49 * size) + y, (8 * size) + x, (64 * size) + y, (5 * size) + x, (64 * size) + y);
    bezierVertex((2 * size) + x, (64 * size) + y, (1 * size) + x, (41 * size) + y, (1 * size) + x, (29 * size) + y);
    bezierVertex((1 * size) + x, (22 * size) + y, (1 * size) + x, (1 * size) + y, (4 * size) + x, (1 * size) + y);
    endShape();
    pop()
}




