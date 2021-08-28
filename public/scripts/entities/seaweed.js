class Seaweed extends Denizen {

  constructor(options) {
    super(options);
    this.imageUri = '/images/sea-weed.webp';
    this.position.y += this.height;
  }

  update(t) {
    // no physics for Starter
  }
}
