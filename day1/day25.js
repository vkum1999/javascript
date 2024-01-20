const letters = ["a","b","c"];

for (const x of letters) {
  console.log(x);
}

class baby{
  Name(){
    console.log("rahul is good boy");
  }
  

}

class boy extends baby{
   vishal(){
    console.log('vishal is a genius boy');
   }
}

const boys=new boy()
 boys.Name()
 boys.vishal()

 const arraa=[12,34,26,24]

 function reducer(a,current){
  console.log("acu",a,"cureent",current);
  const reult=a*current
  console.log("result",reult);
  return reult
 }

 arraa.reduce(reducer)



 const  ary=["vishal","priti","adil"]

 const obj=ary.reduce(
  (a,it,i)=>
 (  
  {...a,[i]:it}),{}
 
 )
 
console.log(obj)

for(let i=0;i<100;i++){
  if(i%3===0&&i%6===0){
    console.log("amezon");

  }else if(i%6===0){
    console.log("goggle");
  }else if(i%5===0){
    console.log("Buzzz");
  }else{
    console.log(i);
  }

  
}

// 2nd example object
const arra=["vishal","adil"]
const objjj={};
for(let i =0; i<arra.length;i++){
    objjj[i]=arra[i]
}
console.log(objjj);


const fruit=[{apple:7,bananaa:8,apple:8},
  {apple:7,bananaa:8,apple:8},]

  const fruitct={}
  fruit.forEach(element=>{
    for(each in element){
      if(fruitct[each]){
        fruitct[each]=fruitct[each]+element[each]
      }else{
        fruitct[each]=element[each]
      }
    }
  })
  console.log(fruitct);

     const araa=[1,2,3,4]
    const araa2=[1,2,8,4]

    let cal=JSON.stringify(araa)
    let cal2=JSON.stringify(araa2)

      console.log(cal===cal2);
      
      
let a=6;
let b=4;
let c=a;

parseInt

 