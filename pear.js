//your parameter variables go here!
let size = 0.5
let angle = 26
let outline = true
let cell_width = 259
let cell_height = 250
let row_offset = 100


let brownColour = [89, 82, 70]
let beigeColour = [208, 193, 161]
let softbrownColour = [170, 140, 90]
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
  background(255, 236, 222) //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function  
  pear(1, 1, size, angle - 10, !outline)

  //whole pear with a shine
  wholePear(165, 160, size * 0.7, angle + 230, !outline)

  //body illustration
  fullBody(1, 100, size * 2, angle, !outline)
  fullBody(4, 100, size * 2, angle, outline)

  //whole small pear without a shine 
  wholePearSmall(150, 1, size, angle, !outline)
  wholePearSmall(145, 1, size, angle, outline)

}


//pear cut in half
function pear(x, y, size, angle, outline) {
  // translation and rotation
  push()
  translate(x + (57 * size), y + (55 * size))
  rotate(angle)
  translate(-x - (57 * size), -y - (55 * size))

  pearBase(x + 20 * size, y + 20 * size, 1.1 * size, 0, softbrownColour, outline)
  pearBase(x + 24 * size, y + 24 * size, 1 * size, 0, beigeColour, outline)
  pearMiddle(x + 49 * size, y + 24 * size, 1 * size, 0, greenColour, outline)
  seed(x + 59 * size, y + 70 * size, 0.1 * size, 0, brownColour, outline)
  seed(x + 55 * size, y + 70 * size, 0.1 * size, 0, brownColour, outline)
  stick(x + 59 * size, y + 5 * size, 0.2 * size, 12, brownColour, outline)
  longLeaf(x + 37 * size, y + -22 * size, 0.7 * size, -51, greenColour, outline)
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
  longLeaf(x + 39 * size, y + 1 * size, 0.7 * size, -29, greenColour, outline)
  longLeaf(x + 60 * size, y + 6 * size, 0.7 * size, 34, greenColour, outline)
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
  longLeaf(x + 39 * size, y + 1 * size, 0.7 * size, -29, greenColour, outline)
  longLeaf(x + 61 * size, y + 7 * size, 0.7 * size, 40, greenColour, outline)
  pop()
}

//full body drawing
function fullBody(x, y, size, angle, outline) {
  // translation and rotation
  push()
  translate(x + (48 * size), y + (38 * size))
  rotate(angle)
  translate(-x - (48 * size), -y - (38 * size))

  body(x + 35 * size, y + 10 * size, 0.7 * size, 0, greenColour, outline)
  legRight(x + 58 * size, y + 42 * size, 0.7 * size, 0, greenColour, outline)
  legLeft(x + 22 * size, y + 40 * size, 0.7 * size, 0, greenColour, outline)
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
    stroke(0)
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
    stroke(0)
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

function seed(x, y, size, angle, colour, outline) {

  // translation and rotation
  push()
  translate(x + (20 * size), y + (41 * size))
  rotate(angle)
  translate(-x - (20 * size), -y - (41 * size))

  // determine if we need outline depending on outline parameter passed
  if (outline) {
    noFill()
    stroke(0)
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
    stroke(0)
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
    stroke(0)
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

function stick(x, y, size, angle, colour, outline) {

  // translation and rotation
  push()
  translate(x + (20 * size), y + (42 * size))
  rotate(angle)
  translate(-x - (20 * size), -y - (42 * size))

  // determine if we need outline depending on outline parameter passed
  if (outline) {
    noFill()
    stroke(0)
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
    stroke(0)
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
    stroke(0)
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
    stroke(0)
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
