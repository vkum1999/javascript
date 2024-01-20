// string method chat sheeet
var txt = "hello would"
console.log(txt.charAt(1));  //value ka ek ek element print
// indexof n 
var te = "let find where 'pen'  occurs!"
console.log(te.indexOf("pen"));

var tu = " A vishal know vishal"
console.log(tu.lastIndexOf('vishal'));
// value off
const s = new String("test")
typeof s;
s.valueOf();
typeof s.valueOf();
console.log(s);

// tolower case sabka string small

var sentence = "THIS IS VISHAL"
console.log(sentence.toLowerCase());
// reaplce
var str = "heeelo i am dev"
console.log(str.replace("dev", "vishal"));

// toopar case
var setn = "this is vishal"
console.log(setn.toUpperCase());

const valueee = ["vishal", "jugnu", "sahnsaa"]

Nmt = function (valueee, index) {
    console.log(`${index + 1},${valueee}`);
}

valueee.forEach((valueee, index) => Nmt(valueee, index))



const value = 456
const newline = value.toString()



const value2 = newline.split('')


for (let i = value2.length - 1; i >= 0; i--) {
    console.log(value2[i]);
}


function out() {
    let cout = 1
    function inser() {
        return cout
    }
    return inser
}
const inser = out()
console.log(inser(out));
const intervew = (Name) => {
    if (Name == "jugnu") {
        return function (scop) {
            console.log(`in name ${Name} ,${scop}`);

        }
    }
    if (Name == "Vishal") {
        return function (scop) {
            console.log(`in name ${Name} ,${scop}`);

        }
    } else {
        return function () {

            console.log("welcome to intewvew");
        }

    }


}
intervew("jugnu")("explan shif method")
intervew("Vishal")("explan shif method")
// map  
const aree = [1, 2, 3, 4, 6]
const arry = aree.map(num => num * 2)
console.log(arry);
// foreach 

const Namee = ["vishal", "deep"]


namtcout = function (Namee, index) {
    console.log(`no${index + 1},name is${Namee}`);

}
Namee.forEach((Namee, index) => namtcout(Namee, index))
// for of loop
const Name = ["vishal", "adil", "Deep"]

for (let ele of Name) {
    console.log(ele);

}

// for in loop
const Name2 = ["vishal", "adil", "Deep"]

for (let ele in Name2) {
    console.log(ele);

}

const markss = {
    marks: 100 - 90,
    marks: 80 - 60
    ,
    marks: 40 - 60
}
if (markss.marks = 100 - 90) {
    return console.log("grad A");
} else if (markss.marks = 80 - 60) {
    return console.log("grad b");
} else if (markss.marks = 40 - 60) {
    return console.log("grad c");
} else {
    return console.log("grad");
}


