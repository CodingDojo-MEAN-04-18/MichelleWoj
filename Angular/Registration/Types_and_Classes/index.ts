//myNum = 5;
var myNumber: number = 5;
//myString = "Hello Universe";
var myString: string = "Hello Universe";
//myArr = [1,2,3,4];
var arrayOfNumbers: number[1,2,3,4];
//myObj = { name:'Bill'};
et myObj: { [key: string]: (string | number) } = { name: 'Bill' };
//anythingVariable = "Hey";
var anything: any = "Hey";
//anythingVariable = 25; 
var anything: any = 25;
//arrayOne = [true, false, true, true]; 
const arrayOne: boolean[] = [true, false, true, true];
//arrayTwo = [1, 'abc', true, 2];
const arrayTwo: (number | string | boolean)[] = [1, 'abc', true, 2];
//myObj = { x: 5, y: 10 };
myObj = { x: 5, y: 10 };

// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
class MyNode {
    private _priv: number;
  
    constructor(public val: number) {}
  
    doSomething(): void {
      this._priv = 10;
    }
  }
// myNodeInstance = new MyNode(1);
const myNodeInstance: MyNode = new MyNode(1);
// console.log(myNodeInstance.val);
console.log(myNodeInstance.val);
//function myFunction() {
  //  console.log("Hello World");
    //return;
//}
function myFunction(): void {
    console.log('Hello World');
    return;
}
// function sendingErrors() {
// 	throw new Error('Error message');
// }
function sendingErrors(): never {
	throw new Error('Error message');
}