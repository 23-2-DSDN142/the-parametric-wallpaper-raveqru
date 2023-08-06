// parameters values 
let size = 1
let angle = 0
let outline = false
let opacity = 255

// density parapeters 
let cell_width = 250
let cell_height = 250
let row_offset = 50

// colours 
let darkpink = [158, 56, 56, opacity]
let lightPink = [232, 204, 188, opacity]
let brownColour = [89, 82, 70, opacity]
let greenColour = [66, 94, 72, opacity]
let skyblueColour = [197, 215, 255, opacity]

let blackColour = [0, 0, 0, opacity]
let yellowColour = [236, 200, 43, opacity]
let vanillaColour = [252, 242, 197, opacity]

let whiteColour = [255, 255, 255, opacity]
let kiwiBrownColour = [140, 78, 71, opacity]
let kiwiGreenColour = [145, 137, 1, opacity]

let darkYellowColour = [242, 183, 5, opacity]
let lightYellowColour = [255, 255, 182, opacity]

let orangeGreenColour = [87, 101, 50, Math.min(60, opacity)]
let orangeColour = [244, 110, 57, Math.min(60, opacity)]
let lightorangeColour = [242, 162, 12, Math.min(60, opacity)]

let peachColour = [242, 112, 82, opacity]
let pinkColour = [237, 223, 218, opacity]
let blueColour = [122, 191, 172, opacity]

let beigeColour = [208, 193, 161, opacity]
let softbrownColour = [170, 140, 90, opacity]
let pearGreenColour = [139, 140, 90, opacity]

let darkredColour = [115, 18, 18, opacity]
let redColour = [140, 28, 28, opacity]
let greyColour = [242, 242, 242, opacity]
let pomegranatePinkColour = [247, 205, 202, opacity]
let lightpinkColour = [250, 232, 232, opacity]

// -------------MAIN FUNCTIONS-----------------
let fruitName = false

function display(elm) {
    fruitName = elm.getAttribute('value')
    redraw()
}

function update(value, parameter) {
    if (parameter == 'size') {
        size = value
    } else if (parameter == 'opacity') {
        opacity = value
        updateColours(opacity)
    } else if (parameter == 'angle') {
        angle = value
    } else if (parameter == 'width') {
        cell_width = value
    } else if (parameter == 'height') {
        cell_height = value
    } else if (parameter == 'offset') {
        row_offset = value
    } else if (parameter == 'outline') {
        var checkBox = document.getElementById("myCheck")
        if (checkBox.checked == true) {
            outline = true
        } else {
            outline = false
        }
    }
    redraw()
}

function updateColours(opacity) {
    // colours 
    darkpink = [158, 56, 56, opacity]
    lightPink = [232, 204, 188, opacity]
    brownColour = [89, 82, 70, opacity]
    greenColour = [66, 94, 72, opacity]
    skyblueColour = [197, 215, 255, opacity]

    blackColour = [0, 0, 0, opacity]
    yellowColour = [236, 200, 43, opacity]
    vanillaColour = [252, 242, 197, opacity]

    whiteColour = [255, 255, 255, opacity]
    kiwiBrownColour = [140, 78, 71, opacity]
    kiwiGreenColour = [145, 137, 1, opacity]

    darkYellowColour = [242, 183, 5, opacity]
    lightYellowColour = [255, 255, 182, opacity]

    orangeGreenColour = [87, 101, 50, Math.min(60, opacity)]
    orangeColour = [244, 110, 57, Math.min(60, opacity)]
    lightorangeColour = [242, 162, 12, Math.min(60, opacity)]

    peachColour = [242, 112, 82, opacity]
    pinkColour = [237, 223, 218, opacity]
    blueColour = [122, 191, 172, opacity]

    beigeColour = [208, 193, 161, opacity]
    softbrownColour = [170, 140, 90, opacity]
    pearGreenColour = [139, 140, 90, opacity]

    darkredColour = [115, 18, 18, opacity]
    redColour = [140, 28, 28, opacity]
    greyColour = [242, 242, 242, opacity]
    pomegranatePinkColour = [247, 205, 202, opacity]
    lightpinkColour = [250, 232, 232, opacity]
}

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
    if (fruitName == "apple" || !fruitName) {
        background(242, 232, 228, opacity)
    } else if (fruitName == "banana") {
        background(249, 133, 156, opacity)
    } else if (fruitName == "kiwi") {
        background(205, 158, 152, opacity)
    } else if (fruitName == "lemon") {
        background(96, 191, 158, opacity)
    } else if (fruitName == "melon") {
        background(242, 232, 228, opacity)
    } else if (fruitName == "orange") {
        background(lightorangeColour)
    } else if (fruitName == "peach") {
        background(209, 221, 242, opacity)
    } else if (fruitName == "pear") {
        background(255, 236, 222, opacity)
    } else if (fruitName == "pomegranate") {
        background(250, 232, 232, opacity)
    }


}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function  
    if (fruitName == "apple" || !fruitName) {
        halfApple2(0, 3, size * 0.9, angle + 320, false, !outline)
        fullApple1(150, 130, size * 0.7, angle, darkpink, !outline)
        fullApple2(0, 150, size * 0.7, angle, false, !outline)
        birdie(70, 80, size, angle + 60, false, !outline)
        birdie(150, 1, size, angle, false, !outline)
    } else if (fruitName == "banana") {
        bananaHearts(0, 0, size, angle, yellowColour, !outline)
        bananaHearts(150, 50, size, angle + 180, yellowColour, !outline)
        bananaHearts(50, 100, size, angle + 60, yellowColour, !outline)
        bananaHearts(160, 150, size, angle + 300, yellowColour, !outline)
    } else if (fruitName == "kiwi") {
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
    } else if (fruitName == "lemon") {
        if (!outline) {
            halfLemon(30, 10, size * 2, angle + 200, false, !outline)
            halfLemon(35, 15, size * 2., angle + 200, false, outline)
            halfLemon(120, 75, size * 2, angle + 70, false, !outline)
            halfLemon(120, 80, size * 2, angle + 70, false, outline)
        } else {
            halfLemon(30, 10, size * 2, angle + 200, false, !outline)
            halfLemon(35, 15, size * 2., angle + 200, false, !outline)
            halfLemon(120, 75, size * 2, angle + 70, false, !outline)
            halfLemon(120, 80, size * 2, angle + 70, false, !outline)
        }
    } else if (fruitName == "melon") {
        big1(130, 50, size * 0.7, angle + 140, false, !outline)
        big2(30, 20, size * 0.9, angle + 330, false, !outline)
        big3(170, 200, size, angle + 140, false, !outline)
        big4(9, 150, size * 0.6, angle + 230, false, !outline)
        smallSeed(20, 30, size * 0.1, angle + 60, false, !outline)
        smallSeed(20, 90, size * 0.1, angle + 160, false, !outline)
        smallSeed(150, 160, size * 0.1, angle + 160, false, !outline)
        smallSeed(140, 120, size * 0.1, angle + 250, false, !outline)
        smallSeed(180, 180, size * 0.1, angle + 50, false, !outline)
        smallSeed(160, 20, size * 0.1, angle + 50, false, !outline)
        smallSeed(20, 260, size * 0.1, angle + 50, false, !outline)
    } else if (fruitName == "orange") {
        orange1(0, 0, size, angle + 20, !outline)
        orange1(145, 100, size, angle + 220, !outline)
    } else if (fruitName == "peach") {
        if (!outline) {
            halfPeach(150, 100, size, angle + 40, outline)
            halfPeach(145, 100, size, angle + 40, !outline)

            butterfly(150, 0, size, angle, blueColour, outline)

            wholePeach(0, 0, size, angle, outline)

            butterfly(30, 150, size, angle + 180, blueColour, outline)
            butterfly(25, 150, size, angle + 180, blueColour, !outline)
        } else {
            halfPeach(150, 100, size, angle + 40, outline)
            halfPeach(145, 100, size, angle + 40, outline)

            butterfly(150, 0, size, angle, blueColour, outline)

            wholePeach(0, 0, size, angle, outline)
            butterfly(30, 150, size, angle + 180, blueColour, outline)
            butterfly(25, 150, size, angle + 180, blueColour, outline)
        }
    } else if (fruitName == "pear") {
        halfPear(1, 1, size, angle - 10, outline)

        //whole pear with a shine
        wholePear(165, 160, size * 0.7, angle + 256, outline)

        if (!outline) {
            //body illustration
            fullBody(1, 100, size * 2, angle + 26, outline)
            fullBody(4, 100, size * 2, angle + 26, !outline)

            //whole small pear without a shine 
            wholePearSmall(150, 1, size, angle + 26, outline)
            wholePearSmall(145, 1, size, angle + 26, !outline)
        } else {
            //body illustration
            fullBody(1, 100, size * 2, angle + 26, outline)

            //whole small pear without a shine 
            wholePearSmall(150, 1, size, angle + 26, outline)
        }
    } else if (fruitName == "pomegranate") {
        twoSections(0, 0, size * 1.1, angle + 300, outline)
        wholeLined(10, 110, size, angle + 50, outline)
        oneSection(140, 120, size, angle + 150, outline)
        wholeLined(120, 0, size * 1, angle, outline)
    }
}


