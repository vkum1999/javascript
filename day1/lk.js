const ar=[1,3,4,5,6]

for(let i=ar.length-1;i>=0;i--){
    console.log(ar[i]);
}
const arrt="deep"
const   char={}
const art=arrt.split('')

for(    let word  of   art  ){
    if(!char[word]){
        char[word]=1
    }else{
        char[word]++
    }

}

console.log(char);
const age=[19,20,23,27]
const New=age.filter((value,)=>{
       return value >20
})
console.log(New);

const arrtt=[1,23,,54,66,66,66]
const unic=[...new Set(arrtt)];
console.log(unic);

const arra=["vishal","adil"]
const objjj={};
for(let i =0; i<arra.length;i++){
    objjj[i]=arra[i]
}
console.log(objjj)


const tttt=[4,6,78,8,5,64,754,,3,3,3,3,3]
const nt=tttt.filter((ele,index,ty)=>
       ty.indexOf(ele)!==index

)
console.log(nt);
let digit=[1,0,10,-1,22,28]
let newdigit=digit.find(num=>num>10)
console.log(newdigit);


const arrrt=["tyyusus","hjjw"]
const tyy={}
for(let i=0;i<arrrt.length;i++){
    tyy[i]=arrrt[i]
}
console.log(tyy);