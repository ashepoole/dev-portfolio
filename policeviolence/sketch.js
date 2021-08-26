//ID Variables
let i = 0;
let idCount = 6211; //will be used to limit profileID increase

//Background Type Variables
let fontMono;

//Width Variables
let vertWidthL;
let vertWidthR;
let vertWidthC;

//Color Variables
let r;
let g;
let b;

//Position Variables
let x;
let y;
let yPos;
let yStart = 0; //starting position of the text wall

//Name Functions
let profileID; //for background
let displayID;

function preload() {
  data = loadJSON("shootings.json");
  fontMono = loadFont("RobotoMono-Regular.ttf");
}

function setup() {
  createCanvas(1200, 1800);
  background(0);

  x = 50;
  y = 50;

  textFont(fontMono);
}

function draw() {
  // background(0);

  //Setup

  profileID = int(random(0, idCount));
  i++;
  displayID = int(random(0, idCount));

  //collect data from random profile
  let shootingDate = data.profiles[profileID].date;
  let deceasedName = data.profiles[profileID].name;
  let deceasedNameDisplay = data.profiles[displayID].name;
  let deceasedAge = data.profiles[profileID].age;
  let deceasedGender = data.profiles[profileID].gender;
  let city = data.profiles[profileID].city;
  let state = data.profiles[profileID].state;
  let bodyCamera = data.profiles[profileID].body_camera;
  let mannerOfDeath = data.profiles[profileID].manner_of_death;

  //pronouns & unknown variables
  let deceasedPronoun;
  if (deceasedGender == "M") {
    deceasedPronoun = "he was ";
    if (deceasedName == "") {
      deceasedName = "John Doe";
    }
  } else if (deceasedGender == "F") {
    deceasedPronoun = "she was ";
    if (deceasedName == "") {
      deceasedName = "Jane Doe";
    }
  } else {
    deceasedPronoun = "they were ";
    if (deceasedName == "") {
      deceasedName = "Jay Doe";
    }
  }

  //Syntax:
  let s =
    shootingDate +
    ": " +
    deceasedName +
    " was " +
    deceasedAge +
    " years old when " +
    deceasedPronoun +
    mannerOfDeath +
    " by police in " +
    city +
    ", " +
    state +
    ".";

  push();
  translate(300, -100);
  let ypos = 20 * i;
  text(s, 10, ypos);
  pop();
  
  if (ypos > height + 100) {
    noLoop();
  }

  //Foreground

  //Maps the width to the mouse position
  vertWidthL = random(15, 25);
  vertWidthR = random(15, 25);
  vertWidthC = (vertWidthL + vertWidthR) / 2;

  //Maps the color to  the mouse position
  r = random(120, 255);
  b = random(120, 255);
  fill(r, 0, b);

  //Letter Functions
  //drawX(posX, posY, strokeWeight, strokeColor)
  let strokeW = 3;
  let strokeC = 0;

  //This takes letters from the deceasedName string
  //let currentLetter = deceasedName.substring(i, i + 1);;

  // console.log(currentLetter + "1");

  console.log(deceasedName);

  for (let i = 0; i < deceasedName.length; i++) {
    fill(r, 0, b);
    let currentLetter = deceasedNameDisplay[i];
    console.log(currentLetter);

    //This only works with lowercase, use .toLowerCase() first.

    push(); //Isolates functions
    scale(0.25);

    if (currentLetter === "a" || currentLetter === "A") {
      drawA(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "b" || currentLetter === "B") {
      drawB(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "c" || currentLetter === "C") {
      drawC(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "d" || currentLetter === "D") {
      drawD(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "e" || currentLetter === "E") {
      drawE(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "f" || currentLetter === "F") {
      drawF(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "g" || currentLetter === "G") {
      drawG(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "h" || currentLetter === "H") {
      drawH(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "i" || currentLetter === "I") {
      drawI(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "j" || currentLetter === "J") {
      drawJ(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "k" || currentLetter === "K") {
      drawK(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "l" || currentLetter === "L") {
      drawL(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "m" || currentLetter === "M") {
      drawM(x, y, 3, 0);
      x = x + 120;
    } else if (currentLetter === "n" || currentLetter === "N") {
      drawN(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "o" || currentLetter === "O") {
      drawO(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "p" || currentLetter === "P") {
      drawP(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "q" || currentLetter === "Q") {
      drawQ(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "r" || currentLetter === "R") {
      drawR(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "s" || currentLetter === "S") {
      drawS(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "t" || currentLetter === "T") {
      drawT(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "u" || currentLetter === "U") {
      drawU(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "v" || currentLetter === "V") {
      drawV(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "w" || currentLetter === "W") {
      drawW(x, y, 3, 0);
      x = x + 120;
    } else if (currentLetter === "x" || currentLetter === "X") {
      drawX(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "y" || currentLetter === "Y") {
      drawY(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === "z" || currentLetter === "Z") {
      drawZ(x, y, 3, 0);
      x = x + 100;
    } else if (currentLetter === ".") {
      drawPeriod(x, y, 3, 0);
      x = x + 20;
    } else if (currentLetter === " ") {
      //space
      x = x + 100;
    } else if (currentLetter === "-") {
      drawDash(x, y, 3, 0);
      x = x + 100;
    }

    if (x >= width - 100) {
      y += 200; // update line
      x = 50; // reset X
    }
    pop(); //Isolates functions
  } //Ends name loop

  // noLoop(); //for display in-class today
}

//Letters
//drawX(posX, posY, strokeWeight, strokeColor)

function drawA(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top
  rect(15, 0, 50, 10, 5);
  rect(10, 10, 60, 10, 5);
  //Middle
  rect(0, 70, 80, 10, 5);
  rect(0, 80, 80, 10, 5);
  //Left
  rect(5, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(0, 130, vertWidthL, 10, 5);
  rect(0, 140, vertWidthL, 10, 5);
  rect(0, 150, vertWidthL, 10, 5);
  //Right
  rectMode(CORNERS);
  let aRightWidth = 80 - vertWidthR;
  rect(aRightWidth - 5, 20, 75, 30, 5);
  rect(aRightWidth, 30, 80, 40, 5);
  rect(aRightWidth, 40, 80, 50, 5);
  rect(aRightWidth, 50, 80, 60, 5);
  rect(aRightWidth, 60, 80, 70, 5);
  rect(aRightWidth, 90, 80, 100, 5);
  rect(aRightWidth, 100, 80, 110, 5);
  rect(aRightWidth, 110, 80, 120, 5);
  rect(aRightWidth, 120, 80, 130, 5);
  rect(aRightWidth, 130, 80, 140, 5);
  rect(aRightWidth, 140, 80, 150, 5);
  rect(aRightWidth, 150, 80, 160, 5);
  pop(); //Isolates Functions
}

function drawB(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top
  rect(0, 0, 60, 10, 5);
  rect(0, 10, 70, 10, 5);
  //Bottom
  rect(0, 140, 80, 10, 5);
  rect(0, 150, 75, 10, 5);
  //Left
  rect(0, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(0, 130, vertWidthL, 10, 5);
  //Middle
  rect(0, 70, 70, 10, 5);
  rect(0, 80, 80, 10, 5);
  //Top Right
  rectMode(CORNERS);
  let bRightWidth = 80 - vertWidthR;
  rect(bRightWidth, 20, 80, 30, 5);
  rect(bRightWidth + 5, 30, 85, 40, 5);
  rect(bRightWidth + 5, 40, 85, 50, 5);
  rect(bRightWidth + 5, 50, 85, 60, 5);
  rect(bRightWidth, 60, 80, 70, 5);
  //Bottom Right
  rect(bRightWidth + 5, 90, 85, 100, 5);
  rect(bRightWidth + 10, 100, 90, 110, 5);
  rect(bRightWidth + 10, 110, 90, 120, 5);
  rect(bRightWidth + 10, 120, 90, 130, 5);
  rect(bRightWidth + 5, 130, 85, 140, 5);
  pop(); //Isolates functions
}

function drawC(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top
  rect(15, 0, 55, 10, 5);
  rect(10, 10, 65, 10, 5);
  //Left
  rect(5, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 70, vertWidthL, 10, 5);
  rect(0, 80, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(5, 130, vertWidthL, 10, 5);
  //Bottom
  rect(10, 140, 65, 10, 5);
  rect(15, 150, 55, 10, 5);
  //Right
  rectMode(CORNERS);
  let cRightWidth = 80 - vertWidthR;
  rect(cRightWidth, 20, 80, 30, 5);
  rect(cRightWidth + 5, 30, 85, 40, 5);
  rect(cRightWidth + 5, 120, 85, 130, 5);
  rect(cRightWidth, 130, 80, 140, 5);
  pop(); //Isolates functions
}

function drawD(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top
  rect(0, 0, 65, 10, 5);
  rect(0, 10, 70, 10, 5);
  //Left
  rect(0, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 70, vertWidthL, 10, 5);
  rect(0, 80, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(0, 130, vertWidthL, 10, 5);
  //Bottom
  rect(0, 140, 70, 10, 5);
  rect(0, 150, 65, 10, 5);
  //Right
  rectMode(CORNERS);
  let dRightWidth = 80 - vertWidthR;
  rect(dRightWidth - 5, 20, 75, 30, 5);
  rect(dRightWidth + 0, 30, 80, 40, 5);
  rect(dRightWidth + 5, 40, 85, 50, 5);
  rect(dRightWidth + 5, 50, 85, 60, 5);
  rect(dRightWidth + 5, 60, 85, 70, 5);
  rect(dRightWidth + 5, 70, 85, 80, 5);
  rect(dRightWidth + 5, 80, 85, 90, 5);
  rect(dRightWidth + 5, 90, 85, 100, 5);
  rect(dRightWidth + 5, 100, 85, 110, 5);
  rect(dRightWidth + 5, 110, 85, 120, 5);
  rect(dRightWidth + 0, 120, 80, 130, 5);
  rect(dRightWidth - 5, 130, 75, 140, 5);
  pop(); //Isolates functions
}

function drawE(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top
  rect(0, 0, 80, 10, 5);
  rect(0, 10, 80, 10, 5);
  //Middle
  rect(0, 70, 70, 10, 5);
  rect(0, 80, 70, 10, 5);
  //Left
  rect(0, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(0, 130, vertWidthL, 10, 5);
  //Bottom
  rect(0, 140, 80, 10, 5);
  rect(0, 150, 80, 10, 5);
  pop(); //Isolates Functions
}

function drawF(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top
  rect(0, 0, 80, 10, 5);
  rect(0, 10, 80, 10, 5);
  //Middle
  rect(0, 70, 70, 10, 5);
  rect(0, 80, 70, 10, 5);
  //Left
  rect(0, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(0, 130, vertWidthL, 10, 5);
  rect(0, 140, vertWidthL, 10, 5);
  rect(0, 150, vertWidthL, 10, 5);
  pop(); //Isolates Functions
}

function drawG(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top
  rect(15, 0, 55, 10, 5);
  rect(10, 10, 65, 10, 5);
  //Left
  rect(5, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 70, vertWidthL, 10, 5);
  rect(0, 80, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(5, 130, vertWidthL, 10, 5);
  //Bottom
  rect(10, 140, 65, 10, 5);
  rect(15, 150, 55, 10, 5);
  //Right
  rectMode(CORNERS);
  let gRightWidth = 80 - vertWidthR;
  rect(35, 80, 85, 90, 5);
  rect(35, 90, 85, 100, 5);
  rect(gRightWidth + 5, 100, 85, 110, 5);
  rect(gRightWidth + 5, 110, 85, 120, 5);
  rect(gRightWidth, 20, 80, 30, 5);
  rect(gRightWidth + 5, 30, 85, 40, 5);
  rect(gRightWidth + 5, 120, 85, 130, 5);
  rect(gRightWidth, 130, 80, 140, 5);
  pop(); //Isolates functions
}

function drawH(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Left
  rect(0, 0, vertWidthL, 10, 5);
  rect(0, 10, vertWidthL, 10, 5);
  rect(0, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(0, 130, vertWidthL, 10, 5);
  rect(0, 140, vertWidthL, 10, 5);
  rect(0, 150, vertWidthL, 10, 5);
  //Middle
  rect(0, 70, 80, 10, 5);
  rect(0, 80, 80, 10, 5);
  //Right
  rectMode(CORNERS);
  let oRightWidth = 80 - vertWidthR;
  rect(oRightWidth, 0, 80, 10, 5);
  rect(oRightWidth, 10, 80, 20, 5);
  rect(oRightWidth, 20, 80, 30, 5);
  rect(oRightWidth, 30, 80, 40, 5);
  rect(oRightWidth, 40, 80, 50, 5);
  rect(oRightWidth, 50, 80, 60, 5);
  rect(oRightWidth, 60, 80, 70, 5);
  rect(oRightWidth, 90, 80, 100, 5);
  rect(oRightWidth, 100, 80, 110, 5);
  rect(oRightWidth, 110, 80, 120, 5);
  rect(oRightWidth, 120, 80, 130, 5);
  rect(oRightWidth, 130, 80, 140, 5);
  rect(oRightWidth, 140, 80, 150, 5);
  rect(oRightWidth, 150, 80, 160, 5);
  pop(); //Isolates Functions
}

function drawI(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top
  rect(0, 0, 80, 10, 5);
  rect(0, 10, 80, 10, 5);
  //Bottom
  rect(0, 140, 80, 10, 5);
  rect(0, 150, 80, 10, 5);
  //Left
  rectMode(CENTER);
  rect(40, 25, vertWidthC, 10, 5);
  rect(40, 35, vertWidthC, 10, 5);
  rect(40, 45, vertWidthC, 10, 5);
  rect(40, 55, vertWidthC, 10, 5);
  rect(40, 65, vertWidthC, 10, 5);
  rect(40, 75, vertWidthC, 10, 5);
  rect(40, 85, vertWidthC, 10, 5);
  rect(40, 95, vertWidthC, 10, 5);
  rect(40, 105, vertWidthC, 10, 5);
  rect(40, 115, vertWidthC, 10, 5);
  rect(40, 125, vertWidthC, 10, 5);
  rect(40, 135, vertWidthC, 10, 5);
  pop(); //Isolates Functions
}

function drawJ(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //left
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(0, 130, vertWidthL, 10, 5);
  //Bottom
  rect(5, 140, 70, 10, 5);
  rect(10, 150, 60, 10, 5);
  //Right
  rectMode(CORNERS);
  let jRightWidth = 80 - vertWidthR;
  rect(jRightWidth, 0, 80, 10, 5);
  rect(jRightWidth, 10, 80, 20, 5);
  rect(jRightWidth, 20, 80, 30, 5);
  rect(jRightWidth, 30, 80, 40, 5);
  rect(jRightWidth, 40, 80, 50, 5);
  rect(jRightWidth, 50, 80, 60, 5);
  rect(jRightWidth, 60, 80, 70, 5);
  rect(jRightWidth, 70, 80, 80, 5);
  rect(jRightWidth, 80, 80, 90, 5);
  rect(jRightWidth, 90, 80, 100, 5);
  rect(jRightWidth, 100, 80, 110, 5);
  rect(jRightWidth, 110, 80, 120, 5);
  rect(jRightWidth, 120, 80, 130, 5);
  rect(jRightWidth, 130, 80, 140, 5);
  pop(); //Isolates Functions
}

function drawK(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Left
  rect(0, 0, vertWidthL, 10, 5);
  rect(0, 10, vertWidthL, 10, 5);
  rect(0, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(0, 130, vertWidthL, 10, 5);
  rect(0, 140, vertWidthL, 10, 5);
  rect(0, 150, vertWidthL, 10, 5);
  //Middle
  rect(0, 70, 55, 10, 5);
  rect(0, 80, 55, 10, 5);
  //Right
  rectMode(CORNERS);
  let oRightWidth = 60 - vertWidthR;
  rect(oRightWidth + 30, 0, 90, 10, 5);
  rect(oRightWidth + 25, 10, 85, 20, 5);
  rect(oRightWidth + 20, 20, 80, 30, 5);
  rect(oRightWidth + 15, 30, 75, 40, 5);
  rect(oRightWidth + 10, 40, 70, 50, 5);
  rect(oRightWidth + 5, 50, 65, 60, 5);
  rect(oRightWidth, 60, 60, 70, 5);
  rect(oRightWidth, 90, 60, 100, 5);
  rect(oRightWidth + 5, 100, 65, 110, 5);
  rect(oRightWidth + 10, 110, 70, 120, 5);
  rect(oRightWidth + 15, 120, 75, 130, 5);
  rect(oRightWidth + 20, 130, 80, 140, 5);
  rect(oRightWidth + 25, 140, 85, 150, 5);
  rect(oRightWidth + 30, 150, 90, 160, 5);
  pop(); //Isolates Functions
}

function drawL(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //left
  rect(0, 0, vertWidthL, 10, 5);
  rect(0, 10, vertWidthL, 10, 5);
  rect(0, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 70, vertWidthL, 10, 5);
  rect(0, 80, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(0, 130, vertWidthL, 10, 5);
  //Bottom
  rect(0, 140, 80, 10, 5);
  rect(0, 150, 80, 10, 5);
  pop(); //Isolates Functions
}

function drawM(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top Left
  rect(0, 0, vertWidthL, 10, 5);
  rect(0, 10, vertWidthL + 10, 10, 5);
  rect(0, 20, vertWidthL + 20, 10, 5);
  //Left
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 70, vertWidthL, 10, 5);
  rect(0, 80, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(0, 130, vertWidthL, 10, 5);
  rect(0, 140, vertWidthL, 10, 5);
  rect(0, 150, vertWidthL, 10, 5);
  //Top Middle
  //Positioned in center for adjustable width
  rectMode(CENTER);
  rect(50, 35, vertWidthC + 20, 10, 5);
  rect(50, 45, vertWidthC + 10, 10, 5);
  rect(50, 55, vertWidthC, 10, 5);
  rectMode(CORNERS);
  //Top Right
  rect(100 - vertWidthR, 0, 100, 10, 5);
  rect(90 - vertWidthR, 10, 100, 20, 5);
  rect(80 - vertWidthR, 20, 100, 30, 5);
  //Right
  let mRightWidth = 100 - vertWidthR;
  rect(mRightWidth, 30, 100, 40, 5);
  rect(mRightWidth, 40, 100, 50, 5);
  rect(mRightWidth, 50, 100, 60, 5);
  rect(mRightWidth, 60, 100, 70, 5);
  rect(mRightWidth, 70, 100, 80, 5);
  rect(mRightWidth, 80, 100, 90, 5);
  rect(mRightWidth, 90, 100, 100, 5);
  rect(mRightWidth, 100, 100, 110, 5);
  rect(mRightWidth, 110, 100, 120, 5);
  rect(mRightWidth, 120, 100, 130, 5);
  rect(mRightWidth, 130, 100, 140, 5);
  rect(mRightWidth, 140, 100, 150, 5);
  rect(mRightWidth, 150, 100, 160, 5);
  pop(); //Isolates Functions
}

function drawN(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Left
  rect(0, 0, 15, 10, 5);
  rect(0, 10, 20, 10, 5);
  rect(0, 20, 25, 10, 5);
  rect(0, 30, 30, 10, 5);
  rect(0, 40, 35, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 70, vertWidthL, 10, 5);
  rect(0, 80, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(0, 130, vertWidthL, 10, 5);
  rect(0, 140, vertWidthL, 10, 5);
  rect(0, 150, vertWidthL, 10, 5);
  //Middle
  rectMode(CENTER);
  rect(35, 55, 10, 10, 5);
  rect(37.5, 65, 15, 10, 5);
  rect(42.5, 75, 15, 10, 5);
  rect(47.5, 85, 15, 10, 5);
  rect(50, 95, 10, 10, 5);
  //Right
  let nRightWidth = 90 - vertWidthR;
  rectMode(CORNERS);
  // rect(80, 0, 90, 10, 5);
  // rect(90 - vertWidthR, 10, 90, 20, 5);
  // rect(80 - vertWidthR, 20, 90, 30, 5);
  rect(nRightWidth, 0, 90, 10, 5);
  rect(nRightWidth, 10, 90, 20, 5);
  rect(nRightWidth, 20, 90, 30, 5);
  rect(nRightWidth, 30, 90, 40, 5);
  rect(nRightWidth, 40, 90, 50, 5);
  rect(nRightWidth, 50, 90, 60, 5);
  rect(nRightWidth, 60, 90, 70, 5);
  rect(nRightWidth, 70, 90, 80, 5);
  rect(nRightWidth, 80, 90, 90, 5);
  rect(nRightWidth, 90, 90, 100, 5);
  rect(50, 100, 90, 110, 5);
  rect(55, 110, 90, 120, 5);
  rect(60, 120, 90, 130, 5);
  rect(65, 130, 90, 140, 5);
  rect(70, 140, 90, 150, 5);
  rect(75, 150, 90, 160, 5);
  pop(); //Isolates Functions
}

function drawO(x, y, sw, sc) {
  push(); //Isolates functions
  drawC(x, y, sw, sc); //Copies Letter C
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Right
  rectMode(CORNERS);
  let oRightWidth = 85 - vertWidthR;
  rect(oRightWidth, 40, 85, 50, 5);
  rect(oRightWidth, 50, 85, 60, 5);
  rect(oRightWidth, 60, 85, 70, 5);
  rect(oRightWidth, 70, 85, 80, 5);
  rect(oRightWidth, 80, 85, 90, 5);
  rect(oRightWidth, 90, 85, 100, 5);
  rect(oRightWidth, 100, 85, 110, 5);
  rect(oRightWidth, 110, 85, 120, 5);
  pop(); //Isolates functions
}

function drawP(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top
  rect(0, 0, 70, 10, 5);
  rect(0, 10, 80, 10, 5);
  //Left
  rect(0, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(0, 130, vertWidthL, 10, 5);
  rect(0, 140, vertWidthL, 10, 5);
  rect(0, 150, vertWidthL, 10, 5);
  //Middle
  rect(0, 70, 80, 10, 5);
  rect(0, 80, 70, 10, 5);
  //Right
  rectMode(CORNERS);
  let pRightWidth = 80 - vertWidthR;
  rect(pRightWidth + 5, 20, 85, 30, 5);
  rect(pRightWidth + 10, 30, 90, 40, 5);
  rect(pRightWidth + 10, 40, 90, 50, 5);
  rect(pRightWidth + 10, 50, 90, 60, 5);
  rect(pRightWidth + 5, 60, 85, 70, 5);
  pop(); //Isolates functions
}

function drawQ(x, y, sw, sc) {
  push(); //Isolates functions
  drawO(x, y, sw, sc); //Copies Letter O
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Descender
  rectMode(CORNERS);
  let qRightWidth = 75 - vertWidthR;
  rect(qRightWidth, 160, 75, 170, 5);
  rect(qRightWidth + 5, 170, 80, 180, 5);
  pop(); //Isolates functions
}

function drawR(x, y, sw, sc) {
  push(); //Isolates functions
  drawP(x, y, sw, sc); //Copies Letter P
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  rectMode(CORNERS);
  let rRightWidth = 80 - vertWidthR;
  rect(rRightWidth - 20, 90, 60, 100, 5);
  rect(rRightWidth - 15, 100, 65, 110, 5);
  rect(rRightWidth - 10, 110, 70, 120, 5);
  rect(rRightWidth - 5, 120, 75, 130, 5);
  rect(rRightWidth, 130, 80, 140, 5);
  rect(rRightWidth + 5, 140, 85, 150, 5);
  rect(rRightWidth + 10, 150, 90, 160, 5);
  pop(); //Isolates functions
}

function drawS(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top
  rect(15, 0, 55, 10, 5);
  rect(10, 10, 65, 10, 5);
  //Left
  rect(5, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(5, 50, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(5, 130, vertWidthL, 10, 5);
  //Bottom
  rect(10, 140, 65, 10, 5);
  rect(15, 150, 55, 10, 5);
  //Center
  rectMode(CENTER);
  rect(20, 65, vertWidthC, 10, 5);
  rect(32.5, 75, vertWidthC, 10, 5);
  rect(47.5, 85, vertWidthC, 10, 5);
  rect(60, 95, vertWidthC, 10, 5);
  //Right
  rectMode(CORNERS);
  let sRightWidth = 80 - vertWidthR;
  rect(sRightWidth, 20, 80, 30, 5);
  rect(sRightWidth + 5, 30, 85, 40, 5);
  rect(sRightWidth, 100, 80, 110, 5);
  rect(sRightWidth + 5, 110, 85, 120, 5);
  rect(sRightWidth + 5, 120, 85, 130, 5);
  rect(sRightWidth, 130, 80, 140, 5);
  pop(); //Isolates functions
}

function drawT(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top
  rect(0, 0, 80, 10, 5);
  rect(0, 10, 80, 10, 5);
  //Left
  rectMode(CENTER);
  rect(40, 25, vertWidthC, 10, 5);
  rect(40, 35, vertWidthC, 10, 5);
  rect(40, 45, vertWidthC, 10, 5);
  rect(40, 55, vertWidthC, 10, 5);
  rect(40, 65, vertWidthC, 10, 5);
  rect(40, 75, vertWidthC, 10, 5);
  rect(40, 85, vertWidthC, 10, 5);
  rect(40, 95, vertWidthC, 10, 5);
  rect(40, 105, vertWidthC, 10, 5);
  rect(40, 115, vertWidthC, 10, 5);
  rect(40, 125, vertWidthC, 10, 5);
  rect(40, 135, vertWidthC, 10, 5);
  rect(40, 145, vertWidthC, 10, 5);
  rect(40, 155, vertWidthC, 10, 5);
  pop(); //Isolates Functions
}

function drawU(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Left
  rect(0, 0, vertWidthL, 10, 5);
  rect(0, 10, vertWidthL, 10, 5);
  rect(0, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 70, vertWidthL, 10, 5);
  rect(0, 80, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  rect(5, 130, vertWidthL, 10, 5);
  //Bottom
  rect(10, 140, 65, 10, 5);
  rect(15, 150, 55, 10, 5);
  //Right
  rectMode(CORNERS);
  let vRightWidth = 85 - vertWidthR;
  rect(vRightWidth, 0, 85, 10, 5);
  rect(vRightWidth, 10, 85, 20, 5);
  rect(vRightWidth, 20, 85, 30, 5);
  rect(vRightWidth, 30, 85, 40, 5);
  rect(vRightWidth, 40, 85, 50, 5);
  rect(vRightWidth, 50, 85, 60, 5);
  rect(vRightWidth, 60, 85, 70, 5);
  rect(vRightWidth, 70, 85, 80, 5);
  rect(vRightWidth, 80, 85, 90, 5);
  rect(vRightWidth, 90, 85, 100, 5);
  rect(vRightWidth, 100, 85, 110, 5);
  rect(vRightWidth, 110, 85, 120, 5);
  rect(vRightWidth, 120, 85, 130, 5);
  rect(vRightWidth - 5, 130, 80, 140, 5);
  pop(); //Isolates Functions
}

function drawV(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Left
  rect(0, 0, vertWidthL, 10, 5);
  rect(0, 10, vertWidthL, 10, 5);
  rect(0, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 70, vertWidthL, 10, 5);
  rect(0, 80, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(5, 100, vertWidthL, 10, 5);
  rect(10, 110, vertWidthL, 10, 5);
  rect(15, 120, vertWidthL, 10, 5);
  //Bottom
  rect(20, 130, 40, 10, 5);
  rect(25, 140, 30, 10, 5);
  rect(30, 150, 20, 10, 5);
  //Right
  rectMode(CORNERS);
  let vRightWidth = 80 - vertWidthR;
  rect(vRightWidth, 0, 80, 10, 5);
  rect(vRightWidth, 10, 80, 20, 5);
  rect(vRightWidth, 20, 80, 30, 5);
  rect(vRightWidth, 30, 80, 40, 5);
  rect(vRightWidth, 40, 80, 50, 5);
  rect(vRightWidth, 50, 80, 60, 5);
  rect(vRightWidth, 60, 80, 70, 5);
  rect(vRightWidth, 70, 80, 80, 5);
  rect(vRightWidth, 80, 80, 90, 5);
  rect(vRightWidth, 90, 80, 100, 5);
  rect(vRightWidth - 5, 100, 75, 110, 5);
  rect(vRightWidth - 10, 110, 70, 120, 5);
  rect(vRightWidth - 15, 120, 65, 130, 5);
  pop(); //Isolates Functions
}

function drawW(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Bottom Left
  rect(0, 130, vertWidthL + 20, 10, 5);
  rect(0, 140, vertWidthL + 10, 10, 5);
  rect(0, 150, vertWidthL, 10, 5);
  //Left
  rect(0, 0, vertWidthL, 10, 5);
  rect(0, 10, vertWidthL, 10, 5);
  rect(0, 20, vertWidthL, 10, 5);
  rect(0, 30, vertWidthL, 10, 5);
  rect(0, 40, vertWidthL, 10, 5);
  rect(0, 50, vertWidthL, 10, 5);
  rect(0, 60, vertWidthL, 10, 5);
  rect(0, 70, vertWidthL, 10, 5);
  rect(0, 80, vertWidthL, 10, 5);
  rect(0, 90, vertWidthL, 10, 5);
  rect(0, 100, vertWidthL, 10, 5);
  rect(0, 110, vertWidthL, 10, 5);
  rect(0, 120, vertWidthL, 10, 5);
  //Bottom Middle
  //Positioned in center for adjustable width
  rectMode(CENTER);
  rect(50, 125, vertWidthC + 20, 10, 5);
  rect(50, 115, vertWidthC + 10, 10, 5);
  rect(50, 105, vertWidthC, 10, 5);
  rectMode(CORNERS);
  //Bottom Right
  rect(80 - vertWidthR, 130, 100, 140, 5);
  rect(90 - vertWidthR, 140, 100, 150, 5);
  rect(100 - vertWidthR, 150, 100, 160, 5);
  //Right
  let mRightWidth = 100 - vertWidthR;
  rect(mRightWidth, 0, 100, 10, 5);
  rect(mRightWidth, 10, 100, 20, 5);
  rect(mRightWidth, 20, 100, 30, 5);
  rect(mRightWidth, 30, 100, 40, 5);
  rect(mRightWidth, 40, 100, 50, 5);
  rect(mRightWidth, 50, 100, 60, 5);
  rect(mRightWidth, 60, 100, 70, 5);
  rect(mRightWidth, 70, 100, 80, 5);
  rect(mRightWidth, 80, 100, 90, 5);
  rect(mRightWidth, 90, 100, 100, 5);
  rect(mRightWidth, 100, 100, 110, 5);
  rect(mRightWidth, 110, 100, 120, 5);
  rect(mRightWidth, 120, 100, 130, 5);
  pop(); //Isolates Functions
}

function drawX(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //left
  rect(5, 0, vertWidthL, 10, 5);
  rect(10, 10, vertWidthL, 10, 5);
  rect(15, 20, vertWidthL, 10, 5);
  rect(20, 30, vertWidthL, 10, 5);
  rect(25, 40, vertWidthL, 10, 5);
  rect(25, 100, vertWidthL, 10, 5);
  rect(20, 110, vertWidthL, 10, 5);
  rect(15, 120, vertWidthL, 10, 5);
  rect(10, 130, vertWidthL, 10, 5);
  rect(5, 140, vertWidthL, 10, 5);
  rect(0, 150, vertWidthL, 10, 5);
  //Middle
  rect(30, 50, 45, 10, 5);
  rect(35, 60, 35, 10, 5);
  rect(40, 70, 25, 10, 5);
  rect(35, 80, 35, 10, 5);
  rect(30, 90, 45, 10, 5);
  //Right
  rectMode(CORNERS);
  let jRightWidth = 80 - vertWidthR;
  rect(jRightWidth + 20, 0, 100, 10, 5);
  rect(jRightWidth + 15, 10, 95, 20, 5);
  rect(jRightWidth + 10, 20, 90, 30, 5);
  rect(jRightWidth + 5, 30, 85, 40, 5);
  rect(jRightWidth, 40, 80, 50, 5);
  rect(jRightWidth, 100, 80, 110, 5);
  rect(jRightWidth + 5, 110, 85, 120, 5);
  rect(jRightWidth + 10, 120, 90, 130, 5);
  rect(jRightWidth + 15, 130, 95, 140, 5);
  rect(jRightWidth + 20, 140, 100, 150, 5);
  rect(jRightWidth + 25, 150, 105, 160, 5);
  pop(); //Isolates Functions
}

function drawY(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top Left
  rect(0, 0, vertWidthL, 10, 5);
  rect(0, 10, vertWidthL, 10, 5);
  rect(0, 20, vertWidthL, 10, 5);
  rect(5, 30, vertWidthL, 10, 5);
  rect(10, 40, vertWidthL, 10, 5);
  rect(15, 50, vertWidthL, 10, 5);
  //Top Right
  rectMode(CORNERS);
  rect(80 - vertWidthR, 0, 80, 10, 5);
  rect(80 - vertWidthR, 10, 80, 20, 5);
  rect(80 - vertWidthR, 20, 80, 30, 5);
  rect(75 - vertWidthR, 30, 75, 40, 5);
  rect(70 - vertWidthR, 40, 70, 50, 5);
  rect(65 - vertWidthR, 50, 65, 60, 5);
  //Middle
  rectMode(CENTER);
  rect(40, 65, vertWidthC + 15, 10, 5);
  rect(40, 75, vertWidthC + 5, 10, 5);
  //Bottom
  rect(40, 85, vertWidthC, 10, 5);
  rect(40, 95, vertWidthC, 10, 5);
  rect(40, 105, vertWidthC, 10, 5);
  rect(40, 115, vertWidthC, 10, 5);
  rect(40, 125, vertWidthC, 10, 5);
  rect(40, 135, vertWidthC, 10, 5);
  rect(40, 145, vertWidthC, 10, 5);
  rect(40, 155, vertWidthC, 10, 5);
  pop(); //Isolates Functions
}

function drawZ(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Top
  rect(0, 0, 80, 10, 5);
  rect(0, 10, 80, 10, 5);
  //Bottom
  rect(5, 140, 75, 10, 5);
  rect(0, 150, 80, 10, 5);
  //Right
  rectMode(CORNERS);
  let vRightWidth = 80 - vertWidthR;
  rect(vRightWidth, 20, 80, 30, 5);
  rect(vRightWidth, 30, 80, 40, 5);
  //Middle
  rectMode(CENTER);
  rect(65, 45, vertWidthC, 10, 5);
  rect(60, 55, vertWidthC, 10, 5);
  rect(55, 65, vertWidthC, 10, 5);
  rect(50, 75, vertWidthC, 10, 5);
  rect(45, 85, vertWidthC, 10, 5);
  rect(40, 95, vertWidthC, 10, 5);
  rect(35, 105, vertWidthC, 10, 5);
  rect(30, 115, vertWidthC, 10, 5);
  rect(25, 125, vertWidthC, 10, 5);
  rect(20, 135, vertWidthC, 10, 5);
  pop(); //Isolates Functions
}

function drawPeriod(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Left
  rect(0, 140, vertWidthL, 10, 5);
  rect(0, 150, vertWidthL, 10, 5);
  pop(); //Isolates Functions
}

function drawDash(x, y, sw, sc) {
  push(); //Isolates functions
  //Function Properties
  translate(x, y);
  strokeWeight(sw);
  stroke(sc);
  //Middle
  rect(0, 70, 80, 10, 5);
  rect(0, 80, 80, 10, 5);
  pop(); //Isolates Functions
}
