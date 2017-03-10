import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Menu, Icon, message } from 'antd';

import {mixins} from './mixins'

/**
 * 类的修饰器
 *
 */
// DMEO1
// 为类添加一个静态属性
function testable(target) {
  target.isTestable = true;
  target.isOk = 'are you ok ?'
  target.tellMsg =()=>{
    message.success('告诉你一个好消息',5)
  }
}

@testable
class MyTestableClass {}

console.log(MyTestableClass.isTestable) // true
console.log(MyTestableClass.isOk) // true
MyTestableClass.tellMsg()

// DEMO2
function testable2(isTestable){
  return function(target){
    target.isTestable = isTestable
  }
}

@testable2(true)
class MyTestableClass2 {}
console.log(MyTestableClass2.isTestable)

@testable2(false)
class MyClassTest {}
console.log(MyClassTest.isTestable)

// DMEO3
// 为类的实例添加属性 可以通过目标类的prototype对象操作。
function testable3(target){
  target.prototype.isTestable = true
}

@testable3
class MyClass3 {}
let obj = new MyClass3()
console.log(obj.isTestable)

// DEMO4
const Foo = {
  foo(){
    console.log('foo')
  }
}
@mixins(Foo)
class MyClass4 {}
let obj2 = new MyClass4()
obj2.foo()


// async
async function f() {
  async function* gen() {
    yield 'a';
    yield 'b';
    yield 'c';
  }

  return await takeAsync(gen());
}

f().then(function (result) {
  console.log(result); // ['a', 'b', 'c']
})
export default class TestBabel extends Component{
    constructor(props){
        super(props)
    }


    render(){

        return (
            <div className="left-nav">
              <h2>Babel测试</h2>

            </div>
        )
    }
}