// --------------------APPPLE------------------------
function halfApple(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (41 * size), y + (49 * size))
    rotate(angle)
    translate(-x - (41 * size), -y - (49 * size))

    //apple cut in half
    apple2(x + 1 * size, y + 20 * size, size * 1, 1, darkpink, !outline)
    apple2(x + 4 * size, y + 23 * size, size * 0.9, 1, lightPink, !outline)
    appleLeaf(x + 47 * size, y + 1 * size, size * 0.5, 75, greenColour, !outline)
    appleStick(x + 31 * size, y + 1 * size, size * 0.3, -20, brownColour, !outline)
    appleLeaf(x + 28 * size, y + 50 * size, size * 0.2, -30, brownColour, !outline)
    appleLeaf(x + 40 * size, y + 50 * size, size * 0.2, 30, brownColour, !outline)
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
    appleStick(x + 47 * size, y + 1 * size, size * 0.3, 1, darkpink, !outline)
    appleLeaf(x + 32 * size, y + 1 * size, size * 0.3, 130, darkpink, !outline)
    appleLeaf(x + 60 * size, y + 1 * size, size * 0.3, 225, darkpink, !outline)
    appleLeaf(x + 50 * size, y + 50 * size, size * 0.2, 225, brownColour, !outline)
    appleLeaf(x + 35 * size, y + 50 * size, size * 0.2, 130, brownColour, !outline)
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
    appleStick(x + 47 * size, y + 1 * size, size * 0.3, 1, colour, !outline)
    appleLeaf(x + 32 * size, y + 1 * size, size * 0.3, 130, colour, !outline)
    appleLeaf(x + 60 * size, y + 1 * size, size * 0.3, 225, colour, !outline)
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
    appleLeaf(x + 47 * size, y + 1 * size, size * 0.5, 75, greenColour, !outline)
    appleStick(x + 31 * size, y + 1 * size, size * 0.3, -20, brownColour, !outline)
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
        stroke(0, opacity)
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
        stroke(0, opacity)
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

