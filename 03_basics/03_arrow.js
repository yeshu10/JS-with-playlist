// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);   // this refers current context
//         console.log(this);  //print the context
//     }

// }

//  user.welcomeMessage()
// user.username = "sam"      // from here the context has been changed for username 
// user.welcomeMessage()

// console.log(this);        // here the cotext will be empty

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //   in function this can con be used 
//     // console.log(this)
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}                                       // if curly braces used {} then return is needed

// const addTwo = (num1, num2) =>  num1 + num2          // this will work fine

// const addTwo = (num1, num2) => ( num1 + num2 )      // just for understanding we can wrap in paranthesis 

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()