// array->similar type multiple data
// let number=[12,3456,75,98]
// console.log(number,number[1]);
 let day=["monday","tuesday","friday"]
 console.log(day,[1],day[2] )

/*arrey length*/ 
// console.log("arrey length;",day.length);
// /*condtion*/ 
// for(let i=0;i<day.length;i++)
// {   
//     console.log(day[i],"day");
// }
// /*incriment*/ 
// for(let i in day)
// {
//     console.log(day[i],"day"); 
// }
// /*for off look*/ 
// for(let ele of day)
// {
//     console.log(ele,"day");
// }
// // object-> collection of multiple properties(key)
// let person={
//     firstname:"vishal",
//     lastname:"kumar",
//     age:24,
//     height:"170cm",
//     birthdate:"friday"

// }
// console.log("fullname ",person.firstname,person.lastname);

// /*array object*/ 
// let personlist=[
//     { firstname:"vishal",lastname:"kumar",age:"24",birthdate:"friday"},

//     { firstname:"sonu",lastname:"kumar",age:"23",birthdate:"wednesday"},
//     { firstname:"raaj",lastname:"kumar", age:"21",birthdate:"mondday"}]

// for(let person of personlist)
// {
//     console.log("full name",person.firstname,person.lastname, person.age,person.birthdate)
// }

/*while loop*/
 let arr=[10,23,34,45]

//  let i=0
//  while(i<arr.length)
//  {
//  console.log(arr[i])
//  i=i+1
// }*
//dowhile*
let j=arr.length-1;
do{
    console.log(arr[j]);
    j--;
}while(j>=0)  


