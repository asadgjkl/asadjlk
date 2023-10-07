// let person ={
//     name:'dilyorbek',
//     age:17,
//     a () {
//         let b =()=> console.log(this.name); 
//         b();
//         let c = () => console.log(this.age);
//         c()
//         }
// }
//  person.a()


// function user( name,surname,age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.aboutMe = function() {
//         return `my fullname is ${this.name} ${this.surname} and I'm ${ this.age} years old `
//     };
// };

// let user1 = new user(`dilnavo`,`mamirova`, 17);
// console.log(user1.aboutMe())



// let car = new Object();
// car.name = 'gelik';
// car.brand ='mercades';
// car.color= 'black';
// console.log(car);

// function phone(color,xotira,price){
//     this.color = color;
//     this.xotira=xotira;
//     this.price =price;
// }

// let phone2 =new phone('green','1tb','2000$')
// console.log(phone2);
// console.log(phone2.xotira);
// console.log(phone2['price]);




//  let a = 1000000000
//  console.log(a);
//  let b = 1_000_000_000;
//  console.log(b);
//  let c = 1e9;
//  console.log(c);


// let a = 17.22;
// console.log(a.toFixed());
// let b = 145.5657;
// console.log(b.toFixed(3));

// console.log(parseInt('100px'));
// let a = '123c32c768';
// console.log(parseInt(a));


// let a ='123.654s56j';
// console.log(parseInt(a));
// let b = '3445.7856ghf675';
// console.log(parseFloat(b));



// console.log(Math.random());

// console.log(parseInt(Math.random() * 10));

// console.log(parseInt(Math.random() *1000));



let names = ['jahongir','saidkamol','nasiba','dilnavo','alisher','mirzag`ani','shoxjahon','dilyorbek','jorabek']

let any = Math.floor(Math.random()* names.length);
console.log(names[any] +    '    15 proMax');


// console.log(Math.max(1,5,-10,10));
// console.log(Math.min(23,-1,-10.2));



