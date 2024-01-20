// fillter 
var num = [1, 23, 4, 55, 5, 6, 4, 6]
var result = num.filter(num => num > 20)
console.log(result);

// finindex postion
var nummber = [12, 2333, 23, 344]
var lar = nummber.findIndex(num => num > 50)
console.log(lar);

const Name = [1, 2, 3, 4]
const Name2 = [5, 6, 7, 8]

const newvalue = Name.concat(Name2)
console.log(newvalue);

const person = {
    name: "vishal"
}

const per2 = {
    lastame: "das"
}

let fullname = { ...person, ...per2 }
console.log(fullname);
let nummm = 20;
(nummm > 18) ?
    console.log("given me odd" ) : console.log("given me even");


const arra = [12, 23, 455, 34];

function reducer(acc, curr) {
    console.log("acc", acc, "cuurent", curr);
    let result = acc * curr
    console.log(result);
    return result

}
arra.reduce(reducer)

const intervew = (Name) => {
    if (Name === "adil") {
        return function (scop) {

        }
    }

}
// convert to  string
const v =["vishal"]
const vi=v.toString();


console.log(vi);


for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
  

  
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

const vish=["i am vishal"]
// const obbj={}
// for(let i=0; i<vish.length;i++){
//     obbj[i]=vish[i]
// }
// console.log(obbj);
console.log(vish.toString());

// #function printpttran(rows){
    





var Namee=()=>{
    console.log("hiii");


}
// taarrnary
let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)



// gitting hour
const now = new Date()
console.log(now.getHours()) // 0, because the time is 00:56:41
const noww = new Date()
console.log(noww.getSeconds()) // 41, because the time is 00:56:41

const nw = new Date() //
console.log(nw.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41



































