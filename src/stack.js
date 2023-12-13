const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    const newNode = { element, next: null };

    if (!this.head) {
      newNode.prev = null;
      this.head = newNode;
    } else {
      newNode.prev = this.head;
      this.head.next = newNode;
      this.head = this.head.next;
    }
  }

  pop() {
    const popped = this.head.element;

    this.head = this.head.prev;

    return popped;
  }

  peek() {
    return this.head.element;
  }
}

module.exports = {
  Stack
};
