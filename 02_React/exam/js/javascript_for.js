// TODO: 1251 ~ 1261

// 1251
// let str="";
// for(let i=1;i<=100;i++){
//     str += i +" "
// }
// console.log(str);

// 1252
// let num = Number(prompt("정수 입력"));
// let str = " ";
// for (let i = 1; i <= num; i++) {
//   str += i + " ";
// }
// console.log(str);

// 1253
// let num = prompt("정수 입력").split(" ");
// let max = Math.max(num[0],num[1]);
// let min = Math.min(num[0],num[1]);
// let str = "";
// for(min;min<=max;min++){
//     str += min+" ";
// }
// console.log(str);

// 1254
// let num = prompt("문자 입력").split(" ");
// let start = num[0].charCodeAt(0);
// let end = num[1].charCodeAt(0);
// let str ="";
// for(start; start <= end; start++){
//     str += String.fromCharCode(start)+" "
// }
// console.log(str);

// 1255
// let num = prompt("실수 입력").split(" ");
// let max = Math.max(num[0],num[1]);
// let min = Math.min(num[0],num[1]);
// let str = "";
// for(min;min<=max; min=min+0.01){
//     str += min.toFixed(2)+" ";
// }
// console.log(str);

// 1256
// let num = prompt("숫자 입력").split(" ");
// let str = "";
// for(let i=0; i<num;i++){
//     str += "*";
// }
// console.log(str);

// 1257
// let num = prompt(" 숫자 입력").split(" ");
// let max = Math.max(num[0],num[1]);
// let min = Math.min(num[0],num[1]);
// let str = "";
// for(min;min<=max; min++){
//    if(min%2 != 0){
//     str += min+" ";
//    }
// }
// console.log(str);

// 1258
// let num = prompt(" 숫자 입력");
// let sum = 0;
// let str = "";
// for(let i=1;i<=num; i++){
//    sum += i;
// }
// console.log(sum);

// 1259
// let num = Number(prompt("숫자 입력"));
// let sum = 0;
// for (let i=1; i <= num; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// 1260
// let num = prompt(" 숫자 입력").split(" ");
// let a = Number(num[0])
// let b = Number(num[1])
// let sum = 0;
// for (a; a <= b; a++) {
//   if (a % 3 == 0) {
//     sum += a;
//   }
// }
// console.log(sum);

// 1261
// let num = prompt(" 숫자 입력").split(" ");
// let a = 0;
// for(let i =0; i<num.length; i++){
//     if(Number(num[i])%5 == 0){
//         a=Number(num[i]);
//         break;
//     }
// }
// console.log(a);

//  TODO: 1265 ~ 1284, 1286

// 1265
// let num = Number(prompt("숫자 입력"));
// for(let i=1; i<=9; i++){
//     console.log(num+"*"+i+"="+num*i);
// }

// 1266
// let num1 = Number(prompt("숫자 입력"));
// let num = prompt("숫자 입력").split(" ");
// let sum = 0;
// for(let i=0; i<num1; i++){
//     sum += Number(num[i]);
// }
// console.log(sum);

// 1267
// let num1 = Number(prompt("숫자 입력"));
// let num = prompt("숫자 입력").split(" ");
// let sum = 0;
// for (let i = 0; i < num1; i++) {
//   if (Number(num[i]) % 5 == 0) {
//     sum += Number(num[i]);
//   }
// }
// console.log(sum);

// 1268
// let num1 = Number(prompt("숫자 입력"));
// let num = prompt("숫자 입력").split(" ");
// let sum = 0;
// for (let i = 0; i < num1; i++) {
//   if (Number(num[i]) % 2 != 0) {
//     sum++;
//   }
// }
// console.log(sum);

// 1269
// let num = prompt("숫자 입력").split(" ");
// let a = Number(num[0]);
// let b = Number(num[1]);
// let c = Number(num[2]);
// let n = Number(num[3]);
// let sum = a
// for(a; a<=n; a++){
//     sum = sum*b+c
// }
// console.log(sum);

// 1270
// let num = Number(prompt("숫자 입력"));
// let count =0;
// for(let i =1; i<= num; i++ ){
//     if(i%10 == 1){
//        count++;
//     }
// }
// console.log(count);

// 1271
// let num1 = Number(prompt("숫자 입력"));
// let num = prompt("숫자 입력").split(" ");
// let max = 0;
// for(let i=0; i<num.length; i++){

//     max = max>Number(num[i])?max:num[i];
// }
// console.log(max);

// 1272
// let num = prompt("숫자 입력").split(" ");
// let arr = [];
// let sum = 0;
// let max = num[0]>num[1]?num[0]:num[1]
// // let sum = 0;
// let count = 1;
// for (let i = 1; i <= max; i++) {
//   if (i % 2 == 0) {
//     arr[i] = count * 10;
//     count++;
//   }
//   else arr[i] = count;
// }
// for(let i = 0; i<num.length; i++){
//     sum += arr[num[i]]
// }
// console.log(sum)

