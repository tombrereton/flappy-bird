export default class Player {
  constructor(game) {
    this.game = game;
    this.x = 20;
    this.y;
    this.spriteWidth = 200;
    this.spriteHeight = 200;
    this.width = 100;
    this.height = 100;
    this.speedY;
    this.flapSpeed;
    this.collisionX;
    this.collisionY;
    this.collisionRadius;
    this.collided;
  }

  draw() {
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.game.ctx.beginPath();
    this.game.ctx.arc(
      this.collisionX,
      this.collisionY,
      this.collisionRadius,
      0,
      Math.PI * 2,
    );
    this.game.ctx.stroke();
  }

  update() {
    this.y += this.speedY;
    this.collisionY = this.y + this.height * 0.5;
    if (!this.isTouchingBottom()) {
      this.speedY += this.game.gravity;
    }
    if (this.isTouchingBottom()) {
      this.y = this.game.height - this.height;
    }
  }

  isTouchingTop() {
    return this.y <= 0;
  }

  isTouchingBottom() {
    return this.y >= this.game.height - this.height;
  }

  resize() {
    this.width = this.spriteWidth * this.game.ratio;
    this.height = this.spriteHeight * this.game.ratio;
    this.y = this.game.height * 0.5 - this.height * 0.5;
    this.speedY = -5 * this.game.ratio;
    this.flapSpeed = 5 * this.game.ratio;
    this.collisionRadius = this.width * 0.5;
    this.collisionX = this.x + this.width * 0.5;
    this.collided = false;
  }

  flap() {
    if (!this.isTouchingTop()) {
      this.speedY = -this.flapSpeed;
    }
  }
}
