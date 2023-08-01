//your parameter variables go here!
let size = 1
let angle = 0
let outline = true
let cell_width = 300
let cell_height = 300
let row_offset = 200

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
    big1(160, 70, size * 0.7, angle + 140, outline)
    big2(30, 20, size * 1, angle + 330, outline)
    big3(170, 200, size, angle + 140, outline)
    big4(10, 150, size, angle + 230, outline)
    smallSeed(20, 30, size * 0.1, angle + 60, outline)
    smallSeed(20, 90, size * 0.1, angle + 160, outline)
    smallSeed(150, 160, size * 0.1, angle + 160, outline)
    smallSeed(140, 120, size * 0.1, angle + 250, outline)
    smallSeed(180, 180, size * 0.1, angle + 50, outline)
    smallSeed(160, 20, size * 0.1, angle + 50, outline)
    smallSeed(20, 260, size * 0.1, angle + 50, outline)
}

function big1(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (99 * size), y + (47 * size))
    rotate(angle)
    translate(-x - (99 * size), -y - (47 * size))

    //mellon with seed
    mellon(x + 1 * size, y + 1 * size, size * 1, 0, !outline)
    seed(x + 90 * size, y + 55 * size, size * 0.1, 40, !outline)
    seed(x + 50 * size, y + 40 * size, size * 0.1, 240, !outline)
    seed(x + 70 * size, y + 30 * size, size * 0.1, 180, !outline)
    seed(x + 70 * size, y + 45 * size, size * 0.1, 100, !outline)
    seed(x + 100 * size, y + 35 * size, size * 0.1, 40, !outline)
    seed(x + 130 * size, y + 40 * size, size * 0.1, 240, !outline)
    seed(x + 110 * size, y + 50 * size, size * 0.1, 180, !outline)
    seed(x + 140 * size, y + 20 * size, size * 0.1, 100, !outline)
    seed(x + 120 * size, y + 20 * size, size * 0.1, 240, !outline)
    seed(x + 89 * size, y + 18 * size, size * 0.1, 180, !outline)
    seed(x + 50 * size, y + 20 * size, size * 0.1, 100, !outline)
    pop()
}

function big2(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (51 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (51 * size), -y - (41 * size))

    //melon bite with seeds
    MelonBite(x + 1 * size, y + 1 * size, size * 1, 0, !outline)
    smallSeed(x + 90 * size, y + 55 * size, size * 0.1, 40, !outline)
    smallSeed(x + 26 * size, y + 40 * size, size * 0.1, 40, !outline)
    smallSeed(x + 50 * size, y + 20 * size, size * 0.1, 240, !outline)
    smallSeed(x + 70 * size, y + 45 * size, size * 0.1, 100, !outline)
    smallSeed(x + 50 * size, y + 40 * size, size * 0.1, 40, !outline)
    smallSeed(x + 40 * size, y + 55 * size, size * 0.1, 240, !outline)
    smallSeed(x + 70 * size, y + 20 * size, size * 0.1, 36, !outline)
    smallSeed(x + 65 * size, y + 60 * size, size * 0.1, 240, !outline)
    smallSeed(x + 80 * size, y + 33 * size, size * 0.1, 280, !outline)
    pop()
}
function big3(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (51 * size), y + (39 * size))
    rotate(angle)
    translate(-x - (51 * size), -y - (39 * size))

    //small triangle melon with seeds
    smallMelon(x + 1 * size, y + 1 * size, size * 1, 0, !outline)
    seed(x + 35 * size, y + 45 * size, size * 0.08, 40, !outline)
    seed(x + 26 * size, y + 40 * size, size * 0.08, 250, !outline)
    seed(x + 50 * size, y + 28 * size, size * 0.08, 240, !outline)
    seed(x + 50 * size, y + 45 * size, size * 0.08, 100, !outline)
    seed(x + 35 * size, y + 30 * size, size * 0.08, 150, !outline)
    seed(x + 40 * size, y + 55 * size, size * 0.08, 240, !outline)
    seed(x + 60 * size, y + 34 * size, size * 0.08, 36, !outline)
    seed(x + 20 * size, y + 50 * size, size * 0.08, 240, !outline)
    seed(x + 67 * size, y + 50 * size, size * 0.08, 280, !outline)
    seed(x + 60 * size, y + 55 * size, size * 0.08, 150, !outline)
    pop()

}

