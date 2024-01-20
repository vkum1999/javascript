// call method

const name1={
    firstname:"vishal",
    lastname:"das",
}
let printName = function(hometown,state){
   console.log(this.firstname+" "+this.lastname+" from "+hometown+" "+state);
}
 
printName.apply(name1,["kishanganj","bihar"]);

// const name2={
//     firstname:"adil",
//     lastname:"ali",
// }
// printName.apply(name2,["patna","bihar"]);

let myName=printName.bind(name1,["kishanganj","bihar"]);
myName();

// const sayHi = () =>{
//    console.log("Hello");
// }
// setTimeout(sayHi,3000)

//destructure

// const numbrss=[1,2,3,4,5]
// const[n1,n2,...rest]=numbrss
// console.log(n1,n2);
// console.log(...rest);
const arrr21=[
     "vishal",
     "daa",
     "467888t"

]
const[nam1,nam2,...rest]=arrr21
console.log(nam1,nam2);
console.log(...rest);

const sentence="deeeeep"
const chaar={}
const arraay=sentence.split(' ')
 for(let word of arraay){
     if(!chaar[word]){
          chaar[word]=1
     }else{
          chaar[word]++
     }
 }
 console.log(chaar);

const arrraaay="this is my name"
const chaaar={}
const vahu=arrraaay.split(' ')
 for(let word of vahu){
    if(!chaaar[word]){
        chaaar[word]=1

        
    }else{
        chaaar[word]++
    }
 }

 console.log(chaaar);
 const arrr35=["jugnu","deeep","vishal"]
 let i=0
 while(i<arrr35.length)
 {
    console.log(arrr35[i]);
    i++
 }
 
 const fruits = ['apple', 'banana', 'orange'];

//   fruits.forEach(function(fruit) {
//     console.log(fruit);
//   });
 

  function ind(fruits,index){
    console.log(`number${index+1}.fruits name${fruits}`);

  }
 
  fruits.forEach((fruits,index)=>ind(fruits,index))


  function resolveAfter25Sce(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("resolve from resolve function")
        },2000)
    })
}

async function myfunc(){
    console.log("Printing before Await");
    let result=await resolveAfter25Sce()
    console.log(result);
}
myfunc()

console.log("Printing after Await");


function vishu(){
    return new Promise(sloved=>{
         setTimeout(()=>{
            sloved('sloved the problem')

         },2000)
    })
}

async   function myfun(){
    console.log("not sloved");
    let nresullt=await vishu()
    console.log(nresullt);
    
}
myfun()
console.log('not sloved');

const num23=[2,3,4,6]

function reducer(a,curret){
    console.log("acumlater",a,"cureent",curret);
    const result=a*curret
    console.log(result);
    return result

}
 num23.reduce(reducer)