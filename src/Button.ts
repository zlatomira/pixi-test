import * as PIXI from "pixi.js";

import SpineAnimation from "./SpineAnimation"

export default class Button extends PIXI.Sprite {

    private button: PIXI.Sprite;
    appStage: any;
    spineAnimation: SpineAnimation;
    app: any;

    constructor(app) {
        super();
        this.button = PIXI.Sprite.from("assets/button.png");
        this.button.position.x = 300;
        this.button.position.y = 500;
        this.button.buttonMode = true;
        this.button.interactive = true;
        this.button.on('pointerdown', (event) => this.onClick());
        this.app = app;
        this.appStage = app.stage;
        this.spineAnimation = new SpineAnimation();
    }

    show() {
        this.appStage.addChild(this.button);
    }

    onClick() {
        this.spineAnimation.start()
        this.app.destroy(true);
    }
}