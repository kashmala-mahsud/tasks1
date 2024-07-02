let students=[
    {   name: "Alice",
        grade: 90
    },
    {   name: "Bob",
        grade: 80
    },
    {   name: "Charlie",
        grade: 95
    },
    {   name: "Dave",
        grade: 85
    }
];
// +++++++++++++++++++++++++++++ Question 1 +++++++++++++++++++++++++++ 
let newStudents=[
{
    name: "Eve",
    grade: 88
},
{
   name: "Frank",
   grade: 92
}];
console.log(students.concat(newStudents));

// +++++++++++++++++++++++++++++ Question 2 +++++++++++++++++++++++++++ 


for (const [index, val] of students.entries()) {
  console.log(index, val);
}

// +++++++++++++++++++++++++++++ Question 3 +++++++++++++++++++++++++++ 
let checkedGrades= (grade, key) => {
    return students[key].grade>= 70;
}
console.log(students.every(checkedGrades));

// +++++++++++++++++++++++++++++ Question 4 +++++++++++++++++++++++++++ 


// let newGrade= new Array(students.length).fill({grade: 100});
// const newVar= students.map((student, index) => ({

//         ...student,
//         grade: newGrade[index].grade
    
// }));console.log(students);
// console.log(newVar);
// let grades=students.map(({grade}) => students.grade).fill(100);
// let stdList= students.map((student, index) =>( {
//     name:student.name ,
//     grade: grades[index]
// }));

// console.log(stdList);




// +++++++++++++++++++++++++++++ Question 5 +++++++++++++++++++++++++++ 
let topperList= students.filter((std) => std.grade >90);
console.log(topperList); 

// +++++++++++++++++++++++++++++ Question 6 +++++++++++++++++++++++++++ 
let findStudent= students.find ((studentName) => {
return studentName.name==="Charlie";
});
console.log(findStudent);

// +++++++++++++++++++++++++++++ Question 7 +++++++++++++++++++++++++++ 
let findIndexStudent= students.findIndex ((student) => {
    return student.grade===85;
    });
    console.log(findIndexStudent);
    
// +++++++++++++++++++++++++++++ Question 8 +++++++++++++++++++++++++++ 
let nestedArray=[[1, 2], [3, 4, 5], [6]]
console.log(nestedArray.flat(Infinity)); 

// +++++++++++++++++++++++++++++ Question 9 +++++++++++++++++++++++++++ 


const result = students.flatMap((num) => (num.grade >=70? true : false));

console.log(result);

// +++++++++++++++++++++++++++++ Question 10 +++++++++++++++++++++++++++ 
students.forEach((std) => {
    console.log(std.name);
});

// +++++++++++++++++++++++++++++ Question 11 +++++++++++++++++++++++++++
console.log(Array.from("hello world"));

// +++++++++++++++++++++++++++++ Question 12 +++++++++++++++++++++++++++
for (const val of students) {
    console.log(val.name.includes("Eve"));
}
// just wants to return only single value then use map method

let checkName=students.map((std) => {
    return std.name;
}).includes("Bob");
console.log(checkName);

// +++++++++++++++++++++++++++++ Question 13 +++++++++++++++++++++++++++
let studentFirst =students.map((stdFirst) => {
    return stdFirst.name;
}).indexOf("Bob");
console.log(studentFirst);

// +++++++++++++++++++++++++++++ Question 14 +++++++++++++++++++++++++++
let stdGrades=students.map((stdName) => {
    return stdName.grade;
});
console.log(stdGrades);

// +++++++++++++++++++++++++++++ Question 15 +++++++++++++++++++++++++++
const newStudent=students.push({ name: "Grace", grade: 87});
console.log(students); 

// +++++++++++++++++++++++++++++ Question 16 +++++++++++++++++++++++++++
const removeLastName= students.pop();
console.log(students);


// +++++++++++++++++++++++++++++ Question 17 +++++++++++++++++++++++++++
console.log(students.reverse()); 

// +++++++++++++++++++++++++++++ Question 18 +++++++++++++++++++++++++++
let removeFirstStudent= students.shift();
console.log(students);
// +++++++++++++++++++++++++++++ Question 19 ++++++++++++++++++++++++++
let totalGrade=students.map((stdName) => {
    return stdName.grade;
}).reduce((acc, curr) => acc + curr);
let avg= totalGrade/students.length;
console.log(avg.toFixed(2));
