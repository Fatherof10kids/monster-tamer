import { BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.PRELOAD_SCENE,
        });
        console.log(SCENE_KEYS);
    };

    // init() {
    //     console.log("init");
    // }

    preload() {
        console.log(`[${SCENE_KEYS.PRELOAD_SCENE}:preload] invoked`);
        const monsterTamerAssetPath = 'assets/images/monster-tamer';
        const kennyAssetPath = 'assets/images/kenneys-assets';
        //battle backgrounds
        this.load.image(BATTLE_BACKGROUND_ASSET_KEYS.FOREST,`${monsterTamerAssetPath}/battle-backgrounds/forest-background.png`);
        //battle assets
        this.load.image(BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,`${kennyAssetPath}/ui-space-expansion/custom-ui.png`);
        
        //health bar assets
        this.load.image(HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,`${kennyAssetPath}/ui-space-expansion/barHorizontal_green_right.png`);
        this.load.image(HEALTH_BAR_ASSET_KEYS.LEFT_CAP,`${kennyAssetPath}/ui-space-expansion/barHorizontal_green_left.png`);
        this.load.image(HEALTH_BAR_ASSET_KEYS.MIDDLE,`${kennyAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`);

        //monster assets
        this.load.image(MONSTER_ASSET_KEYS.IGUANIGNITE,`${monsterTamerAssetPath}/monsters/iguanignite.png`);
        this.load.image(MONSTER_ASSET_KEYS.CARNODUSK,`${monsterTamerAssetPath}/monsters/carnodusk.png`);

    }

    create() {
        console.log(`[${SCENE_KEYS.PRELOAD_SCENE}:create] invoked`);
        this.scene.start(SCENE_KEYS.BATTLE_SCENE);
    }

    // update() {
    //     console.log("update");
    // }

}