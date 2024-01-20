// impure funtion
//  hamse value ka update karta hain*****
// let x=10;
// function add(){
//     console.log(x);
//     x++
// }

// add()
// add()
// // pure function
// that acccept an input and return the value without modifying and data out side   

function add(x) {
    console.log(x + 1);
    return x + 1
}

add(10)
// how to swap two value without ussing the third
let a = 9
let b = 10
let temp = a;
a = b
b = temp


console.log(`value is a${a} value is b $`)

const arry = [4, 6, 4, 56, 5]
function reducer(acc, curent) {
    console.log('accumalter', acc, "curent", curent);
    let result = acc * curent
    return result

}

arry.reduce(reducer)
//max funtion
const arrafun = [3, 67, 554, 445]
// const maxi=(arr)=>{
//     return arr.reduce(function(pre,crr){
//          return pre>crr?pre:crr
//     })

// }

// console.log(maxi(arrafun));


const Name = ["vishal", "adil", "tabesh"]

function Namein(Name, index) {
    console.log(`in number${index + 1} there name is ${Name} `);

}
Name.forEach((index, Name) => Namein(index, Name))


const line = "welcome to india";
const newline = line.split(' ')
for (let i = newline.length - 1; i >= 0; i--) {
    console.log(newline[i]);
}

const fruit = [{ apple: 7, bananaa: 8, apple: 8 },
{ apple: 7, bananaa: 8, apple: 8 },]

// const funtcount={}
// fruit.forEach(eleent=>{
//     for(each in eleent){
//         if(funtcount[each]){
//             funtcount[each]=funtcount[each]+eleent[each]
//         }else{
//             funtcount[each]=eleent[each]
//         }
//     }
// })
// console.log(funtcount);



const fruitcount = {}
fruit.forEach(element => {
    for (each in element) {
        if (fruitcount[each]) {
            fruitcount[each] = fruitcount[each] + element[each]
        } else {
            fruitcount[each] = element[each]
        }
    }
})

console.log(fruitcount);



const Obj = [{ id: 1, Name: "vishal" },
{ id: 2, Name: "meghna" }]

const update = Obj.map((iteam) => {
    if (iteam.id === 2) {
        return { ...iteam, Name: "neha" }


    }
    return iteam
})
console.log(update);

const math = [2, 34, 46, 676, 7888]
//  const maxiim=(arr)=>{
//      return arr.reduce(function(pree,crr){
//          return pree>crr?pree:crr
//      })

//  }
//  console.log(maxiim(math));
const newww = math.find((num) => num > 30)
console.log(newww)


const nummmmm = 5


let facct = 1
for (let i = 1; i < nummmmm; i++) {
    facct = facct * i
}
console.log(facct);

const intervew = (Name) => {
    if (Name == "vishal") {
        return function (scop) {
            console.log(`given name ${Name} ${scop}`);
        }
    }
    if (Name == "Adil") {
        return function (scop) {
            console.log(`given name ${Name} ${scop}`);
        }
    }
    if (Name == "Jugnu") {
        return function (scop) {
            console.log(`given name ${Name} ${scop}`);
        }
    } else {

        return function () {
            console.log("welcome to intew");
        }
    }



}

intervew("vishal")("what is yur hobby")
intervew("Adil")("what  **************is    this")