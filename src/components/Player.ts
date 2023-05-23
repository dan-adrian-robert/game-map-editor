import * as PIXI from 'pixi.js'
import {ANIMATION, ANIMATION_MAP} from "../types";
import {AnimatedSprite, Sprite, Texture} from "pixi.js";
import {textureMapToList} from "../utils/utils";

export class Player {
    sprite: PIXI.AnimatedSprite;
    animationIndex: number = 0;
    textureMap: ANIMATION_MAP = {
        [ANIMATION.IDLE]: undefined,
        [ANIMATION.PUNCH1]: undefined,
        [ANIMATION.PUNCH2]: undefined,
        [ANIMATION.SPECIAL]: undefined,
        [ANIMATION.WALK]: undefined,
    }

    animationMap: ANIMATION_MAP = {
        [ANIMATION.IDLE]: [],
        [ANIMATION.PUNCH1]: [],
        [ANIMATION.PUNCH2]: [],
        [ANIMATION.SPECIAL]: [],
        [ANIMATION.WALK]: [],
    }

    state:ANIMATION = ANIMATION.IDLE;

    constructor(textureMap:ANIMATION_MAP, animationMap: ANIMATION_MAP) {
        this.textureMap = textureMap;
        this.animationMap = animationMap;
        this.state = ANIMATION.IDLE;

        const spriteMap = this.textureMap[this.state];
        const animationList = this.animationMap[this.state];

        this.sprite = new AnimatedSprite( textureMapToList(spriteMap, animationList));
        this.sprite.animationSpeed = 0.125;
        this.sprite.loop = false;
        this.sprite.play();
    }

     setAnimationTexture = (state: ANIMATION) => {
        this.state = state;

        const spriteMap = this.textureMap[this.state];
        const animationList = this.animationMap[this.state];

        this.sprite.textures = textureMapToList(spriteMap, animationList);
    }

    setPosition = (position: any) => {
        this.sprite.position = position;
    }

    playAnimation = (animation: ANIMATION) => {
        if (!this.sprite.playing) {
            this.setAnimationTexture(animation);
            this.sprite.play();
        }
    }

}