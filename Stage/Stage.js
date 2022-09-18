/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [
      new Sound("goofy aww viagra", "./Stage/sounds/goofy aww viagra.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.broadcast("message1");
      yield* this.playSoundUntilDone("goofy aww viagra");
      yield;
    }
  }
}
