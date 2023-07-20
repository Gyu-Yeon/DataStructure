function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

let stack = [];

stack.push("google");
stack.push("instagram");
stack.push("youtube");

stack.pop();

console.log(stack);
