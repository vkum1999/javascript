const num="1,2,3,4,5"
for(let i=num.length-1;i>=0;i--){
    console.log(num[i]);
}




// const arry=[1,3,45,6]
// let i=arry.length-1
// while(i>=0){
//     console.log(arry[i]);
//     i--;
// }
// while loop arry to objct
const arr=["vishal","jugnu"]
const obbj=[]
let i=0
while(i<arr.length){
    obbj.push({ name:arr[i]})
    i++
}

console.log(obbj);

const numm=67;
console.log(numm.toString());

const fruit=[{apple:7,bananaa:8,apple:8},
    {apple:7,bananaa:8,apple:8}]
  
    const ftcut={}
    fruit.forEach(element=>{
        for(each in element){
            if(ftcut[each]){
                ftcut[each]=ftcut[each]+element[each]
            }else{
                ftcut[each]=element[each]
            }
        }
    })

    console.log(ftcut);


    const arrry=[1,2,4,5,5,8]
    const Nummm=arrry.map(num=>num*2)
    console.log(Nummm);

    
    // arct =function(arrry,index){
    //     console.log(`index num ${index+1} ${arrry}`);
    // }


    // arrry.forEach((arrry,index)=>arct(arrry,index))


    const at="67"
    let vi=parseInt(at)
    console.log(vi);
   const table=3
    
//    let tablee=9
// for( let i=1;i<=10;i++){
//     console.log(`${tablee}*${i}=${tablee*i}`);

// };


const ele=["vishal","jugnu","priti"]

for(vishal in ele){
    console.log(vishal);
}

for(vishu of ele){
    console.log(vishu);
}
// call backk
const person=(fried,callfrend)=>{
    console.log(`i am busy right know i am taking to ${fried}.i will call back you`);
    callfrend();
}

const persontwo=()=>{
    console.log(`hey whatsapp i call you back dehkha`);
}

person("vishal",persontwo)