var hello; //declaring a variable
hello = "hello world"; //giving the variable a value
hello = 12; //giving the variable a numerical value

var go = 12; //declaring and giving a variable value

console.log(); //prints out the value of whatever is in the parenthese in the browser window "console"
console.log(hello);
console.log(go);

var obj = {
	hello: "Hello Object",
	goodbye: 1234
}; //creating a variable with an object in it; use curvey brackets
//you don't use semicolons in objects;
//you don't have to redeclare variables once they are inside an object
console.log(obj.hello); //prints out the value of the specified variable in the object
console.log(obj.cool); //this will print "undefined"

var arr = [
	"hello world",
	"goodbye prince",
	718
]; //this is declaring an array; use box brackets; use commas when you have several things

console.log(arr[0]); //this prints the value of the first thing in the array