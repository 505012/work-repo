// TODO: 1151 ~ 1168 -->
//1151
// let num = Number(prompt("숫자입력"));
// if(num<10){
//     console.log("small")
// }
//1152
// let num = Number(prompt("숫자입력"));
// if(num<10){
//     console.log("small")
// }
// else{
//     console.log("big")
// }

// 1153
// let num = prompt("숫자입력").split(" ");
// if (Number(num[0]) < Number(num[1])) {
//   console.log("<");
// } else if (Number(num[0]) > Number(num[1])) {
//   console.log(">");
// } else {
//   console.log("=");
// }

// 1154
// let num = prompt("숫자입력").split(" ");
// if (Number(num[0]) < Number(num[1])) {
//   console.log(num[1]-num[0]);
// } else if (Number(num[0]) > Number(num[1])) {
//   console.log(num[0]-num1);
// }

// 1155
// let num = Number(prompt("숫자입력"));
// if(num%7 ===0){
//     console.log("multiple")
// }
// else{
//     console.log("no multiple")
// }

// 1156
// let num = Number(prompt("숫자입력"));
// if(num%2 ===0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }
// 1157
// let num = Number(prompt("숫자입력"));
// if(num>=50 && num <= 60){
//     console.log("Win")
// }
// else{
//     console.log("Lose")
// }

// 1158
// let num = Number(prompt("숫자입력"));
// if((num>=30 && num <= 40)||(num>=60 && num <= 70)){
//     console.log("Win")
// }
// else{
//     console.log("Lose")
// }

// 1159
// let num = Number(prompt("숫자입력"));
// if((num>=50 && num <= 70)||num%6 === 0){
//     console.log("Win")
// }
// else{
//     console.log("Lose")
// }

// 1160
// let num = Number(prompt("숫자입력"));
// if(num%2 === 0){
//     console.log("enjoy")
// }
// else{
//     console.log("oh my god")
// }

// 1161
// let num = prompt("숫자입력").split(" ");
// char1 = "";
// char2 = "";
// char3 = "";
// if (Number(num[0]) % 2 == 0) {
//   char1 = "짝수";
// } else {
//   char1 = "홀수";
// }

// if (Number(num[1]) % 2 == 0) {
//   char2 = "짝수";
// } else {
//   char2 = "홀수";
// }

// if (Number(num[0] + num[1]) % 2 == 0) {
//   char3 = "짝수";
// } else {
//   char3 = "홀수";
// }

// console.log(char1 + "+" + char2 + "=" + char3);

// 1162
// let num = prompt("생년월입력").split(" ");
// let a = Number(num[0])
// let sum = Number(num[0]) - Number(num[1]) + Number(num[2])
// if (sum%10 === 0) {
//   console.log("대박")
// } else {
//   console.log("그럭저럭")
// }

// 1163
// let num = prompt("생년월입력").split(" ");
// let a = Number(num[0])
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2])
// sum = sum%1000;
// sum = parseInt(sum/100)
// if (sum%2 === 0) {
//   console.log("대박")
// } else {
//   console.log("그럭저럭")
// }

// 1164
// let num = prompt("터널 입력").split(" ");

// if (num[0] <= 170 || num[1] <= 170 || num[2] <= 170) {
//   console.log("clash");
// } else console.log("pass");

// 1165
// let num = prompt("숫자 입력").split(" ");
// let time = Number(num[0])
// let score = Number(num[1])
// time = 90-time;
// if(time > 5){
//     score++;
//     score += parseInt((time-1)/5)
//     console.log(score)
// }
// else{
//     console.log(score)
// }

// 1166
// let num = Number(prompt("숫자입력"));
// if ((num % 4 == 0 && num % 100 != 0) || num % 400 == 0) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// 1167
// let num = prompt("숫자 입력").split(" ");
// let a = Number(num[0])
// let b = Number(num[1])
// let c = Number(num[2])
// let val
// if(a>b){
//     a = b;
// }
// if(a<c){
//     a = c;
// }
// console.log(a)

// 1168
// let num = prompt("생년월입력").split(" ");
// let year = parseInt(num[0] / 10000);
// let age = 2012;
// if (num[1] == 1 || num[1 == 2]) {
//     year += 1900;
//   age -= year;
// } else {
//   year += 2000;
//   age -= year;
// }
// console.log("나이는 : " + (age+1));
// TODO: 1170 ~ 1173, 1180
// 1170
// let num = prompt("학번 입력").split(" ");
// console.log(num[0]+num[1]+num[2].padStart(2,0))// padStart(자리수,채울값) - 자리수 채우기

// 1171
// let num = prompt("학번 입력").split(" ");
// console.log(num[0]+num[1].padStart(2,0)+num[2].padStart(3,0))// padStart(자리수,채울값) - 자리수 채우기

