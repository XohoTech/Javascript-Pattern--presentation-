class Employee {
    private static instance: Employee;
    private name:String; 
    private constructor(name:string) {
        this.name= name
     }

    public static getInstance(name:string): Employee {
        if (!Employee.instance) {
            Employee.instance = new Employee(name);
        }

        return Employee.instance;
    }
  
    getData() {
      return this.name;
    }
  
    setData(data:string) {
      this.name = data;
    }
  }

const first_employee =Employee.getInstance('Saad');
console.log(first_employee.getData());

const second_employee = Employee.getInstance('Usama');
console.log(second_employee.getData());