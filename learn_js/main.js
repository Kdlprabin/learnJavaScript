//variable scope


//the inner function accesses the variable from inner most to global
// let a = 10
// function outer(){
//     let b=  20
//     function inner(){
//         let c = 30
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()


// closure 


//on every run a new counter variable is initialized making the value printed 1
// function outer(){
//     let counter= 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     inner()
// }
// outer()
// outer()

//the js not only returns the inner function but also the function scope
//which means the temporay memory allocated to counter the first time is kept intact
// function outer(){
//     let counter= 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
//while calling the outer function the counter variable is initiated with value 0
//then outer function returns inner function which lets us increment the value of counter using fn where the inner function is stored
// const fn = outer()
//so everytime we call the fn constant the inner function is being called to increment the counter made before calling the outer function
// fn()
// fn()


//function currying
//currying is a process of functional programming in which we transform a function with multiple
//arguments into a sequence of nesting function that take one argument at a time

// function sum(a,b,c){
//     return a+b+c
// }

// console.log(sum(2,3,5))

// //sum(2,3,5) after currying sum(2)(3)(5)

// //curry function
// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c)
//             }
//         }
//     }
// }

// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5))

// const add2 = curriedSum(2)
// const add3 = add2(3)
// const add5 = add3(5)
// console.log(add5)


//this keyword
//refers to the object it belongs to

// function sayMyName(name){
//     console.log(`My name is ${name}`)
// }

// sayMyName('Prabin Kandel')
// sayMyName('Robert More')
// //similar to this the this keyword depends on how the function is called

//implicit binding

// const person= {
//     name:'prabin',
//     sayMyName: function(){
//         console.log(`My name is ${this.name}`)
//     }
// }

// //here this means person
// person.sayMyName()

// //explicit binding
// function sayMyName(){
//     console.log(`My name is ${this.name}`)
// }


// //the first argument passed to sayMyName is this here
// sayMyName.call(person)

// function Person(name){
//     //this = {}
//     this.name= name;
// }


// //here new keyword creates a {} which can be accessed using this keyword
// //everytime the new keyword is invoked a {} is created
// const p1 = new Person('Prabin')
// const p2 = new Person('Batman')

// globalThis.name = 'superman'

//if a function using the this keyword is called without defination of the value{this.name}
//then the this keyword will continue to search the variable towards the global scope
//and if it doesnt find one then it will be undefined
// sayMyName()

//Order of precedence

//new binding
//explicit binding
//implicit binding
//default binding


//prototype
//we can share properties and values to every instance using protype

// function Person(fName, lName){
//     this.firstName = fName;
//     this.lastName = lName;
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// const person1 = new Person('Bruce','Wayne')
// const person2 = new Person('Clark', 'Kent')

// console.log(person1.getFullName())
// console.log(person2.getFullName())

// //inheritance
// function SuperHero(fName, lName){
//     // this = {}

//     //by calling Person constructor function the this keyword = {} of SuperHero function is passed to Person
//     //then the Person function can add fName and lName to the this keyword of SuperHero funciton passed
//     Person.call(this, fName, lName);
//     this.isSuperHero = true
// }
// SuperHero.prototype.fightCrime= function(){
//     console.log('fighting crime')
// }
// //a link between SuperHero prototype and Person prototype is created
// SuperHero.prototype= Object.create(Person.prototype)

// //now when the SuperHero.getFullName() is called first of all the js searches for that method in SuperHero prototype
// //as there is no such method so js finds its link with Person prototype and accesses the method from there

// const hulk = new SuperHero('Bruce', 'Baner')

// //we have to 
// SuperHero.prototype.constructor = SuperHero
// //else js will think SuperHero was created from person
// console.log(hulk.getFullName())


//class keyword


// class Person{
//     constructor(fName, lName){
//         this.firstName = fName
//         this.lastName = lName
//     }
//     sayMyName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const p1 = new Person('Bruce', 'Baner')
// console.log(p1.sayMyName())

// //inheritance in class

// class SuperHero extends Person{
//     constructor(fName, lName){
//         super(fName, lName)
//         this.isSuperHero = true;
//     }
//     fightCrime(){
//         console.log('Fighting Crime')
//     }
// }

// const hulk = new SuperHero('Bruce', 'Baner');
// hulk.fightCrime()


//iterables and iterators

// const obj = {
//     [Symbol.iterator]: function(){
//         let step = 0
//         const iterator ={
//             next: function(){
//                 step++
//                 if(step === 1){
//                     return {value: 'hello', done:false}
//                 }else if(step === 2){
//                     return {value: 'world', done: false}
//                 }
//                 return {value: undefined,done: true}
//             }
//         }
//         return iterator
//     }
// }
// for(const word of obj){
//     console.log(word)
// }


//Generators
//Generators help make iterators faster and easier


//normal function runs to completion
// function normalFunction(){
//     console.log('Hello')
//     console.log('World')
// }

// normalFunction()

// //generator function can pause and continue the execution
// function* generatorFunction(){
//     yield 'Hello'
//     yield 'World'
// }

// const generatorObject = generatorFunction()

// for(const word of generatorObject){
//     console.log(word)
// }