let variableString = "hello";

let variableNumber = 10;

let nameWithType: String;
nameWithType = "daniyal";
// nameWithType = 14

let ageWithType: Number;
ageWithType = 21;

let booleanType: Boolean;
booleanType = true;
// booleanType = 5

let typeStringOrNumber: string | number; // union type
typeStringOrNumber = 21;
typeStringOrNumber = "hello";
// typeStringOrNumber = [] // error

/** ARRAY */

let names = ["daniyal", "huzaifa", "ali"];
names.push("han"); // array element should be string warna error
// names.push(5)

let testStringArray: String[];
// testStringArray = [1,2,3] // error
testStringArray = ["one", "two", "three"]; // Correct

let stringOrNumberArray: (String | Number)[];
stringOrNumberArray = [1, "two", 3]; // correct
// stringOrNumberArray = [1, "two", true] // error

let user = {
  username: "daniyal",
  age: 18,
  isAdmin: false,
};

// user.age = "eighteen"; // error, you can not change the type of element of object
user.age = 20;

// we cannot add extra property in object because we cannot add in object defining
// user.phone = "+924512136" //error

let userWithType: {
  username: String;
  age: Number;
  isAdmin: Boolean;
};

// object ma itna hi element ayenga jitna define kya hen, na extra na kamm warna error
userWithType = {
  username: "daniyal",
  age: 18,
  isAdmin: false,
};

let userWithTypeObj2: {
  username: String;
  age: Number;
  isAdmin: Boolean;
  phone?: String; // it isn't required field
};

userWithTypeObj2 = {
  username: "daniyal",
  age: 18,
  isAdmin: false,
  // phone: "+926516516165" // it isn't required field
};

// ANY TYPES ( BE CAREFUL )
let testAny: any;

// you should use any type when you are not sure type of variable
testAny = 12;
testAny = "Hello";
testAny = true;
testAny = [true];
testAny = {};

let testAnyArray: any[];
testAnyArray = [1, "two", false, []];

// FUNCTION

let functionReturnVoid = () => {
  console.log("Say, hi");
};

// functionReturnVoid = "hi" // it not assign a string bcz it type is function

let functionReturnString = (): String => {
  console.log("Say, hi");
  return "Say, hi";
};

// function when take argument

let functionWithArg1 = (num: number) => {
  // return number, we cannot define what return typesript smart it will understand what we want to return
  return num * 2;
};
// Same as above but pahaly hi clearify what is returning
let functionWithArg2 = (num: number): number => {
  return num * 2;
};

let functionWithArg3 = (num: number): void => {
  // return num * 2;
  // Do something but not return
};

let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};
sum(2, 3);

let funcWithOBj = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

let us = {
  username: "daniyal",
  age: 18,
};

funcWithOBj(us);
// it is too long when you take long biodata iskalaya alasis

/// TYPE ALIASES - custom type
type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.username);
};

// FUNCTION SIGNATURES :
// you create a prototype of the function using this prototypes you can create different functions

type myFunc = (a: number, b: string) => void;
// using this you create different functions

let write: myFunc = (num, str) => {
  console.log(str + "times" + num);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
  username: "john",
  age: 43,
  // theme: "brown",
  theme: "dark",
};

// INTERFACES
// Be aware no equal sign

interface IUser {
  username: string;
  email: string;
  age: number;
}
// you can create different interfaces with these one interface
interface IEmployee extends IUser {
  employeeId: number; // it have all the IUser thing additionally have own property
}

const emp: IEmployee = {
  employeeId: 1,
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
};

const client: IUser = {
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
};

// GENERICS
interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[]; // i want to fetch this post by using its author(user) and catgories
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[]; // i am goona use here whatever i pass it (string, other interface etc)
}

const testMe: IPostBetter<string> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str", "str2"],
};

interface IPostEvenBetter<T extends object> {
  // you can not give paramter as string, number
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<{ id: number }> = {
  // you can not pass string, you can not give paramter as string, number, it should be an object
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1 }],
};

const testMe3: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, username: "john" }],
};

const testMe4: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, title: "cat" }],
};
