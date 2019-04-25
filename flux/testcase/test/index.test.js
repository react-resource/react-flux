var { expect } = require('chai')
var { factorial } = require('../index')

// describe用于给测试用例分组，it代表其中一个测试用例
describe('测试阶乘函数：', function() {
  it('should return 1 when the value is quual to 0', function() {
    expect(factorial(0)).to.be.equal(1)
  })
  it('should return 6 when the value is quual to 3',function() {
    expect(factorial(3)).to.be.equal(6)
  })
})