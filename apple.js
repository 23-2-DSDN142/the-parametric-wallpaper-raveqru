//your parameter variables go here!
let size = 1
let angle = 0
let outline = true
let cell_width = 250
let cell_height = 250
let row_offset = 100

let darkpink = [158, 56, 56]
let lightPink = [232, 204, 188]
let brownColour = [89, 82, 70]
let greenColour = [66, 94, 72]
let skyblueColour = [197, 215, 255]

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
    background(242, 232, 228);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function  
    halfApple2(0, 3, size * 0.9, angle + 320, false, outline)
    fullApple1(150, 130, size * 0.7, angle, darkpink, outline)
    fullApple2(0, 150, size * 0.7, angle, false, outline)
    birdie(70, 80, size, angle + 60, false, outline)
    birdie(150, 1, size, angle, false, outline)
}

function halfApple(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (41 * size), y + (49 * size))
    rotate(angle)
    translate(-x - (41 * size), -y - (49 * size))

    //apple cut in half
    apple2(x + 1 * size, y + 20 * size, size * 1, 1, darkpink, !outline)
    apple2(x + 4 * size, y + 23 * size, size * 0.9, 1, lightPink, !outline)
    leaf(x + 47 * size, y + 1 * size, size * 0.5, 75, greenColour, !outline)
    stick(x + 31 * size, y + 1 * size, size * 0.3, -20, brownColour, !outline)
    leaf(x + 28 * size, y + 50 * size, size * 0.2, -30, brownColour, !outline)
    leaf(x + 40 * size, y + 50 * size, size * 0.2, 30, brownColour, !outline)
    pop()
}

function halfApple2(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (46 * size), y + (51 * size))
    rotate(angle)
    translate(-x - (46 * size), -y - (51 * size))

    //shapedhalfappple
    apple(x + 1 * size, y + 22 * size, size * 1, 1, darkpink, !outline)
    apple(x + 14 * size, y + 32 * size, size * 0.7, 1, lightPink, !outline)
    stick(x + 47 * size, y + 1 * size, size * 0.3, 1, darkpink, !outline)
    leaf(x + 32 * size, y + 1 * size, size * 0.3, 130, darkpink, !outline)
    leaf(x + 60 * size, y + 1 * size, size * 0.3, 225, darkpink, !outline)
    leaf(x + 50 * size, y + 50 * size, size * 0.2, 225, brownColour, !outline)
    leaf(x + 35 * size, y + 50 * size, size * 0.2, 130, brownColour, !outline)
    pop()
}

function fullApple1(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (46 * size), y + (51 * size))
    rotate(angle)
    translate(-x - (46 * size), -y - (51 * size))

    //shaped full apple
    apple(x + 1 * size, y + 22 * size, size * 1, 1, colour, !outline)
    stick(x + 47 * size, y + 1 * size, size * 0.3, 1, colour, !outline)
    leaf(x + 32 * size, y + 1 * size, size * 0.3, 130, colour, !outline)
    leaf(x + 60 * size, y + 1 * size, size * 0.3, 225, colour, !outline)
    pop()

}

function fullApple2(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (41 * size), y + (49 * size))
    rotate(angle)
    translate(-x - (41 * size), -y - (49 * size))

    //not shaped apple
    apple2(x + 1 * size, y + 20 * size, size * 1, 1, lightPink, !outline)
    leaf(x + 47 * size, y + 1 * size, size * 0.5, 75, greenColour, !outline)
    stick(x + 31 * size, y + 1 * size, size * 0.3, -20, brownColour, !outline)
    pop()
}

function birdie(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (38 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (38 * size), -y - (42 * size))

    //bird
    bird(x + 1 * size, y + 1 * size, size * 1, 0, greenColour, !outline)
    pop()
}

