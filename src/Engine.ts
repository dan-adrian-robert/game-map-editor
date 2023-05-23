import * as PIXI from 'pixi.js'
import {ANIMATION, ANIMATION_MAP} from "./types";
import {Player} from "./components/Player";

export namespace Engine {
    let loader: PIXI.Loader;
    let TEXTURE_MAP: ANIMATION_MAP;
    let player1: Player;
    let player2: Player;
    let app: PIXI.Application;
    let enemyList: PIXI.Sprite[];

    export const addInScene= (sprite: any) => {
        app.stage.addChild(sprite);
    }

    export const setLoader = (newLoader: PIXI.Loader): void => {
        loader = newLoader;
    }

    export const getLoader = (newLoader: PIXI.Loader): PIXI.Loader => {
        return loader;
    }

    export const setApp = (newApp: PIXI.Application): void => {
        app = newApp;
    }

    export const getApp = (): PIXI.Application => {
        return app;
    }

    export const setPlayer2 = (newPlayer: Player): void => {
        player2 = newPlayer;
    }

    export const setPlayer1 = (newPlayer: Player): void => {
        player1 = newPlayer;
        app.stage.addChild(player1.sprite);
    }

    export const getPlayer1 = (): Player => {
        return player1;
    }

    export const getPlayer2 = (): any => {
        return player2;
    }

    export const setTextureMap = (newTextureMap: any): void => {
        TEXTURE_MAP = newTextureMap;
    }

    export const setInTextureMap = (textureMap: any, key:ANIMATION ): void => {
        TEXTURE_MAP[key] = textureMap;
    }

    export const getTextureMap = () => {
       return TEXTURE_MAP;
    }

    export const addTextureMap = (key: string, value: any) => {
        // return TEXTURE_MAP[key] = value;
    }

}