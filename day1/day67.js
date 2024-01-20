var arry = ["india", "delhi", "patna"]
//   const cap=arry[0].charAt(0).toUpperCase()+arry[0].slice(1)
//   console.log(cap);

// for(vish of arry[0].charAt(0).toUpperCase()+arry[0].slice(1)){
//     console.log(vish);
// }


const updatearry = arry.map((coutart) => {
    return coutart.charAt((0)).toUpperCase() + coutart.slice(1)
})
console.log(updatearry);



// const arrry=["deep","adil","akah","jugnu"]

// // console.log(arrry[1].charAt(0).toUpperCase()+arrry[1].slice(1));
// const update=arrry.map((cap)=>{
//     return cap.toUpperCase()
// })

// console.log(update);


const rec =[ "my" ,"name" ,"india"]
// console.log(rec(0).toUpperCase()+rec(0).slice(1));
let char={}
for(let i=0;i<rec.length;i++){
    char[i]=rec[i]
}
console.log(char);

for(let i=1;i<5;i++){
    if(i===3)continue
    console.log(i);
}