// 1172 버블 정렬
// let num = prompt("숫자 입력").split(" ").map(Number);
// let temp = 0;
// for (let i = 0; i < num.length; i++) {
//   for (let j = 0; j <= i; j++) {
//     if (j + 1 == null) {
//       break;
//     }
//     if (num[j] > num[j + 1]) {
//       temp = num[j];
//       num[j] = num[j + 1];
//       num[j] = temp;
//     }

//     if (num[j] > num[j + 1]) {
//       temp = num[j];
//       num[j] = num[j + 1];
//       num[j + 1] = temp;
//     }
//   }
// }
// console.log(num);

// 1173
// let num = prompt("시간 입력").split(" ").map(Number);
// let hour = num[0];
// let min = num[1];

// min -= 30;
// if(min<0){
//     hour -= 1;
//     min += 60;
// }
// console.log(hour +" " + min);

// 1180
// let num = Number(prompt("숫자 입력"));
// let arr = [];
// if (num < 100) {
//   arr[0] = Math.floor(num / 10);
//   arr[1] = num % 10;
//   num = (arr[1]*10)+arr[0]
//   num *= 2
// }
// else{
//     num %= 100;
//     arr[0] = Math.floor(num / 10);
//   arr[1] = num % 10;
//   num = (arr[1]*10)+arr[0]
//   num = (num+100)*2
// }

// if(num<100){
//     console.log(num)
//     console.log("GOOD")
// }else{
//     console.log(num)
//     console.log("MY GOD")
// }

// TODO: 1201 ~ 1207, 1210, 1212, 1214, 1216, 1218
// 1201
// let num = Number(prompt("숫자 입력"));
// if(num == 0){
//     console.log("0")
// }else if(num>0){
//     console.log("양수")
// }else{
//     console.log("음수")
// }

// 1202
// let num = Number(prompt("숫자 입력"));
// if (num >= 90) {
//   console.log("A");
// } else if (num >= 80) {
//   console.log("B");
// } else if (num >= 70) {
//   console.log("C");
// } else if (num >= 60) {
//   console.log("D");
// }else{
//     console.log("F")
// }

// 1203
// let num = Number(prompt("숫자 입력"));
// if (num <= 10) {
//   console.log("정상");
// } else if (num <= 20) {
//   console.log("과체중");
// } else {
//   console.log("비만");
// }

// 1204
// let num = Number(prompt("숫자 입력"));
// if(num == 1){
//     console.log(num+"st")
// }else if(num == 2){
//     console.log(num+"nd")
// }else if(num == 3){
//     console.log(num+"rd")
// }else{
//     console.log(num+"th")
// }

// 1205
// let num = prompt("두 수 입력").split(" ").map(Number);
// let a = num[0];
// let b = num[1];

// let max = (Math.max((a*b),(a/b),(a+b),(a-b),Math.pow(a,b)));
// let max2 =(Math.max((b*a),(b/a),(b+a),(b-a),Math.pow(b,a),max))
// if(max < max2){
//     max = max2
// }
// console.log(max.toFixed(6))

// 1206
// let num = prompt("두 수 입력").split(" ").map(Number);
// let a =  num[0]
// let b =  num[1]
// let x;
// if(b%a==0){
//     x= b/a
//     console.log(a+"*"+x+"="+b);
// }else if(a%b==0){
//     x= a/b
//     console.log(b+"*"+x+"="+a);
// }else{
//     console.log("none");
// }

// 1207
// let num = prompt("수 입력").split(" ").map(Number);
// let sum = num[0] + num[1] + num[2] + num[3];

// if (sum == 1) {
//   console.log("도");
// } else if (sum == 2) {
//   console.log("계");
// } else if (sum == 3) {
//   console.log("걸");
// } else if (sum == 4) {
//   console.log("윷");
// } else {
//   console.log("모");
// }

// 1210
// let num = prompt("수 입력").split(" ").map(Number);
// let arr = []
// arr[1] =  400;
// arr[2] =  300;
// arr[3] =  150;
// arr[4] =  100;
// arr[5] =  70;
// let kcal = arr[num[0]]+arr[num[1]];
// if(kcal<=500){
//     console.log("no angry");
// }else{
//     console.log("angry")
// }

//1212
// let num = prompt("수 입력").split(" ").map(Number);
// let max = Math.max(num[0],num[1],num[2])
// if(max < num[0]+num[1+num[2]-max]){
//     console.log("yes")
// }else{
//     console.log("no")
// }

//1214
// let num = prompt("년/월 입력").split(" ").map(Number);
// let day = 0;
// if(num[0]%400 == 0 || num[0]%4 == 0 && num[0]%100 != 0){
//     day = 29
// }
// let arr = [0,31,day,31,30,31,30,31,31,30,31,30,31]
// console.log(arr[num[1]])

//1216
// let num = prompt("홍보비 입력").split(" ").map(Number);
// let sum = num[1] - num[2];
// if(num[0]>sum){
//     console.log("do not advertise")
// }else if( num[0]<sum){
//     console.log("advertise")
// }else{
//     console.log("does not matter")
// }

