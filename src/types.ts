export enum ASSET_NAMES {
    TILE_MAP='TILE_MAP',
    ENEMY='ENEMY',
    TEXT_MAP='TEXT_MAP',
    SCORPION='SCORPION',
    SUB_0_IDLE='SUB_0_IDLE',
    SUB_0_WALK='SUB_0_WALK',
    SUB_0_PUNCH_1='SUB_0_PUNCH_1',
    SUB_0_PUNCH_2='SUB_0_PUNCH_2'
}

export type ASSET_MAP = {
    [key in ASSET_NAMES]: any;
}

export interface TextureConfig {
    x: number,
    y: number,
    width: number,
    height: number,
    name: string,
}

export enum ANIMATION {
    'IDLE'='IDLE',
    'WALK'='WALK',
    'PUNCH1'='PUNCH1',
    'PUNCH2'='PUNCH2',
    'SPECIAL'='SPECIAL',
}

export type ANIMATION_MAP = {
    [key in ANIMATION]: any;
}