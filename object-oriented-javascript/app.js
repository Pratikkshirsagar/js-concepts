// ### POJO
const pet = { species: 'Dog', name: 'Elton', age: 1.5 };

// Properties that don't exist evaluate to undefined:
pet.name; // undefined

// All keys get "stringified":
pet[1] = 'hello';
pet['1'] = 'goodbye';

console.log(pet[1]); // 'goodbye'

// add function on an object
pet.bark = function () {
  return 'WOOF WOOF!!!';
};

// ### Mixing data and functionality
const myTri = {
  a: 3,
  b: 5,
  getArea: function () {
    return this.a + this.b;
  },
};

console.log(myTri.a);
console.log(myTri.b);
console.log(myTri.getArea());

// Using a POJO
// So, we can helfully mix data & functionality
// This is tiday: related functionality lives together
// Annoying when we have more than one triangle
//  - Difficult to maintain
//  - If we have 1000 triangles, we'd have 1000 copies of these functions

// ### Classes

class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return this.a + this.b;
  }

  describe() {
    return `I am a triangle with area of ${this.getArea()}`;
  }
}

const firstTriangle = new Triangle(4, 5);

firstTriangle.getArea();

// BankAccount class
//    - Properties
//      - balance (defaults to 0 if not provided)
//      - accountHolder
//      - accountNumber
//    - Methods
//      - deposit(amt) - increase balance by amt.
//      - withdraw(amt) - descreases balance by amt.

class BankAccount {
  constructor(accountHolder, accountNumber, balance = 0) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amt) {
    if (amt <= 0) return;

    this.balance += amt;
    console.log(`Deposited $${amt}. New balance: ${this.balance}`);
  }

  withdraw(amt) {
    if (amt > this.balance) return;

    this.balance -= amt;
    console.log(`Withdraw $${amt}. New balance: ${this.balance}`);
  }
}

// ### Inheritance Basics

class ShayTriangle extends Triangle {
  describe() {
    return '(runs and hides)';
  }
}

// ### Super Keyword
class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b);
    this.color = color;
  }
}

// ### Static properties & Static methods
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static species = 'felis catus';

  static meow() {
    console.log('meow meow meow!!!');
  }
}

// ### Getters & Setters
class Circle {
  constructor(redius) {
    this._redius = redius;
  }

  get diameter() {
    return this._redius * 2;
  }

  get redious() {
    return this._redious;
  }

  set redious(value) {
    if (value < 0) {
      throw new Error('Redious cannot be negative!');
    }

    this._redius = value;
  }
}

// ### Public, Private Fields & Private methods
class Dog {
  static numberOfDogs = 0;
  // Public Field
  name;
  numLegs = 4;

  // Private Field
  #hasTail = true;

  constructor(name) {
    this.name = name;
    Dog.numberOfDogs += 1;
  }

  // Private Method
  #doesDogHasTail() {
    return this.#hasTail;
  }
}
