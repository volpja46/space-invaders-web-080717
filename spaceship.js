class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew= crew;
    this.phasers = phasers;
    this.phasersCharge = 'uncharged';
    this.shields = shields;
    this.warpDrive = "disengaged"
    this.cloaked = false;
     if (crew.length == 0){
       this.docked = true
     } else {
       this.docked = false
       this.assignCrew()
     }
    }

    assignCrew(){
      this.crew.forEach(crewMember => {
        crewMember.currentShip = this;
      });
    }

}

// space invaders Spaceship should be docked if it has no crew:
 // constructor(name, crew, phasers, shields) {
//
// space invaders Spaceship should have its cloaking set to false by default:
