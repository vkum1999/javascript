//  arrey method->map,filter,find,findindex
// map
let numArr = [5, 8, 9, 0, 13];
let mapped = numArr.map(num => num + 2)
console.log(mapped);
let newArr = numArr.map(x => {
    if (x % 2 == 0) {
        return 'even';
    }
    else {
        return 'odd';
    }

}

)
console.log(newArr);

// if(condition)
// {
//     statement
// }
// else if(condition)
// {
//     statement
// }
// else{
//     statement
// }
// let num=5;
// if(num>0)
// {
//     console.log("posstive number");
// }
// else if(num==3)
// {
//     console.log("three");
// }
// else{
//     console.log("negative number");
// }
// switch case
let colour = "black"
switch (colour) {
    case "red":
        console.log("apple is red");
        break;

    case "yellow":
        console.log("banana is yellow");
        break;
    case "black":
        console.log("dog is black");
        break;
    default:
        console.log("fruit unknown")


}
// (condition) ?true statement :false statement
let num = 87;
(num % 2 === 0) ?
    console.log("given number is even") : console.log("given number is odd");
// destructuring-object,arrey
// let color=["red","green","yellow","brown","black","white"];
// let[ele1,ele2,ele3,ele4,ele5,ele6,ele7]=color
// console.log(ele5);

// classs
class student {
    s_id;
    s_name;
    s_roll;
    s_class;
    constructor(id, name, roll, clas) {
        this.s_id = id;
        this.s_name = name;
        this.s_roll = roll;
        this.s_class = clas;
    }
    show() {
        console.log("student name:", this.s_name);

    }
}

let s1 = new student('s01', 'vishu', 1, 10)
console.log(s1);
s1.show();

// const nameeeee=["how are you"]
// let i=0
// for(let i=nameeeee.length+10; i>=0; i++){
//     console.log(nameeeee);
// }

let person = { fname: "vishal", lname: "das" }
function display() {
    return {




    }
}



