// let a: number = 1;

// personal data type
// type Student = {
//     name: string
//     age: number
//     courses: string[]
// }

// const std1: Student = {
//     name: 'Ali',
//     age: 20,
//     courses: ['AI', 'JS', 'HTML']
// }

//It does not work
// const arr:number[] = [true, 1, "abc"] 

//Its work
// const arr:[boolean, number, string] = [true, 1, "abc"];
// const arr:[boolean, number, ...string[]] = [true, 1, "abc", "def" ,"a1"];

//read only & can't write 
// const availableCourses: readonly string[] = ["AI", "JS", "IOT"];
//wrong
// availableCourses[1] = "BCC"

// enum PIAIC {
//     CNC,
//     IOT,
//     BCC,
//     AIC,
// }

// console.log(PIAIC.CNC);