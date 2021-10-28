import "./app.css";

type Grid = HTMLDivElement[][];

class Board {
  private root: HTMLDivElement;
  private grid: Grid;
  constructor(height: number, width: number, rootDiv: HTMLDivElement) {
    this.root = rootDiv;
    this.grid = this.generateGrid(width, height);

    this.renderBoard();
  }

  renderSnake(snake: SnakeParts): void {
    // console.log(snake);

    // Clear previous snake parts
    for (let row of this.grid) {
      for (let element of row) {
        if (element.classList.contains("snake")) {
          element.classList.remove("snake");
        }
      }
    }

    // Render snake parts
    for (let part of snake) {
      this.grid[part[0]][part[1]].classList.add("snake");
    }
  }

  hitEdge(snake: SnakeParts): boolean {
    let hitEdge: boolean = false;
    // Check if snake has hit top or bottom edge
    if (snake[0][0] === 0 || snake[0][0] === this.grid.length - 1) {
      hitEdge = true;
    }

    // Check if snake has hit left or right edge
    if (snake[0][1] === 0 || snake[0][1] === this.grid[0].length - 1) {
      hitEdge = true;
    }

    return hitEdge;
  }

  // Create grid elements
  private generateGrid(height: number, width: number): Grid {
    const grid: Grid = [];
    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Add edge styling
        if (j === 0 || j === width - 1 || i === 0 || i === height - 1) {
          square.classList.add("edge");
        }
        row.push(square);
      }
      grid.push(row);
    }

    return grid;
  }

  // Create starting board and add to DOM
  private renderBoard() {
    for (let row of this.grid) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      for (let element of row) {
        rowDiv.appendChild(element);
      }
      this.root.appendChild(rowDiv);
    }
  }
}

type SnakeParts = [number, number][];
type Direction = "up" | "down" | "left" | "right";

class Snake {
  private length: number;
  public parts: SnakeParts;
  private direction: Direction;
  private lastDirection: Direction;
  constructor(height: number) {
    this.length = 3;
    // Random number between 1 and 10
    const startHeight = Math.floor(Math.random() * (height - 2) + 1);
    this.parts = [
      [startHeight, 3],
      [startHeight, 2],
      [startHeight, 1],
    ];
    this.direction = "right";
    this.lastDirection = "right";

    this.addKeyListeners();
  }

  // Move snake body in set direction
  move() {
    // console.log(this.direction, this.parts);
    let newPart: [number, number] = [-1, -1];

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

    // Add new front of snake and remove back part from snake
    this.parts = [newPart, ...this.parts.slice(0, this.parts.length - 1)];
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

const height = 24;
const width = 24;
const board = new Board(
  height,
  width,
  document.getElementById("root")! as HTMLDivElement
);
const snake = new Snake(height);

board.renderSnake(snake.parts);

const gameLoop = setInterval(() => {
  snake.move();
  board.renderSnake(snake.parts);
  // Check if edge was hit
  const hitEdge = board.hitEdge(snake.parts);

  // Game over
  if (hitEdge) {
    clearInterval(gameLoop);
  }
}, 200);
