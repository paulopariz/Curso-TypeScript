const returnValue = <T>(value: T): T => value

const message = returnValue<string>("Hello World")
const count = returnValue<number>(5)




function getFirstValueArray<Type>(array: Type[]) {
    return array[0]
}

const firstValueStringArray = getFirstValueArray<string>(["1", "2"])
const firstValueNumberArray = getFirstValueArray<number>([10, 20])



//Promises
const returnPromise = async (): Promise<number> => {
    return 5
}



// Classes
class GenericNumber<T> {
    zeroValue: T;
    sum: (x: T, y: T) => T

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue
        this.sum = sum
    }
}


const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
    return x + y
})