function apple(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (46 * size), y + (40 * size))
    rotate(angle)
    translate(-x - (46 * size), -y - (40 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    //oval shaped apple
    beginShape();
    vertex((24 * size) + x, (2 * size) + y);
    bezierVertex((37 * size) + x, (-1 * size) + y, (48 * size) + x, (7 * size) + y, (50 * size) + x, (8 * size) + y);
    bezierVertex((54 * size) + x, (6 * size) + y, (61 * size) + x, (2 * size) + y, (68 * size) + x, (3 * size) + y);
    bezierVertex((84 * size) + x, (5 * size) + y, (92 * size) + x, (27 * size) + y, (91 * size) + x, (43 * size) + y);
    bezierVertex((90 * size) + x, (58 * size) + y, (80 * size) + x, (78 * size) + y, (64 * size) + x, (80 * size) + y);
    bezierVertex((56 * size) + x, (81 * size) + y, (44 * size) + x, (73 * size) + y, (41 * size) + x, (71 * size) + y);
    bezierVertex((30 * size) + x, (79 * size) + y, (22 * size) + x, (78 * size) + y, (20 * size) + x, (77 * size) + y);
    bezierVertex((5 * size) + x, (74 * size) + y, (-2 * size) + x, (48 * size) + y, (3 * size) + x, (29 * size) + y);
    bezierVertex((4 * size) + x, (25 * size) + y, (9 * size) + x, (7 * size) + y, (24 * size) + x, (2 * size) + y);
    endShape();
    pop()
}

function apple2(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (41 * size), y + (40 * size))
    rotate(angle)
    translate(-x - (41 * size), -y - (40 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    //less shaped apple
    beginShape();
    vertex((26 * size) + x, (1 * size) + y);
    bezierVertex((30 * size) + x, (1 * size) + y, (33 * size) + x, (4 * size) + y, (42 * size) + x, (4 * size) + y);
    bezierVertex((50 * size) + x, (4 * size) + y, (52 * size) + x, (1 * size) + y, (57 * size) + x, (1 * size) + y);
    bezierVertex((69 * size) + x, (2 * size) + y, (89 * size) + x, (33 * size) + y, (77 * size) + x, (57 * size) + y);
    bezierVertex((71 * size) + x, (70 * size) + y, (58 * size) + x, (78 * size) + y, (44 * size) + x, (79 * size) + y);
    bezierVertex((27 * size) + x, (80 * size) + y, (11 * size) + x, (71 * size) + y, (5 * size) + x, (57 * size) + y);
    bezierVertex((-7 * size) + x, (32 * size) + y, (13 * size) + x, (2 * size) + y, (26 * size) + x, (1 * size) + y);
    endShape();
    pop()
}

function leaf(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (26 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (26 * size), -y - (43 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    //apple leaf
    beginShape();
    vertex((26 * size) + x, (1 * size) + y);
    bezierVertex((44 * size) + x, (10 * size) + y, (54 * size) + x, (29 * size) + y, (51 * size) + x, (48 * size) + y);
    bezierVertex((48 * size) + x, (64 * size) + y, (37 * size) + x, (77 * size) + y, (22 * size) + x, (84 * size) + y);
    bezierVertex((20 * size) + x, (83 * size) + y, (-1 * size) + x, (67 * size) + y, (1 * size) + x, (41 * size) + y);
    bezierVertex((3 * size) + x, (15 * size) + y, (24 * size) + x, (2 * size) + y, (26 * size) + x, (1 * size) + y);
    endShape();
    pop()
}

function stick(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (19 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (19 * size), -y - (42 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    //apple stick
    beginShape();
    vertex((35 * size) + x, (7 * size) + y);
    bezierVertex((41 * size) + x, (13 * size) + y, (37 * size) + x, (26 * size) + y, (29 * size) + x, (52 * size) + y);
    bezierVertex((25 * size) + x, (67 * size) + y, (20 * size) + x, (83 * size) + y, (17 * size) + x, (83 * size) + y);
    bezierVertex((14 * size) + x, (82 * size) + y, (16 * size) + x, (69 * size) + y, (12 * size) + x, (49 * size) + y);
    bezierVertex((6 * size) + x, (23 * size) + y, (-2 * size) + x, (16 * size) + y, (2 * size) + x, (8 * size) + y);
    bezierVertex((8 * size) + x, (-1 * size) + y, (28 * size) + x, (-2 * size) + y, (35 * size) + x, (7 * size) + y);
    endShape();
    pop()
}


function bird(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (39 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (39 * size), -y - (41 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    // bird on its own
    beginShape();
    vertex((33 * size) + x, (1 * size) + y);
    bezierVertex((34 * size) + x, (4 * size) + y, (35 * size) + x, (9 * size) + y, (38 * size) + x, (14 * size) + y);
    bezierVertex((41 * size) + x, (20 * size) + y, (44 * size) + x, (22 * size) + y, (45 * size) + x, (27 * size) + y);
    bezierVertex((45 * size) + x, (30 * size) + y, (46 * size) + x, (35 * size) + y, (42 * size) + x, (41 * size) + y);
    bezierVertex((45 * size) + x, (40 * size) + y, (48 * size) + x, (40 * size) + y, (49 * size) + x, (41 * size) + y);
    bezierVertex((50 * size) + x, (42 * size) + y, (50 * size) + x, (42 * size) + y, (50 * size) + x, (44 * size) + y);
    bezierVertex((51 * size) + x, (44 * size) + y, (52 * size) + x, (44 * size) + y, (52 * size) + x, (44 * size) + y);
    bezierVertex((53 * size) + x, (43 * size) + y, (53 * size) + x, (42 * size) + y, (54 * size) + x, (41 * size) + y);
    bezierVertex((55 * size) + x, (40 * size) + y, (56 * size) + x, (40 * size) + y, (56 * size) + x, (39 * size) + y);
    bezierVertex((56 * size) + x, (39 * size) + y, (55 * size) + x, (37 * size) + y, (55 * size) + x, (35 * size) + y);
    bezierVertex((55 * size) + x, (33 * size) + y, (57 * size) + x, (31 * size) + y, (59 * size) + x, (30 * size) + y);
    bezierVertex((60 * size) + x, (30 * size) + y, (61 * size) + x, (32 * size) + y, (60 * size) + x, (35 * size) + y);
    bezierVertex((60 * size) + x, (36 * size) + y, (59 * size) + x, (37 * size) + y, (59 * size) + x, (37 * size) + y);
    bezierVertex((60 * size) + x, (37 * size) + y, (62 * size) + x, (36 * size) + y, (63 * size) + x, (35 * size) + y);
    bezierVertex((63 * size) + x, (35 * size) + y, (64 * size) + x, (32 * size) + y, (68 * size) + x, (31 * size) + y);
    bezierVertex((71 * size) + x, (29 * size) + y, (74 * size) + x, (32 * size) + y, (74 * size) + x, (32 * size) + y);
    bezierVertex((73 * size) + x, (33 * size) + y, (72 * size) + x, (35 * size) + y, (69 * size) + x, (36 * size) + y);
    bezierVertex((66 * size) + x, (37 * size) + y, (64 * size) + x, (36 * size) + y, (63 * size) + x, (36 * size) + y);
    bezierVertex((63 * size) + x, (36 * size) + y, (62 * size) + x, (37 * size) + y, (62 * size) + x, (37 * size) + y);
    bezierVertex((63 * size) + x, (37 * size) + y, (64 * size) + x, (36 * size) + y, (66 * size) + x, (37 * size) + y);
    bezierVertex((68 * size) + x, (38 * size) + y, (68 * size) + x, (40 * size) + y, (69 * size) + x, (40 * size) + y);
    bezierVertex((68 * size) + x, (40 * size) + y, (66 * size) + x, (42 * size) + y, (63 * size) + x, (41 * size) + y);
    bezierVertex((61 * size) + x, (40 * size) + y, (60 * size) + x, (39 * size) + y, (59 * size) + x, (38 * size) + y);
    bezierVertex((58 * size) + x, (39 * size) + y, (57 * size) + x, (40 * size) + y, (56 * size) + x, (41 * size) + y);
    bezierVertex((57 * size) + x, (41 * size) + y, (58 * size) + x, (40 * size) + y, (60 * size) + x, (41 * size) + y);
    bezierVertex((63 * size) + x, (41 * size) + y, (64 * size) + x, (45 * size) + y, (64 * size) + x, (45 * size) + y);
    bezierVertex((63 * size) + x, (45 * size) + y, (62 * size) + x, (46 * size) + y, (60 * size) + x, (45 * size) + y);
    bezierVertex((58 * size) + x, (45 * size) + y, (55 * size) + x, (43 * size) + y, (55 * size) + x, (42 * size) + y);
    bezierVertex((55 * size) + x, (43 * size) + y, (54 * size) + x, (44 * size) + y, (54 * size) + x, (45 * size) + y);
    bezierVertex((54 * size) + x, (45 * size) + y, (54 * size) + x, (45 * size) + y, (54 * size) + x, (45 * size) + y);
    bezierVertex((54 * size) + x, (45 * size) + y, (55 * size) + x, (45 * size) + y, (54 * size) + x, (45 * size) + y);
    bezierVertex((53 * size) + x, (46 * size) + y, (53 * size) + x, (45 * size) + y, (54 * size) + x, (45 * size) + y);
    bezierVertex((53 * size) + x, (47 * size) + y, (52 * size) + x, (50 * size) + y, (51 * size) + x, (54 * size) + y);
    bezierVertex((51 * size) + x, (55 * size) + y, (50 * size) + x, (55 * size) + y, (49 * size) + x, (55 * size) + y);
    bezierVertex((50 * size) + x, (52 * size) + y, (51 * size) + x, (49 * size) + y, (51 * size) + x, (47 * size) + y);
    bezierVertex((51 * size) + x, (47 * size) + y, (50 * size) + x, (47 * size) + y, (50 * size) + x, (47 * size) + y);
    bezierVertex((50 * size) + x, (47 * size) + y, (49 * size) + x, (48 * size) + y, (49 * size) + x, (48 * size) + y);
    bezierVertex((49 * size) + x, (49 * size) + y, (48 * size) + x, (50 * size) + y, (48 * size) + x, (50 * size) + y);
    bezierVertex((47 * size) + x, (51 * size) + y, (47 * size) + x, (53 * size) + y, (46 * size) + x, (56 * size) + y);
    bezierVertex((45 * size) + x, (60 * size) + y, (43 * size) + x, (65 * size) + y, (40 * size) + x, (68 * size) + y);
    bezierVertex((35 * size) + x, (73 * size) + y, (27 * size) + x, (72 * size) + y, (25 * size) + x, (71 * size) + y);
    bezierVertex((24 * size) + x, (75 * size) + y, (24 * size) + x, (78 * size) + y, (23 * size) + x, (81 * size) + y);
    bezierVertex((22 * size) + x, (81 * size) + y, (17 * size) + x, (82 * size) + y, (12 * size) + x, (79 * size) + y);
    bezierVertex((5 * size) + x, (74 * size) + y, (4 * size) + x, (67 * size) + y, (4 * size) + x, (66 * size) + y);
    bezierVertex((6 * size) + x, (66 * size) + y, (10 * size) + x, (67 * size) + y, (17 * size) + x, (65 * size) + y);
    bezierVertex((21 * size) + x, (64 * size) + y, (25 * size) + x, (60 * size) + y, (26 * size) + x, (68 * size) + y);
    bezierVertex((22 * size) + x, (57 * size) + y, (14 * size) + x, (53 * size) + y, (7 * size) + x, (44 * size) + y);
    bezierVertex((-4 * size) + x, (28 * size) + y, (3 * size) + x, (9 * size) + y, (4 * size) + x, (7 * size) + y);
    bezierVertex((5 * size) + x, (10 * size) + y, (8 * size) + x, (16 * size) + y, (12 * size) + x, (21 * size) + y);
    bezierVertex((17 * size) + x, (26 * size) + y, (22 * size) + x, (29 * size) + y, (26 * size) + x, (30 * size) + y);
    bezierVertex((25 * size) + x, (28 * size) + y, (23 * size) + x, (22 * size) + y, (24 * size) + x, (15 * size) + y);
    bezierVertex((26 * size) + x, (7 * size) + y, (31 * size) + x, (2 * size) + y, (33 * size) + x, (1 * size) + y);
    endShape();
    pop()
}
