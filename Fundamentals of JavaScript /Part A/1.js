class Stack {
  constructor() {
    this.items = []
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    return this.items.pop()
  }
}

var stack = new Stack()
stack.push(1)
stack.push(2)
console.log(stack.items)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.items)

function one() {
  var a = 1

  function two() {
    var b = 2
    debugger

    function three() {
      var c = 3
      debugger
    }
    three()
  }
  debugger
  two()
}
one()