function appleLeaf(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (26 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (26 * size), -y - (43 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
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

function appleStick(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (19 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (19 * size), -y - (42 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
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
        stroke(0, opacity)
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

// -----------------------BANANA--------------------
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

    bananaSmallSeed(x + 50 * size, y + 20 * size, size * 0.2, 180, colour, !outline)
    if (outline) {
        bananaSmallSeed(x + 55 * size, y + 20 * size, size * 0.2, 180, colour, outline)
    }

    bananaSmallSeed(x + 10 * size, y + 100 * size, size * 0.2, 180, colour, !outline)
    if (outline) {
        bananaSmallSeed(x + 13 * size, y + 100 * size, size * 0.2, 180, colour, outline)
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
        stroke(0, opacity)
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
        stroke(0, opacity)
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
        stroke(0, opacity)
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
        stroke(0, opacity)
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
        stroke(0, opacity)
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

function bananaSmallSeed(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (25 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (25 * size), -y - (41 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
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

// ------------------KIWI-------------------

function kiwiFruit(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (52 * size), y + (47 * size))
    rotate(angle)
    translate(-x - (52 * size), -y - (47 * size))

    //kiwi fruit half cut
    kiwi(x + 1 * size, y + 1 * size, 1.2 * size, 0, kiwiBrownColour, outline)
    kiwi(x + 5 * size, y + 4 * size, 1.2 * size * 0.9, 0, kiwiGreenColour, outline)
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
    kiwi(x + 1 * size, y + 1 * size, 1 * size, 0, kiwiBrownColour, outline)
    kiwi(x + 70 * size, y + 1 * size, 0.6 * size * 0.9, 20, kiwiBrownColour, outline)
    whiteSeed(x + 35 * size, y + 15 * size, 0.6 * size, 70, kiwiBrownColour, outline)
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
        stroke(0, opacity)
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
        stroke(0, opacity)
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


// -------------------LEMON-----------------
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
        stroke(0, opacity)
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
        stroke(0, opacity)
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
        stroke(0, opacity)
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

// ----------------------------MELON-------------------------

function big1(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (99 * size), y + (47 * size))
    rotate(angle)
    translate(-x - (99 * size), -y - (47 * size))

    //mellon with seed
    mellon(x + 1 * size, y + 1 * size, size * 1, 0, false, outline)
    seed(x + 90 * size, y + 55 * size, size * 0.1, 40, false, outline)
    seed(x + 50 * size, y + 40 * size, size * 0.1, 240, false, outline)
    seed(x + 70 * size, y + 30 * size, size * 0.1, 180, false, outline)
    seed(x + 70 * size, y + 45 * size, size * 0.1, 100, false, outline)
    seed(x + 100 * size, y + 35 * size, size * 0.1, 40, false, outline)
    seed(x + 130 * size, y + 40 * size, size * 0.1, 240, false, outline)
    seed(x + 110 * size, y + 50 * size, size * 0.1, 180, false, outline)
    seed(x + 140 * size, y + 20 * size, size * 0.1, 100, false, outline)
    seed(x + 120 * size, y + 20 * size, size * 0.1, 240, false, outline)
    seed(x + 89 * size, y + 18 * size, size * 0.1, 180, false, outline)
    seed(x + 50 * size, y + 20 * size, size * 0.1, 100, false, outline)
    pop()
}

function big2(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (51 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (51 * size), -y - (41 * size))

    //melon bite with seeds
    MelonBite(x + 1 * size, y + 1 * size, size * 1, 0, false, outline)
    smallSeed(x + 90 * size, y + 55 * size, size * 0.1, 40, false, outline)
    smallSeed(x + 26 * size, y + 40 * size, size * 0.1, 40, false, outline)
    smallSeed(x + 50 * size, y + 20 * size, size * 0.1, 240, false, outline)
    smallSeed(x + 70 * size, y + 45 * size, size * 0.1, 100, false, outline)
    smallSeed(x + 50 * size, y + 40 * size, size * 0.1, 40, false, outline)
    smallSeed(x + 40 * size, y + 55 * size, size * 0.1, 240, false, outline)
    smallSeed(x + 70 * size, y + 20 * size, size * 0.1, 36, false, outline)
    smallSeed(x + 65 * size, y + 60 * size, size * 0.1, 240, false, outline)
    smallSeed(x + 80 * size, y + 33 * size, size * 0.1, 280, false, outline)
    pop()
}

function big3(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (51 * size), y + (39 * size))
    rotate(angle)
    translate(-x - (51 * size), -y - (39 * size))

    //small triangle melon with seeds
    smallMelon(x + 1 * size, y + 1 * size, size * 1, 0, false, outline)
    seed(x + 35 * size, y + 45 * size, size * 0.08, 40, false, outline)
    seed(x + 26 * size, y + 40 * size, size * 0.08, 250, false, outline)
    seed(x + 50 * size, y + 28 * size, size * 0.08, 240, false, outline)
    seed(x + 50 * size, y + 45 * size, size * 0.08, 100, false, outline)
    seed(x + 35 * size, y + 30 * size, size * 0.08, 150, false, outline)
    seed(x + 40 * size, y + 55 * size, size * 0.08, 240, false, outline)
    seed(x + 60 * size, y + 34 * size, size * 0.08, 36, false, outline)
    seed(x + 20 * size, y + 50 * size, size * 0.08, 240, false, outline)
    seed(x + 67 * size, y + 50 * size, size * 0.08, 280, false, outline)
    seed(x + 60 * size, y + 55 * size, size * 0.08, 150, false, outline)
    pop()

}

function big4(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (76 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (76 * size), -y - (41 * size))

    BigMelon2(x + 1 * size, y + 1 * size, size * 1, 0, false, outline)
    seed(x + 70 * size, y + 55 * size, size * 0.1, 40, false, outline)
    seed(x + 40 * size, y + 40 * size, size * 0.1, 240, false, outline)
    seed(x + 30 * size, y + 30 * size, size * 0.1, 180, false, outline)
    seed(x + 55 * size, y + 45 * size, size * 0.1, 100, false, outline)
    seed(x + 70 * size, y + 35 * size, size * 0.1, 40, false, outline)
    seed(x + 100 * size, y + 40 * size, size * 0.1, 240, false, outline)
    seed(x + 90 * size, y + 50 * size, size * 0.1, 180, false, outline)
    seed(x + 115 * size, y + 25 * size, size * 0.1, 100, false, outline)
    seed(x + 86 * size, y + 30 * size, size * 0.1, 240, false, outline)
    seed(x + 50 * size, y + 25 * size, size * 0.1, 180, false, outline)
    seed(x + 20 * size, y + 20 * size, size * 0.1, 100, false, outline)
    pop()

}

function mellon(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (98 * size), y + (46 * size))
    rotate(angle)
    translate(-x - (98 * size), -y - (46 * size))

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(127, 169, 102, opacity)
        stroke(0, opacity)
    }

    //dark green
    beginShape();
    vertex((20 * size) + x, (7 * size) + y);
    bezierVertex((78 * size) + x, (7 * size) + y, (137 * size) + x, (7 * size) + y, (189 * size) + x, (7 * size) + y);
    bezierVertex((182 * size) + x, (52 * size) + y, (143 * size) + x, (85 * size) + y, (98 * size) + x, (85 * size) + y);
    bezierVertex((59 * size) + x, (85 * size) + y, (20 * size) + x, (59 * size) + y, (7 * size) + x, (20 * size) + y);
    bezierVertex((13 * size) + x, (13 * size) + y, (13 * size) + x, (13 * size) + y, (20 * size) + x, (7 * size) + y);
    endShape();

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(177, 233, 145, opacity)
        stroke(0, opacity)
    }

    //light green
    beginShape();
    vertex((26 * size) + x, (7 * size) + y);
    bezierVertex((78 * size) + x, (7 * size) + y, (137 * size) + x, (7 * size) + y, (182 * size) + x, (7 * size) + y);
    bezierVertex((176 * size) + x, (59 * size) + y, (137 * size) + x, (78 * size) + y, (98 * size) + x, (78 * size) + y);
    bezierVertex((59 * size) + x, (78 * size) + y, (26 * size) + x, (52 * size) + y, (13 * size) + x, (20 * size) + y);//4n8
    bezierVertex((20 * size) + x, (13 * size) + y, (20 * size) + x, (13 * size) + y, (26 * size) + x, (7 * size) + y);
    endShape();

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(249, 133, 156, opacity)
        stroke(0, opacity)
    }

    //pink melon
    beginShape();
    vertex((33 * size) + x, (7 * size) + y);
    bezierVertex((85 * size) + x, (7 * size) + y, (137 * size) + x, (7 * size) + y, (176 * size) + x, (7 * size) + y);
    bezierVertex((169 * size) + x, (59 * size) + y, (124 * size) + x, (78 * size) + y, (78 * size) + x, (72 * size) + y);
    bezierVertex((39 * size) + x, (65 * size) + y, (20 * size) + x, (20 * size) + y, (20 * size) + x, (20 * size) + y);//4n8
    bezierVertex((26 * size) + x, (13 * size) + y, (26 * size) + x, (13 * size) + y, (33 * size) + x, (7 * size) + y);
    endShape();
    pop()
}


function seed(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (31 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (31 * size), -y - (43 * size))

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(0, opacity)
        stroke(0, opacity)
    }

    //seeds
    beginShape();
    vertex((31 * size) + x, (1 * size) + y);
    bezierVertex((55 * size) + x, (24 * size) + y, (65 * size) + x, (51 * size) + y, (56 * size) + x, (69 * size) + y);
    bezierVertex((55 * size) + x, (70 * size) + y, (49 * size) + x, (83 * size) + y, (36 * size) + x, (85 * size) + y);
    bezierVertex((23 * size) + x, (88 * size) + y, (11 * size) + x, (79 * size) + y, (5 * size) + x, (71 * size) + y);//4n8
    bezierVertex((-4 * size) + x, (55 * size) + y, (4 * size) + x, (26 * size) + y, (31 * size) + x, (1 * size) + y);//4n8
    endShape();
    pop()
}


function smallMelon(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (51 * size), y + (39 * size))
    rotate(angle)
    translate(-x - (51 * size), -y - (39 * size))

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(249, 133, 156, opacity)
        stroke(0, opacity)
    }

    // melon small
    beginShape();
    vertex((53 * size) + x, (1 * size) + y);
    bezierVertex((64 * size) + x, (18 * size) + y, (76 * size) + x, (35 * size) + y, (87 * size) + x, (52 * size) + y);
    bezierVertex((85 * size) + x, (54 * size) + y, (68 * size) + x, (72 * size) + y, (41 * size) + x, (70 * size) + y);
    bezierVertex((21 * size) + x, (69 * size) + y, (9 * size) + x, (56 * size) + y, (5 * size) + x, (53 * size) + y);//4n8
    bezierVertex((21 * size) + x, (36 * size) + y, (37 * size) + x, (18 * size) + y, (53 * size) + x, (1 * size) + y);//4n8
    endShape();


    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(177, 233, 145, opacity)
        stroke(0, opacity)

    }

    // light green
    beginShape();
    vertex((5 * size) + x, (53 * size) + y);
    bezierVertex((9 * size) + x, (56 * size) + y, (21 * size) + x, (68 * size) + y, (41 * size) + x, (70 * size) + y);
    bezierVertex((67 * size) + x, (72 * size) + y, (85 * size) + x, (54 * size) + y, (87 * size) + x, (52 * size) + y);
    bezierVertex((88 * size) + x, (53 * size) + y, (89 * size) + x, (55 * size) + y, (89 * size) + x, (57 * size) + y);//4n8
    bezierVertex((86 * size) + x, (59 * size) + y, (67 * size) + x, (78 * size) + y, (38 * size) + x, (75 * size) + y);//4n8
    bezierVertex((18 * size) + x, (73 * size) + y, (5 * size) + x, (62 * size) + y, (1 * size) + x, (58 * size) + y);//4n8
    bezierVertex((2 * size) + x, (56 * size) + y, (4 * size) + x, (55 * size) + y, (5 * size) + x, (53 * size) + y);//4n8
    endShape();


    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(238, 94, 122, opacity)
        stroke(0, opacity)

    }

    //side pink
    beginShape()
    vertex((53 * size) + x, (1 * size) + y);
    bezierVertex((56 * size) + x, (2 * size) + y, (59 * size) + x, (3 * size) + y, (61 * size) + x, (4 * size) + y);
    bezierVertex((73 * size) + x, (19 * size) + y, (85 * size) + x, (35 * size) + y, (96 * size) + x, (51 * size) + y);
    bezierVertex((93 * size) + x, (51 * size) + y, (90 * size) + x, (51 * size) + y, (87 * size) + x, (52 * size) + y);//4n8
    bezierVertex((76 * size) + x, (35 * size) + y, (64 * size) + x, (18 * size) + y, (53 * size) + x, (1 * size) + y);
    endShape();

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(177, 233, 145, opacity)
        stroke(0, opacity)
    }

    //light green side
    beginShape();
    vertex((87 * size) + x, (52 * size) + y);
    bezierVertex((90 * size) + x, (51 * size) + y, (93 * size) + x, (51 * size) + y, (96 * size) + x, (51 * size) + y);
    bezierVertex((98 * size) + x, (53 * size) + y, (99 * size) + x, (54 * size) + y, (100 * size) + x, (56 * size) + y);
    bezierVertex((97 * size) + x, (56 * size) + y, (93 * size) + x, (56 * size) + y, (89 * size) + x, (57 * size) + y);//4n8
    bezierVertex((89 * size) + x, (55 * size) + y, (88 * size) + x, (53 * size) + y, (87 * size) + x, (52 * size) + y);//4n8
    endShape();


    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(127, 169, 102, opacity)
        stroke(0, opacity)
    }

    //dark green bottom
    beginShape();
    vertex((89 * size) + x, (57 * size) + y);
    bezierVertex((93 * size) + x, (56 * size) + y, (97 * size) + x, (56 * size) + y, (100 * size) + x, (56 * size) + y);
    bezierVertex((96 * size) + x, (60 * size) + y, (76 * size) + x, (78 * size) + y, (47 * size) + x, (77 * size) + y);
    bezierVertex((32 * size) + x, (76 * size) + y, (20 * size) + x, (71 * size) + y, (15 * size) + x, (68 * size) + y);
    bezierVertex((19 * size) + x, (70 * size) + y, (30 * size) + x, (75 * size) + y, (47 * size) + x, (75 * size) + y);
    bezierVertex((69 * size) + x, (74 * size) + y, (85 * size) + x, (60 * size) + y, (89 * size) + x, (57 * size) + y);
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
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        stroke(0, opacity)
        fill(0, opacity)
    }

    // small seeds
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


