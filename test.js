// older version of JS.

// function first () {
// 	var greet = "Hi";
// 	function second () {
//       alert(greet);
// 	}
// 	return second;
// }

// var newFunc = first();
// newFunc();

// New version JS..

const first = () => {
	const greet = "Hi";
	const second = () => {
      alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// Closures - a function ran. The function executed. it's never going to execute again.
// but it's going remember that there are references to those varibles
// so the child scope always has acces to the parent scope.

// Currying

const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

// Compose

const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// Avoiding side Effects, functional purity.

var a = 1 ;
function b() {
	a = 2;
}