function big4(x, y, size, angle, outline) {
    // translation and rotation
    push()
    translate(x + (76 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (76 * size), -y - (41 * size))

    BigMelon2(x + 1 * size, y + 1 * size, size * 1, 0, !outline)
    seed(x + 70 * size, y + 55 * size, size * 0.1, 40, !outline)
    seed(x + 40 * size, y + 40 * size, size * 0.1, 240, !outline)
    seed(x + 30 * size, y + 30 * size, size * 0.1, 180, !outline)
    seed(x + 55 * size, y + 45 * size, size * 0.1, 100, !outline)
    seed(x + 70 * size, y + 35 * size, size * 0.1, 40, !outline)
    seed(x + 100 * size, y + 40 * size, size * 0.1, 240, !outline)
    seed(x + 90 * size, y + 50 * size, size * 0.1, 180, !outline)
    seed(x + 115 * size, y + 25 * size, size * 0.1, 100, !outline)
    seed(x + 86 * size, y + 30 * size, size * 0.1, 240, !outline)
    seed(x + 50 * size, y + 25 * size, size * 0.1, 180, !outline)
    seed(x + 20 * size, y + 20 * size, size * 0.1, 100, !outline)
    pop()

}

function mellon(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (98 * size), y + (46 * size))
    rotate(angle)
    translate(-x - (98 * size), -y - (46 * size))

    //darkgreen
    fill(127, 169, 102)
    beginShape();
    vertex((20 * size) + x, (7 * size) + y);
    bezierVertex((78 * size) + x, (7 * size) + y, (137 * size) + x, (7 * size) + y, (189 * size) + x, (7 * size) + y);
    bezierVertex((182 * size) + x, (52 * size) + y, (143 * size) + x, (85 * size) + y, (98 * size) + x, (85 * size) + y);
    bezierVertex((59 * size) + x, (85 * size) + y, (20 * size) + x, (59 * size) + y, (7 * size) + x, (20 * size) + y);
    bezierVertex((13 * size) + x, (13 * size) + y, (13 * size) + x, (13 * size) + y, (20 * size) + x, (7 * size) + y);
    endShape();

    //lightgreen
    beginShape();
    fill(177, 233, 145)
    vertex((26 * size) + x, (7 * size) + y);
    bezierVertex((78 * size) + x, (7 * size) + y, (137 * size) + x, (7 * size) + y, (182 * size) + x, (7 * size) + y);
    bezierVertex((176 * size) + x, (59 * size) + y, (137 * size) + x, (78 * size) + y, (98 * size) + x, (78 * size) + y);
    bezierVertex((59 * size) + x, (78 * size) + y, (26 * size) + x, (52 * size) + y, (13 * size) + x, (20 * size) + y);//4n8
    bezierVertex((20 * size) + x, (13 * size) + y, (20 * size) + x, (13 * size) + y, (26 * size) + x, (7 * size) + y);
    endShape();

    //pinkmelon
    beginShape();
    fill(249, 133, 156)
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

    //seeds
    noStroke()
    beginShape();
    fill(0)
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
    //melonsmall
    beginShape();
    fill(249, 133, 156)
    vertex((53 * size) + x, (1 * size) + y);
    bezierVertex((64 * size) + x, (18 * size) + y, (76 * size) + x, (35 * size) + y, (87 * size) + x, (52 * size) + y);
    bezierVertex((85 * size) + x, (54 * size) + y, (68 * size) + x, (72 * size) + y, (41 * size) + x, (70 * size) + y);
    bezierVertex((21 * size) + x, (69 * size) + y, (9 * size) + x, (56 * size) + y, (5 * size) + x, (53 * size) + y);//4n8
    bezierVertex((21 * size) + x, (36 * size) + y, (37 * size) + x, (18 * size) + y, (53 * size) + x, (1 * size) + y);//4n8
    endShape();


    // //lightgreen
    beginShape();
    fill(177, 233, 145)
    vertex((5 * size) + x, (53 * size) + y);
    bezierVertex((9 * size) + x, (56 * size) + y, (21 * size) + x, (68 * size) + y, (41 * size) + x, (70 * size) + y);
    bezierVertex((67 * size) + x, (72 * size) + y, (85 * size) + x, (54 * size) + y, (87 * size) + x, (52 * size) + y);
    bezierVertex((88 * size) + x, (53 * size) + y, (89 * size) + x, (55 * size) + y, (89 * size) + x, (57 * size) + y);//4n8
    bezierVertex((86 * size) + x, (59 * size) + y, (67 * size) + x, (78 * size) + y, (38 * size) + x, (75 * size) + y);//4n8
    bezierVertex((18 * size) + x, (73 * size) + y, (5 * size) + x, (62 * size) + y, (1 * size) + x, (58 * size) + y);//4n8
    bezierVertex((2 * size) + x, (56 * size) + y, (4 * size) + x, (55 * size) + y, (5 * size) + x, (53 * size) + y);//4n8
    endShape();

    //sidepink
    noStroke(0)
    beginShape();
    fill(238, 94, 122)
    vertex((53 * size) + x, (1 * size) + y);
    bezierVertex((56 * size) + x, (2 * size) + y, (59 * size) + x, (3 * size) + y, (61 * size) + x, (4 * size) + y);
    bezierVertex((73 * size) + x, (19 * size) + y, (85 * size) + x, (35 * size) + y, (96 * size) + x, (51 * size) + y);
    bezierVertex((93 * size) + x, (51 * size) + y, (90 * size) + x, (51 * size) + y, (87 * size) + x, (52 * size) + y);//4n8
    bezierVertex((76 * size) + x, (35 * size) + y, (64 * size) + x, (18 * size) + y, (53 * size) + x, (1 * size) + y);
    endShape();

    // //lightgreenside
    beginShape();
    fill(177, 233, 145)
    vertex((87 * size) + x, (52 * size) + y);
    bezierVertex((90 * size) + x, (51 * size) + y, (93 * size) + x, (51 * size) + y, (96 * size) + x, (51 * size) + y);
    bezierVertex((98 * size) + x, (53 * size) + y, (99 * size) + x, (54 * size) + y, (100 * size) + x, (56 * size) + y);
    bezierVertex((97 * size) + x, (56 * size) + y, (93 * size) + x, (56 * size) + y, (89 * size) + x, (57 * size) + y);//4n8
    bezierVertex((89 * size) + x, (55 * size) + y, (88 * size) + x, (53 * size) + y, (87 * size) + x, (52 * size) + y);//4n8
    endShape();

    //darkgreenbottom
    fill(127, 169, 102)
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
    
    //   smallseeds
    noStroke()
    beginShape();
    fill(0)
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
    //melonbase
    noStroke()
    beginShape();
    fill(249, 133, 156)
    vertex((42 * size) + x, (1 * size) + y);
    bezierVertex((42 * size) + x, (3 * size) + y, (43 * size) + x, (5 * size) + y, (44 * size) + x, (6 * size) + y);
    bezierVertex((45 * size) + x, (7 * size) + y, (53 * size) + x, (14 * size) + y, (64 * size) + x, (13 * size) + y);
    bezierVertex((76 * size) + x, (12 * size) + y, (81 * size) + x, (2 * size) + y, (82 * size) + x, (1 * size) + y);//4n8
    bezierVertex((90 * size) + x, (22 * size) + y, (98 * size) + x, (44 * size) + y, (106 * size) + x, (65 * size) + y);
    bezierVertex((99 * size) + x, (70 * size) + y, (81 * size) + x, (80 * size) + y, (56 * size) + x, (80 * size) + y);
    bezierVertex((25 * size) + x, (81 * size) + y, (6 * size) + x, (65 * size) + y, (1 * size) + x, (61 * size) + y);//4n8
    bezierVertex((15 * size) + x, (41 * size) + y, (28 * size) + x, (21 * size) + y, (42 * size) + x, (1 * size) + y);//4n8
    endShape();

    //green
    stroke(0)
    beginShape();
    fill(127, 169, 102)
    vertex((1 * size) + x, (61 * size) + y);
    bezierVertex((4 * size) + x, (59 * size) + y, (7 * size) + x, (58 * size) + y, (10 * size) + x, (57 * size) + y);
    bezierVertex((16 * size) + x, (62 * size) + y, (41 * size) + x, (81 * size) + y, (75 * size) + x, (76 * size) + y);
    bezierVertex((89 * size) + x, (73 * size) + y, (99 * size) + x, (69 * size) + y, (106 * size) + x, (65 * size) + y);//4n8
    bezierVertex((101 * size) + x, (69 * size) + y, (80 * size) + x, (83 * size) + y, (50 * size) + x, (81 * size) + y);
    bezierVertex((24 * size) + x, (79 * size) + y, (7 * size) + x, (69 * size) + y, (1 * size) + x, (61 * size) + y);
    endShape();

    //darkpink(side)
    stroke(0)
    beginShape();
    fill(238, 94, 122)
    vertex((42 * size) + x, (1 * size) + y);
    bezierVertex((42 * size) + x, (3 * size) + y, (43 * size) + x, (5 * size) + y, (44 * size) + x, (6 * size) + y);
    bezierVertex((33 * size) + x, (23 * size) + y, (21 * size) + x, (40 * size) + y, (10 * size) + x, (57 * size) + y);
    bezierVertex((7 * size) + x, (58 * size) + y, (4 * size) + x, (59 * size) + y, (1 * size) + x, (61 * size) + y);//4n8
    bezierVertex((15 * size) + x, (41 * size) + y, (28 * size) + x, (21 * size) + y, (42 * size) + x, (1 * size) + y);
    endShape();
    //bite
    stroke(0)
    beginShape();
    fill(238, 94, 122)
    vertex((42 * size) + x, (1 * size) + y);
    bezierVertex((42 * size) + x, (3 * size) + y, (43 * size) + x, (5 * size) + y, (44 * size) + x, (6 * size) + y);
    bezierVertex((45 * size) + x, (7 * size) + y, (53 * size) + x, (14 * size) + y, (64 * size) + x, (13 * size) + y);
    bezierVertex((76 * size) + x, (12 * size) + y, (81 * size) + x, (2 * size) + y, (82 * size) + x, (1 * size) + y);//4n8
    bezierVertex((80 * size) + x, (1 * size) + y, (78 * size) + x, (1 * size) + y, (76 * size) + x, (1 * size) + y);
    bezierVertex((76 * size) + x, (2 * size) + y, (71 * size) + x, (8 * size) + y, (62 * size) + x, (9 * size) + y);
    bezierVertex((52 * size) + x, (10 * size) + y, (46 * size) + x, (2 * size) + y, (46 * size) + x, (1 * size) + y);//4n8
    bezierVertex((44 * size) + x, (1 * size) + y, (43 * size) + x, (1 * size) + y, (42 * size) + x, (1 * size) + y);//4n8
    endShape();

    // let seedSize = size * 2
    // let seedAngle = 10

    pop()

}

