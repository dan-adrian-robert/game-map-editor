import {STRINGS} from "../config/Messages";
import {TextureConfig} from "../types";
import * as PIXI from 'pixi.js'

export const getSpriteSheetConfig = (config: any): Array<TextureConfig> => {
    if (!config.frames) {
        console.log(STRINGS.ERROR_PARSE_CONFIG);
        return [];
    }

    const keys = Object.keys(config.frames);
    const result: Array<TextureConfig> = [];

    keys.map((key: string) => {
        const spriteConfig = config.frames[key];
        const {frame} = spriteConfig;
        if (!frame) {
            console.log(STRINGS.ERROR_PARSE_CONFIG);
            return;
        }

        const {x,y,w,h} = frame;
        result.push({
            name: key.split('.')[0],
            x,
            y,
            width: w,
            height: h,
        })
    })
    return result;
}

export const getTexture = (resource: PIXI.Resource, config: TextureConfig): PIXI.Texture => {
    const {x, y, width, height} = config;

    const rect = new PIXI.Rectangle(x,y,width,height);
    return new PIXI.Texture(resource as any, rect);
}

export const getAnimation = (config: any, key: string): Array<string> => {
    if (!config.animations || !config.animations[key]) {
        console.log(STRINGS.ERROR_PARSE_CONFIG);
        return [];
    }

    const frameList = config.animations[key];
    return frameList.map((item: string) => item.split('.')[0]);
}
