import Player from "./player.js";
import Background from "./background.js";

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.baseHeight = 720;
    this.ratio = this.height / this.baseHeight;
    this.background = new Background(this);
    this.player = new Player(this);
    this.gravity;
    this.speed;

    this.resize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", (e) => {
      this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
    });
    this.canvas.addEventListener("mousedown", (e) => {
      this.player.flap();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === " ") this.player.flap();
    });
    this.canvas.addEventListener("touchstart", (e) => {
      this.player.flap();
    });
  }

  render() {
    this.background.update();
    this.background.draw();
    this.player.update();
    this.player.draw();
  }

  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx.fillStyle = "red";
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ratio = this.height / this.baseHeight;

    this.gravity = 0.15 * this.ratio;
    this.speed = 3;
    this.background.resize();
    this.player.resize();
  }
}

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  const game = new Game(canvas, ctx);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.render();
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
});
