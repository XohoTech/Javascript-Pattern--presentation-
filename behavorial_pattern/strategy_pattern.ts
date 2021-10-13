class Commute {
    travel(transport:any) {
      return transport.travelTime();
    }
  }
  
class Vehicle {
    timeTaken:number;
    constructor(){
        this.timeTaken=0
    }
    travelTime() {
      return this.timeTaken;
    }
  }
  
  // strategy 1
  class Bus extends Vehicle {
    constructor() {
      super();
      this.timeTaken = 10;
    }
  }
  
  // strategy 2
  class Taxi extends Vehicle {
    constructor() {
      super();
      this.timeTaken = 5;
    }
  }
  
  // strategy 3
  class PersonalCar extends Vehicle {
    constructor() {
      super();
      this.timeTaken = 3;
    }
  }
  

const commute = new Commute();

console.log(commute.travel(new PersonalCar())+ " mins");
console.log(commute.travel(new Bus())+" mins");