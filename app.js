import { Ball } from "./ball.js";
import { Block } from "./block.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageHeight, this.stageWidth, 60, 3);
    this.block = new Block(1500, 30, 0, 500)

    window.requestAnimationFrame(this.animate.bind(this));

  }

  resize() {
    this.stageHeight = document.body.clientHeight;
    this.stageWidth = document.body.offsetWidth;

    this.canvas.height = this.stageHeight * 2;
    this.canvas.width = this.stageWidth * 2;
    this.ctx.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)

    this.block.draw(this.ctx)
    this.ball.draw(this.ctx, this.stageHeight, this.stageWidth, this.block);
    
  }
}

window.onload = () => {
  new App();
};

