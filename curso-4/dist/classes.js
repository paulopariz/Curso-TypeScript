"use strict";
class Person {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
const person2 = new Person(1, "Paulo", 2);