function MelonBite(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + 51 * size, y + 41 * size)
    rotate(angle)
    translate(-x - 51 * size, -y - 41 * size)

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        stroke(0, opacity)
        fill(249, 133, 156, opacity)
    }

    //melon base
    beginShape();
    vertex((42 * size) + x, (1 * size) + y);
    bezierVertex((42 * size) + x, (3 * size) + y, (43 * size) + x, (5 * size) + y, (44 * size) + x, (6 * size) + y);
    bezierVertex((45 * size) + x, (7 * size) + y, (53 * size) + x, (14 * size) + y, (64 * size) + x, (13 * size) + y);
    bezierVertex((76 * size) + x, (12 * size) + y, (81 * size) + x, (2 * size) + y, (82 * size) + x, (1 * size) + y);//4n8
    bezierVertex((90 * size) + x, (22 * size) + y, (98 * size) + x, (44 * size) + y, (106 * size) + x, (65 * size) + y);
    bezierVertex((99 * size) + x, (70 * size) + y, (81 * size) + x, (80 * size) + y, (56 * size) + x, (80 * size) + y);
    bezierVertex((25 * size) + x, (81 * size) + y, (6 * size) + x, (65 * size) + y, (1 * size) + x, (61 * size) + y);//4n8
    bezierVertex((15 * size) + x, (41 * size) + y, (28 * size) + x, (21 * size) + y, (42 * size) + x, (1 * size) + y);//4n8
    endShape();

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        stroke(0, opacity)
        fill(127, 169, 102, opacity)
    }

    //green
    beginShape();
    vertex((1 * size) + x, (61 * size) + y);
    bezierVertex((4 * size) + x, (59 * size) + y, (7 * size) + x, (58 * size) + y, (10 * size) + x, (57 * size) + y);
    bezierVertex((16 * size) + x, (62 * size) + y, (41 * size) + x, (81 * size) + y, (75 * size) + x, (76 * size) + y);
    bezierVertex((89 * size) + x, (73 * size) + y, (99 * size) + x, (69 * size) + y, (106 * size) + x, (65 * size) + y);//4n8
    bezierVertex((101 * size) + x, (69 * size) + y, (80 * size) + x, (83 * size) + y, (50 * size) + x, (81 * size) + y);
    bezierVertex((24 * size) + x, (79 * size) + y, (7 * size) + x, (69 * size) + y, (1 * size) + x, (61 * size) + y);
    endShape();

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        stroke(0, opacity)
        fill(238, 94, 122, opacity)
    }

    //dark pink(side)
    beginShape();
    vertex((42 * size) + x, (1 * size) + y);
    bezierVertex((42 * size) + x, (3 * size) + y, (43 * size) + x, (5 * size) + y, (44 * size) + x, (6 * size) + y);
    bezierVertex((33 * size) + x, (23 * size) + y, (21 * size) + x, (40 * size) + y, (10 * size) + x, (57 * size) + y);
    bezierVertex((7 * size) + x, (58 * size) + y, (4 * size) + x, (59 * size) + y, (1 * size) + x, (61 * size) + y);//4n8
    bezierVertex((15 * size) + x, (41 * size) + y, (28 * size) + x, (21 * size) + y, (42 * size) + x, (1 * size) + y);
    endShape();

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        stroke(0, opacity)
        fill(238, 94, 122, opacity)
    }

    //bite
    beginShape();
    vertex((42 * size) + x, (1 * size) + y);
    bezierVertex((42 * size) + x, (3 * size) + y, (43 * size) + x, (5 * size) + y, (44 * size) + x, (6 * size) + y);
    bezierVertex((45 * size) + x, (7 * size) + y, (53 * size) + x, (14 * size) + y, (64 * size) + x, (13 * size) + y);
    bezierVertex((76 * size) + x, (12 * size) + y, (81 * size) + x, (2 * size) + y, (82 * size) + x, (1 * size) + y);//4n8
    bezierVertex((80 * size) + x, (1 * size) + y, (78 * size) + x, (1 * size) + y, (76 * size) + x, (1 * size) + y);
    bezierVertex((76 * size) + x, (2 * size) + y, (71 * size) + x, (8 * size) + y, (62 * size) + x, (9 * size) + y);
    bezierVertex((52 * size) + x, (10 * size) + y, (46 * size) + x, (2 * size) + y, (46 * size) + x, (1 * size) + y);//4n8
    bezierVertex((44 * size) + x, (1 * size) + y, (43 * size) + x, (1 * size) + y, (42 * size) + x, (1 * size) + y);//4n8
    endShape();
    pop()

}

function BigMelon2(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (76 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (76 * size), -y - (41 * size))

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        stroke(0, opacity)
        fill(238, 94, 122, opacity)
    }

    //big melon
    beginShape();
    vertex((16 * size) + x, (1 * size) + y);
    bezierVertex((61 * size) + x, (1 * size) + y, (106 * size) + x, (1 * size) + y, (150 * size) + x, (1 * size) + y);
    bezierVertex((150 * size) + x, (38 * size) + y, (127 * size) + x, (69 * size) + y, (97 * size) + x, (76 * size) + y);
    bezierVertex((60 * size) + x, (86 * size) + y, (15 * size) + x, (58 * size) + y, (7 * size) + x, (10 * size) + y);//4n8
    bezierVertex((10 * size) + x, (7 * size) + y, (13 * size) + x, (4 * size) + y, (16 * size) + x, (1 * size) + y);
    endShape();

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        stroke(0, opacity)
        fill(127, 169, 102, opacity)
    }

    //bigmelongreen
    beginShape();
    vertex((9 * size) + x, (1 * size) + y);
    bezierVertex((12 * size) + x, (1 * size) + y, (15 * size) + x, (1 * size) + y, (18 * size) + x, (1 * size) + y);
    bezierVertex((15 * size) + x, (5 * size) + y, (11 * size) + x, (8 * size) + y, (8 * size) + x, (12 * size) + y);
    bezierVertex((19 * size) + x, (58 * size) + y, (62 * size) + x, (82 * size) + y, (95 * size) + x, (72 * size) + y);//4n8
    bezierVertex((118 * size) + x, (65 * size) + y, (135 * size) + x, (43 * size) + y, (140 * size) + x, (15 * size) + y);
    bezierVertex((144 * size) + x, (10 * size) + y, (147 * size) + x, (6 * size) + y, (150 * size) + x, (1 * size) + y);
    bezierVertex((151 * size) + x, (40 * size) + y, (126 * size) + x, (73 * size) + y, (93 * size) + x, (80 * size) + y);
    bezierVertex((53 * size) + x, (89 * size) + y, (7 * size) + x, (59 * size) + y, (1 * size) + x, (10 * size) + y);
    bezierVertex((4 * size) + x, (7 * size) + y, (7 * size) + x, (4 * size) + y, (9 * size) + x, (1 * size) + y);//4n8
    endShape();

    // determine if we need outline depending on outline parameter passed
    if (!outline) {
        noFill()
        stroke(0, opacity)
    } else {
        stroke(0, opacity)
        fill(249, 133, 156, opacity)
    }

    //bigmelontoppink
    beginShape();
    vertex((18 * size) + x, (1 * size) + y);
    bezierVertex((62 * size) + x, (1 * size) + y, (106 * size) + x, (1 * size) + y, (150 * size) + x, (1 * size) + y);
    bezierVertex((147 * size) + x, (6 * size) + y, (144 * size) + x, (10 * size) + y, (140 * size) + x, (15 * size) + y);
    bezierVertex((96 * size) + x, (14 * size) + y, (52 * size) + x, (13 * size) + y, (8 * size) + x, (12 * size) + y);//4n8
    bezierVertex((11 * size) + x, (8 * size) + y, (15 * size) + x, (5 * size) + y, (18 * size) + x, (1 * size) + y);
    endShape();
    pop()
}


// --------------------------ORANGE--------------------------
function orange1(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (52 * size), y + (68 * size))
    rotate(angle)
    translate(-x - (52 * size), -y - (68 * size))

    orange(x + 14 * size, y + 43 * size, size, -30, orangeColour, !outline)
    orange(x + 14 * size, y + 43 * size, size, -60, orangeColour, !outline)
    leaf(x + 20 * size, y + 1 * size, size * 0.7, 300, orangeGreenColour, !outline)
    orange(x + 10 * size, y + 43 * size, size, 200, orangeColour, !outline)
    leaf(x + 24 * size, y + 4 * size, size * 0.6, 300, orangeGreenColour, !outline)
    orange(x + 10 * size, y + 43 * size, size, 250, orangeColour, !outline)
    leaf(x + 61 * size, y + 5 * size, size * 0.6, 50, orangeGreenColour, !outline)
    leaf(x + 61 * size, y + 1 * size, size * 0.7, 50, orangeGreenColour, !outline)
    leaf(x + 61 * size, y + 9 * size, size * 0.5, 55, orangeGreenColour, !outline)
    pop()
}

function orange(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (43 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (43 * size), -y - (43 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    //orange base
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

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
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


// --------------------------PEACH-------------------------
function halfPeach(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (46 * size), y + (66 * size))
    rotate(angle)
    translate(-x - (46 * size), -y - (66 * size))

    peach(x + 1 * size, y + 47 * size, size * 1, 0, peachColour, outline)
    leaf(x + 20 * size, y + 1 * size, size * 0.7, 310, blueColour, outline)
    leaf(x + 60 * size, y + 4 * size, size * 0.7, 40, blueColour, outline)
    peach(x + 6 * size, y + 50 * size, size * 0.9, 0, pinkColour, outline)
    leaf(x + 40 * size, y + 70 * size, size * 0.5, 0, kiwiBrownColour, outline)
    pop()
}

function wholePeach(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (46 * size), y + (66 * size))
    rotate(angle)
    translate(-x - (46 * size), -y - (66 * size))

    peach(x + 1 * size, y + 47 * size, size * 1, 0, peachColour, outline)
    leaf(x + 20 * size, y + 1 * size, size * 0.7, 310, blueColour, outline)
    leaf(x + 60 * size, y + 4 * size, size * 0.7, 40, blueColour, outline)
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
        stroke(0, opacity)
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

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
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
        stroke(0, opacity)
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



// ----------------------------PEAR---------------------------
//pear cut in half
function halfPear(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (57 * size), y + (55 * size))
    rotate(angle)
    translate(-x - (57 * size), -y - (55 * size))

    pearBase(x + 20 * size, y + 20 * size, 1.1 * size, 0, softbrownColour, outline)
    pearBase(x + 24 * size, y + 24 * size, 1 * size, 0, beigeColour, outline)
    pearMiddle(x + 49 * size, y + 24 * size, 1 * size, 0, pearGreenColour, outline)
    pearSeed(x + 59 * size, y + 70 * size, 0.1 * size, 0, brownColour, outline)
    pearSeed(x + 55 * size, y + 70 * size, 0.1 * size, 0, brownColour, outline)
    pearStick(x + 59 * size, y + 5 * size, 0.2 * size, 12, brownColour, outline)
    longLeaf(x + 37 * size, y + -22 * size, 0.7 * size, -51, pearGreenColour, outline)
    pop()
}

//whole pear with shine
function wholePear(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (57 * size), y + (68 * size))
    rotate(angle)
    translate(-x - (57 * size), -y - (68 * size))

    pearBase(x + 20 * size, y + 47 * size, 1 * size, 0, softbrownColour, outline)
    longLeaf(x + 39 * size, y + 1 * size, 0.7 * size, -29, pearGreenColour, outline)
    longLeaf(x + 60 * size, y + 6 * size, 0.7 * size, 34, pearGreenColour, outline)
    shine(x + 30 * size, y + 94 * size, 0.4 * size, 150, vanillaColour, outline)
    pop()
}

