// TYPE
type Order = {
    productId: string
    price: number
}

type User = {
    firstName: string
    age: number
    email: string
    password?: string
    orders: Order[]
}

const user: User = {
    firstName: "Paulo",
    age: 19,
    email: "paulo@gmail.com",
    orders: [{ productId: "a", price: 10 }]
}


const printLog = (message: string) => { }
printLog(user.password!)