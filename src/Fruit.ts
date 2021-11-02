import { Coordinate, SnakeParts } from "./types";

export class Fruit {
  public position: Coordinate;
  public collected: number;
  private height: number;
  private width: number;
  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
    const startRow = Math.floor(Math.random() * (height - 2) + 1);
    const startColumn = Math.floor(
      Math.random() * (width - 2 - width / 2) + width / 2
    );
    this.position = [startRow, startColumn];
    this.collected = 0;
  }

  // Upon collection by snake
  collect(snakeParts: SnakeParts) {
    this.collected += 1;
    this.newFruit(snakeParts);
  }

  // Create new fruit
  newFruit(snake: Coordinate[]) {
    let positionFree = false;
    let row: number | undefined;
    let col: number | undefined;

    // Reposition fruit until it finds a free square
    checkFree: while (!positionFree) {
      row = Math.floor(Math.random() * (this.height - 2 - 1 + 1) + 1);
      col = Math.floor(Math.random() * (this.width - 2 - 1 + 1) + 1);
      for (let part of snake) {
        if (part[0] === row && part[1] === col) {
          console.log("Overlap");
          continue checkFree;
        }
      }
      positionFree = true;
    }
    if (row && col) {
      this.position = [row, col];
    }
  }
}
