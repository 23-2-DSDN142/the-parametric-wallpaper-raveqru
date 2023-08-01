//your parameter variables go here!
let size = 1
let angle = 20
let outline = true
let cell_width = 300
let cell_height = 300
let row_offset = 30

let greenColour = [87,101,50,60]
let orangeColour = [244,110,57,60]
let lightorangeColour = [242,162,12,60]
let beigeColour = [242,224,208]

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
    background(lightorangeColour);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function  
    // noFill()
    // rect(0, 0, 101, 135)
    orange1(0, 0, size*1.5, 0, outline)
    orange1(145, 100, size*1.5,angle+200, outline)
    //leaf(0, 0, size, 0, outline)

}

function orange1(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (52 * size), y + (68 * size))
    rotate(angle)
    translate(-x - (52 * size), -y - (68 * size))

    orange(x + 14 * size, y + 43 * size, size , -30, orangeColour, !outline)
    orange(x + 14 * size, y + 43 * size, size , -60, orangeColour, !outline)
    leaf(x + 20 * size, y + 1 * size, size*0.7 , 300, greenColour, !outline)
    orange(x + 10 * size, y + 43 * size, size , 200, orangeColour, !outline)
    leaf(x + 24 * size, y + 4 * size, size*0.6 , 300, greenColour, !outline)
    orange(x + 10 * size, y + 43 * size, size , 250, orangeColour, !outline)
    leaf(x + 61 * size, y + 5 * size, size*0.6 , 50, greenColour, !outline)
    leaf(x + 61 * size, y + 1 * size, size*0.7 , 50, greenColour, !outline)
    leaf(x + 61 * size, y + 9 * size, size*0.5 , 55, greenColour, !outline)

  
pop()
}

function orange(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (43 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (43 * size), -y - (43 * size))
     // // determine if we need outline depending on outline parameter passed
     if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }
    //orangebase
    beginShape();
    vertex((50 * size) + x, (1 * size) + y);
    bezierVertex((66 * size) + x, (4 * size) + y, (81 * size) + x, (15 * size) + y, (84 * size) + x, (28 * size) + y);
    bezierVertex((90 * size) + x, (57 * size) + y, (41 * size) + x, (95 * size) + y, (18 * size) + x, (84 * size) + y);
    bezierVertex((1 * size) + x, (76 * size) + y, (-7 * size) + x, (32 * size) + y, (15 * size) + x, (11 * size) + y);
    bezierVertex((29 * size) + x, (-2 * size) + y, (49 * size) + x, (1 * size) + y, (50 * size) + x, (1 * size) + y);
    endShape();
    pop()
}

function leaf(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (11 * size), y + (39 * size))
    rotate(angle)
    translate(-x - (11 * size), -y - (39 * size))

    //   // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0)
    } else {
        fill(colour)
        noStroke()
    }
    //orangebase
    beginShape();
    vertex((6 * size) + x, (1 * size) + y);
    bezierVertex((11 * size) + x, (1 * size) + y, (24 * size) + x, (28 * size) + y, (20 * size) + x, (52 * size) + y);
    bezierVertex((19 * size) + x, (64 * size) + y, (13 * size) + x, (77 * size) + y, (9 * size) + x, (76 * size) + y);
    bezierVertex((1 * size) + x, (73 * size) + y, (-2 * size) + x, (2 * size) + y, (6 * size) + x, (1 * size) + y);
    endShape();
    pop()
}
