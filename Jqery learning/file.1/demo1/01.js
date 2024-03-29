var $ = jQuery = function () {
    return new jQuery.fn.init ();
}
jQuery.fn = jQuery.prototype = {
    init : function () {
        this.length = 0;  //本地属性
        this._size = function () {  //本地方法
            return this.length;
        }
        return this;
    },
    length : 1,
    version : "3.2.1",  //原型属性
    size : function (){  //原型方法
        return this.length;
    }
}
jQuery.fn.init.prototype = jQuery.fn ////使用jQuery的原型对象覆盖init的原型对象
console.log($().version);  //返回undefined
console.log($()._size());  //返回0
console.log($().size());  //抛出异常