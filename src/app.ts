import "./app.css";
import { Board } from "./Board";
import { Snake } from "./Snake";
import { Fruit } from "./Fruit";

const height = 24;
const width = 24;
const board = new Board(
  height,
  width,
  document.getElementById("root")! as HTMLDivElement
);

const runGame = () => {
  const snake = new Snake(height);
  const fruit = new Fruit(height, width);

  board.renderSnake(snake.parts);
  board.renderFruit(fruit.position);

  const gameLoop = setInterval(() => {
    // Move snake and check if fruit collected
    const fruitCollected = snake.move(fruit.position);

    if (fruitCollected) {
      fruit.collect(snake.parts);
      board.renderFruit(fruit.position);
    }
    board.renderSnake(snake.parts);

    // Check if edge was hit
    const hitEdge = board.hitEdge(snake.parts);
    const hitSelf = snake.hitSelf();

    // Game over
    if (hitEdge || hitSelf) {
      clearInterval(gameLoop);
      console.log(fruit.collected);
    }
  }, 100);
};
