//  TODO: 1110 ~ 1123

// 1110
// let num = prompt("정수를 입력하시오");
// console.log(num);

// 1111
// let num = prompt("정수를 입력하시오");
// console.log("%"+num);

// 1112
// let num = prompt("정수를 입력하시오");
// let num2 = prompt("정수를 입력하시오");
// console.log(num+" "+num2);

// 1113
// let num = prompt("정수를 입력하시오");
// let num2 = prompt("정수를 입력하시오");
// console.log(num2+" "+num);

// 1114
// let num = Number(prompt("정수를 입력하시오"));
// let num2 = Number(prompt("정수를 입력하시오"));
// console.log(num2 + num);

// 1115
// let num = Number(prompt("정수를 입력하시오"));
// let num2 = Number(prompt("정수를 입력하시오"));
// console.log(num2+num);

// 1116
// let num1 = Number(prompt("정수를 입력하시오"));
// let num2 = Number(prompt("정수를 입력하시오"));
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(parseInt(num1/num2));

// 1117
// let num1 = Number(prompt("실수를 입력하시오"));
// let num2 = Number(prompt("실수를 입력하시오"));
// let mul = num1 * num2;
// console.log(mul.toFixed(2));

// 1118
// let num1 = Number(prompt("밑변를 입력하시오"));
// let num2 = Number(prompt("높이 입력하시오"));
// let triangle = num1*num2/2;
// console.log(triangle.toFixed(1));

// 1119
// let day = Number(prompt("일을 입력하세요"));
// let hour = day*24;
// console.log(hour);

// 1120
// let num1 = Number(prompt("정수를 입력하시오"));
// let num2 = Number(prompt("정수를 입력하시오"));
// let num3 = Number(prompt("정수를 입력하시오"));
// console.log(((num1 + num2 + num3)/3).toFixed(2));

// 1121
// let num1 = Number(prompt("정수를 입력하시오"));
// let num2 = Number(prompt("정수를 입력하시오"));
// console.log(num1%num2)

// 1122
// let sec = Number(prompt("초를 입력하세요"));
// let min = (sec/60).toFixed(0);
// sec = sec%60;
// console.log(min+"분 " +sec +"초");


// 1123
// function c(num){
//     tem =  9 / 5 * num + 32;
//     console.log(tem.toFixed(3));
// }
// let tem = Number(prompt("썹시 온도를 입력하세요"));
// c(tem);

// TODO: 1125 

// 1125
// let num = Number(prompt("10진수를 입력하세요"));
// console.log(num.toString(8))
// console.log((num.toString(16)).toUpperCase())

// TODO: 1131 ~ 1133 

// 1131
// let char = prompt("문자입력");
// console.log(char)

// 1132
// let str = prompt("문자열입력");
// console.log(str)

//1133 
// let str = prompt("문자열입력");
// console.log(str)

// TODO: 1135 ~ 1140 

// 1135
// let num = prompt("2수를 입력하시오").split(" ");
// let num1 = [];
// num1[0] = Number(num[0]);
// num1[1] = Number(num[1]);
// let result = num1[0]>=num1[1];
// // let result = (num1[0]>num1[1])? 1:0;
// console.log(result);

// 1136
// let num = prompt("2수를 입력하시오").split(" ");
// let num1 = [];
// num1[0] = Number(num[0]);
// num1[1] = Number(num[1]);
// let result = num1[0]==num1[1];
// // let result = (num1[0] === num1[1])? 1:0;
// console.log(result);

// 1137
// let num = prompt("2수를 입력하시오").split(" ");
// let num1 = [];
// num1[0] = Number(num[0]);
// num1[1] = Number(num[1]);
// let result = num1[0]==num1[1];
// // let result = (num1[0] === num1[1])? 1:0;
// console.log(!result);

// // 1138
// let b = prompt("true 또는 false을 입력하시오");
// if(b == "false"){
//     console.log("true");
// }
// else if( b == "true"){
//     console.log("false");
// }

// 1139
// let num = prompt("true 또는 false을 입력하시오").split(" ");
// result = num[0] && num[1];
// console.log(result);

// 1140
// let num = prompt("true 또는 false을 입력하시오").split(" ");
// result = num[0] || num[1];
// console.log(result);

//  TODO: 1143 ~ 1144

//1143 
// let num = prompt("2수를 입력하시오").split(" ");
// let result = num[0]&num[1]
// console.log(result)

// 1144
// let num = prompt("2수를 입력하시오").split(" ");
// let result = num[0]|num[1]
// console.log(result)

//  TODO: 1147 ~ 1150

// 1147
// let num = prompt("2수를 입력하시오").split(" ");
// let a = Number(num[0]);
// let x = Number(num[1]);
// a = a << x;
// console.log(a);

// 1148
// let num = prompt("2수를 입력하시오").split(" ");
// let a = Number(num[0]);
// let x = Number(num[1]);
// a = a >> x;
// console.log(a);

// 1149
// let num = prompt("2수를 입력하시오").split(" ");
// let a = Number(num[0]);
// let x = Number(num[1]);
// console.log(Math.max(a,x));

// 1150
// let num = prompt("3수를 입력하시오").split(" ");
// let a = Number(num[0]);
// let x = Number(num[1]);
// let y = Number(num[2]);
// console.log(Math.min(a,x,y));