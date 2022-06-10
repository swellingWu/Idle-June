//- new一个函数，JS编译器会做的四件事情：
//' 创建一个新的空的对象
//' 把这个对象链接到原型对象上
//' 这个对象被绑定为this
//' 如果这个函数不返回任何东西，那么就会默认return this

function Fun( age,name ){
    this.name = name;
    this.age = age;
}
function create(fn,...args) {
    //- 创建一个新的对象
    var obj = {};
    //- 将空对象的原型指向构造函数的原型
    Object.setPrototypeOf( obj,fn.prototype );
    //- 将空对象作为构造函数的上下文(改变 this 指向)
    var result = fn.apply( obj, args );
    //- 对构造函数有返回值的处理
    return result instanceof Object ? result : obj;
}

console.log(create(Fun,18,"张三"));