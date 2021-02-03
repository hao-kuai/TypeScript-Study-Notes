export default function DataType() {
    /*
     * 数字类型
     * 和JavaScript一样，TypeScript里的所有数字都是浮点数。
     * */
    let num: number = 1;
    num = 2;
    console.log("数字类型:", num);

    /*
     * 布尔类型
     * */
    let bool: boolean = false;
    console.log("布尔类型:", bool);

    bool = true;
    console.log("布尔类型:", bool);

    /*
     * 字符串类型
     * JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。
     * 可以使用模版字符串，它可以定义多行文本和内嵌表达式。
     * */
    let str: string = "123";
    console.log("字符串类型:", str);
    str = "abc";
    console.log("字符串类型:", str);
    str = `我是模板字符串${str}`;
    console.log("模板字符串:", str);

    /*
     * 数组
     * TypeScript像JavaScript一样可以操作数组元素.
     * 有两种方式可以定义数组
     * */
    //方式1
    let arr1: number[] = [1, 2, 3];
    let arr2: boolean[] = [true, false, true];
    let arr3: string[] = ["1", "2", "3"];
    console.log("数组1:", arr1, arr2, arr3);

    //方式2
    let arr4: Array<number> = [1, 2, 3];
    let arr5: Array<boolean> = [true, false, true];
    let arr6: Array<string> = ["1", "2", "3"];
    console.log("数组2:", arr4, arr5, arr6);

    /*
     * 元组
     * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
     * */
    let tuple: [string, number] = ["123", 123];
    console.log("元组:", tuple);
    console.log("元组:", tuple[0], tuple[1]);
    // //不能越界访问
    // console.log("元组:",  tuple[2]);
    // //类型必须保持一致
    // tuple = [1, 2];
    tuple = ["1", 2];

    /*
     * 枚举
     * enum类型是对JavaScript标准数据类型的一个补充。
     * 像其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
     * */
    //默认情况下，从0开始为元素编号。
    enum Color1 {
        red,
        green,
        blue,
    }
    console.log("枚举-默认值:", Color1);

    //你也可以手动的指定成员的数值
    enum Color2 {
        red = 10,
        green,
        blue,
    }
    console.log("枚举-部分手动赋值:", Color2);
    enum Color3 {
        red = 10,
        green = 20,
        blue = 30,
    }
    console.log("枚举-全部手动赋值:", Color3);
    console.log("枚举-映射:", Color3[20]);

    /*
     * any
     * */
    let any: any = 1;
    any = "123";
    any = bool;
    any = [1, 2, 3];
    any = [1, "2"];
    console.log("any-不指定类型:", any);
    //不清楚数据类型
    let anyArr: any[] = [1, "2", bool, [1, 2.3]];
    console.log("any-不指定类型:", anyArr);
    // Object类型的变量只是允许你给它赋任意值.
    // 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
    // let anyNum: Object = 1;
    // anyNum.toFix();//TS2339: Property 'toFix' does not exist on type 'Object'.
    let anyNum: any = 1;
    anyNum.toFixed();

    /*
     * Void
     * void类型像是与any类型相反，它表示没有任何类型
     * */
    //当一个函数没有返回值时，你通常会见到其返回值类型是 void
    function voidFunc(): void {}
    // 声明一个void类型的变量没有什么大用，
    //默认情况下，只能为它赋予 undefined 和 null：
    //strict，只能为它赋予 undefined
    let voidVal: void = undefined;
    // voidVal = null; //TS2322: Type 'null' is not assignable to type 'void'.

    /*
     * undefined 和 null
     * */
    // //默认情况下，null和undefined是所有类型的子类型。
    // let nonValue: number = undefined;
    //strict，undefined 只能赋值给自己和 void
    //strict，null 只能赋值给自己
    let undefinedValue1: undefined = undefined;
    // let undefinedValue2: undefined = null;//TS2322: Type 'null' is not assignable to type 'undefined'.
    let undefinedValue3: null = null;
    // let undefinedValue4: null = undefined;//TS2322: Type 'undefined' is not assignable to type 'null'.
    let undefinedValue5: void = undefined;
    // let undefinedValue6: void = null;//TS2322: Type 'null' is not assignable to type 'void'.

    /*
     * never
     * never类型表示的是那些永不存在的值的类型。
     * */
    //never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
    function never1(): never {
        throw new Error();
    }
    function never2(): never {
        while (true) {}
    }
    let never3 = (): never => {
        return never1();
    };
    // never类型是任何类型的子类型，也可以赋值给任何类型；
    //没有类型是never的子类型或可以赋值给never类型（除了never本身之外）
    //即使 any也不可以赋值给never

    /*
     * object
     * 表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
     * */
    let obj: object = { name: "zs" };
    // obj = 1;//TS2322: Type 'number' is not assignable to type 'object'.
    // obj = "1";//TS2322: Type 'string' is not assignable to type 'object'.
    console.log("object类型:", obj);
}
