// Funtion->named ,annonymous,arrow
// named funtion
// without parameter without paramerter
function display()
{
    console.log("hello.../n how are you");
}
display();
display();
// with parameter without return type
function sum(num1,num2)
{

    let result
    result=num1,num2
    console.log("addition result of",num1,num2,":",result);

}
// funtion calling with argument
sum(12,25);
sum(15,35);

function calculation(num1,num2)
{
    let add,sub,mul,div,rem,power;
    add=num1+num2;
 console.log(num1,"+",num2,"=",add);
   sub=num1-num2;
 console.log(num1,"-",num2,"=",sub);
   mul=num1*num2;
 console.log(num1,"x",num2,"=",mul);
   div=num1/num2;
 console.log(num1,"/",num2,"=",div);
 rem=num1%num2;
 console.log(num1,"%",num2,"=",rem);
 power=num2**3;
console.log(num2,"^3=",power);   

}
// funtion calling arrgument
calculation(99,25);
// funtion


function exp(x,y)
{
let result;
result=((x*x)+(3*(y**4)));
console.log(result);
}
exp(4,8);
// with parameter with return type
function exp(x,y)
{
    let result;
    result=((x*x)+(2*(y**3)));
    return result;

}
console.log("result:",exp(2,-1));
let r=exp(1,2);
console.log("result:",r);
exp(2-1);

