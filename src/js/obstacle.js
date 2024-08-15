export default class Obstacle {
  constructor(game, x) {
    this.game = game;
    this.spriteWidth = 120;
    this.spriteHeight = 120;
    this.scaleWidth = this.spriteWidth * this.game.ratio;
    this.scaleHeight = this.spriteHeight * this.game.ratio;
    this.x = x;
    this.obstacles = [];
    this.numberofObstacles = 10;
    this.y = this.game.height * 0.5 - this.scaleHeight;
  }
  update() {
    this.x -= this.game.speed;
  }
  draw() {
    this.game.ctx.fillRect(this.x, this.y, this.scaleWidth, this.scaleHeight);
  }
  resize() {
    this.scaleWidth = this.spriteWidth * this.game.ratio;
    this.scaleHeight = this.spriteHeight * this.game.ratio;
  }
}
