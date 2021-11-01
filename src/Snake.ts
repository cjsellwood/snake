import { SnakeParts, Direction, Coordinate } from "./types";

export class Snake {
  private length: number;
  public parts: SnakeParts;
  private direction: Direction;
  private lastDirection: Direction;
  constructor(height: number) {
    this.length = 3;
    // Random number between 1 and 10
    const startRow = Math.floor(Math.random() * (height - 2) + 1);
    this.parts = [
      [startRow, 3],
      [startRow, 2],
      [startRow, 1],
    ];
    this.direction = "right";
    this.lastDirection = "right";

    this.addKeyListeners();
  }

  // Move snake body in set direction
  move(fruitPosition: Coordinate) {
    // console.log(this.direction, this.parts);
    let newPart: Coordinate = [-1, -1];

    // Create new part for front of snake and set which way it was moving
    if (this.direction === "right") {
      this.lastDirection = "right";
      newPart = [this.parts[0][0], this.parts[0][1] + 1];
    } else if (this.direction === "down") {
      this.lastDirection = "down";
      newPart = [this.parts[0][0] + 1, this.parts[0][1]];
    } else if (this.direction === "left") {
      this.lastDirection = "left";
      newPart = [this.parts[0][0], this.parts[0][1] - 1];
    } else if (this.direction === "up") {
      this.lastDirection = "up";
      newPart = [this.parts[0][0] - 1, this.parts[0][1]];
    }

    // If collecting fruit, don't take off back of snake
    if (newPart[0] === fruitPosition[0] && newPart[1] === fruitPosition[1]) {
      this.parts = [newPart, ...this.parts];
      // fruit.collect();
      return true;
    } else {
      // Add new front of snake and remove back part from snake
      this.parts = [newPart, ...this.parts.slice(0, this.parts.length - 1)];
    }
  }

  hitSelf(): boolean {
    let hitSelf: boolean = false;
    const snakeHead = this.parts[0];
    for (let part of this.parts.slice(1, this.parts.length)) {
      if (snakeHead[0] === part[0] && snakeHead[1] === part[1]) {
        return true;
      }
    }
    return false;
  }

  // Add snake controls with arrow keys or W A S D
  private addKeyListeners() {
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      switch (e.key) {
        case "d":
        case "ArrowRight":
          if (this.lastDirection !== "left") {
            this.direction = "right";
          }
          break;
        case "a":
        case "ArrowLeft":
          if (this.lastDirection !== "right") {
            this.direction = "left";
          }
          break;
        case "w":
        case "ArrowUp":
          if (this.lastDirection !== "down") {
            this.direction = "up";
          }
          break;
        case "s":
        case "ArrowDown":
          if (this.lastDirection !== "up") {
            this.direction = "down";
          }
          break;
        default:
          break;
      }
    });
  }
}
