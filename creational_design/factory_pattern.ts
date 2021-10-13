class BallFactory {
    constructor() {
      
    }
    createBall = function(type:string) {
        let ball:any;
        if (type === 'football' || type === 'soccer'){
          ball = new Football();
        }
        else if (type === 'basketball'){ 
          ball = new Basketball()
        };
        ball.roll = function() {
          return `The ${this.type} is rolling.`;
        };
  
        return ball;
      };
}
class Football {
  type:string;
  constructor() {
    this.type = 'football';
    
  }
  kick = function() {
      return 'You kicked the football.';
  };
}

class Basketball {
  type:string;
  constructor() {
    this.type = 'basketball';
  }
  bounce = function() {
      return 'You bounced the basketball.';
  };
}
  

const factory:BallFactory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');

console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketball.bounce()); // You bounced the basketball.