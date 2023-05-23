"use strict";
const user = {
    firstName: "Paulo",
    age: 19,
    email: "paulo@gmail.com",
    orders: [{ productId: "a", price: 10 }],
    register() {
        return "abc";
    },
};
const printLog = (message) => { };
printLog(user.password);
const author = {
    age: 1,
    books: ["1"],
    email: "paulo@gmail.com",
    firstName: "Paulo",
    orders: [],
    password: "asubudf",
    register() {
        return "sdfsdf";
    },
};
const emailUser = {
    email: "paulo@gmail.com",
    firstName: "Paulo",
    login() {
        return "aa";
    },
};
const newAuthor = {
    firstName: "Paulo",
    email: "paulo@gmail.com",
    books: [],
    login() {
        return "dsf";
    },
};
const grade = 1;
