// annonymous funtion
// function myfun()
// {

// }
// let show =function(){
//     console.log("good morning")

// }
//     show();
// // perameter

let  multiple=function(num1,num2,num3){
    let result=num1*num2*num3;
    console.log("result:",result)
}
// multiple(10,30,40);
// multiple(5,7,9)
// retrun
// let add=function(num1,num2,num3){
//     let result=num1+num2+num3;
//     return result;
// }
// console.log (add(10,30,40));
// let a =add(5,7,9);
// console.log(a)
// arrow function/callback function
// =>fat arrow
let display=()=>{
    console.log("have a nice day")       
}
for(let i=1;i<=10;i++){
    display();
}

// power
// let power=(num1)=>{
//     let square=num1**2;
//     console.log("square result:",square)

// }
// power(6);
// power(9);
// qube
// let qube=(num1)=>{
//     let cube=num1**3;
//  return cube   
// }
// console.log("cube result:",qube(7))

// prameter->optional,default, rest
function display(x,y,z)
{
    console.log("Given value:",x,y,z);

}
display(10,30,50)
display("red","blue","green")
// default
function add(x=0,y=0,z=0)
{
    console.log("after adding values:",x+y+z);

}
add(10,undefined,50)
// concatenation
function concatenation(x="hlw",y="bye")
{
    console.log(x,"",y);
}
concatenation(undefined,"vishal")
// rest
// .....ellipsis
// function show(...x)
// {
//     console.log(x);
// }
// show(10,70);
// show(1,2,4,6,7,8,9,5);
// sum+num
// ...ellipsis
function  show(...x)
{
    let sum=0;
for(let num of x)

{
console.log("sum=",sum,"num=",num);
sum=sum+num;
}

    console.log("result: ",sum);
}
show(10,60);
show(1,3,5,67,8);

// ....ellipsis multy
function  showmul(...x)
{
    let mul=1;
for(let num of x)

{
console.log("mul=",mul,"num=",num);
mul=mul*num;
}


console.log("result: ",mul);
}
showmul(10,60);
showmul(1,3,5,67,8);

// ....ellipsis sub
function  showsub(...x)
{
    
    let sub=0;
for(let num of x)

{
console.log("sub=",sub,"num=",num);
mul=sub-num;
}

    console.log("result: ",sub);
}
showsub(10,60);
showsub(25,25,10);



    

