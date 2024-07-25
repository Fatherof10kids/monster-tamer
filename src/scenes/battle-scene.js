import { BATTLE_BACKGROUND_ASSET_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class BattleScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.BATTLE_SCENE,
        });
        console.log(SCENE_KEYS);
    };

    // init() {
    //     console.log("init");
    // }

    preload() {
        console.log(`[${SCENE_KEYS.BATTLE_SCENE}:preload] invoked`);

    }

    create() {
        console.log(`[${SCENE_KEYS.BATTLE_SCENE}:create] invoked`);

        //create background
        this.add.image(0,0,BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0);
        
        //render out the player and enemy monster
        this.add.image(768, 144, MONSTER_ASSET_KEYS.CARNODUSK, 0);
        this.add.image(256, 316, MONSTER_ASSET_KEYS.IGUANIGNITE, 0).setFlipX(true);

    }

    // update() {
    //     console.log("update");
    // }

}