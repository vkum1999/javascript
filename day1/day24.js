const array = ["adil", "vishal"]
// for(let i=array+4; i>=0;i++){
//     console.log(array[i]);

// }

array.splice(1, 0, "jugnu")
console.log(array)



// 
const araay = [{ id: 1, Name: "vishal", roll: "34" },
{ id: 2, Name: "jugnu", roll: "34" }]


const update = araay.map((iteam) => {
       if (iteam.id === 2) {
              return { ...iteam, Name: "adil" }

       }
       return iteam
})
console.log(update);
function exp(x,y)
{
    let result;
    result=((x*x)+(2*(y**3)));
    return result;

}
console.log("result:",exp(2,-1));


const line="welcome to vishal city"
const newline=line.split(' ')

for(let i=newline.length-1;i>=0;i--){
       console.log( newline[i]);
}
// frez***************
const myobj={
       name:"vishal",
       age:23

}
Object.freeze(myobj)

myobj.age=23;
myobj.name="rahul"
console.log(myobj);

// hosting

console.log(a);
show()
function show(){
       console.log("good moring");

}
var a=9;
console.log(a);

function outerFunction() {
       let count = 1;
       function innerFunction() {
           return count
       }
   
       return innerFunction
   }
   const innerFunc = outerFunction()
   
   console.log(innerFunc())
  
   function out(){
       let add=2+2
       function iner(){
              return add
       }
       return iner
   }
const iner=out()
console.log(iner());
// comparing array

let araayi=[1,2,3,4]
let arr=[1,2,3,4]

let cal=JSON.stringify(araayi)
let cal2=JSON.stringify(arr)
console.log(cal===cal2);
//  chamge the arra


