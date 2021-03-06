/**
 * lib/stack.js
 * a LIFO extension of JS arrays.
 *
 * Copyright (C) 2015 Karim Alibhai.
 **/

"use strict";

var Stack = function () {}

// this helps maintain all array
// traits
Stack.prototype = []

// .first()
// grab first element
Stack.prototype.first = Stack.prototype.top = function () {
  return this[this.length - 1]
}

// .last()
// grab last element
Stack.prototype.last = Stack.prototype.bottom = function () {
  return this[0]
}

// .pop()
// pop off the last element, and return
// it
Stack.prototype.pop = function () {
  return this.splice(this.length - 1, 1)[0]
}

module.exports = function () {
  return new Stack()
}
