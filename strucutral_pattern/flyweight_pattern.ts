class Picture {
    name:string;
    Dimension:number;
    constructor(name:string, Dimension:number) {
      this.name = name;
      this.Dimension = Dimension;
    }
  }
  
  // factory for flyweight objects
class PictureLoader {
    images:Picture[] = [];
    constructor() {
      
    }
  
    createPicture(name:string, Dimension:number) {
      let picture = this.getPicture(name);
      if (picture) {
        console.log("!!!!Image is already in cache, Rendering same!!!!")
        return picture;
      } else {
        const newImage = new Picture(name, Dimension);
        this.images.push(newImage);
        return newImage;
      }
    }
  
    getPicture(name:string) {
      return this.images.find(picture => picture.name === name);
    }
  }
  
  // usage
const icecream_factory:PictureLoader = new PictureLoader();

const img_1 = icecream_factory.createPicture('suleman_fazal.jpg', 15);
const img_2 = icecream_factory.createPicture('ahmed.jpg', 15);

// reference to the same object
console.log(img_1 === img_2); // true