//your parameter variables go here!
let size = 0.5
let angle = 0
let outline = true
let cell_width = 250
let cell_height = 250
let row_offset = 50

let brownColour = [89, 82, 70]
let blackColour = [0, 0, 0]
let yellowColour = [236, 200, 43]
let greenColour = [139, 140, 90]
let vanillaColour = [252, 242, 197]

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
    background(207, 197, 253) //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function  
    bananaHearts(0, 0, size * 2, angle, yellowColour, outline)
    bananaHearts(150, 50, size * 2, angle + 180, yellowColour, outline)
    bananaHearts(50, 100, size * 2, angle + 60, yellowColour, outline)
    bananaHearts(160, 150, size * 2, angle + 300, yellowColour, outline)
}

function bananaHearts(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (15 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (15 * size), -y - (42 * size))

    //banana drawing with hearts (seeds)
    if (outline) {
        innerShape(x + 1 * size, y + 10 * size, size * 0.9, 350, colour, !outline)
        banana1(x + 1 * size, y + 6 * size, size * 1, 0, colour, outline)
        banana2(x + 17 * size, y + 10 * size, size * 0.8, 0, colour, outline)
    } else {
        banana1(x + 1 * size, y + 6 * size, size * 1, 0, colour, !outline)
        banana2(x + 17 * size, y + 10 * size, size * 0.8, 0, colour, !outline)
    }

    dotEnd(x + 20 * size, y + 2 * size, size * 0.4, 205, blackColour, !outline)
    dotStart(x + 48 * size, y + 83 * size, size * 0.34, 270, blackColour, !outline)
    
    smallSeed(x + 50 * size, y + 20 * size, size * 0.2, 180, colour, !outline)
    if (outline) {
        smallSeed(x + 55 * size, y + 20 * size, size * 0.2, 180, colour, outline)
    }

    smallSeed(x + 10 * size, y + 100 * size, size * 0.2, 180, colour, !outline)
    if (outline) {
        smallSeed(x + 13 * size, y + 100 * size, size * 0.2, 180, colour, outline)
    }
    pop()
}

