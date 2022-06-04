//- new一个函数，JS编译器会做的四件事情：
//' 创建一个新的空的对象
//' 把这个对象链接到原型对象上
//' 这个对象被绑定为this
//' 如果这个函数不返回任何东西，那么就会默认return this

// 构造器函数
let Parent = function (name, age) {
    this.name = name;
    this.age = age;
};
Parent.prototype.sayName = function () {
    console.log(this.name);
};
//自己定义的new方法
let newMethod = function (Parent, ...rest) {
    // 1.以构造器的prototype属性为原型，创建新对象；
    let child = Object.create(Parent.prototype);//' 方法创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__(实现继承)
    // 2.将this和调用参数传给构造器执行
    let result = Parent.apply(child, rest);//' 将后者对象添加进前者构造器
    // 3.如果构造器没有手动返回对象，则返回第一步的对象
    return typeof result === 'object' ? result : child;
};
//创建实例，将构造函数Parent与形参作为参数传入
const child = newMethod(Parent, 'echo', 26);
child.sayName() //'echo';
console.log( child.name );
//' Parent.sayName(); --> Parent.sayName is not function