class Queue {
  constructor() {
    this.items = []
  }
  enqueue(element) {
    this.items.push(element)
  }
  dequeue() {
    return this.items.shift()
  }
}

var queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.items)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.items)