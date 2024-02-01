
// For understanding debugging

let age:number=30
if(age<50){
    age+=10
}
console.log(age);


//Primitive date type

let sale:number=1212_2323_2321
let course:string="Typescript"
let is_published:boolean=true
let level; //when i declare a variable without initialization it's datatype is "any".
//avoid "any" type as much as possible



//function
function render (data:any){
    console.log(data);
    
}

//Non-primitive datatypes
let number:number[]=[1,23,4]


//Tuples
let user:[string,number]=["Sanay",1]
//Tuples are like array with fixed size with mentioned datatype
user.push(1)//it allow to push values in tuple * Exceptional case
//Tuples are mostly usefull for two values



//enums
enum Size {small=1,medium,large}