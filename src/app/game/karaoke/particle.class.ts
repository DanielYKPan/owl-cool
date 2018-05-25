/**
 * particle.class
 */

export class Particle {

    public x: number;
    public y: number;
    public r: number; // radius of the circumcircle
    public l: number; // polygon sides
    public a: number; // angle between polygon vertices
    public rot: number; // polygon rotation
    public speed: number;
    public rotSpeed: number;
    public color: string;
    private colors = ['#93DFB8', '#FFC8BA', '#E3AAD6', '#B5D8EB', '#FFBDD8'];

    constructor(private ctx: any,  private cw: number, private ch: number ) {
        this.x = Math.random() * cw;
        this.y = Math.random() * ch;
        this.r = 15 + Math.floor(Math.random() * 20);
        this.l = 3 + Math.floor(Math.random() * 2);
        this.a = 2 * Math.PI / this.l;
        this.rot = Math.random() * Math.PI;
        this.speed = 1 + Math.random() / 2;
        this.rotSpeed = .02 + Math.random() * .005;
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    public update() {
        if (this.y < -this.r) {
            this.y = this.ch + this.r;
            this.x = Math.random() * this.cw;
        }
        this.y -= this.speed;
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.rot);
        this.ctx.beginPath();
        for (let i = 0; i < this.l; i++) {
            const x = this.r * Math.cos(this.a * i);
            const y = this.r * Math.sin(this.a * i);
            this.ctx.lineTo(x, y);
        }
        this.ctx.closePath();
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();

        this.ctx.restore();
    }
}
