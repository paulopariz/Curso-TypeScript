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







//UNIONS
type Author = {
    books: string[]
}

const author: Author & User = {
    age: 1,
    books: ["1"],
    email: "paulo@gmail.com",
    firstName: "Paulo",
    orders: [],
    password: "asubudf"
}





//Interfaces 
interface UserInterface {
    firstName: string
    email: string
}

const emailUser: UserInterface = {
    email: "paulo@gmail.com",
    firstName: "Paulo",
}

interface AuthorInterface {
    books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
    firstName: "Paulo",
    email: "paulo@gmail.com",
    books: []
}


type Grade = number | string
const grade: Grade = 1