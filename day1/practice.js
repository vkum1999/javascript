// const box=["vishal","deep","adil"]
// let cup=[];
// for(let i=box.length-1;i>=0;i--){
//     cup.push(box[i])
// }
// console.log(box);

const setence = "hello world is world hello"
const chars = {}
const arr = setence.split('')

for (let word of arr) {
    if (!chars[word]) {
        chars[word] = 1;
    } else {
        chars[word]++;
    }
}
console.log(chars);

//  const boc1="deep"
//  const arra2={}
//  const arr2=boc1.split(' ')

//  for(let word of arr2)
//  {
//     if(!arra2[word]){
//         arra2[word]=1
//     } else{
//         arra2[word]++
//     }
//  }

//  console.log(arr2);

// factoril
// let num=5;
// let fact=1;
// for(let i=1;i<=num;i++)
// {
//     fact=fact*i;
// }
// console.log(fact);

// let numm=9;
// let factt=1;
// for(let i=1;i<=numm;i++){
//     factt=factt*i
// }
// console.log(factt);

let nummm = 14;
let factttt = 1
for (let i = 1; i <= nummm; i++) {
    factttt = factttt * i
}
console.log(factttt);

const arrrr24 = " i am vishal i am from kishanganj "
const cup = {}

const arry = arrrr24.split(' ')

for (let word of arr) {
    if (!cup[word]) {
        cup[word] = 1
    } else {
        cup[word]++
    }

}
console.log(cup);
// spred
const person = {
    name: "vishal",
    roll: "20",
    class: "12th"
}
const personinfo = {
    adress: "kishanganj",
    colour: "white",
    hight: "5.7"
}

const person_detail = { ...person, ...personinfo }
console.log(person_detail);


const ab = ['a', 'b', 'c']
const bc = ['d', 'e', 'f']

const araay3 = ab.concat(bc)
console.log(araay3);

const dataaa = {
    name: "vhal",
    age: 16
}
console.log(dataaa);

(dataaa.age > 18) ? console.log("is allowd to vote") : console.log("not allowed to vote");


function vishal(...x) {
    let sum = 0
    for (let num of x) {
        console.log("sum", sum, "num", num);
        sum = sum + num
    }
    console.log(sum);
}
vishal(23, 34)

//  calulte 
function calucat(num1, num2) {
    let add, mul
    add = num1 + num2
    console.log(num1, "+", num2, "=", add);

}
calucat(5, 5)

const arrry = ["deep", "vishal", "adil"]
for (let i = arrry.length - 1; i >= 0; i--) {
    console.log(arrry[i]);
}

// call back
const sayhi = () => {
    console.log("heloo good mmoring");
}
setTimeout(sayhi, 2000)



const Num = [3, 5, 7, 8, 9]
function reducer(a, current) {
    console.log("acumletar", a, "cureentvalue", current);
    const result = a * current
    console.log("result", result);
    return result
}
Num.reduce(reducer)



function show(...x) {
    let sum = 0
    for (let num of x) {
        console.log("sum", sum, "num", num);
        sum = num + sum
        console.log("result", sum);
    }

}
show(5, 5)
class bird {
    peacock() {
        console.log("perack is national bird");
    }
}

class animal extends bird {
    tiger() {
        console.log("tiger is a king of jungle");
    }
}
const result = new animal()
result.peacock()
result.tiger()

let colour = "red"
switch (colour) {
    case "black":
        console.log("dog is black");
        break;

    case "red":
        console.log("apple is red ");
        break;
    default:
        console.log("dont no");

        

}

 class data{
    id
    Name
    classs
    constructor(id,Name,classs){
        this.id=id
        this.Name=Name
        this.classs=classs

    }
    show(){
        console.log("detail",this.Name,this.classs);
    }
    


}

let data1= new data("adil",6)
console.log(data1);
 data1.show()

 const araaaa6=[
    {id:1,name:"vishal"},
    {id:2,name:"jugnu"},
    {id:3,name:"adil"}
 ]

 
 const updatedArray = araaaa6.map(item => {
    if (item.id === 2) {
      return { ...item, name: " deeep" };
    }
    return item;
  });

  console.log(updatedArray);
//   triky question 
// lenth
let dataa=[1,3,5,6,7,8,7,5,1,6,5,7,9]
// dataa.length=2
// console.log(dataa);
let sum=dataa.reduce((x,y)=>x+y)
console.log(sum);
// dupclicte value
let dup=new Set(dataa);
console.log(dup);

// swap
// let x=20,y=30
// [x,y]=[y,x];
// console.log(x,y);