// 1273
// let num = Number(prompt("숫자 입력"));
// let arr = [];
// let count = 0;
// let str="";
// for(let i = 1; i<=num; i++){
//     if(num%i == 0){
//         arr[count] = i;
//         // console.log(arr[count]);
//         str+=arr[count]+" "
//         count = count + 1;
//     }
// }
// console.log(str);

// 1274
// let num = Number(prompt("숫자 입력"));
// let arr = [];
// let count = 0;
// let str="";
// for(let i = 1; i<=num; i++){
//     if(num%i == 0){
//         arr[count] = i;
//         str+=arr[count]+" "
//         count = count + 1;
//     }
// }
// if(arr.length>2){
//     console.log("not prime");
// }
// else{
//     console.log("prime")
// }

// 1275
// let num = prompt("숫자 입력").split(" ");
// let n = Number(num[0]);
// let n2 = n;
// for(let i =1; i<Number(num[1]);i++){
//     n *= n2;
// }
// console.log(n)
// // console.log(Math.pow(Number(num[0]),Number(num[1])));

// 1276
// let num = Number(prompt("숫자 입력"));
// let pactory =1;
// for(num;num >=1; num--){
//     pactory *=num;
// }
// console.log(pactory);

// 1277
// let num1 = Number(prompt("숫자 입력"));
// let num = prompt("숫자 입력").split(" ");
// for(let i=0; i<num1; i++){
//     if(i == 0  ||i == parseInt(num1/2) || i == (num1-1) ){
//         console.log(num[i]);
//     }
// }

// 1278
// let num = Number(prompt("숫자 입력"));
// let div =10;
// let count =0;
// let flag = true;
// while(flag){
//     if(num/div >0){
//         num = parseInt(num/div)
//         count++;
//     }else {
//         console.log(count);
//         flag = false;
//     }
// }

// 1279
// let num = prompt("숫자 입력").split(" ");
// let min = Math.min(Number(num[0]),Number(num[1]));
// let max = Math.max(Number(num[0]),Number(num[1]));
// let sum =0;
// for(min; min<=max; min++){
//     if(min%2 == 0){
//         sum -= min;
//     }else{
//         sum += min;
//     }
// }
// console.log(sum);

// 1280
// let num = prompt("숫자 입력").split(" ");
// let min = Math.min(Number(num[0]),Number(num[1]));
// let max = Math.max(Number(num[0]),Number(num[1]));
// let sum =0;
// let str ="";
// for(min; min<=max; min++){
//     if(min%2 == 0){
//         console.log("-"+min)
//         sum -= min;
//         // str += "-"+min
//     }else{
//         console.log("+"+min)
//         sum += min;
//         // str += "+"+min
//     }
// }
// console.log("="+sum);
// // console.log(str + "="+sum);

// 1281
// let num = prompt("숫자 입력").split(" ");
// let min = Math.min(Number(num[0]), Number(num[1]));
// let max = Math.max(Number(num[0]), Number(num[1]));
// let sum = 0;
// let str = "";
// for (min; min <= max; min++) {
//   if (min % 2 == 0) {
//     console.log("-" + min);
//     sum -= min;
//     // str += "-"+min
//   } else {
//     if (min == Number(num[0])) {
//       console.log(min);
//       sum += min;
//       // str += min
//     } else {
//       console.log("+" + min);
//       sum += min;
//       // str += "+"+min
//     }
//   }
// }
// console.log("=" + sum);
// // console.log(str + "="+sum);

// 1282
// let num = Number(prompt("숫자 입력"));
// let mul=0;
// let minus=0;
// let i=0;
// for(i; mul<=num;i++){
//     mul = i*i;
//     minus = num-mul;
//     if((i+1)*(i+1)>=num){
//         break;
//     }
// }
// console.log(minus+" "+i);

// 1283
// let num1 = Number(prompt("숫자 입력"));
// let num2 = Number(prompt("숫자 입력"));
// let num = prompt("숫자 입력").split(" ");
// let money =num1;

// for(let i=0; i<num2; i++){
//     num1= num1+ (num1*Number(num[i])/100)
// }
// if(money < num1 - money){
//     money = num1 - money
//     console.log(Math.round(money));
//     console.log("good");
// }else if(money == num1 - money){
//     money = num1 - money
//     console.log(Math.round(money));
//     console.log("same");
// }else{
//     money = num1 - money
//     console.log(Math.round(money));
//     console.log("bad");
// }

