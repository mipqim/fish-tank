class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/fish02.gif';
  }

  updateOneTick() {

    super.updateOneTick();
    // console.log(typeof this.tank.getProximateDenizens(this.position,10));
    // console.log(this.tank.getProximateDenizens(this.position,10));

    for(let dnznObj of this.tank.getProximateDenizens(this.position,30)) {
      // console.log('this->'+this.constructor.name,this.position, 'other->'+fishObj.constructor.name, fishObj.position);
      // if(this.constructor.name != 'BiteFish' && fishObj.constructor.name == 'BiteFish'){
        // console.log(this.constructor.name, fishObj.constructor.name);
        // console.log(fishObj.constructor.name);
//확정
if(dnznObj.constructor.name !== 'BiteFish'){
  // console.log(this.tank.specieses);
  if(this.tank.specieses.hasOwnProperty(dnznObj.constructor.name)){
    dnznObj.kill();
  }


}
      // }

      // if(fishObj.constructor.name === 'BiteFish' && this.constructor.name !== 'BiteFish') {
      //   this.kill();
      // }
    }
  }

  onClick() {
     this.kill();

  }
}

