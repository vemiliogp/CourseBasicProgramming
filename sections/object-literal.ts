let person = {
  name: "Victor",
  age: 28,
  isActive: true,
  hobbies: ["soccer", "baseball"],
  toString() {
    let objectString = this.name + " " + this.age + " " + this.hobbies;
    console.log(objectString);
  },
};

// console.log(person.name);
// person.toString();

let car = {
  doors: 4,
  brand: "Honda",
  color: "White",
  year: 2025,
  gearBox: "Manual",
};

let smartTv = {
  sizeInches: 90,
  brand: "Samsung",
  year: 2015,
  type: "Led",
};

let youtubeVideo = {
  length: 3600,
  author: "Victor Gonzalez",
  comments: ["buen video", "me gustó mucho", "el peor video de todos"],
  likes: 1500,
  dislikes: 100,
};

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);
