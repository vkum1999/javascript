
const sentence="deeeeep"
const char={}

const New=sentence.split('')
for(let word of New){
    if(!char[word]){
        char[word]=1
    }else{
        char[word]++
    }
}
console.log(char);


const Name= "vishal"
const charr=[]

for(let i=Name.length-1;i>=0;i--){
    charr[i]=Name[i]
       
}
console.log(charr);
const arrry = ["deep", "vishal", "adil"]
for (let i = arrry.length - 1; i >= 0; i--) {
    console.log(arrry[i]);
}


