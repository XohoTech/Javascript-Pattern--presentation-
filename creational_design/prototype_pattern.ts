
const project = {
    noOfMembers: 4,
    start() {
      return 'started';
    },
    end() {
      return 'ended';
    },
  };
  
  // Object.create(proto[, propertiesObject])
  
  const myproject =Object.create(project, {name:{value:"urban-abodes"}});
  console.log(myproject.name); // true