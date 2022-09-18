/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "1658112_mmfan2004_friday-night-funkin-x-doraemon-1973",
        "./Sprite1/costumes/1658112_mmfan2004_friday-night-funkin-x-doraemon-1973.svg",
        { x: 239.51605045045017, y: 150.19652330330314 }
      ),
      new Costume("IMG_5161", "./Sprite1/costumes/IMG_5161.svg", {
        x: 239.66449741198494,
        y: 168.23010576714285
      }),
      new Costume("IMG_5620", "./Sprite1/costumes/IMG_5620.png", {
        x: 480,
        y: 269.5
      }),
      new Costume("IMG_5160", "./Sprite1/costumes/IMG_5160.svg", {
        x: 224.0093833328857,
        y: 179.58558157488733
      }),
      new Costume("beatles", "./Sprite1/costumes/beatles.svg", {
        x: 190.89483360911936,
        y: 179.88167013167015
      }),
      new Costume("thumbnail", "./Sprite1/costumes/thumbnail.png", {
        x: 477,
        y: 359.5
      }),
      new Costume("IMG_5912", "./Sprite1/costumes/IMG_5912.png", {
        x: 480,
        y: 269.5
      }),
      new Costume("backdrop12", "./Sprite1/costumes/backdrop12.svg", {
        x: 240.49736318308555,
        y: 180.62317285571817
      }),
      new Costume("virtualboy", "./Sprite1/costumes/virtualboy.svg", {
        x: 239.5079079079079,
        y: 179.63093093093096
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];
  }

  *startAsClone() {
    this.goto(360, 0);
    this.moveAhead();
    this.visible = true;
    this.costume = this.costumeNumber + 1;
    yield* this.glide(0.25, 0, 0);
    this.deleteThisClone();
  }

  *whenIReceiveMessage1() {
    this.goto(0, 0);
    this.costume = this.costumeNumber / this.costumeNumber;
    for (let i = 0; i < 8; i++) {
      yield* this.wait(1.45);
      this.createClone();
      yield* this.glide(0.25, -360, 0);
      this.goto(0, 0);
      this.costume = this.costumeNumber + 1;
      yield;
    }
  }
}
