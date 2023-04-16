// Your code here

class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says meow!`;
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says woof!`;
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        if (this.sex === 'male') {
            return `It's me! ${this.name}, the parrot!`;
        } else {
            return `${this.name} says squawk!`;
        }
    }
}
const myCat = new Cat("Whiskers", "male");
console.log(myCat.speak()); // Whiskers says meow!

const myDog = new Dog("Buddy", "female");
console.log(myDog.speak()); // Buddy says woof!

const myBird = new Bird("Tweety", "male");
console.log(myBird.speak()); // It's me! Tweety, the parrot!

const myBird2 = new Bird("Polly", "female");
console.log(myBird2.speak()); // Polly says squawk!
