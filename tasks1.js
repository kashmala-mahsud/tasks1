//+++++++++++++++++++++ Question 1 ++++++++++++++++++++++++
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5)); 

//+++++++++++++++++++++ Question 2 ++++++++++++++++++++++++
function greeting(name) {
    return `Hello, ${name}!`;
}
console.log(greeting("kashmala")); 

//+++++++++++++++++++++ Question 3 ++++++++++++++++++++++++
let sumNo = (result) => {
    let sum=0;
    for (let i = 0; i < result.length; i++) {
        sum = sum + result[i];
    }
    return sum;
}
let arrayNo=[1, 2, 3, 4, 5]
console.log(sumNo(arrayNo)); 

//+++++++++++++++++++++ Question 4 ++++++++++++++++++++++++
function calculateBMI(weight, height) {
    return (weight / ((height*height)/10000)).toFixed(2);
}
console.log(calculateBMI(180, 46));

//+++++++++++++++++++++ Question 5 ++++++++++++++++++++++++
let stringLength= (string) => {
    return string.length;
}
console.log(stringLength("kashmala"));

//+++++++++++++++++++++ Question 6 ++++++++++++++++++++++++
function reverseString(s) {
    return s.split("").reverse().join("")
}
console.log(reverseString("kashmala"));

//+++++++++++++++++++++ Question 7 ++++++++++++++++++++++++
let greetingObj= {
    name:"kashmala",
    lastName: "mahsud"
};
let arrowFunc= (name, lastName) => {
    return`hello, ${greetingObj.name} ${greetingObj.lastName}`
}
console.log(arrowFunc(greetingObj));

//+++++++++++++++++++++ Question 8 ++++++++++++++++++++++++
function capitalizedString(str) {
    return str[0].toUpperCase()+str.slice(1)
}
console.log(capitalizedString("azeal"));

//+++++++++++++++++++++ Question 9 ++++++++++++++++++++++++
let strCapitalized = (strCap) => {
    return strCap.toUpperCase();
}
console.log(strCapitalized("kashmala"));

//+++++++++++++++++++++ Question 10 ++++++++++++++++++++++++
function isPalimdrome(str1) {
    if (str1==="") {
        return `give me value`;
    } else {
        let strValue= str1;
        return strValue === str1.split("").reverse().join("");
        
    }
  
}
console.log(isPalimdrome("madam"));