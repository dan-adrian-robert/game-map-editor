import {ASSET_MAP, ASSET_NAMES} from "./types";

export const SPRITE_SHEET_IMAGES: ASSET_MAP = {
    [ASSET_NAMES.TILE_MAP]: require(`./assets/spritesheet.png`),
    [ASSET_NAMES.ENEMY]: require(`./assets/enemy.png`),
    [ASSET_NAMES.TEXT_MAP]: require(`./assets/textSpriteSheet.png`),
    [ASSET_NAMES.SCORPION]: require('./assets/scorpion.png'),
    [ASSET_NAMES.SUB_0_IDLE]: require('./assets/sub_0/idle.png'),
    [ASSET_NAMES.SUB_0_WALK]: require('./assets/sub_0/walk.png'),
    [ASSET_NAMES.SUB_0_PUNCH_1]: require('./assets/sub_0/punch1.png'),
    [ASSET_NAMES.SUB_0_PUNCH_2]: require('./assets/sub_0/punch2.png'),
}

export const SPRITE_SHEET_CONFIGS: ASSET_MAP = {
    [ASSET_NAMES.TILE_MAP]: require(`./assets/config.json`),
    [ASSET_NAMES.ENEMY]:require(`./assets/config.json`),
    [ASSET_NAMES.TEXT_MAP]:require(`./assets/textConfig.json`),
    [ASSET_NAMES.SCORPION]: require('./assets/scorpion.json'),
    [ASSET_NAMES.SUB_0_IDLE]: require('./assets/sub_0/idle.json'),
    [ASSET_NAMES.SUB_0_WALK]: require('./assets/sub_0/walk.json'),
    [ASSET_NAMES.SUB_0_PUNCH_1]: require('./assets/sub_0/punch1.json'),
    [ASSET_NAMES.SUB_0_PUNCH_2]: require('./assets/sub_0/punch2.json'),
}
