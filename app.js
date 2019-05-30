// ======================

const rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
  name: "rogueOne"
};

const matrix = [];
for (let i = 0; i <= 9; i++) {
  matrix[i] = [];
  for (let j = 0; j <= 9; j++) {
    matrix[i][j] = "space";
  }
}

// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case (rover.direction = "N"):
      rover.direction = "W";
      break;
    case (rover.direction = "W"):
      rover.direction = "S";
      break;
    case (rover.direction = "S"):
      rover.direction = "E";
      break;
    default:
      rover.direction = "N";
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case (rover.direction = "N"):
      rover.direction = "E";
      break;
    case (rover.direction = "E"):
      rover.direction = "S";
      break;
    case (rover.direction = "S"):
      rover.direction = "W";
      break;
    case (rover.direction = "W"):
      rover.direction = "N";
      break;
    default:
      rover.direction = "N";
  }
}

function moveForward(rover) {
  console.log("moveForward was called");
  switch (rover.direction) {
    case (rover.direction = "N"):
      rover.y === 0 ? false : rover.y--;
    case (rover.direction = "S"):
      rover.y === 9 ? false : rover.y++;
    case (rover.direction = "E"):
      rover.x === 9 ? false : rover.x++;
    case (rover.direction = "W"):
      rover.x === 0 ? false : rover.x--;
  }
}

function moveBack(rover) {
  switch (rover.direction) {
    case (rover.direction = "N"):
      rover.y === 9 ? false : rover.y++;
    case (rover.direction = "S"):
      rover.y === 0 ? false : rover.y--;
    case (rover.direction = "W"):
      rover.x === 9 ? false : rover.x--;
    case rover.direction === "E":
      rover.x === 0 ? false : rover.x++;
  }
}

function giveCommands(commands) {
  commands = ["f", "r", "l", "b"];
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "f") {
      moveForward(rover);
      rover["travelLog"].push(rover.x, rover.y);
    } else if (commands[i] === "b") {
      moveBack(rover);
      rover["travelLog"].push(rover.x, rover.y);
    } else if (commands[i] === "r") {
      turnRight(rover);
    } else if (commands[i] === "l") {
      turnLeft(rover);
    }
  }
  return rover["travelLog"];
}
