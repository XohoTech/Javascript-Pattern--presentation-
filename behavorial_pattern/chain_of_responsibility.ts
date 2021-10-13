class Sum {
    sum:number;
    constructor(intialValue = 0) {
      this.sum = intialValue;
    }
  
    add(value:number) {
      this.sum += value;
      return this;
    }
  }
  
  // usage
  const sum1 = new Sum();
  console.log(sum1.add(10).add(2).add(50).sum); // 62
  
  
  const sum2 = new Sum(10);
  console.log(sum2.add(10).add(20).add(5).sum); // 45