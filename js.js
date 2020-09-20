// 封装数学对象
var myMath = {
    PI: 3.1415926,
    max: 　 function() {
        var max = arguments[0];
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }

        }
        return max;
    },
    min: 　 function() {
        var min = arguments[0];
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] < min) {
                min = arguments[i];
            }

        }
        return min;
    }

}
console.log(myMath.max(1, 2, 3, 4, 5));
console.log(myMath.min(1, 2, 3, 4, 0.1));
console.log(myMath.PI);


// Math绝对值
console.log(Math.abs(-20));
console.log(Math.abs('20'));
console.log(Math.abs('suchao'));
//20
//20
//NaN

//取整
//向上
console.log(Math.floor(1.2));
console.log(Math.floor(1.9));
//1
//1

// 向下
console.log(Math.ceil(2.3));
//3

// 四舍五入
console.log(Math.round(1.3));
console.log(Math.round(1.5));
console.log(Math.round(1.6));
//1
//2
//2
// 特殊 .5 往大了取
console.log(Math.round(-1.5));
//-1



// console.log(Math.random());
//随机整数
function get(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
console.log(get(1, 10));

//随机点名
var arr = ['一', '二', '三', '四', '五']
console.log(arr[get(0, arr.length - 1)]);

function get(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
var random = get(1, 10);
while (true) {
    var num = prompt('请输入1~10进行游戏')
    if (num > random) {
        alert('猜大了');
    } else if (num < random) {
        alert('猜小了');
    } else {
        alert('猜对了');
        break;
    }

}


// 获取日期时间
var date = new Date();
console.log(date);
var date1 = new Date('2019-10-1 8:8:8')
console.log(date1);

var date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay());

//获取年月日星期
var year = date.getFullYear();
var month = date.getMonth() + 1;
var date1 = date.getDate();
var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
var week = date.getDay();
var time = year + '年' + 　month + '月' + date1 + '日 ' + arr[week];
console.log(time);

//获取时分秒
var hours = date.getHours();
var min = date.getUTCMinutes();
var sec = date.getSeconds();
console.log(hours, min, sec);

//获取现在的时间 年-月-日 星期 时：分：秒格式
function times() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var date1 = date.getDate();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    var week = date.getDay();
    var hours = date.getHours();
    hours = hours < 10 ? '0' + hours : hours
    var min = date.getUTCMinutes();
    min = min < 10 ? '0' + min : min;
    var sec = date.getSeconds();
    sec = sec < 10 ? '0' + sec : sec
    var time = year + '年' + 　month + '月' + date1 + '日 ' + arr[week] + ' ' + hours + ':' + min + ':' + sec;
    return time;
}
console.log(times());

//获得总毫秒数
var time = new Date();
console.log(time.valueOf());
console.log(time.getTime());

var time_1 = +new Date();
console.log(time_1);

console.log(Date.now());


//倒计时
function countdown(time) {
    var nowTime = +new Date;
    var inPut = +new Date(time);
    var times = (inPut - nowTime) / 1000;
    var d = parseInt(times / 60 / 60 / 24);
    var h = parseInt(times / 60 / 60 % 24);
    var m = parseInt(times / 60 % 60);
    var s = parseInt(times % 60);
    return d + '天' + h + '时' + m + '分' + s + '秒';

}
console.log(countdown('2020-9-21 8:8:8'));

//instanceof运算符 判断是否是数组
var arr = [];
var obj = {};
console.log(arr instanceof Array); //true
console.log(obj instanceof Array); //false

//Array.isArray
console.log(Array.isArray(arr));



//新增数组元素
var arr = [1, 2, 3];
// arr.push(4, 5);
console.log(arr.push(4, 5));
// arr.unshift('suchao');
console.log(arr.unshift('suchao'));
console.log(arr);

//删除数组元素
// arr.pop();
console.log(arr.pop());
console.log(arr);
arr.shift();
console.log(arr);



//筛选数组
var num = [1200, 1300, 2000, 2500];
var newNum = [];
for (var i = 0; i < num.length; i++) {
    if (num[i] < 2000) {
        // newNum[newNum.length] = num[i];
        newNum.push(num[i])

    }

}
console.log(newNum);



//翻转数组
var arr = [1200, 1300, 2000, 2500];
arr.reverse();
console.log(arr);

//排序
var arr = [3, 2, 1, 5, 4];
arr.sort();
console.log(arr);
//两位数出现错误

//[13, 2, 33, 4, 5]
//解决方法
//升序
var arr1 = [33, 2, 13, 5, 4];
arr1.sort(
    function(a, b) {
        return a - b;
        // return b - a;//降序
    }
);
console.log(arr1);
// [2, 4, 5, 13, 33]



//  获取数组元素索引
var arr = [3, 2, 1, 5, 5, 4];
// 从前向后查找
console.log(arr.indexOf(5));
// 从后向前查找
console.log(arr.lastIndexOf(5));


//  获取数组元素索引
var arr = [3, 2, 1, 5, 5, 4];
// 从前向后查找
console.log(arr.indexOf(5));
// 从后向前查找
console.log(arr.lastIndexOf(5));