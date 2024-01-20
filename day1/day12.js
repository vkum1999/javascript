// high oder funtion
const intervew = (name) => {
    if (name === "vishal") {
        return function (topic) {
            console.log(`hii ${name}.what is ${topic}?.plz explane us`);
        }
    }
    if (name === "Adil") {
        return function (topic) {
            console.log(`hii ${name}.what is ${topic}?.plz explane us`);
        }
    }
    if (name === "deeep") {
        return function (topic) {
            console.log(`hii ${name}.what is ${topic}?.plz explane us`);
        }
    } else {
        return function () {
            console.log("welcome to intervew");
        }
    }




}
intervew("vishal")("explan shift method")
intervew("adil")("explan unsfit method")
intervew("deep")("explan filter method")
// triky
for (var i = 0; i < 5; i++); {
    console.log(i++);
};
var number = 9
for(let i=1;i<=10;i++){
    console.log(`${number}*,${i},${number*i}`);
}

const arrr12 = [{ id: 3, name: "vishal", study: "b.tech" },
{ id: 2, name: "adil", study: "b.tech" },
{ id: 3, name: "jugnu", study: "b.tech" }


]

const updatename = arrr12.map((iteam) => {
    if (iteam.id === 3) {
        return { ...iteam, study: "B.Ca" }


    }
    return iteam
})
console.log(updatename);


const ni = 5;
let fact = 1
for (let i = 1; i < ni; i++) {
    fact = fact * i
}
console.log(fact);


const arrrr = call => {
    setTimeout(() => {
        const skills = ["html", "css"]
        call(false, skills)
    }, 2000)
}


const reaply = (error, result) => {
    if (error) {
        return console.log(error);
    } else {
        return console.log(result);
    }
}

arrrr(reaply)



const numberss = [5, 5, 10, 5]
let sum = 0
for (let i = 0; i < numberss.length; i++) {
    sum = sum + numberss[i]

}
console.log(sum);
 
  function myinfo (){
    return new Promise(solved=>{
        setTimeout(()=>{
            solved('this is succesfull')
        },1000)
    })
 }

 async function reapl(){
    console.log('not solved');
    let rssresult=  await myinfo()
     console.log(rssresult);
 }

 reapl()
 console.log('not solves');

 const newb=callback=>{
    setTimeout(()=>{
        const skills=["html","css"]
           callback(false,skills)

    },1000)
 }

  const resuu=(err,result)=>{
    if(err){
        return console.log(err);
    }else{
        return console.log(result);
    }

  }

  newb(resuu)

//   gusss what
let nummmmm=[1,6,8];
let string=["b" ,,,"a"]
console.log(nummmmm.length);
console.log(string.length);
// itreable/Iterator
let x=[1,2,3,4,5];
let y=x[Symbol.iterator](3);
y.next()
console.log(y.next());

class student{
    id 
    carName
    barnd
    owername
    constructor(id,carName,barnd,owername){
        this.id=id
        this.carName=carName
        this.owername=owername
        this.owername=owername

    }
    show(){
        console.log('given detail',this.owername,this.carName);
    }

}

let detail=new student( "vishal","audiR8")
 console.log(detail);
 detail.show
//  2nd level
// callback
const perone=(friend,callfrnd)=>{
    console.log(`i am busy right know.i am taking to ${callfrnd}`);
}

