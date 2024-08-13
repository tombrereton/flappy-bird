export default class Player {
  constructor(game) {
    this.game = game;
    this.x = 50;
    this.y = 50;
    this.spriteWidth = 200;
    this.spriteHeight = 200;
    this.width = 100;
    this.height = 100;
    this.speedY = 0;
  }
  draw() {
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.y += this.speedY;
    if (!this.isTouchingBottom()) {
      this.speedY += this.game.gravity;
    }

    //bottom boundary
    if (this.isTouchingBottom()) {
      this.y = this.game.height - this.height;
      console.log(this.speedY);
    }
  }

  isTouchingBottom() {
    return this.y >= this.game.height - this.height;
  }
  resize() {
    this.width = this.spriteWidth * this.game.ratio;
    this.height = this.spriteHeight * this.game.ratio;
  }
}
