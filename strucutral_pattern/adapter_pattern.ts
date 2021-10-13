class OldAssistant {
  constructor() {}
  operations = function (operation: string) {
    switch (operation) {
      case "read":
        return "I am reading";
      case "write":
        return "I am writing";
      default:
        return NaN;
    }
  };
}


class NewAssistant {
  constructor() {}
  read = function () {
    return "I am reading";
  };
  write = function () {
    return "I am writing";
  };
}

// Adapter Class
class AdapterAssistant {
  newCalc: any;
  constructor() {
    newCalc = new NewAssistant();
  }
  operations = function (operation:string) {
    switch (operation) {
      case "read":
        // using the new implementation under the hood
        return newCalc.read();
      case "write":
        return newCalc.write();
      default:
        return NaN;
    }
  };
}
// usage
const oldCalc = new OldAssistant();
console.log(oldCalc.operations("read")); // 15

let newCalc = new NewAssistant();
console.log(newCalc.read()); // 15

const adaptedCalc = new AdapterAssistant();
console.log(adaptedCalc.operations("write")); // 15;
