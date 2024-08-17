export default class Obstacle {
  constructor(game, x) {
    this.game = game;
    this.spriteWidth = 120;
    this.spriteHeight = 120;
    this.scaleWidth = this.spriteWidth * this.game.ratio;
    this.scaleHeight = this.spriteHeight * this.game.ratio;
    this.x = x;
    this.y = Math.random() * (this.game.height - this.scaleHeight);
    this.speedY =
      Math.random() < 0.5 ? -1 * this.game.ratio : 1 * this.game.ratio;
  }
  update() {
    this.x -= this.game.speed;
    this.y += this.speedY;
    if (this.y <= 0 || this.y >= this.game.height - this.scaleHeight) {
      this.speedY *= -1;
    }
    if (this.isOffScreen()) {
      this.markedForDeletion = true;
      this.game.obstacles = this.game.obstacles.filter(
        (obstacle) => !obstacle.markedForDeletion,
      );
      console.log(this.game.obstacles.length);
      this.game.score++;
      if (this.game.obstacles.length <= 0) this.game.gameOver = true;
    }
  }
  draw() {
    this.game.ctx.fillRect(this.x, this.y, this.scaleWidth, this.scaleHeight);
  }
  resize() {
    this.scaleWidth = this.spriteWidth * this.game.ratio;
    this.scaleHeight = this.spriteHeight * this.game.ratio;
  }
  isOffScreen() {
    return this.x < -this.scaleWidth;
  }
}