//small whole pear
function wholePearSmall(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (55 * size), y + (69 * size))
    rotate(angle)
    translate(-x - (55 * size), -y - (69 * size))

    pearBase(x + 20 * size, y + 47 * size, 1 * size, 0, softbrownColour, outline)
    longLeaf(x + 39 * size, y + 1 * size, 0.7 * size, -29, pearGreenColour, outline)
    longLeaf(x + 61 * size, y + 7 * size, 0.7 * size, 40, pearGreenColour, outline)
    pop()
}

//full body drawing
function fullBody(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (48 * size), y + (38 * size))
    rotate(angle)
    translate(-x - (48 * size), -y - (38 * size))

    body(x + 35 * size, y + 10 * size, 0.7 * size, 0, pearGreenColour, outline)
    legRight(x + 58 * size, y + 42 * size, 0.7 * size, 0, pearGreenColour, outline)
    legLeft(x + 22 * size, y + 40 * size, 0.7 * size, 0, pearGreenColour, outline)
    pop()
}


function pearBase(x, y, size, angle, colour, outline) {

    // translation and rotation
    push()
    translate(x + (34 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (34 * size), -y - (42 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    // pear base drawing
    beginShape()
    vertex((36 * size) + x, (1 * size) + y)
    bezierVertex((41 * size) + x, (1 * size) + y, (44 * size) + x, (5 * size) + y, (47 * size) + x, (7 * size) + y)
    bezierVertex((51 * size) + x, (12 * size) + y, (52 * size) + x, (15 * size) + y, (56 * size) + x, (24 * size) + y)
    bezierVertex((62 * size) + x, (36 * size) + y, (63 * size) + x, (35 * size) + y, (65 * size) + x, (41 * size) + y)
    bezierVertex((66 * size) + x, (44 * size) + y, (69 * size) + x, (54 * size) + y, (65 * size) + x, (63 * size) + y)
    bezierVertex((60 * size) + x, (76 * size) + y, (43 * size) + x, (84 * size) + y, (28 * size) + x, (81 * size) + y)
    bezierVertex((16 * size) + x, (79 * size) + y, (5 * size) + x, (70 * size) + y, (2 * size) + x, (58 * size) + y)
    bezierVertex((-1 * size) + x, (48 * size) + y, (5 * size) + x, (38 * size) + y, (5 * size) + x, (36 * size) + y)
    bezierVertex((9 * size) + x, (30 * size) + y, (10 * size) + x, (31 * size) + y, (15 * size) + x, (23 * size) + y)
    bezierVertex((21 * size) + x, (14 * size) + y, (21 * size) + x, (10 * size) + y, (27 * size) + x, (5 * size) + y)
    bezierVertex((29 * size) + x, (3 * size) + y, (32 * size) + x, (1 * size) + y, (36 * size) + x, (1 * size) + y)
    endShape()
    pop()
}

function pearMiddle(x, y, size, angle, colour, outline) {

    // translation and rotation
    push()
    translate(x + (10 * size), y + (38 * size))
    rotate(angle)
    translate(-x - (10 * size), -y - (38 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    // pear inside drawing
    beginShape()
    vertex((10 * size) + x, (2 * size) + y)
    bezierVertex((10 * size) + x, (2 * size) + y, (11 * size) + x, (1 * size) + y, (12 * size) + x, (2 * size) + y)
    bezierVertex((15 * size) + x, (3 * size) + y, (13 * size) + x, (8 * size) + y, (12 * size) + x, (22 * size) + y)
    bezierVertex((12 * size) + x, (30 * size) + y, (12 * size) + x, (33 * size) + y, (12 * size) + x, (35 * size) + y)
    bezierVertex((14 * size) + x, (44 * size) + y, (19 * size) + x, (46 * size) + y, (18 * size) + x, (52 * size) + y)
    bezierVertex((17 * size) + x, (56 * size) + y, (14 * size) + x, (57 * size) + y, (10 * size) + x, (62 * size) + y)
    bezierVertex((8 * size) + x, (67 * size) + y, (7 * size) + x, (72 * size) + y, (7 * size) + x, (75 * size) + y)
    bezierVertex((7 * size) + x, (75 * size) + y, (7 * size) + x, (76 * size) + y, (6 * size) + x, (75 * size) + y)
    bezierVertex((5 * size) + x, (75 * size) + y, (5 * size) + x, (75 * size) + y, (5 * size) + x, (75 * size) + y)
    bezierVertex((6 * size) + x, (71 * size) + y, (7 * size) + x, (67 * size) + y, (6 * size) + x, (61 * size) + y)
    bezierVertex((5 * size) + x, (55 * size) + y, (2 * size) + x, (53 * size) + y, (2 * size) + x, (48 * size) + y)
    bezierVertex((2 * size) + x, (43 * size) + y, (6 * size) + x, (42 * size) + y, (8 * size) + x, (36 * size) + y)
    bezierVertex((9 * size) + x, (33 * size) + y, (9 * size) + x, (30 * size) + y, (9 * size) + x, (22 * size) + y)
    bezierVertex((9 * size) + x, (9 * size) + y, (7 * size) + x, (3 * size) + y, (10 * size) + x, (2 * size) + y)
    endShape()
    pop()
}

function pearSeed(x, y, size, angle, colour, outline) {

    // translation and rotation
    push()
    translate(x + (20 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (20 * size), -y - (41 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    //seed drawing
    beginShape()
    vertex((19 * size) + x, (2 * size) + y)
    bezierVertex((28 * size) + x, (3 * size) + y, (39 * size) + x, (26 * size) + y, (37 * size) + x, (45 * size) + y)
    bezierVertex((36 * size) + x, (64 * size) + y, (23 * size) + x, (81 * size) + y, (14 * size) + x, (78 * size) + y)
    bezierVertex((5 * size) + x, (75 * size) + y, (1 * size) + x, (53 * size) + y, (2 * size) + x, (37 * size) + y)
    bezierVertex((3 * size) + x, (21 * size) + y, (10 * size) + x, (1 * size) + y, (19 * size) + x, (2 * size) + y)
    endShape()
    pop()
}

function shine(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (9 * size), y + (35 * size))
    rotate(angle)
    translate(-x - (9 * size), -y - (35 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    // bleak drawing
    beginShape()
    vertex((2 * size) + x, (2 * size) + y)
    bezierVertex((3 * size) + x, (1 * size) + y, (6 * size) + x, (1 * size) + y, (8 * size) + x, (2 * size) + y)
    bezierVertex((11 * size) + x, (3 * size) + y, (14 * size) + x, (6 * size) + y, (15 * size) + x, (27 * size) + y)
    bezierVertex((16 * size) + x, (46 * size) + y, (17 * size) + x, (65 * size) + y, (10 * size) + x, (67 * size) + y)
    bezierVertex((7 * size) + x, (68 * size) + y, (4 * size) + x, (68 * size) + y, (3 * size) + x, (66 * size) + y)
    bezierVertex((-3 * size) + x, (60 * size) + y, (12 * size) + x, (45 * size) + y, (9 * size) + x, (26 * size) + y)
    bezierVertex((7 * size) + x, (14 * size) + y, (-2 * size) + x, (6 * size) + y, (2 * size) + x, (2 * size) + y)
    endShape()
    pop()
}

function longLeaf(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (16 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (16 * size), -y - (41 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    //long leaf drawing
    beginShape()
    vertex((2 * size) + x, (1 * size) + y)
    bezierVertex((5 * size) + x, (4 * size) + y, (8 * size) + x, (9 * size) + y, (12 * size) + x, (15 * size) + y)
    bezierVertex((17 * size) + x, (25 * size) + y, (23 * size) + x, (34 * size) + y, (22 * size) + x, (46 * size) + y)
    bezierVertex((21 * size) + x, (56 * size) + y, (15 * size) + x, (64 * size) + y, (11 * size) + x, (69 * size) + y)
    bezierVertex((1 * size) + x, (56 * size) + y, (-1 * size) + x, (46 * size) + y, (1 * size) + x, (39 * size) + y)
    bezierVertex((2 * size) + x, (34 * size) + y, (4 * size) + x, (31 * size) + y, (5 * size) + x, (25 * size) + y)
    bezierVertex((7 * size) + x, (15 * size) + y, (4 * size) + x, (7 * size) + y, (2 * size) + x, (1 * size) + y)
    endShape()
    pop()
}

function pearStick(x, y, size, angle, colour, outline) {

    // translation and rotation
    push()
    translate(x + (20 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (20 * size), -y - (42 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    // drawing stick
    beginShape()
    vertex((35 * size) + x, (7 * size) + y)
    bezierVertex((41 * size) + x, (13 * size) + y, (37 * size) + x, (26 * size) + y, (29 * size) + x, (52 * size) + y)
    bezierVertex((25 * size) + x, (67 * size) + y, (20 * size) + x, (83 * size) + y, (17 * size) + x, (83 * size) + y)
    bezierVertex((14 * size) + x, (82 * size) + y, (16 * size) + x, (69 * size) + y, (12 * size) + x, (49 * size) + y)
    bezierVertex((6 * size) + x, (23 * size) + y, (-2 * size) + x, (16 * size) + y, (2 * size) + x, (8 * size) + y)
    bezierVertex((8 * size) + x, (-1 * size) + y, (28 * size) + x, (-2 * size) + y, (35 * size) + x, (7 * size) + y)
    endShape()
    pop()
}


function body(x, y, size, angle, colour, outline) {

    // translation and rotation
    push()
    translate(x + (20 * size), y + (39 * size))
    rotate(angle)
    translate(-x - (20 * size), -y - (39 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    // drawing body
    beginShape()
    vertex((23 * size) + x, (1 * size) + y)
    bezierVertex((23 * size) + x, (1 * size) + y, (25 * size) + x, (1 * size) + y, (26 * size) + x, (1 * size) + y)
    bezierVertex((28 * size) + x, (2 * size) + y, (30 * size) + x, (4 * size) + y, (30 * size) + x, (5 * size) + y)
    bezierVertex((36 * size) + x, (10 * size) + y, (38 * size) + x, (13 * size) + y, (40 * size) + x, (18 * size) + y)
    bezierVertex((41 * size) + x, (22 * size) + y, (40 * size) + x, (26 * size) + y, (37 * size) + x, (34 * size) + y)
    bezierVertex((36 * size) + x, (37 * size) + y, (35 * size) + x, (40 * size) + y, (33 * size) + x, (45 * size) + y)
    bezierVertex((30 * size) + x, (50 * size) + y, (29 * size) + x, (51 * size) + y, (29 * size) + x, (53 * size) + y)
    bezierVertex((29 * size) + x, (58 * size) + y, (32 * size) + x, (59 * size) + y, (34 * size) + x, (65 * size) + y)
    bezierVertex((34 * size) + x, (67 * size) + y, (35 * size) + x, (69 * size) + y, (34 * size) + x, (72 * size) + y)
    bezierVertex((33 * size) + x, (77 * size) + y, (24 * size) + x, (80 * size) + y, (20 * size) + x, (78 * size) + y)
    bezierVertex((19 * size) + x, (77 * size) + y, (18 * size) + x, (77 * size) + y, (17 * size) + x, (75 * size) + y)
    bezierVertex((15 * size) + x, (77 * size) + y, (15 * size) + x, (77 * size) + y, (15 * size) + x, (77 * size) + y)
    bezierVertex((11 * size) + x, (80 * size) + y, (5 * size) + x, (77 * size) + y, (3 * size) + x, (73 * size) + y)
    bezierVertex((1 * size) + x, (69 * size) + y, (2 * size) + x, (64 * size) + y, (2 * size) + x, (63 * size) + y)
    bezierVertex((4 * size) + x, (57 * size) + y, (7 * size) + x, (57 * size) + y, (8 * size) + x, (53 * size) + y)
    bezierVertex((8 * size) + x, (51 * size) + y, (7 * size) + x, (52 * size) + y, (5 * size) + x, (44 * size) + y)
    bezierVertex((4 * size) + x, (41 * size) + y, (4 * size) + x, (39 * size) + y, (4 * size) + x, (38 * size) + y)
    bezierVertex((4 * size) + x, (36 * size) + y, (3 * size) + x, (35 * size) + y, (3 * size) + x, (33 * size) + y)
    bezierVertex((2 * size) + x, (28 * size) + y, (3 * size) + x, (25 * size) + y, (3 * size) + x, (24 * size) + y)
    bezierVertex((4 * size) + x, (21 * size) + y, (4 * size) + x, (21 * size) + y, (12 * size) + x, (18 * size) + y)
    bezierVertex((12 * size) + x, (18 * size) + y, (18 * size) + x, (15 * size) + y, (25 * size) + x, (18 * size) + y)
    bezierVertex((25 * size) + x, (18 * size) + y, (26 * size) + x, (19 * size) + y, (26 * size) + x, (19 * size) + y)
    bezierVertex((26 * size) + x, (19 * size) + y, (26 * size) + x, (19 * size) + y, (26 * size) + x, (19 * size) + y)
    bezierVertex((29 * size) + x, (21 * size) + y, (26 * size) + x, (20 * size) + y, (26 * size) + x, (20 * size) + y)
    bezierVertex((22 * size) + x, (19 * size) + y, (21 * size) + x, (19 * size) + y, (17 * size) + x, (19 * size) + y)
    bezierVertex((16 * size) + x, (21 * size) + y, (14 * size) + x, (22 * size) + y, (11 * size) + x, (24 * size) + y)
    bezierVertex((9 * size) + x, (25 * size) + y, (8 * size) + x, (26 * size) + y, (8 * size) + x, (27 * size) + y)
    bezierVertex((8 * size) + x, (29 * size) + y, (9 * size) + x, (29 * size) + y, (10 * size) + x, (33 * size) + y)
    bezierVertex((11 * size) + x, (35 * size) + y, (10 * size) + x, (36 * size) + y, (11 * size) + x, (37 * size) + y)
    bezierVertex((12 * size) + x, (37 * size) + y, (13 * size) + x, (39 * size) + y, (15 * size) + x, (38 * size) + y)
    bezierVertex((16 * size) + x, (38 * size) + y, (16 * size) + x, (38 * size) + y, (16 * size) + x, (37 * size) + y)
    bezierVertex((16 * size) + x, (36 * size) + y, (16 * size) + x, (36 * size) + y, (16 * size) + x, (35 * size) + y)
    bezierVertex((16 * size) + x, (34 * size) + y, (14 * size) + x, (35 * size) + y, (14 * size) + x, (34 * size) + y)
    bezierVertex((14 * size) + x, (34 * size) + y, (14 * size) + x, (33 * size) + y, (14 * size) + x, (32 * size) + y)
    bezierVertex((14 * size) + x, (32 * size) + y, (13 * size) + x, (32 * size) + y, (14 * size) + x, (31 * size) + y)
    bezierVertex((14 * size) + x, (31 * size) + y, (14 * size) + x, (31 * size) + y, (14 * size) + x, (31 * size) + y)
    bezierVertex((15 * size) + x, (30 * size) + y, (15 * size) + x, (29 * size) + y, (16 * size) + x, (28 * size) + y)
    bezierVertex((16 * size) + x, (28 * size) + y, (18 * size) + x, (26 * size) + y, (20 * size) + x, (27 * size) + y)
    bezierVertex((20 * size) + x, (27 * size) + y, (21 * size) + x, (28 * size) + y, (24 * size) + x, (35 * size) + y)
    bezierVertex((26 * size) + x, (38 * size) + y, (26 * size) + x, (38 * size) + y, (26 * size) + x, (38 * size) + y)
    bezierVertex((27 * size) + x, (39 * size) + y, (28 * size) + x, (36 * size) + y, (31 * size) + x, (31 * size) + y)
    bezierVertex((34 * size) + x, (23 * size) + y, (35 * size) + x, (22 * size) + y, (35 * size) + x, (20 * size) + y)
    bezierVertex((35 * size) + x, (20 * size) + y, (35 * size) + x, (20 * size) + y, (32 * size) + x, (11 * size) + y)
    bezierVertex((30 * size) + x, (8 * size) + y, (30 * size) + x, (6 * size) + y, (28 * size) + x, (5 * size) + y)
    bezierVertex((28 * size) + x, (5 * size) + y, (27 * size) + x, (4 * size) + y, (25 * size) + x, (3 * size) + y)
    bezierVertex((24 * size) + x, (2 * size) + y, (23 * size) + x, (2 * size) + y, (23 * size) + x, (1 * size) + y)
    endShape()
    pop()
}

function legRight(x, y, size, angle, colour, outline) {

    // translation and rotation
    push()
    translate(x + (11 * size), y + (15 * size))
    rotate(angle)
    translate(-x - (11 * size), -y - (15 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    //body leg
    beginShape()
    vertex((14 * size) + x, (2 * size) + y)
    bezierVertex((16 * size) + x, (1 * size) + y, (18 * size) + x, (1 * size) + y, (19 * size) + x, (2 * size) + y)
    bezierVertex((23 * size) + x, (4 * size) + y, (21 * size) + x, (14 * size) + y, (16 * size) + x, (21 * size) + y)
    bezierVertex((12 * size) + x, (27 * size) + y, (5 * size) + x, (30 * size) + y, (3 * size) + x, (29 * size) + y)
    bezierVertex((2 * size) + x, (28 * size) + y, (5 * size) + x, (24 * size) + y, (4 * size) + x, (19 * size) + y)
    bezierVertex((3 * size) + x, (17 * size) + y, (1 * size) + x, (16 * size) + y, (1 * size) + x, (15 * size) + y)
    bezierVertex((1 * size) + x, (13 * size) + y, (3 * size) + x, (12 * size) + y, (7 * size) + x, (8 * size) + y)
    bezierVertex((11 * size) + x, (4 * size) + y, (12 * size) + x, (3 * size) + y, (14 * size) + x, (2 * size) + y)
    endShape()
    pop()
}

function legLeft(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (11 * size), y + (15 * size))
    rotate(angle)
    translate(-x - (11 * size), -y - (15 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(0, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    //body leg
    beginShape()
    vertex((3 * size) + x, (2 * size) + y)
    bezierVertex((4 * size) + x, (1 * size) + y, (6 * size) + x, (1 * size) + y, (8 * size) + x, (2 * size) + y)
    bezierVertex((10 * size) + x, (3 * size) + y, (11 * size) + x, (4 * size) + y, (15 * size) + x, (8 * size) + y)
    bezierVertex((19 * size) + x, (12 * size) + y, (21 * size) + x, (13 * size) + y, (21 * size) + x, (15 * size) + y)
    bezierVertex((21 * size) + x, (16 * size) + y, (20 * size) + x, (17 * size) + y, (19 * size) + x, (19 * size) + y)
    bezierVertex((17 * size) + x, (24 * size) + y, (20 * size) + x, (28 * size) + y, (19 * size) + x, (29 * size) + y)
    bezierVertex((17 * size) + x, (30 * size) + y, (11 * size) + x, (27 * size) + y, (7 * size) + x, (21 * size) + y)
    bezierVertex((1 * size) + x, (14 * size) + y, (-1 * size) + x, (5 * size) + y, (3 * size) + x, (2 * size) + y)
    endShape()
    pop()
}


// ------------------------------POMEGRANATE--------------------
function wholeOutlined(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (38 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (38 * size), -y - (43 * size))
    if (outline) {
        base(x + 1 * size, y + 1 * size, 1 * size, 0, redColour, outline)
    } else {
        base(x + 1 * size, y + 1 * size, 1 * size, 0, redColour, !outline)
    }

    pop()
}


function wholeLined(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (38 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (38 * size), -y - (43 * size))

    //whole pomegranate with line pattern on top layer
    base(x + 1 * size, y + 1 * size, 1 * size, 0, redColour, outline)
    pomegranateLines(x + 1 * size, y + 1 * size, 1 * size, 0, lightpinkColour, !outline)
    pop()
}

function oneSection(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (38 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (38 * size), -y - (43 * size))

    //pomegranate cut in half with one section inside
    base(x + 1 * size, y + 1 * size, 1 * size, 0, redColour, outline)
    leftSide(x + 35 * size, y + 23 * size, size * 0.6, 0, lightpinkColour, outline)
    leftSide(x + 15 * size, y + 35 * size, size * 0.1, 300, redColour, outline)
    leftSide(x + 15 * size, y + 62 * size, size * 0.1, 300, redColour, outline)
    leftSide(x + 55 * size, y + 60 * size, size * 0.1, 300, redColour, outline)
    leftSide(x + 45 * size, y + 50 * size, size * 0.1, 500, redColour, outline)
    leftSide(x + 45 * size, y + 60 * size, size * 0.1, 300, redColour, outline)
    leftSide(x + 45 * size, y + 35 * size, size * 0.1, 300, redColour, outline)
    leftSide(x + 55 * size, y + 35 * size, size * 0.1, 300, redColour, outline)
    leftSide(x + 60 * size, y + 45 * size, size * 0.1, 300, redColour, outline)
    leftSide(x + 40 * size, y + 40 * size, size * 0.1, 80, redColour, outline)
    leftSide(x + 40 * size, y + 45 * size, size * 0.1, 300, redColour, outline)
    leftSide(x + 40 * size, y + 55 * size, size * 0.1, 80, redColour, outline)
    leftSide(x + 60 * size, y + 55 * size, size * 0.09, 80, redColour, outline)
    leftSide(x + 53 * size, y + 48 * size, size * 0.09, 300, redColour, outline)
    leftSide(x + 45 * size, y + 44 * size, size * 0.08, 80, redColour, outline)
    leftSide(x + 53 * size, y + 55 * size, size * 0.08, 80, redColour, outline)
    leftSide(x + 50 * size, y + 30 * size, size * 0.1, 80, redColour, outline)
    leftSide(x + 51 * size, y + 41 * size, size * 0.1, 80, redColour, outline)
    leftSide(x + 42 * size, y + 28 * size, size * 0.1, 250, redColour, outline)
    pop()
}

function twoSections(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (38 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (38 * size), -y - (43 * size))

    //pomegranate cut in half with two sections inside
    base(x + 1 * size, y + 1 * size, 1 * size, 0, redColour, outline)
    rightSide(x + 5 * size, y + 25 * size, size * 0.6, 0, lightpinkColour, outline)
    leftSide(x + 35 * size, y + 23 * size, size * 0.6, 0, lightpinkColour, outline)
    leftSide(x + 20 * size, y + 30 * size, size * 0.1, 0, redColour, outline)
    leftSide(x + 50 * size, y + 40 * size, size * 0.08, 90, redColour, outline)
    leftSide(x + 13 * size, y + 40 * size, size * 0.08, 90, redColour, outline)
    leftSide(x + 50 * size, y + 30 * size, size * 0.08, 200, redColour, outline)
    leftSide(x + 26 * size, y + 30 * size, size * 0.08, 200, redColour, outline)
    leftSide(x + 26 * size, y + 50 * size, size * 0.08, 200, redColour, outline)
    leftSide(x + 15 * size, y + 50 * size, size * 0.1, 200, redColour, outline)
    leftSide(x + 25 * size, y + 40 * size, size * 0.1, 200, redColour, outline)
    leftSide(x + 20 * size, y + 40 * size, size * 0.08, 200, redColour, outline)
    leftSide(x + 20 * size, y + 55 * size, size * 0.1, 250, redColour, outline)
    leftSide(x + 20 * size, y + 48 * size, size * 0.08, 200, redColour, outline)
    leftSide(x + 10 * size, y + 48 * size, size * 0.08, 200, redColour, outline)
    leftSide(x + 10 * size, y + 55 * size, size * 0.08, 300, redColour, outline)
    leftSide(x + 25 * size, y + 60 * size, size * 0.1, 300, redColour, outline)
    leftSide(x + 15 * size, y + 35 * size, size * 0.07, 300, redColour, outline)
    leftSide(x + 15 * size, y + 62 * size, size * 0.07, 300, redColour, outline)
    leftSide(x + 55 * size, y + 60 * size, size * 0.1, 300, redColour, outline)
    leftSide(x + 45 * size, y + 50 * size, size * 0.1, 500, redColour, outline)
    leftSide(x + 45 * size, y + 60 * size, size * 0.08, 300, redColour, outline)
    leftSide(x + 45 * size, y + 35 * size, size * 0.08, 300, redColour, outline)
    leftSide(x + 55 * size, y + 35 * size, size * 0.08, 300, redColour, outline)
    leftSide(x + 60 * size, y + 45 * size, size * 0.1, 300, redColour, outline)
    leftSide(x + 40 * size, y + 40 * size, size * 0.07, 80, redColour, outline)
    leftSide(x + 40 * size, y + 45 * size, size * 0.08, 300, redColour, outline)
    leftSide(x + 40 * size, y + 55 * size, size * 0.07, 80, redColour, outline)
    leftSide(x + 60 * size, y + 55 * size, size * 0.07, 80, redColour, outline)
    leftSide(x + 53 * size, y + 48 * size, size * 0.07, 150, redColour, outline)
    leftSide(x + 45 * size, y + 44 * size, size * 0.07, 80, redColour, outline)
    leftSide(x + 53 * size, y + 55 * size, size * 0.06, 80, redColour, outline)
    pop()
}

function base(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (38 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (38 * size), -y - (43 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(colour, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    //base shape for pomegranate (can be used as a botton layer for half pomegranate)
    beginShape();
    vertex((21 * size) + x, (4 * size) + y);
    bezierVertex((24 * size) + x, (7 * size) + y, (27 * size) + x, (10 * size) + y, (30 * size) + x, (13 * size) + y);
    bezierVertex((30 * size) + x, (12 * size) + y, (30 * size) + x, (9 * size) + y, (32 * size) + x, (5 * size) + y);
    bezierVertex((33 * size) + x, (3 * size) + y, (35 * size) + x, (2 * size) + y, (36 * size) + x, (1 * size) + y);
    bezierVertex((37 * size) + x, (4 * size) + y, (37 * size) + x, (8 * size) + y, (37 * size) + x, (11 * size) + y);
    bezierVertex((38 * size) + x, (10 * size) + y, (39 * size) + x, (8 * size) + y, (41 * size) + x, (6 * size) + y);
    bezierVertex((42 * size) + x, (6 * size) + y, (43 * size) + x, (5 * size) + y, (44 * size) + x, (5 * size) + y);
    bezierVertex((43 * size) + x, (7 * size) + y, (42 * size) + x, (11 * size) + y, (44 * size) + x, (14 * size) + y);
    bezierVertex((47 * size) + x, (19 * size) + y, (54 * size) + x, (19 * size) + y, (59 * size) + x, (22 * size) + y);
    bezierVertex((70 * size) + x, (27 * size) + y, (79 * size) + x, (47 * size) + y, (72 * size) + x, (64 * size) + y);
    bezierVertex((65 * size) + x, (79 * size) + y, (48 * size) + x, (84 * size) + y, (35 * size) + x, (84 * size) + y);
    bezierVertex((32 * size) + x, (83 * size) + y, (14 * size) + x, (82 * size) + y, (5 * size) + x, (67 * size) + y);
    bezierVertex((-4 * size) + x, (52 * size) + y, (2 * size) + x, (30 * size) + y, (14 * size) + x, (22 * size) + y);
    bezierVertex((18 * size) + x, (19 * size) + y, (22 * size) + x, (18 * size) + y, (25 * size) + x, (18 * size) + y);
    bezierVertex((25 * size) + x, (16 * size) + y, (25 * size) + x, (15 * size) + y, (24 * size) + x, (12 * size) + y);
    bezierVertex((24 * size) + x, (9 * size) + y, (22 * size) + x, (6 * size) + y, (21 * size) + x, (4 * size) + y);
    endShape();
    pop()

}

function rightSide(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (28 * size), y + (42 * size))
    rotate(angle)
    translate(-x - (28 * size), -y - (42 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(redColour, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    beginShape();
    vertex((46 * size) + x, (1 * size) + y);
    bezierVertex((54 * size) + x, (6 * size) + y, (37 * size) + x, (29 * size) + y, (48 * size) + x, (60 * size) + y);
    bezierVertex((52 * size) + x, (69 * size) + y, (56 * size) + x, (75 * size) + y, (53 * size) + x, (79 * size) + y);
    bezierVertex((49 * size) + x, (85 * size) + y, (31 * size) + x, (82 * size) + y, (20 * size) + x, (75 * size) + y);
    bezierVertex((18 * size) + x, (74 * size) + y, (2 * size) + x, (64 * size) + y, (1 * size) + x, (47 * size) + y);
    bezierVertex((-2 * size) + x, (18 * size) + y, (37 * size) + x, (-5 * size) + y, (46 * size) + x, (1 * size) + y);
    endShape();
    pop()
}

function leftSide(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (31 * size), y + (44 * size))
    rotate(angle)
    translate(-x - (31 * size), -y - (44 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(redColour, opacity)
    } else {
        fill(colour)
        noStroke()
    }

    beginShape();
    vertex((12 * size) + x, (3 * size) + y);
    bezierVertex((25 * size) + x, (-4 * size) + y, (57 * size) + x, (10 * size) + y, (61 * size) + x, (38 * size) + y);
    bezierVertex((65 * size) + x, (68 * size) + y, (34 * size) + x, (90 * size) + y, (20 * size) + x, (86 * size) + y);
    bezierVertex((1 * size) + x, (80 * size) + y, (-7 * size) + x, (13 * size) + y, (12 * size) + x, (3 * size) + y);
    endShape();
    pop()
}

function pomegranateLines(x, y, size, angle, colour, outline) {

    // translation and rotation
    push()
    translate(x + (38 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (38 * size), -y - (42 * size))

    // determine if we need outline depending on outline parameter passed
    if (outline) {
        noFill()
        stroke(greyColour, opacity)
    } else {
        fill(colour)
        stroke(redColour)
    }

    //long leaf drawing
    beginShape();
    vertex((21 * size) + x, (5 * size) + y);
    bezierVertex((24 * size) + x, (8 * size) + y, (27 * size) + x, (10 * size) + y, (30 * size) + x, (13 * size) + y);
    bezierVertex((30 * size) + x, (12 * size) + y, (30 * size) + x, (10 * size) + y, (31 * size) + x, (7 * size) + y);
    bezierVertex((33 * size) + x, (3 * size) + y, (35 * size) + x, (2 * size) + y, (36 * size) + x, (1 * size) + y);
    bezierVertex((36 * size) + x, (4 * size) + y, (37 * size) + x, (8 * size) + y, (37 * size) + x, (11 * size) + y);
    bezierVertex((38 * size) + x, (10 * size) + y, (38 * size) + x, (9 * size) + y, (40 * size) + x, (7 * size) + y);
    bezierVertex((41 * size) + x, (6 * size) + y, (42 * size) + x, (5 * size) + y, (43 * size) + x, (5 * size) + y);
    bezierVertex((43 * size) + x, (6 * size) + y, (43 * size) + x, (8 * size) + y, (43 * size) + x, (10 * size) + y);
    bezierVertex((44 * size) + x, (14 * size) + y, (45 * size) + x, (16 * size) + y, (46 * size) + x, (17 * size) + y);
    bezierVertex((51 * size) + x, (22 * size) + y, (58 * size) + x, (22 * size) + y, (63 * size) + x, (25 * size) + y);
    bezierVertex((73 * size) + x, (31 * size) + y, (75 * size) + x, (45 * size) + y, (74 * size) + x, (54 * size) + y);
    bezierVertex((73 * size) + x, (66 * size) + y, (66 * size) + x, (74 * size) + y, (65 * size) + x, (74 * size) + y);
    bezierVertex((64 * size) + x, (73 * size) + y, (74 * size) + x, (61 * size) + y, (70 * size) + x, (48 * size) + y);
    bezierVertex((68 * size) + x, (41 * size) + y, (62 * size) + x, (29 * size) + y, (51 * size) + x, (24 * size) + y);
    bezierVertex((49 * size) + x, (23 * size) + y, (45 * size) + x, (22 * size) + y, (42 * size) + x, (18 * size) + y);
    bezierVertex((41 * size) + x, (14 * size) + y, (41 * size) + x, (11 * size) + y, (41 * size) + x, (9 * size) + y);
    bezierVertex((40 * size) + x, (10 * size) + y, (38 * size) + x, (12 * size) + y, (38 * size) + x, (15 * size) + y);
    bezierVertex((37 * size) + x, (25 * size) + y, (50 * size) + x, (29 * size) + y, (57 * size) + x, (43 * size) + y);
    bezierVertex((67 * size) + x, (58 * size) + y, (63 * size) + x, (75 * size) + y, (62 * size) + x, (76 * size) + y);
    bezierVertex((61 * size) + x, (76 * size) + y, (62 * size) + x, (58 * size) + y, (50 * size) + x, (48 * size) + y);
    bezierVertex((43 * size) + x, (42 * size) + y, (37 * size) + x, (45 * size) + y, (34 * size) + x, (40 * size) + y);
    bezierVertex((31 * size) + x, (34 * size) + y, (34 * size) + x, (30 * size) + y, (34 * size) + x, (11 * size) + y);
    bezierVertex((35 * size) + x, (8 * size) + y, (35 * size) + x, (6 * size) + y, (34 * size) + x, (4 * size) + y);
    bezierVertex((32 * size) + x, (13 * size) + y, (29 * size) + x, (20 * size) + y, (27 * size) + x, (25 * size) + y);
    bezierVertex((23 * size) + x, (35 * size) + y, (21 * size) + x, (37 * size) + y, (22 * size) + x, (40 * size) + y);
    bezierVertex((24 * size) + x, (49 * size) + y, (36 * size) + x, (49 * size) + y, (46 * size) + x, (60 * size) + y);
    bezierVertex((53 * size) + x, (66 * size) + y, (56 * size) + x, (74 * size) + y, (58 * size) + x, (79 * size) + y);
    bezierVertex((45 * size) + x, (74 * size) + y, (35 * size) + x, (68 * size) + y, (28 * size) + x, (64 * size) + y);
    bezierVertex((17 * size) + x, (56 * size) + y, (11 * size) + x, (52 * size) + y, (11 * size) + x, (46 * size) + y);
    bezierVertex((10 * size) + x, (35 * size) + y, (31 * size) + x, (27 * size) + y, (28 * size) + x, (16 * size) + y);
    bezierVertex((28 * size) + x, (13 * size) + y, (26 * size) + x, (11 * size) + y, (25 * size) + x, (10 * size) + y);
    bezierVertex((26 * size) + x, (12 * size) + y, (27 * size) + x, (14 * size) + y, (27 * size) + x, (17 * size) + y);
    bezierVertex((25 * size) + x, (24 * size) + y, (17 * size) + x, (24 * size) + y, (16 * size) + x, (24 * size) + y);
    bezierVertex((4 * size) + x, (38 * size) + y, (3 * size) + x, (49 * size) + y, (7 * size) + x, (58 * size) + y);
    bezierVertex((10 * size) + x, (65 * size) + y, (16 * size) + x, (69 * size) + y, (21 * size) + x, (72 * size) + y);
    bezierVertex((34 * size) + x, (81 * size) + y, (49 * size) + x, (80 * size) + y, (56 * size) + x, (80 * size) + y);
    bezierVertex((42 * size) + x, (87 * size) + y, (34 * size) + x, (81 * size) + y, (21 * size) + x, (72 * size) + y);
    bezierVertex((16 * size) + x, (69 * size) + y, (10 * size) + x, (65 * size) + y, (7 * size) + x, (58 * size) + y);
    bezierVertex((3 * size) + x, (49 * size) + y, (4 * size) + x, (38 * size) + y, (11 * size) + x, (30 * size) + y);
    endShape();
    pop()
}


