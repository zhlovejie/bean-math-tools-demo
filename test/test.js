const math_tools = require('../src/math-tools.js')

const assert = require('assert')

const add_result = math_tools.add(1,"1")

assert.equal(2,add_result,`2 == ${add_result} fail....`)
assert.strictEqual(2,add_result,`2 == ${add_result} fail....`)


