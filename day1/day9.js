
// classs
class Student {
  s_id
  s_roll
  s_name
  s_age
  s_class
  constructor(id, roll, name, age, classs) {
    this.s_id = id
    this.s_roll = roll
    this.s_name = name
    this.s_age = age
    this.s_class = classs
  }
  show() {
    console.log("student name:", this.s_name);
  }
}

let s1 = new Student("s01", 2, "vishal", 23, 4);
console.log(s1);
s1.show();

// const person={
//   name:"raju",
//   age:23,


// }
// if(person .age>=18){
//   console.log("is allowed to vote");
// }
// else{
//   console.log("not alloed");
// }
// let display=()=>{
//   console.log("have a nice day")       
// }
// for(let i=1;i<=10;i++){
//   display();
// }

// let  show=function(...x){
//   let sum=0
//   for(let num of x){
//     console.log("sum",sum,"num",num);
//     sum=sum+num
//   }
//   console.log("result",sum);

// }
// show(5,4,5)
// function show(...x)
//  { 
//   let mul=1
//   for(let num of x){
//     console.log("mul",mul,"num",num);
//     mul=mul*num

//   }
//      console.log("result",mul);
//  }
// show(10,70);
// ternary
// let num=20;
// (num%2===0)?
// console.log("given me odd"):console.log("given me even");
// const arrr4=[6,87,9,0]
// const arrr5=      arrr4.map(num=>num*2)
// console.log(arrr5);
const fruits = ['apple', 'banana', 'orange'];

// fruits.forEach(function(fruit) {
//   console.log(fruit);
// });


const array6 = [1, 2, 3];

console.log(array6.includes(1));
//  function fruitName(fruits,index){
//   console.log(`in number ${index+1}. fruits name ${fruits}`);

//  }

//  fruits.forEach((fruits,index)=>fruitName(fruits,index))

const Name = ["aman", "rahul", "arjun", "ravan"]
//  console.log(Name.slice(2));


// Name.splice(3, 0, 'rani')
// console.log(Name);
// console.log(Name.pop());

const arrr90=["vishal","deep","adil"]
const reversaary=[]
for(let i=arrr90.length-1;i>=0;i--){
      reversaary.push(arrr90[i])
}
console.log(reversaary);

class furuit{
   banana(){
    console.log("good test ");
   }
  
}

class newfruit extends furuit{
  apple(){
    console.log("bad test");
  }
}

const redbull=new newfruit()
redbull.banana();
redbull.apple();