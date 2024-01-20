const line = "welcome to india";
const newline = line.split(' ')
for (let i = newline.length - 1; i >= 0; i--) {
    console.log(newline[i]);
}

const   nu=["the  VISHAL"]

console.log(nu.toString());
let i=0
while(i<=5){
    console.log(i);
    i++

}



let a=7
let b=8

let tem=a
a=b
b=tem
console.log(`value isa ${a}value  ${b}`);
const na=["my name is vishal"]

console.log(na[0].charAt((0)).toUpperCase()+na[0].slice(1));


const   nummmm=[5,4,5,4,5,4,5]

function    reducer(accc,curent){
    console.log("accc",accc,"currrnt",curent);
    let reult=accc*curent
    return  reult
}


nummmm.reduce(reducer)

const   namee="deep"

let char={}
const   newww=namee.split('')

for(let word    of  newww){
    if(!char[word]){
        char[word]=1
    }else{
        char[word]++
    }
}

console.log(char);

const  theeee=["vishaal,","deeep","adil"]
const  tuuuh=10;
const   coppu=[];
for(let i=0;i<tuuuh;i++){
coppu.push(...theeee);
}
console.log(coppu);


let iii=0
while(iii<=10){
    console.log([iii++]);
    i++
 }
// var str="heeloo  devi"
// console.log(str.substring(1,4));

// const aar = ["welcome to india"];

// // Step 1: Create a new empty array
// const reversedAar = [];

// // Step 2: Iterate through the original array in reverse order
// for (let i = aar.length - 1; i >= 0; i--) {
//   // Step 3: Add each element to the new array
//   reversedAar.push(aar[i]);
// }

// // Step 4: Replace the original array with the reversed array
// aar = reversedAar;

// console.log(aar); // Output: [" india to welcome"];


let nuuum="5"

const   arrrrd=parseInt(nuuum)
console.log(arrrrd);


function    outerr(){
    let count=1
    function    ineerr(){
        return  count
    }
    return  ineerr

}

const ineerr=outerr()
console.log(ineerr());

const   arry=['visahl   is  boy']
const   charr={}
for(let i=0;i<arry.length;i++){
    charr[i]=arry[i]
}
console.log(charr);

const   arrt=[2,5,6,46,5]



arrt.splice(2,34)
console.log(arrt);


