// // chain method
// let obj={
//     x:0,
//     add(val){
//         this.x+=val
//         return this;
//     },
//     subtract(val){
//         this.x-=val;
//         return this;
//     },
//     devide(val){
//         this.x/=val;
//         return this;
//     }
// }
// obj.add(59)
// obj.subtract(34)
// obj.devide(34)
// console.log(obj);


let num=7;
for(let i=num;i>=1;i--){
    console.log(i);
}

const table=8;
for(let i=1;i<11;i++){
    console.log(table*[i]);
}

// const araay=["adil","vishal","deep"]
// for(let i=araay.length-2;i>=1;i--){
//     console.log( araay[i]);

// }

let even=4
for(let i=even/2;i<100;i++){
    console.log([i++]);
}


// without pramter retrun value

function add(){
    var a,b
    a=30,b=50
    var c=a+b
      
    return c
}

const myinfo=call=>{
    setTimeout(()=>{
        const skilss=["javascript","react.js"]
        call(false,skilss)
    },1000)
}
0

const mydetail=(error,result)=>{
    if(error){
        return console.log(error);
    }else{
        return console.log(result);
    }

}
myinfo(mydetail)
  
obj={
    name:"raju kayal",
    email:"raju @gmailcom",
    phone:"9933935760"
}
//console.log(object);
// 1.1 Iterating an object using Traditional for loop:
  for (let index = 0; index < Object.keys(obj).length; index++) {
     const element = obj[Object.keys(obj)[index]];
      console.log(element);   
  }


  function vish(x=0,y=0,z=''){
    console.log("given adding valure",x+y+z);
  }

  vish(12,45)

  const fruits = ['apple', 'banana', 'orange'];

 function fruitName(fruits,index){
  console.log(`in number ${index+1}. fruits name ${fruits}`);

  }

  fruits.forEach((fruits,index)=>fruitName(fruits,index))

  const wordsss="deeep"
  const char={}

  const newarry=wordsss.split('' )

   for(let word of newarry){
      if(!char[word]){
         char[word]=1
      }else{
        char[word]++
      }
    
   }
   console.log(char);
    