// todo : 1284 (어려움 주의)
// 소수 판별후 판별된 소수들만 배열 입력
let num = Number(prompt("숫자 입력"));
let num2 = num;
let k = 0;
let arr = [];
let arr2 = [];
arr2[0] = 1;
let count = 0;
let str = "";
let count2 = 0;
for (let i = 1; i <= num; i++) {
  arr = [];
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      arr[count] = j;
      count++;
      if (arr.length == 2) {
        if (j != arr2[0] && j != arr2[1]) {
          arr2[count2] = j;
          count2++;
        }
      }
    }
  }
  count = 0;
}
// 받은 수 / 소수
for (let i = 0; i <= num; i++) {
  for (let j = 0; j <= i; j++) {
    if(j == arr2.length-1){
        break;
    }
    if (num % arr2[j] == 0) {
      str += arr2[j] + " ";
      arr[count] = arr2[j];
      num = parseInt(num / arr2[j]);
    }

  }
}
//버블, 선택,삽입 정렬 등을 사용하면 오름차순 하수있다. 귀찮고 예제가 잘 나오므로 넘긴다. 이중 for문 사용하면됨
// 출력
if(str ==  ""){
    console.log("wrong number")
}else{
    console.log(str);
}


// 1286
// let num =[]
// num[0] = Number(prompt("숫자 입력1"))
// num[1] = Number(prompt("숫자 입력2"))
// num[2] = Number(prompt("숫자 입력3"))
// num[3] = Number(prompt("숫자 입력4"))
// num[4]= Number(prompt("숫자 입력5"))

// let max = num[0];
// let min = num[0];
// for(let i=0; i<5;i++){
//     max = max>num[i]?max:num[i]
//     mix = min<num[i]?min:num[i]
// }
// console.log(max)
// console.log(min)

//  TODO: 1294 ~ 1295, 1675
// 1294
// let str = prompt("시저의 암호 입력");
// let str2 = str;
// let str3 = "";
// let str4 = 0;
// for (let i = 0; i < str.length; i++) {
//   str4 = str[i].charCodeAt(0);
//   if (str4 == 32) {
//     str3 += String.fromCharCode(str4);
//   }else{
//     str3 += String.fromCharCode(str4 +3);
//   }
// }
// console.log(str3);

// 1295
// let str = prompt("문장 입력");
// let result = "";
// let char;
// for(let i=0; i<str.length; i++){
//     if(str[i] === str[i].toUpperCase()){    
//         result = result + str[i].toLowerCase()
//     }
//     else if(str[i] === str[i].toLowerCase()){
//         result = result + str[i].toUpperCase()
//     }
// }
// console.log(result)
// 1675
// let str = prompt("시저의 암호 입력");
// let str2 = str;
// let str3 = "";
// let str4 = 0;
// for (let i = 0; i < str.length; i++) {
//   str4 = str[i].charCodeAt(0);
//   if (str4 == 32) {
//     str3 += String.fromCharCode(str4);
//   }else{
//     str3 += String.fromCharCode(str4 -3);
//   }
// }
// console.log(str3);

// todo : 시험문제
// let num = Number(prompt("숫자 입력1"))
// let num2 = Number(prompt("숫자 입력2"))
// console.log(num*num2)
// console.log(num%num2)
// // 2숫자를 받을 변수 num1과 num2를 Number(prompt(""))를 이용하여 받아준다.
// // 그후 console.log()를 2개 생성후 괄호 안에 num1*num2와 num1%num2를 넣어준다.

// let char = prompt("숫자 입력1")
// let char2 = prompt("숫자 입력2")
// console.log(char + " " + char2);
// // "안녕하세요"를 받을 변수 char과 "홍길동 입니다"를 받을 char2를 선언한다. prompt로 각 변수에 값을 입력받았다면
// // console.log("")의 괄호 안에 char+ " " + char2;를 적는다.

// let num = Number(prompt("숫자 입력1"))
// if(num>=19){
//     console.log("성인입니다.");
// }else if(num==18){
//     console.log("청소년 입니다.")
// }else if(num>=0&&num<18){
//     console.log("미성년 입니다.")
// }
// 나이를 받을 변수 age를 선언하고 Number(prompt(""))를 사용해여 age에 값을 받는다.
// if문의 조건식에 num이 19 이상 이라는 조건을 설정하고 조건을 만족하면 console.log("")를 사용하여 성인입니다를 출력시킨다.
// else if문의 조건식에 age ==18이란 조건을 넣어 받은 값이 18일시 console.log("")를 사용하여 청소년입니다를 출력시킨다.
// 마지막으로 else if조건에 num>=0&&num<18 조건을 부여한다.
//  console.log("")를 사용하여 미성년 입니다를 출력시킨다.값이 0~17 사이면 미성년을 출력시킨다.

// let sum=0;
// for(let i = 1; i<=10; i++){
//     sum += i;
// }
// console.log(sum)

// 합을 저장할 변수 sum을 선언한다.
// for문을 이용하여 1=1 부터 i<=10까지 i를 1씩 증가해서 실행문 sum += i를 반복시킨다.
// 반복문이 모두 수행하면 console.log(sum)을 사용해서 저장된 더하기값을 출력한다.

// 1284
//  TODO: 1294 ~ 1295, 1675
