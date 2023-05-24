interface IPerson {
    id: number;
    sayMyName(): string
}

class Person implements IPerson {
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }


    sayMyName(): string {
        return this.name
    }
}


class PersonRefect {
    constructor(
        readonly id: number,
        protected name: string,
        private age: number,
    ) { }
}

const person2 = new Person(1, "Paulo", 2)