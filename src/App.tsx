import React, {useEffect} from 'react';
import './App.css';
import * as PIXI from 'pixi.js'
import {SPRITE_SHEET_CONFIGS, SPRITE_SHEET_IMAGES} from "./Images";
import {loadAsset} from "./utils/utils";
import {Engine} from "./Engine";
import {ANIMATION, ANIMATION_MAP} from "./types";
import {Player} from "./components/Player";
import {getAnimation} from "./utils/spritesheetParser";

const Keyboard = require('pixi.js-keyboard');

const movePlayer = (delta: number): void => {
    const speed = 3 * delta;
    const player = Engine.getPlayer1();

    let idle = true;

    if (!player) {
       return;
    }

    const { position } = player.sprite;

    if (Keyboard.isKeyDown('ArrowLeft')) {
        position.x -= speed
        idle = false;
    }

    if (Keyboard.isKeyDown('ArrowRight')) {
        const player = Engine.getPlayer1();
        player.playAnimation(ANIMATION.WALK);
        position.x += speed;
        idle = false;
    }

    if (Keyboard.isKeyDown('ArrowUp')) {
        position.y -= speed;
        idle = false;
    }


    if (Keyboard.isKeyDown('ArrowDown')) {
        position.y += speed;
        idle = false;
    }

    if (Keyboard.isKeyPressed('KeyZ')) {
        const player = Engine.getPlayer1();
        player.playAnimation(ANIMATION.PUNCH1);
    }

    if (idle) {
        console.log('idle');
        player.sprite.loop = true;
    } else {
        console.log('not idle');
        player.sprite.loop = false;
    }

    Engine.getPlayer1().setPosition(position);
}

const INIT = async () => {
    Engine.setTextureMap({});

    const idleAnimations = await loadAsset(SPRITE_SHEET_IMAGES.SUB_0_IDLE, SPRITE_SHEET_CONFIGS.SUB_0_IDLE);
    Engine.setInTextureMap(idleAnimations, ANIMATION.IDLE);

    const walkAnimation = await loadAsset(SPRITE_SHEET_IMAGES.SUB_0_WALK, SPRITE_SHEET_CONFIGS.SUB_0_WALK);
    Engine.setInTextureMap(walkAnimation, ANIMATION.WALK);


    const punch1Animation = await loadAsset(SPRITE_SHEET_IMAGES.SUB_0_PUNCH_1, SPRITE_SHEET_CONFIGS.SUB_0_PUNCH_1);
    Engine.setInTextureMap(punch1Animation, ANIMATION.PUNCH1);

    const punch2Animation = await loadAsset(SPRITE_SHEET_IMAGES.SUB_0_PUNCH_2, SPRITE_SHEET_CONFIGS.SUB_0_PUNCH_2);
    Engine.setInTextureMap(punch2Animation, ANIMATION.PUNCH2);

    const textureMap = Engine.getTextureMap();
    const spriteMap: ANIMATION_MAP = {
        IDLE: textureMap.IDLE,
        PUNCH1: textureMap.PUNCH1,
        PUNCH2: textureMap.PUNCH2,
        SPECIAL: null,
        WALK: textureMap.WALK,
    }
    const animationMap: ANIMATION_MAP = {
        IDLE: getAnimation(SPRITE_SHEET_CONFIGS.SUB_0_IDLE, 'idle'),
        PUNCH1: getAnimation(SPRITE_SHEET_CONFIGS.SUB_0_PUNCH_1, 'punch1'),
        PUNCH2: getAnimation(SPRITE_SHEET_CONFIGS.SUB_0_PUNCH_2, 'punch2'),
        SPECIAL: [],
        WALK: getAnimation(SPRITE_SHEET_CONFIGS.SUB_0_WALK, 'walk'),
    }

    const player: Player = new Player(spriteMap, animationMap);
    Engine.setPlayer1(player);
}

function App() {
  useEffect(  () => {
    Engine.setApp(new PIXI.Application({ width: 1024, height: 768 }));
    INIT().catch(error => {
        console.log(error);
    });
    Engine.getApp().ticker.add(delta => gameLoop(delta));
    document.getElementById('gameContainer')?.appendChild(Engine.getApp().view);
  }, [])

    const gameLoop = (delta: number) => {
        movePlayer(delta);
        Keyboard.update();
    }

  return (
    <div className="App">
      <div id="gameContainer">
      </div>
    </div>
  );
}

export default App;
