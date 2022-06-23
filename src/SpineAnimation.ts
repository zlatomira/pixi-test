import * as PIXI from "pixi.js";
import { Spine } from 'pixi-spine';

export default class SpineAnimation {


    onAssetsLoaded(loader, res) {
        const app = new PIXI.Application();
        document.body.appendChild(app.view);
        let background = PIXI.Sprite.from('assets/iP4_BGtile.jpg');
        let background2 = PIXI.Sprite.from('assets/iP4_BGtile.jpg');
        let foreground = PIXI.Sprite.from('assets/iP4_ground.png');
        let foreground2 = PIXI.Sprite.from('assets/iP4_ground.png');
        foreground.anchor.set(0, 0.7);
        foreground.position.y = 600;
        foreground2.anchor.set(0, 0.7);
        foreground2.position.y = 600;


        app.stage.addChild(background, background2, foreground, foreground2);

        const pixie = new Spine(res.pixie.spineData);

        const scale = 0.3;

        pixie.x = 1024 / 3;
        pixie.y = 500;

        pixie.scale.x = pixie.scale.y = scale;

        app.stage.addChild(pixie);

        pixie.stateData.setMix('running', 'jump', 0.2);
        pixie.stateData.setMix('jump', 'running', 0.4);

        pixie.state.setAnimation(0, 'running', true);

        app.stage.on('pointerdown', onTouchStart);

        function onTouchStart() {
            pixie.state.setAnimation(0, 'jump', false);
            pixie.state.addAnimation(0, 'running', true, 0);
        }

        app.start();
    }

    start() {
        const loader = new PIXI.Loader();
        // load spine data
        loader
            .add('pixie', 'assets/spinner.json')
            .load(this.onAssetsLoaded);
    }

}