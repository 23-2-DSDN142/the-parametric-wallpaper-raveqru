//your parameter variables go here!
let size = 1
let angle = 0
let outline = true
let cell_width = 250
let cell_height = 250
let row_offset = 100

let darkredColour = [115,18,18]
let redColour = [140,28,28]
let greyColour = [242,242,242]
let greenColour = [59,60,82]
let pinkColour = [247,205,202]
let lightpinkColour = [250,232,232]

function setup_wallpaper(pWallpaper) {
    pWallpaper.output_mode(GLIDE_WALLPAPER)
    pWallpaper.resolution(NINE_LANDSCAPE)
    pWallpaper.show_guide(false) //set this to false when you're ready to print

    //Grid settings
    pWallpaper.grid_settings.cell_width = cell_width
    pWallpaper.grid_settings.cell_height = cell_height
    pWallpaper.grid_settings.row_offset = row_offset
}

function wallpaper_background() {
    background(250,232,232);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function  

    whole19(0,0,size*1.4,300, outline)
    whole21(10,110,size*1.2,50, outline)
    whole20(140,120,size*1.5,150, outline)
    whole22(120,0,size*1,0, !outline)


}
function whole22(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (38 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (38 * size), -y - (43 * size))
    base(x + 1 * size, y + 1 * size, 1 * size, 0, redColour, !outline)
    pop()
}


function whole21(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (38 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (38 * size), -y - (43 * size))
    base(x + 1 * size, y + 1 * size, 1 * size, 0, redColour, !outline)
longLeaf(x + 1 * size, y + 1 * size, 1 * size, 0, lightpinkColour, outline)
    pop()
}
function whole20(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (38 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (38 * size), -y - (43 * size))
    base(x + 1 * size, y + 1 * size, 1 * size, 0, redColour, !outline)
    leftSide(x + 35 * size, y + 23 * size, size*0.6, 0, lightpinkColour, !outline)
    leftSide(x + 15 * size, y + 35 * size, size*0.1, 300, redColour, !outline)
    leftSide(x + 15 * size, y + 62 * size, size*0.1, 300, redColour, !outline)
    leftSide(x + 55 * size, y + 60 * size, size*0.1, 300, redColour, !outline)
    leftSide(x + 45 * size, y + 50 * size, size*0.1, 500, redColour, !outline)
    leftSide(x + 45 * size, y + 60 * size, size*0.1, 300, redColour, !outline)
    leftSide(x + 45 * size, y + 35 * size, size*0.1, 300, redColour, !outline)
    leftSide(x + 55 * size, y + 35 * size, size*0.1, 300, redColour, !outline)
    leftSide(x + 60 * size, y + 45 * size, size*0.1, 300, redColour, !outline)
    leftSide(x + 40 * size, y + 40 * size, size*0.1, 80, redColour, !outline)
    leftSide(x + 40 * size, y + 45 * size, size*0.1, 300, redColour, !outline)
    leftSide(x + 40 * size, y + 55 * size, size*0.1, 80, redColour, !outline)
    leftSide(x + 60 * size, y + 55 * size, size*0.09, 80, redColour, !outline)
    leftSide(x + 53 * size, y + 48 * size, size*0.09, 300, redColour, !outline)
    leftSide(x + 45 * size, y + 44 * size, size*0.08, 80, redColour, !outline)
    leftSide(x + 53 * size, y + 55* size, size*0.08, 80, redColour, !outline)
    leftSide(x + 50 * size, y + 30* size, size*0.1, 80, redColour, !outline)
    leftSide(x + 51 * size, y + 41* size, size*0.1, 80, redColour, !outline)
    leftSide(x + 42 * size, y + 28* size, size*0.1, 250, redColour, !outline)

    pop()
}

function whole19(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (38 * size), y + (43 * size))
    rotate(angle)
    translate(-x - (38 * size), -y - (43 * size))
    base(x + 1 * size, y + 1 * size, 1 * size, 0, redColour, !outline)
    rightSide(x + 5 * size, y + 25 * size, size*0.6, 0, lightpinkColour, !outline)
    leftSide(x + 35 * size, y + 23 * size, size*0.6, 0, lightpinkColour, !outline)
    leftSide(x + 20 * size, y + 30 * size, size*0.1, 0, redColour, !outline)
    leftSide(x + 13 * size, y + 40 * size, size*0.08, 90, redColour, !outline)
    leftSide(x + 50 * size, y + 40 * size, size*0.08, 90, redColour, !outline)
    leftSide(x + 50 * size, y + 30 * size, size*0.08, 200, redColour, !outline)
    leftSide(x + 26 * size, y + 30 * size, size*0.08, 200, redColour, !outline)
    leftSide(x + 26 * size, y + 50 * size, size*0.08, 200, redColour, !outline)
    leftSide(x + 15 * size, y + 50 * size, size*0.1, 200, redColour, !outline)
    leftSide(x + 25 * size, y + 40 * size, size*0.1, 200, redColour, !outline)
    leftSide(x + 20 * size, y + 40 * size, size*0.08, 200, redColour, !outline)
    leftSide(x + 20 * size, y + 55 * size, size*0.1, 250, redColour, !outline)
    leftSide(x + 20 * size, y + 48 * size, size*0.08, 200, redColour, !outline)
    leftSide(x + 10 * size, y + 48 * size, size*0.08, 200, redColour, !outline)
    leftSide(x + 10 * size, y + 55 * size, size*0.08, 300, redColour, !outline)
    leftSide(x + 25 * size, y + 60 * size, size*0.1, 300, redColour, !outline)
    leftSide(x + 15 * size, y + 35 * size, size*0.07, 300, redColour, !outline)
    leftSide(x + 15 * size, y + 62 * size, size*0.07, 300, redColour, !outline)
    leftSide(x + 55 * size, y + 60 * size, size*0.1, 300, redColour, !outline)
    leftSide(x + 45 * size, y + 50 * size, size*0.1, 500, redColour, !outline)
    leftSide(x + 45 * size, y + 60 * size, size*0.08, 300, redColour, !outline)
    leftSide(x + 45 * size, y + 35 * size, size*0.08, 300, redColour, !outline)
    leftSide(x + 55 * size, y + 35 * size, size*0.08, 300, redColour, !outline)
    leftSide(x + 60 * size, y + 45 * size, size*0.1, 300, redColour, !outline)
    leftSide(x + 40 * size, y + 40 * size, size*0.07, 80, redColour, !outline)
    leftSide(x + 40 * size, y + 45 * size, size*0.08, 300, redColour, !outline)
    leftSide(x + 40 * size, y + 55 * size, size*0.07, 80, redColour, !outline)
    leftSide(x + 60 * size, y + 55 * size, size*0.07, 80, redColour, !outline)
    leftSide(x + 53 * size, y + 48 * size, size*0.07, 150, redColour, !outline)
    leftSide(x + 45 * size, y + 44 * size, size*0.07, 80, redColour, !outline)
    leftSide(x + 53 * size, y + 55* size, size*0.06, 80, redColour, !outline)

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
    stroke(redColour)
  } else {
    fill(colour)
    noStroke()
  }


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
    stroke(greyColour)
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
    stroke(greyColour)
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

function longLeaf(x, y, size, angle, colour, outline) {

    // translation and rotation
    push()
    translate(x + (38 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (38 * size), -y - (42 * size))

  // determine if we need outline depending on outline parameter passed
  if (outline) {
    noFill()
    stroke(greyColour)
  } else {
    fill(colour)
    noStroke()
  }

    //long leaf drawing
    // stroke(0)
    // noFill()
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
      
  
