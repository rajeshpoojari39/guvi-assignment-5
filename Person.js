class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  print() {
    console.log(`Person Name is - ${this.firstname} ${this.lastname}`);
  }
}

let personOne = new Person("Rajesh", "Poojari");

personOne.print();
