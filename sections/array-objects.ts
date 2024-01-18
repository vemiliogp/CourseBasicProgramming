interface Person {
    name: string;
    age: number;
    isActive: boolean;
  }
  
  let fernando: Person = {
    name: "Fernando",
    age: 36,
    isActive: true,
  };
  
  let melissa: Person = {
    name: "Melissa",
    age: 30,
    isActive: false,
  };
  
  let juan: Person = {
    age: 42,
    isActive: false,
    name: "Juan",
  };
  
  let people: Person[] = [fernando, melissa, juan];
  
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    console.log(person.name + " " + person.age);
  }
  