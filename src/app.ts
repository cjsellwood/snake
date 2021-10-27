import "./app.css";

type Grid = HTMLDivElement[][];

class Board {
  private root: HTMLDivElement;
  private grid: Grid;
  constructor(rootDiv: HTMLDivElement) {
    this.root = rootDiv;
    this.grid = this.generateGrid(12, 12);

    this.renderBoard();
  }

  changeSquare(row: number, column: number) {
    this.grid[row][column].classList.add("snake");
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
    console.log(grid);

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

const board = new Board(document.getElementById("root")! as HTMLDivElement);