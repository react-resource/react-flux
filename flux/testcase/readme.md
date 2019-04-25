# 单元测试
  在单元测试中，常用的方法论有两个：TDD（测试驱动开发）&BDD（行为驱动开发）

## 测试框架
### mocha
基础测试实例：
``` javascript
  const assert = require('assert');
  describe('测试套件描述', function() {
    it('测试用例描述: 1 + 2 = 3', function() {
      // 测试代码
      const result = 1 + 2;
      // 测试断言
      assert.equal(result, 3);
    });
  });
```
- describe 
定义的测试套件(test suite)。表示一组相关的测试。它是一个函数，第一个参数是`测试套件`的名称（"加法函数的测试"），第二个参数是一个实际执行的函数
- it 
定义的测试用例(test case)。表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是`测试用例`的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。
  说明：每个测试文件中可以有多个测试套件和测试用例。mocha不仅可以在node环境运行, 也可以在浏览器环境运行；
  在node中运行也可以通过npm i mocha -g 全局安装mocha然后以命令行的方式运行测试用例也是可行的

### karma
- 模块安装
``` bash
  # 基础测试库
  npm install karma-cli -g
  npm install karma mocha karma-mocha --save-dev

  # 断言库
  npm install should --save-dev
  npm install karma-chai --save-dev

  # 浏览器相关
  npm install karma-firefox-launcher --save-dev
  npm install karma-chrome-launcher --save-dev
```
- ![配置](http://karma-runner.github.io/2.0/config/configuration-file.html)
这里的配置主要关注的是karma.conf.js的相关配置。
需要注意的两个字段:
1. singleRun: 如果值为 true, 则在浏览器运行完测试后会自动退出关闭浏览器窗口。singleRun的值我们可以更具运行环境来动态赋值, 可以启动命令中添加NODE_ENV变量。
2. browsers: 浏览器配置(可以配置多个浏览器); 如果浏览器无法启动需要进行相关浏览器的配置。设置自启动浏览器时候如果浏览器启动失败可能需要设置为--no-sandbox模式。
``` json
  {
    "browsers": ["Chrome", "ChromeHeadless", "ChromeHeadlessNoSandbox"],
    "customLaunchers": {
      "ChromeHeadlessNoSandbox": {
        "base": "ChromeHeadless",
        "flags": ["--no-sandbox"]
      }
    }
  }
```
或者：
``` json
  {
    "browsers": ["Chrome_travis_ci"],
    "customLaunchers": {
      "Chrome_travis_ci": {
        "base": "Chrome",
        "flags": ["--no-sandbox"]
      }
    }
  }
```


## 断言库
  所谓"断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。所有的测试用例（`it` 块）都应该含有一句或多句的断言。它是编写测试用例的关键。断言功能由断言库来实现，Mocha 本身不带断言库，所以必须先引入断言库
引入断言库代码示例：
``` javascript
  var expect = require('chai').expect;
```
断言库有很多种，`Mocha` 并不限制使用哪一种，它允许你使用你想要的任何断言库。上面代码引入的断言库是 `chai`，并且指定使用它的 `expect` 断言风格。下面这些常见的断言库:
- assert
这个是 Node.js 中的断言模块
- should.js
- expect.js
- chai.js


### assert 
- assert(value[, message])
断言 value 的值是否为true，这里的等于判断使用的是 == 而不是 ===。message 是断言描述，为可选参数
- assert.ok(value[, message])
使用同`assert(value[, message])`
- assert.equal(actual, expect[, message])
预期 actual 与 expect值相等。equal用于比较的 actual 和 expect 是基础类型(string, number, boolearn, null, undefined)的数据。其中的比较使用的是 == 而不是 ===
- assert.notEqual(actual, expected[, message])
用法同 assert.equal(actual, expect[, message]) 只是对预期结果取反（即不等于）
- assert.strictEqual(actual, expect[, message])
用法同 assert.equal(actual, expect[, message]) 但是内部比较是使用的是 === 而不是 ==。
- assert.notStrictEqual(actial, expected[, message])
用法同 assert.strictEqual(actual, expect[, message]) 只是对预期结果取反（即不严格等于）。
- assert.deepEqual(actual, expect[, message])
deepEqual 方法用于比较两个对象。比较的过程是比较两个对象的 key 和 value 值是否相同, 比较时用的是 == 而不是 ===。
- assert.notDeepEqual(actual, expected[, message])
用法同 assert.deepEqual(actual, expect[, message]) 只是对预期结果取反（即不严格深等于）。
- assert.deepStrictEqual(actual, expect[, message])
用法同 assert.deepEqual(actual, expect[, message]) 但是内部比较是使用的是 === 而不是 ==。
- assert.notDeepStrictEqual(actual, expected[, message])
用法同 assert.deepStrictEqual(actual, expect[, message]) 只是对结果取反（即不严格深等于）。
- assert.throws(block[, error][, message])
错误断言与捕获, 断言指定代码块运行一定会报错或抛出错误。若代码运行未出现错误则会断言失败，断言异常。
``` javascript
  it('throws', () => {
    var fun = function() { 
      // 运行的代码
     };
    assert.throws(fun, 'fun error');
  })
```
- assert.doesNotThrow(block[, error][, message])
错误断言与捕获, 用法同 throws 类似，只是和 throws 预期结果相反。断言指定代码块运行一定不会报错或抛出错误。若代码运行出现错误则会断言失败，断言异常。


### chai
测试脚本与所要测试的源码脚本同名，但是后缀名为.test.js（表示测试）或者.spec.js（表示规格）。比如，add.js 的测试脚本名字就是 add.test.js
``` javascript
  // add.test.js
  var add = require('./add.js');
  var expect = require('chai').expect;

  describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
      expect(add(1, 1)).to.be.equal(2);
    });
  });
```
expect 断言的写法都是一样的。头部是 expect 方法，尾部是断言方法，比如 equal、a/an、ok、match 等。两者之间使用 to 或 to.be 连接。如果 expect 断言不成立，就会抛出一个错误。事实上，只要不抛出错误，测试用例就算通过
``` javascript
  // 相等或不相等
  expect(4 + 5).to.be.equal(9);
  expect(4 + 5).to.be.not.equal(10);
  expect(foo).to.be.deep.equal({ bar: 'baz' });

  // 布尔值为true
  expect('everthing').to.be.ok;
  expect(false).to.not.be.ok;

  // typeof
  expect('test').to.be.a('string');
  expect({ foo: 'bar' }).to.be.an('object');
  expect(foo).to.be.an.instanceof(Foo);

  // include
  expect([1, 2, 3]).to.include(2);
  expect('foobar').to.contain('foo');
  expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

  // empty
  expect([]).to.be.empty;
  expect('').to.be.empty;
  expect({}).to.be.empty;

  // match
  expect('foobar').to.match(/^foo/);
```






## 参考链接
![浅谈前端单元测试](https://yq.aliyun.com/articles/610101)
![前端单元测试](https://segmentfault.com/a/1190000013470485)