// 1218
// let num = prompt("삼각형 변의 길이 입력").split(" ").map(Number);
// let max = Math.max(num[0], num[1], num[2]);
// let min = Math.min(num[0], num[1], num[2]);
// let end = (((num[0] + num[1] + num[2]) - min) / 2);
// if (num[0] == num[1] && num[1] == num[2]) {
//   console.log("정삼각형");
// } else if (num[0]==num[1] || num[0] == num[2] || num[1]==num[2]) {
//     console.log("이등변 삼각형");
// } else if (Math.pow(num[0], 2) + Math.pow(num[1], 2) == Math.pow(num[2], 2)) {
//     console.log("직삼각형");
// } else if (max <(num[0] + num[1] + num[2]) - max) {
//     console.log("삼각형");
//   console.log(num[0] + " " + num[1] + " " + num[2]);
// } else if (max > num[0] + num[1 + num[2] - max]) {
//   console.log("삼각형 아님");
//   console.log(num[0] + " " + num[1] + " " + num[2]);
// }

// TODO: 1222, 1224, 1226
// 1222
// let num = prompt("수 입력").split(" ").map(Number);
// let time = 90 - num[0];
// let score
// if(time>5){
// num[1]++;
// num[1] += parseInt((time-1)/5)
// }
// if(num[1] == num[2]){
//     console.log("same")
// }
// else if(num[1]>num[2]){
//     console.log("win")

// }else if(num[1]<num[2]){
//     console.log("lose")
// }

// 1224
// let num = prompt("수 입력").split(" ").map(Number);
// let a = num[0]
// let b = num[1]
// let c = num[2]
// let d = num[3]
// if((a / b ) >  (c / d)){
//     console.log(">")
// }else if((a / b) ==  (c / d)){
// console.log("=")
// }else if((a / b)  <  (c / d)){
//     console.log("<")
// }

// 1226
// let rotto = prompt("당첨 입력").split(" ").map(Number);
// let num = prompt("로또 입력").split(" ").map(Number);
// let count =0;
// let count2 =0;
// for(let i=0;i<rotto.length-1;i++){
//     if(rotto[i] == num[i]){
//         count++;
//     }
// }
// if(rotto[rotto.length-1] == num[num.length-1]){
//     count2++;
// }
// if(count==6){
//     console.log("1")
// }else if(count==5 && count == 1){
//     console.log("2")
// }else if(count==5){
//     console.log("3")
// }else if(count==4){
//     console.log("4")
// }else if(count==3){
//     console.log("5")
// }else{
//     console.log("0")
// }

// TODO: 1228 ~ 1231

// 1228
// let num = prompt("입력").split(" ").map(Number);
// let normal = (num[0] - 100)*9
// let kg = ((num[1]-normal)*(100/normal))
// kg = Math.abs(kg)

// if (kg <= 10) {
//   console.log("정상");
// } else if (kg <= 20) {
//   console.log("과체중");
// } else {
//   console.log("비만");
// }

// 1229
// let num = prompt("입력").split(" ").map(Number);
// let normal = 0;
// if (num[0] < 150) {
//   normal = num[0] - 100;
// } else if (num[0] < 160) {
//   normal = (num[0] - 150) / 2 + 50;
// } else {
//   normal = (num[0] - 100) * 9;
// }

// let kg = (num[1] - normal) * (100 / normal);
// kg = Math.abs(kg);

// if (kg <= 10) {
//   console.log("정상");
// } else if (kg <= 20) {
//   console.log("과체중");
// } else {
//   console.log("비만");
// }
// 1230
// let num = prompt("터널 입력").split(" ");
// let num = prompt("터널 입력").split(" ");
// if (num[0] <= 170 ) {
//   console.log("clash");
//   console.log(num[0])
// }else if( num[1] <= 170){
//     console.log("clash");
//     console.log(num[1])

// }else if(num[2] <= 170){
//     console.log("clash");
//     console.log(num[2])
// }

// else console.log("pass");

// 1231
let num = prompt("계산 입력");
let cal;
for (let i = 0; i < num.length; i++) {
  if (num[i] == "+") {
    cal = num[i];
    num = num.split("+");
  }
  if (num[i] == "-") {
    cal = num[i];
    num = num.split("-");
  }
  if (num[i] == "*") {
    cal = num[i];
    num = num.split("*");
  }
  if (num[i] == "/") {
    cal = num[i];
    num = num.split("/");
  }
}
switch (cal) {
  case "+":
    console.log(Number(num[0]) + Number(num[1]));
    break;
  case "-":
    console.log(Number(num[0]) - Number(num[1]));
    break;
  case "*":
    console.log(Number(num[0]) * Number(num[1]));
    break;
  case "/":
    console.log(Number(num[0]) / Number(num[1]));
    break;
}
