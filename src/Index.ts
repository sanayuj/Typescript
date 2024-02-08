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

type Quanitiy = 50 | 100;
let quantity: Quanitiy = 100;

//Q1

class GameObject {
  constructor(public x: number, public y: number) {}
}

class Circle extends GameObject {
  constructor(x: number, y: number, public radius: number) {
    super(x, y);
  }
}

let circle = new Circle(10, 50, 8);
console.log(circle.x, circle.y, circle.radius);

type User = {
  readonly id: number;
  userName: string;
  isPaid: boolean;
  email: string;
};

let newUser: User = {
  id: 342323,
  userName: "Sanay",
  isPaid: true,
  email: "Sanay2@gmail.com",
};

function createUser(arg: User): {} {
  return arg;
}

createUser({ id: 1, userName: "Sanay", isPaid: true, email: "sanayuj@gmail" });

type UserDetails = {
  name: string;
  id: number;
};

type AdminDetails = {
  userName: string;
  id: number;
};

let sanayuj: UserDetails | AdminDetails = { name: "Sanay", id: 21 };
sanayuj = { userName: "Admin", id: 23 };

function getDetailsId(id: string | number) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    console.log("id is number!");
  }
}

getDetailsId(2);
getDetailsId("5");

const data: (number | string | boolean)[] = [1, "2", true];

let seat: "front" | "middle" | "back";
seat = "front";

const enum windowSeat {
  Aisle,
  Middle,
  Window,
}

const seatRequired = windowSeat.Aisle;

interface UserDetail {
  readonly id: number;
  guthubToken: string;
  email: string;
  userId: string;
  googleId: string;
  startTrial: () => string;
  getCoupon: (name: string, value: number) => string;
}

//reopening interface

interface UserDetail {
  gitHubId: number;
}

//inhertiance

interface Admin extends UserDetail {}

class AdminDetail {
  protected email: string;
  password: string;
  constructor(email: string, password: string) {
    (this.email = email), (this.password = password);
  }
  get fetchEmail(): string {
    return `apple${this.email}`;
  }

  set setValue(courseNum: number) {
    if (courseNum > 1) {
      throw new Error("Invaild number");
    }
    this.setValue = courseNum;
  }
}

class subUser extends AdminDetail {
  isFamily: boolean = true;
  fetch() {
    console.log(this.email);
  }
}
const Sanay = new AdminDetail("Sanay@gmail.com", "sdsdf");
console.log(Sanay.password);

//abstract class

class TakePhoto {
  constructor(public mode: string, public fliter: number) {}
}

class NewClass extends TakePhoto{

}


//Generics

function fetechUserName<Type>(val:Type):Type{
  return val
}

function fetechAdminName<T>(val:T):T{
  return val
}

interface Bus{
  name:string
  location:string
}

function fetchBusDetails<Bus>(value:Bus):Bus{
  return value
}

function passArray<T>(products:T[]): T{
  const indexValue=3
  return products[indexValue]
}

//Generics in arrow function

const newValue=<T>(product:T[]):T=>{
  const indexValue=4
  return product[indexValue]
}

//Generics extends interface

interface dbConnection{
  connection:string
  url:string
  id:number
}

function pokimonFetech <T,U extends dbConnection>(value1:T,value2:U):object{
  return {
    value1,
    value2
  }
} 

pokimonFetech(2,{connection:"sdd",url:"sds",id:33})


//narrowing


function fetchDataType(val:number | string){
  if(typeof val ==="string"){
    return val.toLowerCase()
  }
  return val+8
}