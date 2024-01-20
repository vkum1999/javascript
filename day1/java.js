// rest
function show(name) {
    name:"vishal"
    console.log(name);

}
show(name)

// 2
function show(...x) {
    let sum = 0
    for (let num of x) {
        console.log("sum", sum, "num", num);
        sum = sum + num
        console.log("result:", sum);

    }




}
show(50,58)


// spred
let details={
    first_name:"vishal",
    last_name:"das",
    location:"kishanganj"
}
let info={
    height:"5.7",
    weight:"75",
    age:"24"
}

let personal_details={
    phone_num:"7903874231",
    Email_id:"vishalkumar57576@gmail.com"
}

let person={...details,...info,...personal_details}
console.log(person)
// map
let numArr = [5, 8, 9, 0, 13];
let mapped = numArr.map(num => num + 2)
console.log(mapped);




// arrey oboject
const cars = [
    { make: 'Honda', model: 'Accord', year: 2021 },
    { make: 'Toyota', model: 'Camry', year: 2022 },
    { make: 'Ford', model: 'Mustang', year: 2020 }
  ];
  console.log(cars);


// creat a object
const ststudnt={
    name:"vishal" ,
    last_name:"das"

}
console.log(ststudnt);
  
// for in loop
// for each loop
const fruits = ['apple', 'banana', 'orange'];

fruits.forEach(function(fruit) {
  console.log(fruit);
});

