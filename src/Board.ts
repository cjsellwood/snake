import { Grid, SnakeParts, Coordinate } from "./types";

export class Board {
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

  renderFruit(position: Coordinate) {
    // Remove any old fruit
    for (let row of this.grid) {
      for (let element of row) {
        if (element.classList.contains("fruit")) {
          element.classList.remove("fruit");
        }
      }
    }

    // Add fruit to board
    this.grid[position[0]][position[1]].classList.add("fruit");
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
