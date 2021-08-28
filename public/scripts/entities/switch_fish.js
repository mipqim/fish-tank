class SwitchFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/fish03.webp';
  }

  updateOneTick() {
    super.updateOneTick();

    for (let dnznObj of this.tank.getProximateDenizens(this.position,10)) {
      if (dnznObj.constructor.name === 'Seaweed') {
          dnznObj.kill();
      }
    }
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
