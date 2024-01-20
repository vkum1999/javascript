const Name=["vishal","vil","adil"]
for(let i=0; i<Name.length+5;i++){
    setTimeout(()=>{
        console.log(Name+[i]);

    },2000)
}


for(let i=3;i<6;i++){
    if(i===3)continue;
    console.log(i);
}

let araa=[1,2,3,4]
let araa2=[1,2,3,4]

let call=JSON.stringify(araa)
let call2=JSON.stringify(araa2)

console.log(call===call2);

const vis=["vishal","adil"]
const obbjj={}


const Nmaee="deep"
const char={}
let newline=Nmaee.split('')

 for(let word of newline){
    if(!char[word]){
        char[word]=1
    }else{
        char[word]++
    }
 }
console.log(char);

// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }

// let v = 0
// do {
//   console.log(v)
//   v++
// } while (v <= 5)

// break loop

for(let i = 0; i <= 5; i++){
    if(i == 4){
      break
    }
    console.log(i)
    


  }

  const Nameee="deep"
  const charr={};
  const newword=Nameee.split('')

  for( let word of newword){
    if(!charr[word]){
        charr[word]=1
    }else{
        charr[word]++
    }
  }

  console.log(charr);

const ind="my name is vishal"
const newlineee=ind.split(' ')

for(let i=newlineee.length-1;i>=0;i--){
    console.log(newlineee[i]);
}




function tame(name,age,email){
    console.log(name+""+age+""+email+"");

}

tame("vsihal",23,"vlk@gmail")

