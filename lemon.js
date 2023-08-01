//your parameter variables go here!
let size = 1
let angle = 190
let outline = true
let cell_width = 250
let cell_height = 200
let row_offset = 90

let yellowColour = [242, 203, 5]
let darkYellowColour = [242, 183, 5]
let lightYellowColour = [255, 255, 182]
let greenColour = [50, 64, 30]
let skyblueColour = [197, 215, 255]

function setup_wallpaper(pWallpaper) {
    pWallpaper.output_mode(GRID_WALLPAPER)
    pWallpaper.resolution(NINE_PORTRAIT)
    pWallpaper.show_guide(false) //set this to false when you're ready to print

    //Grid settings
    pWallpaper.grid_settings.cell_width = cell_width
    pWallpaper.grid_settings.cell_height = cell_height
    pWallpaper.grid_settings.row_offset = row_offset
}

function wallpaper_background() {
    background(96, 191, 158);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function  
    halfLemon(30, 10, size * 2, angle + 35, false, outline)
    halfLemon(35, 15, size * 2., angle + 35, false, !outline)
    halfLemon(120, 75, size * 2, angle + 240,false, outline)
    halfLemon(120, 80, size * 2, angle + 220, false, !outline)

}

function halfLemon(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (23 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (23 * size), -y - (42 * size))

    //one final figure
    lemonSkin(x + 1 * size, y + 1 * size, size * 1, 0, darkYellowColour, !outline)
    lemonSkin(x + 1 * size, y + 4 * size, size * 0.9, 0, lightYellowColour, !outline)
    juiceSac(x + 15 * size, y + 20 * size, size * 0.34, 280, darkYellowColour, !outline)
    juiceSac(x + 14 * size, y + 35 * size, size * 0.34, 320, darkYellowColour, !outline)
    juiceSac(x + 4 * size, y + 45 * size, size * 0.34, 360, darkYellowColour, !outline)
    juiceSac(x + 8 * size, y + 8 * size, size * 0.34, 245, darkYellowColour, !outline)
    smallJuiceSac(x + 1 * size, y + 7 * size, size * 0.3, 205, darkYellowColour, !outline)
    lemonSkin(x + 3 * size, y + 35 * size, size * 0.1, 0, darkYellowColour, !outline)
    juiceSac(x + 10 * size, y + 27 * size, size * 0.05, 230, lightYellowColour, !outline)
    pop()

}

function lemonSkin(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (23 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (23 * size), -y - (42 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }
    
    //main half lemon shape
    beginShape();
    vertex((1 * size) + x, (1 * size) + y);
    bezierVertex((24 * size) + x, (1 * size) + y, (42 * size) + x, (17 * size) + y, (44 * size) + x, (36 * size) + y);
    bezierVertex((47 * size) + x, (59 * size) + y, (27 * size) + x, (81 * size) + y, (1 * size) + x, (82 * size) + y);
    vertex((1 * size) + x, (1 * size) + y); // This vertex connects back to the initial point to complete the shape
    endShape();
    pop()
}

function juiceSac(x, y, size, angle, colour, outline) {
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

    //samll pieces of the lemon
    beginShape();
    vertex((1 * size) + x, (2 * size) + y);
    bezierVertex((2 * size) + x, (2 * size) + y, (3 * size) + x, (2 * size) + y, (4 * size) + x, (2 * size) + y);
    bezierVertex((6 * size) + x, (2 * size) + y, (7 * size) + x, (1 * size) + y, (8 * size) + x, (1 * size) + y);
    bezierVertex((13 * size) + x, (8 * size) + y, (42 * size) + x, (46 * size) + y, (48 * size) + x, (57 * size) + y);
    bezierVertex((49 * size) + x, (58 * size) + y, (49 * size) + x, (59 * size) + y, (49 * size) + x, (61 * size) + y);
    bezierVertex((49 * size) + x, (69 * size) + y, (36 * size) + x, (76 * size) + y, (28 * size) + x, (79 * size) + y);
    bezierVertex((19 * size) + x, (82 * size) + y, (6 * size) + x, (83 * size) + y, (2 * size) + x, (77 * size) + y);
    bezierVertex((1 * size) + x, (76 * size) + y, (1 * size) + x, (74 * size) + y, (1 * size) + x, (74 * size) + y);
    bezierVertex((1 * size) + x, (66 * size) + y, (1 * size) + x, (39 * size) + y, (1 * size) + x, (2 * size) + y);
    endShape();
    pop()
}

function smallJuiceSac(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (18 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (18 * size), -y - (42 * size))
    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }

    //corner of the lemon
    beginShape();
    vertex((1 * size) + x, (1 * size) + y);
    bezierVertex((1 * size) + x, (2 * size) + y, (2 * size) + x, (2 * size) + y, (3 * size) + x, (2 * size) + y);
    bezierVertex((4 * size) + x, (2 * size) + y, (5 * size) + x, (1 * size) + y, (5 * size) + x, (1 * size) + y);
    bezierVertex((20 * size) + x, (36 * size) + y, (31 * size) + x, (62 * size) + y, (34 * size) + x, (68 * size) + y);
    bezierVertex((34 * size) + x, (70 * size) + y, (36 * size) + x, (72 * size) + y, (34 * size) + x, (75 * size) + y);
    bezierVertex((33 * size) + x, (79 * size) + y, (28 * size) + x, (81 * size) + y, (25 * size) + x, (82 * size) + y);
    bezierVertex((16 * size) + x, (85 * size) + y, (8 * size) + x, (84 * size) + y, (1 * size) + x, (82 * size) + y);
    bezierVertex((1 * size) + x, (55 * size) + y, (1 * size) + x, (28 * size) + y, (1 * size) + x, (1 * size) + y);
    endShape();
    pop()
}
