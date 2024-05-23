class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}
class Person extends Human {
  name = "Nick";
  gender = "female";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();
// classes are blueprints to JavaScript Objects.
