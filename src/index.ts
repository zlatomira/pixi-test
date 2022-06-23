import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

import Button from "./Button"

import "./style.css";

gsap.registerPlugin(PixiPlugin);
// give the plugin a reference to the PIXI object
PixiPlugin.registerPIXI(PIXI);


const app = new PIXI.Application({
    backgroundColor: 0xd3d3d3,
    width: 800,
    height: 600,
});

app.stage.interactive = true;

const button = new Button(app);

window.onload = async (): Promise<void> => {
    document.body.appendChild(app.view);

    const trolls = PIXI.Sprite.from('assets/trolls.png');
    trolls.position.x = 200;
    trolls.position.y = 100;

    app.stage.addChild(trolls);


    function showButton() {
        button.show()
    }


    const tl = gsap.timeline({
        paused: true,
        defaults: { duration: 2 },
        onComplete: showButton
    });

    tl.fromTo(trolls, { alpha: 0 }, { alpha: 1 }, "+=1")
    tl.restart();
};
