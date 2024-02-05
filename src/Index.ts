// For understanding debugging

let age: number = 30;
if (age < 50) {
  age += 10;
}
console.log(age);

//Primitive date type

let sale: number = 1212_2323_2321;
let course: string = "Typescript";
let is_published: boolean = true;
let level; //when i declare a variable without initialization it's datatype is "any".
//avoid "any" type as much as possible

//function
function render(data: any) {
  console.log(data);
}

//Non-primitive datatypes
let number: number[] = [1, 23, 4];

//Tuples
let user: [string, number] = ["Sanay", 1];
//Tuples are like array with fixed size with mentioned datatype
user.push(1); //it allow to push values in tuple * Exceptional case
//Tuples are mostly usefull for two values

//enums
const enum Size {
  small = 1,
  medium,
  large,
}
//optimize the code when i use const keyword
let mySize: Size = Size.medium;
console.log(mySize);

// functions
function calculate(income: number, year = 2022): number {
  if (year > 2023) {
    return 2024;
  }
  if (income > 50_000) {
    return income * 2;
  } else {
    return income - 100;
  }
}
calculate(15000);

//Objects

type Employee = {
  readonly id: Number;
  name: String;
  retire: (date: Date) => void;
}; //type aliases

let employee: Employee = {
  id: 23,
  name: "Sanay",
  retire: (date: Date) => console.log(date),
};

//Union types

function kgtoLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}


// Literal types

type Quanitiy =50 | 100
let quantity:Quanitiy=100


//Q1

class GameObject {
  constructor(public x: number, public y: number){}
}

class Circle extends GameObject {
  constructor(x: number, y: number, public radius: number) {
      super(x, y);
  }
}

let circle = new Circle(10, 50, 8);
console.log(circle.x, circle.y, circle.radius);



type User={
  readonly id:number
userName:string
isPaid:boolean
email:string
}


let newUser:User={
  id:342323,
  userName:"Sanay",
  isPaid:true,
  email:"Sanay2@gmail.com"
}

function createUser(arg:User):{}{
return arg
  
}

createUser({id:1,userName:"Sanay",isPaid:true,email:"sanayuj@gmail"})


type UserDetails={
  name:string
  id:number
}

type AdminDetails={
  userName:string
  id:number
}

let sanayuj:UserDetails|AdminDetails={name:"Sanay",id:21}
sanayuj={userName:"Admin",id:23}


function getDetailsId(id:string|number){
  if(typeof id==="string"){
    id.toLowerCase()
    
  }else{
  console.log("id is number!");
  }
}

getDetailsId(2)
getDetailsId("5")


const data:(number|string|boolean)[]=[1,"2",true]

let seat:"front"|"middle"|"back"
seat="front"


const enum windowSeat{
Aisle,
Middle,
Window
}

const seatRequired=windowSeat.Aisle