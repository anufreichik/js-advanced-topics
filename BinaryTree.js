class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//   a
//  / \
//  b  c
// / \  \
// d  e  f

function deapthFirstPrint(root) {
  let stack = [root];
  let result = [];

  while (stack.length) {
    let current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
}

function deapthFirstPrintRecursive(root) {
  if (root === null) return;
  console.log(root.val);
  deapthFirstPrintRecursive(current.right);
  deapthFirstPrintRecursive(current.left);
}

function breadthFirstPrint(root) {
  let queue = [root];
  let result = [];

  while (queue.length) {
    let current = queue.shift(); //[]
    result.push(current.val);

    if (current.left) queue.push(current.left); //[b]
    if (current.right) queue.push(current.right); //[b,c]
  }
}

function isValueInTree(root, value) {
  let queue = [root];

  while (queue.length) {
    let current = queue.shift(); //[]
    if (current.val === value) return true;

    if (current.left) queue.push(current.left); //[b]
    if (current.right) queue.push(current.right); //[b,c]
  }
  return false;
}

//   20
//  / \
//  5  6
// / \  \
// -2  6  7

function sumTreeValues(root) {
  let queue = [root];

  let sum = 0;
  while (queue.length) {
    let current = queue.shift();
    sum += current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return sum;
}
