// // traditional Function-based syntax
// function Hero(name, specialAbility) {
//     // setting property values
//     this.name = name;
//     this.specialAbility = specialAbility;
  
//     // declaring a method on the object
//     this.getDetails = function() {
//       return this.name + ' can ' + this.specialAbility;
//     };
//   }
  

class House {
  owner:string;
  area:number;
  constructor(owner:string, area:number) {
    this.owner = owner;
    this.area = area;

    
  }
  getDetails=()=> {
    return `${this.owner} own house of ${this.area} sq. yard.`;
  };
  }
  
  // creating new instances of Hero
  const house = new House('You', 400);
  
  console.log(house.getDetails()); // Iron Man can fly