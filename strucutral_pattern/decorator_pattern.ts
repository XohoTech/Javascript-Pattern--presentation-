class Laptop {
    company:string;
    specs:string;
    price:number;
    constructor(title:string, author:string, price:number) {
      this.company = title;
      this.specs = author;
      this.price = price;
    }
  
    getDetails() {
      return `${this.company} contains ${this.specs}`;
    }
  }
  
  // decorator 1
  function gift_wrap(laptop:any) {
    laptop.isGiftWrapped = true;
    laptop.unwrap = function() {
      return `Unwrapped ${laptop.getDetails()}`;
    };
  
    return laptop;
  }
  
  // decorator 2
  function pack_in_a_box(laptop:any) {
    laptop.isHardbound = true;
    laptop.price += 200;
    return laptop;
  }
  
  // usage
  const HP = gift_wrap(new Laptop('HP', 'Probook G454', 96000));
  
  console.log(HP.isGiftWrapped); // true
  console.log(HP.unwrap()); // 'Unwrapped The Alchemist by Paulo Coelho'
  
  const inferno = pack_in_a_box(new Laptop('Dell', 'Inpiron Corei7', 85000));
  
  console.log(inferno.isHardbound); // true
  console.log(inferno.price); // 20