function BigMelon2(x, y, size, angle, colour, outline) {
    // translation and rotation
    push()
    translate(x + (76 * size), y + (41 * size))
    rotate(angle)
    translate(-x - (76 * size), -y - (41 * size))

    //bigmelon
    noStroke(0)
    beginShape();
    fill(238, 94, 122)
    vertex((16 * size) + x, (1 * size) + y);
    bezierVertex((61 * size) + x, (1 * size) + y, (106 * size) + x, (1 * size) + y, (150 * size) + x, (1 * size) + y);
    bezierVertex((150 * size) + x, (38 * size) + y, (127 * size) + x, (69 * size) + y, (97 * size) + x, (76 * size) + y);
    bezierVertex((60 * size) + x, (86 * size) + y, (15 * size) + x, (58 * size) + y, (7 * size) + x, (10 * size) + y);//4n8
    bezierVertex((10 * size) + x, (7 * size) + y, (13 * size) + x, (4 * size) + y, (16 * size) + x, (1 * size) + y);
    endShape();


    //bigmelongreen
    stroke(0)
    beginShape();
    fill(127, 169, 102)
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




    //bigmelontoppink
    noStroke(0)
    beginShape();
    fill(249, 133, 156)
    vertex((18 * size) + x, (1 * size) + y);
    bezierVertex((62 * size) + x, (1 * size) + y, (106 * size) + x, (1 * size) + y, (150 * size) + x, (1 * size) + y);
    bezierVertex((147 * size) + x, (6 * size) + y, (144 * size) + x, (10 * size) + y, (140 * size) + x, (15 * size) + y);
    bezierVertex((96 * size) + x, (14 * size) + y, (52 * size) + x, (13 * size) + y, (8 * size) + x, (12 * size) + y);//4n8
    bezierVertex((11 * size) + x, (8 * size) + y, (15 * size) + x, (5 * size) + y, (18 * size) + x, (1 * size) + y);
    endShape();
    pop()
}
