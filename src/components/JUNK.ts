import {loadAsset} from "../utils/utils";
import {SPRITE_SHEET_CONFIGS, SPRITE_SHEET_IMAGES} from "../Images";
import {Engine} from "../Engine";
import {getAnimation} from "../utils/spritesheetParser";
import * as PIXI from "pixi.js";

export const n = null;
// Engine.setPlayer(idleSprite);

// PIXI_ASSETS.Assets.load(SPRITE_SHEET_IMAGES.TEXT_MAP).then((result: PIXI.Resource) => {
//     const textureConfigList: Array<TextureConfig> = getSpriteSheetConfig(SPRITE_SHEET_CONFIGS.TEXT_MAP);
//     textureConfigList.map((config) => {
//         TEXTURE_MAP[config.name] = getTexture(result, config);
//     });
//
//     console.log(TEXTURE_MAP)

// });
//
// PIXI_ASSETS.Assets.load(SPRITE_SHEET_IMAGES.ENEMY).then((result: PIXI.Resource) => {
//     player = PIXI.Sprite.from(result as any);
//     player.width = 55;
//     player.height = 55;
//     player.position.x = 265;
//     player.position.y = 265;
//     app.stage.addChild(player);
// });

// loadAsset(SPRITE_SHEET_IMAGES.SUB_0_WALK, SPRITE_SHEET_CONFIGS.SUB_0_WALK).then((textureMap) => {
//     Engine.mergeInTextureMap(textureMap);
//     animationListP2 = getAnimation(SPRITE_SHEET_CONFIGS.SUB_0_WALK, 'walk');
//     console.log(animationListP2);
//
//     const walkSprite = PIXI.Sprite.from(Engine.getTextureMap()["sub0_w1"]);
//     walkSprite.position.x = 650;
//     walkSprite.position.y = 250;
//     walkSprite.scale.x = 2;
//     walkSprite.scale.y = 2;
//
//     Engine.setPlayer2(walkSprite);
//     Engine.addInScene(Engine.getPlayer2());
// });



// animationListP1 = getAnimation(SPRITE_SHEET_CONFIGS.SUB_0, 'idle');
// console.log(animationListP1);
//
// const idleSprite = PIXI.Sprite.from(Engine.getTextureMap()['sub0_i1']);
// idleSprite.position.x = 250;
// idleSprite.position.y = 250;
// idleSprite.scale.x = 2;
// idleSprite.scale.y = 2;
// Engine.setPlayer1(idleSprite);
// Engine.addInScene(Engine.getPlayer1());




// export const setPlayer1Position = (pos:{x: number, y: number}): void => {
//     const {x, y} = pos;
//     player1.x = x;
//     player1.y = y;
// }
//
// export const setPlayer2Position = (pos:{x: number, y: number}): void => {
//     const {x, y} = pos;
//     player2.x = x;
//     player2.y = y;
// }