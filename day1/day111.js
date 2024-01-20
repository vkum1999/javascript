let areey = ["vishal", "deep", "adil", "jugnu", "sherya"]

// for (let i = 0; i < areey.length; i++) {
//     console.log(areey[i]);

// }


 let arrr1=areey.slice(0,3)
 console.log(arrr1);
// const number = [5, 5, 10, 5]
// let sum = 0
// for (let i = 0; i < number.length; i++) {
//     sum = sum + number[i]

// }
// console.log(sum);
// areey.splice(1, 2, "baby", "sona")
// console.log(areey);

// let number=[6,9,8,7]
// let number2=number.map(num=>num+2)
// console.log(number2);

// let a = 5
// let b = "5"
// if (a === b) {
//     console.log("its is good");
// } else {
//     console.log("its is bad");

// }
// let arr = [10, 23, 34, 45]

// //  let i=0
// //   while(i<arr.length)
// //  {
// //   console.log(arr[i])
// //   i=i+1
// //  }
// let j = arr.length - 1;
// do {
//     console.log(arr[j]);
//     j--;
// } while (j >= 0)

// let colours = "black"
// switch (colours) {
//     case "red":
//         console.log("apple is red");
//         break
//     case "orgence":
//         console.log("orange is orange");
//         break
//     case "black":
//         console.log("dog is balck");
//         break;
//     default:
//         console.log("unkown");


// }


const arrr8=["adil","sherya","jugnu"]
   arrr8.map((value)=>{
     console.log(value);
   })

//   const num=[6,9,0,7,9]
//     const arrr3=num.map(num=>num+2)
//     console.log(arrr3);

//     let show=function(...x){
//         let sum=0
//         for(let num of x){
//             console.log("sum",sum,"num",num);
//             sum=sum+num
//         }
//         console.log(sum);
//     }
//     show(6,6,6)


// const array6 = [1, 3, 3];

//  console.log(array6.includes(2));

//  const user=["pritam","das","pritam@gmail.com","30","Bca"];
//   const [,age]=user
//  console.log(age);


//  const Name=[
//     { 
//      name:"vishal",
//      email:"vishal@gmail.com",
//      phone:"8494040404"

//     }
//  ]

//  Name.map((user)=>{
//     console.log(user.name);

//  })

//  function vishal(...x){
//     let sum =0
//     for(let num of x){
//         console.log("sum",sum,"num",num);
//         sum=sum+num
//         console.log("result",sum);
//     }

//  }
//  vishal(49,60)

//  const Nameee=["tammnsa","anjali","rishu"]
//  for(let i=Nameee.length +1;i>0;i--){
//     console.log(`${i}.${Nameee[i]}`);
//  }

//  const Name=["deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeep"]
//  let count=0;
//  Name.forEach(element=>{
//     const occurres=element.split("ee").length-1;
//     count+=occurres
//  });
//  console.log(count);


//  const varible=["deep"]
//  let countt=0
//  varible.forEach(element=>{
//     const occcc=element.split("e").length +0;
//     countt+=occcc
//  })
//  console.log(countt);

// // //  reverse array
// const array9 = ["nehu", "pucku", "vishal"];
// const reveraaary = []
// for (let i = array9.length - 1; i >= 0; i--) {
//     reveraaary.push(array9[i])
// }
// console.log(reveraaary);

// class student{
//     id
//     Name
//     roll
//     constructor(id,Name,roll){
//         this.id=id
//         this.name=Name
//         this.rolll=roll
//     }
//     show(){
//         console.log("given id name roll" ,this.id,this.name,this.roll);
//     }

// }
// let s1= new student(01,"vishal",01)
// console.log(s1);
//   s1. show()


const arrr10=["nehu","vihu","vishal"];
const reversarry=[]
for(let i=arrr10.length-1;i>=0;i--){
    reversarry.push(arrr10[i])
}
console.log(reversarry);

class Name{
    Name
    Email
    Contact
    Address
    constructor(Name,Email,Contact,Address){
        this.name=Name
        this.email=Email
        this .contact=Contact
        this.address=Address
        
  
   
    }
   show(){
    console.log("person name",this.Name,this.Contact);
   }


}

let p1=new Name("vishal",9038393222)
console.log(p1);
p1 .show()


const arrrr20=["jaanu","nehu","vishal"]
const revers=[];
for(let i=arrrr20.length-1;i>=0;i--){
    revers.push(arrrr20[i])
}
  console.log(revers);
//   ops cocepet
class bird{
    nest(){
        console.log("every have their own nest");
    }
}

class peacock extends bird{
    bark(){
        console.log("they are too much barking");
    }
}

const peacocks = new peacock()
peacocks.nest();
peacocks.bark();
// reducer
const array88=[10,23,34,34,34];
function reducer(a,current){
    console.log("accumulatar",a,"currentvalue",current);
    const result=a*current
    console.log("result",result);
    return result
}
array88.reduce(reducer);

const ab1 = [5, 12, 8, 130, 44];

const found = ab1.find(element => element > 10);

console.log(found);

// 

class animal{
    dog(){
        console.log("dog is barking");
    }
    

}

class boy extends animal{
    men(){
        console.log("boy is takking");

    }
}

const said=new boy()
said.dog()
said.men()

// fell method
const array89=[1,2,3,4,5]
console.log(array89.fill(0,2,5)); 
// filter

let numer=[-2,6,-9,0,5]
let newnmer=numer.filter(num=>num<0)
console.log(newnmer);
// 2nd example
let clor=["red","yellow","white ","blue","red","black","red"]
let newclr=clor.filter(colour=>colour==="red")
let newbl=clor.filter(colour=>colour==="black")

console.log(newclr);
console.log(newbl);
// find
let digit=[1,0,10,-1,22,28]
let newdigit=digit.find(num=>num>10)
console.log(newdigit);


const objexxx=[{
    name:"vishal",
    lname:"das",
    gmail:"vk@gmail.com"

}]

 objexxx.map((userdata)=>{
   console.log(userdata.name);
   console.log(userdata.lname);
   console.log(userdata.gmail);
 })


//  const sex=[2,4,5,6]

//  const newnumber=sex.map(num=>num*2)
//  console.log(newnumber);

// covert to array in object
const arry=["vishal","asdil","jugnu","deep"]
let objj=arry.reduce(
    (a,it ,i)=>({...a,[i]:it}),{}
)
console.log(objj);
// 



// closer


// JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.
function outerFunction() {
    let count = 0;
    function innerFunction() {
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())


const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)

  
  const array=call=>{
    setTimeout(() => {
        const skills=['programing','travaling']
        call(false,skills)
        
    }, 2000);
  }
  const call=(err,result)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);

  }

  array(call)
  
//   const aneee=["deeep"]
//   const newaneee=aneee.filter(aneee=>aneee===e)
//   console.log(newaneee);
// //   

function outerFunction(){
    let count=1
    function innerFunction(){
        return count
    }
    return innerFunction
}

const innerfun=outerFunction()
console.log(innerFunc());
console.log(innerFunc());
// while loop
let i=0
while(i<=5){
    console.log(i);
    i++
}


const numm=6;


let faact=1;
for(let i=1; i<numm;i++){
    faact=faact*i
}
console.log(faact);


// retrun the first element
const vishu=[1,23,56,67]
const   Found=vishu.findIndex((num)=>num>30)
console.log(Found);
