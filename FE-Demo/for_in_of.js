/**
 * for in 和 for of 的使用：
 * 通过使用发现，for in不会将元素的属性遍历出来，同时支持对数组和对象的遍
 * 历，for of只支持数组的遍历
 * for in的坑点：
 * 如果给对象或数组的构造函数的原型上添加了自定义的属性或者方法，for in就会
 * 将原型上的属性方法当作元素遍历出来。如果不想数组遍历出来不需要的部分，可以使用for of，如果不想要对象也遍历出来可以使用hasOwnProperty判断。
 */
Array.prototype.myfn = () => {console.log(123);}
Object.prototype.myobj = '123';
function forin(ele, title) {
    console.log(title, '==========================');
    for(let i in ele) {
        console.log('i: ', ele[i]);
    }
}
function forof(ele, title) {
    console.log(title, '==========================');
    for(let i of ele) {
        console.log('i: ', i);
    }
}
const arr = [1, 2, 3, 4, 5];
const obj = { sex: '女人', name: '大锤' };
forin(arr, '数组');
forin(obj, '对象');
forof(arr, '数组');
forof(obj, '对象');