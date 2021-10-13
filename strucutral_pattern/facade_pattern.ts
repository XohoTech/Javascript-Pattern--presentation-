let currentId = 0;

class LeaveRegistry {
  registerLeave(customer:string, type:string, details:string) {
    const id = LeaveRegistry._uniqueIdGenerator();
    let registry:CasualLeaves|SickLeaves|any;
    if (type === 'sick') {
      registry = new SickLeaves();
    } else {
      registry = new CasualLeaves();
    }
    return registry.addLeave({ id, customer, details });
  }

  static _uniqueIdGenerator() {
    return ++currentId;
  }
}

class Leaves {
    leaves:any[]=[];
  constructor() {
  }

  addLeave(complaint:any) {
    this.leaves.push(complaint);
    return this.replyMessage(complaint);
  }

  getLeave(id:any) {
    return this.leaves.find(complaint => complaint.id === id);
  }

  replyMessage({ id, customer, details }:any) {
    return `Leave No. ${id} reported by ${customer} regarding ${details} have been filed with the Leave Department.`;
  }
}

class SickLeaves extends Leaves {
    private static instance: SickLeaves;
  constructor() {
    super();
  }
  public static getInstance(name:string): SickLeaves {
    if (!SickLeaves.instance) {
        SickLeaves.instance = new SickLeaves();
    }

    return SickLeaves.instance;
}

}

class CasualLeaves extends Leaves {
    private static instance: CasualLeaves;
    constructor() {
      super();
    }
    public static getInstance(name:string): CasualLeaves {
      if (!CasualLeaves.instance) {
        CasualLeaves.instance = new CasualLeaves();
      }
  
      return CasualLeaves.instance;
  }

}


const registry = new LeaveRegistry();

const reportService = registry.registerLeave('Sid', 'sick', 'covid');
console.log(reportService,'\n')

const reportProduct = registry.registerLeave('Saad', 'product', 'degree clearance');
console.log(reportProduct,'\n')