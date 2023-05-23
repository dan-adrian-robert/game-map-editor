import * as Loader from "@pixi/assets";
import * as PIXI from "pixi.js";
import {ASSET_MAP, ASSET_NAMES, TextureConfig} from "../types";
import {getSpriteSheetConfig, getTexture} from "./spritesheetParser";
import {Texture} from "pixi.js";

export const getRandomInRange = (min = 0, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const loadAsset = (imagePath:ASSET_NAMES, config: any): Promise<any> => {
    const textureMap: any = {};
    return Loader.Assets.load(imagePath).then((result: PIXI.Resource) => {
        const textureConfigList: Array<TextureConfig> = getSpriteSheetConfig(config);
        textureConfigList.map((config) => {
            textureMap[config.name] = getTexture(result, config);
        });

        return textureMap;
    });
}


export const textureMapToList = (textureMap: Record<any, Texture>, spriteNames: Array<string>): Array<Texture> => {
    return spriteNames.map((sprite: string) => {
        return textureMap[sprite];
    })
}
