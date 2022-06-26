var $ = jQuery = function () {
    // return new jQuery()//- 返回类的实例 -> 内存溢出
    //! 在构造函数内部实例化对象会造成死循环
    return new jQuery.fn.init();//- 返回类的原型
}

jQuery.fn = jQuery.prototype = {
    init: function () {
        this.length = 0;//' 本地属性
        this._size = function () {//' 本地方法
            return this.length
        }
        return this
    },
    //! 扩展 jQuery 的原型对象,尽量少操作原型
    version: "3.2.1",//' 原型属性
    size: function () {//' 原型方法
        // 原型方法
        return this.length
    }
}
jQuery.fn.init.prototype = jQuery.fn//'无法访问对象内 init 方法，作用域受阻
//使用 jQuery 的原型对象覆盖 init 的原型对象
//! 调用原型对象
// var test = new $();//- 实例化对象
console.log($().version);//- 属性返回值 "3.2.1"
console.log($().size());//- 返回 0
console.log($()._size());//- 抛出异常 作用域被阻