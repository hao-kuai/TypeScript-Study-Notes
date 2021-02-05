/*
 * 基本使用
 * */
interface ObjectInterface1 {
    label: string;
}
function func1(data: ObjectInterface1) {
    console.log("基本使用：", data);
}
func1({ label: "name" });
// //Object literal may only specify known properties, and 'age' does not exist in type 'ObjectInterface1'.  TS2345
// func1({ label: "name", age: 1 });

/*
 * 可选属性
 * 在可选属性名字定义的后面加一个?符号
 * 1、可以对可能存在的属性进行预定义
 * 2、可以捕获引用了不存在的属性时的错误
 * */
interface OptionInterface {
    name?: string;
    age?: number;
}
function func2(data: OptionInterface) {
    console.log("可选属性：", data, data.name, data.age);
    // //Property 'naem' does not exist on type 'OptionInterface'.  TS2339
    // console.log("可选属性：", data.naem);
}
func2({ name: "123", age: 1 });
func2({ name: "123" });
func2({ age: 123 });

/*
 * 只读属性
 * */
interface ReadonlyInterface {
    readonly name: string;
    readonly age: number;
}
let readonlyObj1: ReadonlyInterface = {
    name: "123",
    age: 123,
};
console.log("只读属性：", readonlyObj1);
// //Cannot assign to 'name' because it is a read-only property.  TS2540
// readonlyObj1.name = "1";
// //Cannot assign to 'age' because it is a read-only property.  TS2540
// readonlyObj1.age = 2;

/*
 * 函数类型
 * 函数的参数名不需要与接口里定义的名字相匹配;
 * 要求对应位置上的参数类型是兼容的.
 * */
interface functionInterface {
    (name: string, age: number): string;
}
let func5: functionInterface = function (name, age): string {
    return `${name}${age}`;
};
console.log("函数类型:", func5("123", 123));
let func6: functionInterface = function (name1, age1): string {
    return `${name1}${age1}`;
};
console.log("函数类型:", func6("123", 123));

/*
 * 可索引类型
 * */

const obj = {};
export default obj;