function innerShape(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (15 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (15 * size), -y - (42 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }
    //Inner yellow oval
    beginShape();
    vertex((14 * size) + x, (1 * size) + y);
    bezierVertex((15 * size) + x, (1 * size) + y, (19 * size) + x, (1 * size) + y, (23 * size) + x, (4 * size) + y);
    bezierVertex((25 * size) + x, (5 * size) + y, (27 * size) + x, (7 * size) + y, (27 * size) + x, (8 * size) + y);
    bezierVertex((32 * size) + x, (17 * size) + y, (19 * size) + x, (26 * size) + y, (20 * size) + x, (41 * size) + y);
    bezierVertex((21 * size) + x, (50 * size) + y, (23 * size) + x, (53 * size) + y, (26 * size) + x, (58 * size) + y);
    bezierVertex((29 * size) + x, (64 * size) + y, (32 * size) + x, (65 * size) + y, (33 * size) + x, (70 * size) + y);
    bezierVertex((33 * size) + x, (75 * size) + y, (30 * size) + x, (82 * size) + y, (25 * size) + x, (83 * size) + y);
    bezierVertex((20 * size) + x, (85 * size) + y, (14 * size) + x, (81 * size) + y, (13 * size) + x, (80 * size) + y);
    bezierVertex((10 * size) + x, (78 * size) + y, (3 * size) + x, (71 * size) + y, (2 * size) + x, (52 * size) + y);
    bezierVertex((-1 * size) + x, (29 * size) + y, (5 * size) + x, (3 * size) + y, (14 * size) + x, (1 * size) + y);
    endShape();
    pop()
}

function banana1(x, y, size, angle, colour, outline) {

    // translation and rotation
    push()
    translate(x + (25 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (25 * size), -y - (43 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    //Main shape line of the banana
    beginShape();
    vertex((21 * size) + x, (1 * size) + y);
    bezierVertex((21 * size) + x, (3 * size) + y, (22 * size) + x, (5 * size) + y, (22 * size) + x, (7 * size) + y);
    bezierVertex((21 * size) + x, (8 * size) + y, (20 * size) + x, (10 * size) + y, (19 * size) + x, (11 * size) + y);
    bezierVertex((17 * size) + x, (17 * size) + y, (15 * size) + x, (27 * size) + y, (18 * size) + x, (38 * size) + y);
    bezierVertex((23 * size) + x, (64 * size) + y, (44 * size) + x, (77 * size) + y, (48 * size) + x, (79 * size) + y);
    bezierVertex((48 * size) + x, (80 * size) + y, (49 * size) + x, (82 * size) + y, (49 * size) + x, (83 * size) + y);
    bezierVertex((46 * size) + x, (84 * size) + y, (40 * size) + x, (84 * size) + y, (33 * size) + x, (82 * size) + y);
    bezierVertex((19 * size) + x, (78 * size) + y, (12 * size) + x, (67 * size) + y, (10 * size) + x, (63 * size) + y);
    bezierVertex((-3 * size) + x, (43 * size) + y, (1 * size) + x, (16 * size) + y, (8 * size) + x, (12 * size) + y);
    bezierVertex((9 * size) + x, (11 * size) + y, (13 * size) + x, (10 * size) + y, (18 * size) + x, (6 * size) + y);
    bezierVertex((19 * size) + x, (4 * size) + y, (20 * size) + x, (2 * size) + y, (21 * size) + x, (1 * size) + y);
    endShape();
    pop()
}

function banana2(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (23 * size), y + (48 * size))
    rotate(angle)
    translate(-x - (23 * size), -y - (48 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    //botton line of the banana
    beginShape();
    vertex((7 * size) + x, (1 * size) + y);
    bezierVertex((6 * size) + x, (6 * size) + y, (4 * size) + x, (15 * size) + y, (4 * size) + x, (23 * size) + y);
    bezierVertex((4 * size) + x, (24 * size) + y, (4 * size) + x, (37 * size) + y, (7 * size) + x, (49 * size) + y);
    bezierVertex((15 * size) + x, (75 * size) + y, (40 * size) + x, (90 * size) + y, (45 * size) + x, (92 * size) + y);
    bezierVertex((44 * size) + x, (93 * size) + y, (42 * size) + x, (94 * size) + y, (41 * size) + x, (95 * size) + y);
    bezierVertex((34 * size) + x, (92 * size) + y, (26 * size) + x, (86 * size) + y, (18 * size) + x, (76 * size) + y);
    bezierVertex((12 * size) + x, (68 * size) + y, (8 * size) + x, (61 * size) + y, (7 * size) + x, (58 * size) + y);
    bezierVertex((2 * size) + x, (46 * size) + y, (1 * size) + x, (36 * size) + y, (1 * size) + x, (32 * size) + y);
    bezierVertex((1 * size) + x, (21 * size) + y, (2 * size) + x, (13 * size) + y, (4 * size) + x, (7 * size) + y);
    bezierVertex((5 * size) + x, (6 * size) + y, (6 * size) + x, (2 * size) + y, (7 * size) + x, (1 * size) + y);
    endShape();
    pop()
}

function dotStart(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (11 * size), y + (11 * size))
    rotate(angle)
    translate(-x - (11 * size), -y - (11 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    //Begining shape of the banana
    beginShape();
    vertex((15 * size) + x, (2 * size) + y);
    bezierVertex((23 * size) + x, (5 * size) + y, (23 * size) + x, (18 * size) + y, (19 * size) + x, (20 * size) + y);
    bezierVertex((14 * size) + x, (23 * size) + y, (1 * size) + x, (15 * size) + y, (1 * size) + x, (8 * size) + y);
    bezierVertex((2 * size) + x, (4 * size) + y, (9 * size) + x, (-1 * size) + y, (15 * size) + x, (2 * size) + y);
    endShape();
    pop()
}

function dotEnd(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (10 * size), y + (17 * size))
    rotate(angle)
    translate(-x - (10 * size), -y - (17 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    //End shape of the banana
    beginShape();
    vertex((10 * size) + x, (1 * size) + y);
    bezierVertex((13 * size) + x, (4 * size) + y, (15 * size) + x, (8 * size) + y, (17 * size) + x, (11 * size) + y);
    bezierVertex((18 * size) + x, (14 * size) + y, (19 * size) + x, (17 * size) + y, (19 * size) + x, (22 * size) + y);
    bezierVertex((19 * size) + x, (26 * size) + y, (19 * size) + x, (28 * size) + y, (18 * size) + x, (30 * size) + y);
    bezierVertex((15 * size) + x, (34 * size) + y, (6 * size) + x, (34 * size) + y, (3 * size) + x, (31 * size) + y);
    bezierVertex((-1 * size) + x, (27 * size) + y, (1 * size) + x, (15 * size) + y, (10 * size) + x, (1 * size) + y);
    endShape();
    pop()
}

function smallSeed(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (25 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (25 * size), -y - (41 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    //Small seeds (hearts)
    beginShape();
    vertex((27 * size) + x, (1 * size) + y);
    bezierVertex((37 * size) + x, (16 * size) + y, (42 * size) + x, (30 * size) + y, (45 * size) + x, (41 * size) + y);
    bezierVertex((48 * size) + x, (52 * size) + y, (55 * size) + x, (75 * size) + y, (46 * size) + x, (81 * size) + y);
    bezierVertex((44 * size) + x, (82 * size) + y, (39 * size) + x, (84 * size) + y, (27 * size) + x, (78 * size) + y);//4n8
    bezierVertex((26 * size) + x, (78 * size) + y, (15 * size) + x, (85 * size) + y, (8 * size) + x, (80 * size) + y);
    bezierVertex((1 * size) + x, (76 * size) + y, (1 * size) + x, (65 * size) + y, (1 * size) + x, (58 * size) + y);
    bezierVertex((2 * size) + x, (34 * size) + y, (16 * size) + x, (14 * size) + y, (27 * size) + x, (1 * size) + y);//4n8
    endShape();
    pop()
}