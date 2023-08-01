//your parameter variables go here!
let size = 1
let angle = 0
let outline = true
let cell_width = 250
let cell_height = 250
let row_offset = 150

let peachColour = [242, 112, 82]
let brownColour = [140, 78, 71]
let pinkColour = [237, 223, 218]
let blueColour = [122, 191, 172]
let transpPeachColour = [122, 191, 172, 30]

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
    background(209, 221, 242);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function  


    // noFill(0)
    // rect(0, 0, 91, 132)
    rect2(0, 0, size*2, 0, outline)

    peach2(150, 100, size, 40, outline)
    peach2(145, 100, size, 40, !outline)

    butterfly1(150, 0, size, 0, outline)
    peach1(0, 0, size, 0, outline)
    peach1(100, 20, size * 0.5, 200, !outline)
    butterfly1(30, 150, size, 180, outline)
    butterfly1(25, 150, size, 180, !outline)



}
function rect2(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (125 * size), y + (125 * size))
    rotate(angle)
    translate(-x - (125 * size), -y - (125 * size))
    rect1(x + 1 * size, y + 1 * size, size, 0, transpPeachColour, !outline)
    rectan(x + 1 * size, y + 1 * size, size, 0, transpPeachColour, !outline)
    pop()

}
function peach1(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (46 * size), y + (66 * size))
    rotate(angle)
    translate(-x - (46 * size), -y - (66 * size))
    peach(x + 1 * size, y + 47 * size, size * 1, 0, peachColour, !outline)
    leaf(x + 20 * size, y + 1 * size, size * 0.7, 310, blueColour, !outline)
    leaf(x + 60 * size, y + 4 * size, size * 0.7, 40, blueColour, !outline)
    peach(x + 6 * size, y + 50 * size, size * 0.9, 0, pinkColour, !outline)
    leaf(x + 40 * size, y + 70 * size, size * 0.5, 0, brownColour, !outline)
    pop()
}

function peach2(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (46 * size), y + (66 * size))
    rotate(angle)
    translate(-x - (46 * size), -y - (66 * size))
    peach(x + 1 * size, y + 47 * size, size * 1, 0, peachColour, !outline)
    leaf(x + 20 * size, y + 1 * size, size * 0.7, 310, blueColour, !outline)
    leaf(x + 60 * size, y + 4 * size, size * 0.7, 40, blueColour, !outline)
    pop()
}

function butterfly1(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (34 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (34 * size), -y - (42 * size))
    butterfly
        (x + 1 * size, y + 1 * size, size * 1, 0, blueColour, !outline)

    pop()
}


function peach(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (45 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (45 * size), -y - (43 * size))
    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }


    //peach

    beginShape();
    vertex((21 * size) + x, (2 * size) + y);
    bezierVertex((33 * size) + x, (-2 * size) + y, (44 * size) + x, (4 * size) + y, (47 * size) + x, (6 * size) + y);
    bezierVertex((51 * size) + x, (3 * size) + y, (58 * size) + x, (-1 * size) + y, (65 * size) + x, (1 * size) + y);
    bezierVertex((81 * size) + x, (4 * size) + y, (89 * size) + x, (24 * size) + y, (89 * size) + x, (37 * size) + y);
    bezierVertex((90 * size) + x, (57 * size) + y, (72 * size) + x, (77 * size) + y, (45 * size) + x, (84 * size) + y);
    bezierVertex((19 * size) + x, (77 * size) + y, (2 * size) + x, (58 * size) + y, (1 * size) + x, (38 * size) + y);
    bezierVertex((1 * size) + x, (27 * size) + y, (6 * size) + x, (8 * size) + y, (21 * size) + x, (2 * size) + y);

    endShape();
    pop()
}
function leaf(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (15 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (15 * size), -y - (42 * size))
    //leaf
    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    beginShape();
    vertex((9 * size) + x, (1 * size) + y);
    bezierVertex((26 * size) + x, (16 * size) + y, (33 * size) + x, (37 * size) + y, (28 * size) + x, (56 * size) + y);
    bezierVertex((23 * size) + x, (70 * size) + y, (13 * size) + x, (79 * size) + y, (8 * size) + x, (82 * size) + y);
    bezierVertex((6 * size) + x, (75 * size) + y, (3 * size) + x, (67 * size) + y, (2 * size) + x, (57 * size) + y);
    bezierVertex((-1 * size) + x, (33 * size) + y, (5 * size) + x, (12 * size) + y, (9 * size) + x, (1 * size) + y);
    endShape();
    pop()
}

function butterfly(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (34 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (34 * size), -y - (42 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    beginShape();
    vertex((42 * size) + x, (1 * size) + y);
    bezierVertex((47 * size) + x, (-1 * size) + y, (64 * size) + x, (18 * size) + y, (65 * size) + x, (40 * size) + y);
    bezierVertex((65 * size) + x, (46 * size) + y, (64 * size) + x, (51 * size) + y, (63 * size) + x, (55 * size) + y);
    bezierVertex((63 * size) + x, (54 * size) + y, (64 * size) + x, (54 * size) + y, (65 * size) + x, (54 * size) + y);
    bezierVertex((66 * size) + x, (54 * size) + y, (66 * size) + x, (54 * size) + y, (67 * size) + x, (54 * size) + y);
    bezierVertex((66 * size) + x, (56 * size) + y, (65 * size) + x, (59 * size) + y, (62 * size) + x, (62 * size) + y);
    bezierVertex((60 * size) + x, (64 * size) + y, (58 * size) + x, (65 * size) + y, (56 * size) + x, (66 * size) + y);
    bezierVertex((56 * size) + x, (65 * size) + y, (56 * size) + x, (63 * size) + y, (56 * size) + x, (62 * size) + y);
    bezierVertex((52 * size) + x, (66 * size) + y, (46 * size) + x, (70 * size) + y, (39 * size) + x, (74 * size) + y);
    bezierVertex((24 * size) + x, (81 * size) + y, (10 * size) + x, (82 * size) + y, (1 * size) + x, (82 * size) + y);
    bezierVertex((3 * size) + x, (79 * size) + y, (6 * size) + x, (69 * size) + y, (16 * size) + x, (62 * size) + y);
    bezierVertex((21 * size) + x, (58 * size) + y, (27 * size) + x, (56 * size) + y, (30 * size) + x, (55 * size) + y);
    bezierVertex((20 * size) + x, (41 * size) + y, (20 * size) + x, (34 * size) + y, (22 * size) + x, (30 * size) + y);
    bezierVertex((25 * size) + x, (24 * size) + y, (31 * size) + x, (24 * size) + y, (36 * size) + x, (16 * size) + y);
    bezierVertex((41 * size) + x, (8 * size) + y, (39 * size) + x, (2 * size) + y, (42 * size) + x, (1 * size) + y);
    endShape();
    pop()
}
function rect1(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (50 * size), y + (125 * size))
    rotate(angle)
    translate(-x - (50 * size), -y - (125 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }
    rect(x+(1*size), y+(1*size), (100*size), (250*size))
    pop()
}

function rectan(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (125 * size), y + (50 * size))
    rotate(angle)
    translate(-x - (125 * size), -y - (50 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }
    rect(x+(1*size), y+(1*size), (250*size), (100*size))
    pop()
}