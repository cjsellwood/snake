export class TopBar {
  private score: number;
  private scoreElement: HTMLSpanElement;
  private highScore: number;
  private highScoreElement: HTMLSpanElement;
  private playButton: HTMLButtonElement;
  public running: Boolean;
  public restarting: Boolean;
  private runGame: Function;

  constructor(runGame: Function) {
    this.score = 0;
    this.scoreElement = document.getElementById("score")! as HTMLSpanElement;
    this.highScore = 0;
    this.highScoreElement = document.getElementById(
      "high-score"
    )! as HTMLSpanElement;
    this.playButton = document.getElementById(
      "play-button"
    )! as HTMLButtonElement;
    this.running = false;
    this.restarting = false;
    this.runGame = runGame;

    this.initialize();
  }

  // Add one to score and store if new high score
  incrementScore() {
    this.score += 1;
    this.scoreElement.textContent = this.score.toString();

    // Update high score if less than score
    if (this.score > this.highScore) {
      this.highScore = this.score;
      this.highScoreElement.textContent = this.highScore.toString();
      localStorage.setItem("highScore", this.highScore.toString());
    }
  }

  // End game on lose condition
  endGame() {
    this.running = false;
    this.playButton.textContent = "Play";
  }

  // Clear interval of past game and start a new game
  restartGame(interval: NodeJS.Timer) {
    this.restarting = false;
    this.score = 0;
    this.scoreElement.textContent = this.score.toString();
    clearInterval(interval);
    this.startGame();
  }

  // Run the game loop
  startGame() {
    this.runGame();
  }

  private initialize() {
    // Add event listener for play/restart button
    this.playButton.addEventListener("click", () => {
      // If not running start a new game
      if (!this.running) {
        this.restarting = false;
        this.running = true;
        this.score = 0;
        this.scoreElement.textContent = this.score.toString();
        this.playButton.textContent = "Restart";
        this.startGame();
      } else {
        // If already running exit current game and start a new game
        this.restarting = true;
      }
    });

    // Retrieve previous high score
    const storedScore = localStorage.getItem("highScore");
    if (storedScore) {
      this.highScore = Number(storedScore);
      this.highScoreElement.textContent = storedScore;
    }
  }
}
