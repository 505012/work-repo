//  TODO:  1001 ~ 1008

// 1001
// document.querySelector("#app").innerHTML = "hello"

// 1002
// document.querySelector("#app").innerHTML = "Hello \n World"

// 1003
// console.log("Hello"+"\n"+ "World")

// 1004
// document.querySelector("#app").innerHTML = "'Hello'"

// 1005
// document.querySelector("#app").innerHTML = '"Hello World"'

// 1006
// document.querySelector("#app").innerHTML = '"!@#$%^&*()"'

// 1007
// document.querySelector("#app").innerHTML = '"C:\\Download\\hello.cpp"'

// 1008
// document.querySelector("#app").innerHTML = "\u250C\u252C\u2510\n"
// console.log("\u250C\u252C\u2510\n")
// console.log("\u251C\u253C\u2524\n")
// console.log("\u2514\u2534\u2518\n")

//  TODO:  1010 ~ 1015

// 1010
// let num = Number(parseInt(prompt("정수를 입력하시오")));
// console.log(num);

// 1011
// let char = prompt("문자입력");
// console.log(char);

// 1012
// let f = parseFloat(prompt("실수를 입력하세요"));
// console.log(f);

// 1013
// let num = prompt("정수 2개 입력").split(" ");
// console.log(Number(num[0])+" "+Number(num[1]));

// 1014
// let char = prompt("문자 2개 입력").split(" ");
// console.log(char[0]+" "+char[1])

// 1015
// let f = parseFloat(prompt("실수를 입력하세요"));
// console.log(Math.round(f*100)/100);

//  TODO:  1017 ~ 1072

// 1017
// let num = Number(prompt("정수를 입력하세요"));
// console.log(num +" " +num+" "+num);

// 1018
// let num = prompt("시간을 입력해주세요").split(":")
// console.log(num.join(":"))

// 1019
// let date = prompt("년, 월, 일을 입력해주세요 ").split(".");
// console.log(date[0]+".0"+date[1]+".0"+date[2]);
// let year = date[0];
// let month = date[1];
// let day = date[2];
// console.log(year+"."+month.padStart(2,0)+"."+day.padStart(2,0));

// 1020
// let num = prompt("입력").split("-")
// console.log(num[0]+num[1]);

// 1021
// let char = prompt("단어 입력");
// console.log(char);

// 1022
// let str = prompt("공백문자 입력");
// console.log(str);

// 1023
// let float = prompt("실수입력").split(".");
// console.log(float[0] + "\n" + float[1])

// 1024
// let boy = prompt("입력");
// for(i = 0; i < boy.length; i++){
//     console.log('"'+boy[i]+'"');
// }

// 1025
// let num = Number(prompt("숫자 입력"));
// let str = "";
// let a = 1;
// let k = num;
// let flag = true;
// let count = 0;
// while(flag){
//     k = k/10
//     a = a*10;
//     count++;
//     // console.log(a)
//     // console.log(k)
//     if(k<1){
//         flag = false
//         a=a/10
//     }
// }
// for(let i = 0; i <count; i++){
//     let b = parseInt(num/a)*a
//     str = str +"["+ b + "]"+ "\n";
//     num = num%a;
//     a /= 10;
// }
// console.log(str);

// 1026
// let date = prompt("시:분:초 입력하시오").split(":");
// console.log(date[1]);

// 1027
// let date = prompt("날짜 입력").split(".");
// date.reverse();
// date = date.join("-");
// console.log(date);

// 1028
// let num = Number(prompt("정수입력"));
// console.log(num);

// 1029
// let num = parseFloat(prompt("실수입력"));
// console.log(num);

// 1030
// let num = Number(prompt("정수입력"));
// console.log(num);

// 1031
// let num = Number(prompt("10진수입력"));
// console.log(num.toString(8));

// 1032
// let num = Number(prompt("10진수입력"));
// console.log(num.toString(16));

// 1033
// let num = Number(prompt("10진수입력"));
// console.log((num.toString(16)).toUpperCase());

// 1034
// let num = Number((prompt("8진수입력")));
// num = parseInt(num,8);//8진수 변환
// console.log(num.toString(10));

// 1035
// let num = Number(parseInt(prompt("16진수입력"),16));
// console.log(num.toString(8));

// 1036
// let char = (prompt("영문자 1개 입력"));
// console.log(char.charCodeAt(0));//문자 -> 숫자 변환

// 1037
// let num = Number(prompt("정수입력 0~255"));
// console.log(String.fromCharCode(num));//숫자 -> 문자

// 1038
// let num = prompt("정수입력").split(" ");
// console.log(Number(num[0])+Number(num[1]));

// 1038
// let num = prompt("정수입력").split(" ");
// console.log(Number(num[0])+Number(num[1]));

// // let num2 = Number(prompt("정수입력"));
// // let num1 = Number(prompt("정수입력"));
// console.log(num1+num2);

// 1039
// let num = prompt("정수입력").split(" ");
// console.log(Number(num[0])+Number(num[1]));

// 1040
// let num1 = Number(prompt("정수입력"));
// console.log(-num1)

// 1041
// let char = prompt("영문자 입력");
// let num = char.charCodeAt(0)
// num++;
// char = String.fromCharCode(num);
// console.log(char);

// 1042
// let num = prompt("정수입력").split(" ");
// console.log(parseInt(Number(num[0])/Number(num[1])));

// 1043
// let num = prompt("정수입력").split(" ");
// console.log(parseInt(Number(num[0])%Number(num[1])));

// 1044
// let num1 = Number(prompt("정수입력"));
// console.log(++num1);

// 1045
// let num = prompt("정수입력").split(" ");
// let sum = num[0]+num[1];
// console.log(sum)
// let minu = num[0]-num[1];
// console.log(minu)
// let mul = num[0]*num[1];
// console.log(mul)
// let rem = num[0]%num[1];
// console.log(rem)
// let div = num[0]/num[1];
// console.log(div.toFixed(2))
//// let str = sum+" "+minu+" "+mul+" "+div.toFixed(2)+" "+rem;
//// console.log(str)

// 1046
// let num = prompt("정수입력").split(" ");
// let sum= (Number(num[0])+Number(num[1])+Number(num[2]));
// let avg = sum/3;

// console.log(sum)
// console.log(avg.toFixed(2))

// 1047
// let num1 = Number(prompt("정수입력"));
// num1 = num1<<1;
// console.log(num1);

// 1048
// let num = prompt("정수입력").split(" ");
//  console.log(Number(num[0])<<Number(num[1]))

// 1049
// let num = prompt("정수입력").split(" ");
// console.log(num[0]>num[1]?1:0);
// console.log(num[0]>num[1]);//문제가 원한 답

// 1050
// let num = prompt("정수입력").split(" ");
// console.log(num[0] == num[1]?1:0);
// console.log(num[0] == num[1]);

// 1051
// let num = prompt("정수입력").split(" ");
// console.log(num[0] <= num[1] ? 1 : 0);
// console.log(num[0] <= num[1]);

// 1052
// let num = prompt("정수입력").split(" ");
// console.log(num[0] != num[1] ? 1 : 0);
// console.log(num[0] 1= num[1]);

// 1053
// let b = prompt("true 또는 false을 입력하시오");
// if(b == "false"){
//     console.log("true");
// }
// else if( b == "true"){
//     console.log("false");
// }

// 1054
// let num = prompt("true 또는 false을 입력하시오").split(" ");
// result = num[0] && num[1];
// console.log(result);

// 1055
// let num = prompt("true 또는 false을 입력하시오").split(" ");
// result = num[0] || num[1];
// console.log(result);

// 1056
// let num = prompt("true 또는 false을 입력하시오").split(" ");
// result = num[0] != num[1];
// console.log(result);

// 1057
// let num = prompt("true 또는 false을 입력하시오").split(" ");
// result = num[0] === num[1];
// console.log(result);

// 1058
// let num = prompt("true 또는 false을 입력하시오").split(" ");
// if(num[0] == "false" && num[1] == "false"){
//     result= true;
// }else
// result = false;
// console.log(result);

// 1059
// let num1 = Number(prompt("정수입력"));
// num1 = ~num1;
// console.log(num1)

// 1060
// let num = prompt("정수입력").split(" ");
// a = Number(num[0]);
// b = Number(num[1]);
// a = a;
// b = b;
// console.log(a&b);

// 1061
// let num = prompt("정수입력").split(" ");
// a = Number(num[0]);
// b = Number(num[1]);
// a = a;
// b = b;
// console.log(a|b);

// 1062
// let num = prompt("정수입력").split(" ");
// a = Number(num[0]);
// b = Number(num[1]);
// a = a;
// b = b;
// console.log(a^b);

// 1063
// let num = prompt("정수입력").split(" ");
// let a = Number(num[0]);
// let b = Number(num[1]);
// console.log(a>b?a:b);

// 1064
// let num = prompt("정수입력").split(" ");
// let a = Number(num[0]);
// let b = Number(num[1]);
// let c = Number(num[2]);
// let max = a>b?a:b
// console.log(max>c?max:c);

// 1065
// let num = prompt("정수입력").split(" ");
// let a = Number(num[0]);
// let b = Number(num[1]);
// let c = Number(num[2]);

// for(let i = 0; i < num.length; i++){
//     if(num[i]%2 === 0){
//         console.log(num[i]);
//     }
// }

// 1066
// let num = prompt("정수입력").split(" ");
// let a = Number(num[0]);
// let b = Number(num[1]);
// let c = Number(num[2]);
// let str = "";
// for(let i = 0; i < num.length; i++){
//     if(num[i]%2 === 0){
//         str += "even";
//         str += "\n"
//     }else{
//         str += "odd";
//         str += "\n"
//     }
// }
// console.log(str);

// 1067
// let num1 = Number(prompt("정수입력"));
// if (num1 % 2 === 0) {
//   if(num1 <0){
//     console.log("minus")
//     console.log("even")
//   }else{
//     console.log("plus")
//     console.log("even")
//   }
// } else {
//     if(num1 <0){
//         console.log("minus")
//         console.log("odd")
//       }else{
//         console.log("plus")
//         console.log("odd")
//       }
// }

// 1068
// let num = Number(prompt("점수입력"));

// if(num>=90){
//     console.log("A")
// }else if(num>=70){
//     console.log("B")
// }else if(num>=40){
//     console.log("C")
// }else if(num>=0){
//     console.log("D")
// }

// 1069
// let grade = prompt("등급 입력");
// switch (grade) {
//   case 'A':
//     console.log("best!!!");
//     break;
//   case 'B':
//     console.log("good!!");
//     break;
//   case 'C':
//     console.log("run!");
//     break;
//   case 'D':
//     console.log("slowly");
//     break;
//   default:
//     console.log("waht~?");
//     break;
// }

// 1070
// let num = Number(prompt("월 입력"));
// if(num>=3 && num <=5){
//     console.log("spring")
// }else if(num>=6 && num <=8){
//     console.log("summer")
// }else if(num>=9 && num <=11){
//     console.log("fall")
// }else if(num <=2 || num == 12){
//     console.log("winnter")
// }

// switch (num) {
//   case 3:
//   case 4:
//   case 5:
//     console.log("spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("fall");
//     break;
//   case 12:
//   case 1:
//   case 2:
//     console.log("winnter")
//     break;
// }

// 1071 // goto, reload 배우지 않음
// let num = prompt("정수 입력").split(" ");
// for(let i =0; i<num.length; i++){
//     if (num[i] != 0){
//         console.log(num[i])
//     }else{
//         break;
//     }
// }

// 1072
// let num = prompt("정수 입력").split(" ");
// let num2 = prompt("정수 입력").split(" ");
// for (let i = 0; i < num2.length; i++) {
//     num.push(num2[i]);
//   }
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

//  TODO:  1074 ~ 1095

// 1074
// let num = Number(prompt("정수입력"));
// for(num;num >0; num--){
//     console.log(num);
// }

// 1075
// let num = Number(prompt("정수입력"));
// for(num;num >0;){
//     --num;
//     console.log(num);
// }

// 1076
// let char = prompt("문자 입력");
// char= char.charCodeAt(0);
// let str = [];
// for(char; char >= 'a'.charCodeAt(0); char--){
// str[char] =String.fromCharCode(char);
// }
// for(let i = 0; i<str.length;i++){
//     console.log(str[i]);
// }

// 1077
// let num = Number(prompt("정수입력"));
// let str = [];
// for(num; num >= 0; num--){
// str[num] =num;
// }
// for(let i = 0; i<str.length;i++){
//     console.log(str[i]);
// }

// 1078
// let num = Number(prompt("정수입력"));
// let sum = 0;
// for(num; num >= 0; num--){
//     if(num%2 == 0){
//         sum = sum + num;
//     }
// }
// console.log(sum);

// 1079
// let char = prompt("문자 입력").split(" ");
// let str="";
// for(let i=0; i<char.length;i++){
//     if(char[i] == 'q'){
//         str += char[i] +"\n"
//         break;
//     }
//     else{
//         str += char[i] + "\n"
//     }
// }
// console.log(str);

// 1080
// let num = Number(prompt("정수입력"));
// let sum = 0;
// let result = 0;
// for(let i=0; sum < num;i++){
//     sum +=i;
//     result = i;
// }
// console.log(result);

// 1081
// let num = prompt("정수입력").split(" ");
// let a = Number(num[0]);
// let b = Number(num[1]);
// let str="";
// for(let i=1; i<=a; i++){
//     for(let j=1; j<=b; j++){

//         console.log(i+" "+j)
//         // str = str + i+" "+j+"\n"
//     }
// }
// // console.log(str);

// 1082
// let num = prompt("정수입력");
// num = parseInt(num, 16);
// console.log(num);
// let a =9;
// if (num > parseInt(a,16)) {
//   for (let i = 1; i < 16; i++) {
//     console.log((num.toString(16)).toUpperCase(0) + " * " + i.toString(16).toUpperCase(0) + " = " + (num * i).toString(16).toUpperCase(0));
//   }
// }

// 1083
// let num = Number(prompt("정수입력"));
// let str ="";
// for(let i=1; i<=num; i++){
//     if(i%10 ==3 | i%10== 6 | i%10 == 9){
//         str += 'X'+" ";
//     }
//     else{
//         str += i+" ";
//     }
// }
// console.log(str);

// 1084
// let num = prompt("정수입력").split(" ");
// let a = Number(num[0]);
// let b = Number(num[1]);
// let c = Number(num[2]);
// let str = "";
// let count = 0;
// for (let i = 0; i < a; i++) {
//   for (let j = 0; j < b; j++) {
//     for (let k = 0; k < c; k++) {
//       console.log(i + " " + j + " " + k);
//       count++;
//       // str = str + i+" "+j+"\n"
//     }
//   }
// }
// // console.log(str);

// 1085
// let num = prompt("정수입력").split(" ");
// let h = Number(num[0]);
// let b = Number(num[1]);
// let c = Number(num[2]);
// let s = Number(num[3]);
// let sum = (h*b*c*s)/8
// sum= ((sum/1024)/1024);
// console.log(Math.round(sum*10)/10 + "MB");//반올림 소수점 나타내기, 소숫점 1자리마다 10만큼 곱해주고 나눠줌

// 1086
// let num = prompt("정수입력").split(" ");
// let w = Number(num[0]);
// let h = Number(num[1]);
// let b = Number(num[2]);
// let sum = (w*h*b)/8
// sum= ((sum/1024)/1024);
// console.log(Math.round(sum*100)/100 + "MB");//반올림 소수점 나타내기, 소숫점 1자리마다 10만큼 곱해주고 나눠줌


// 1087
// let num = Number(prompt("정수입력"));
// let sum = 0;
// for(let i=0; sum<num; i++){
//     sum +=i;
// }
// console.log(sum);

// 1088
// let num = Number(prompt("정수입력"));
// let str ="";
// for(let i=1; i<=num; i++){
//     if(i%3==0 ){
//     }
//     else{
//         str += i+" ";
//     }
// }
// console.log(str);

// 1089
// let num = prompt("정수 입력").split(" ");
// let a = Number(num[0]);
// let b = Number(num[1]);
// let c = Number(num[2]);
// let i = a;
// let sum = 0;
// for(a;i <= c; i++){
//     sum = a;
//     a+=b;
// }
// console.log(sum);

// 1090
// let num = prompt("정수 입력").split(" ");
// let a = Number(num[0]);
// let r = Number(num[1]);
// let n = Number(num[2]);
// let i = a;
// let sum = a;
// for(a; a <= n; a++){
//     sum = sum*r;
// }
// console.log(sum);


// 1091
// let num = prompt("정수 입력").split(" ");
// let a = Number(num[0]);
// let m = Number(num[1]);
// let d = Number(num[2]);
// let n = Number(num[3]);
// let sum = a;
// for(a;a < n; a++){
//     sum = sum*m+d;
// }
// console.log(sum);

// 1092
// let num = prompt("정수 입력").split(" ");
// let a = Number(num[0]);
// let m = Number(num[1]);
// let d = Number(num[2]);
// let day =1;
// while(!(day%a == 0 && day%m == 0 && day%d == 0)){
// day = day +1
// }
// console.log(day)

// 1093
// let num1 = Number(prompt("정수입력1"));
// let num = prompt("정수 입력2").split(" ");
// let count = 0;
// let result = [];
// let result2 = [];
// let str="";
// for(let i=0;i<23;i++){
//     result[i]=i+1;
//     result2[i]=0;
// }
// for(let i=0;i<num1;i++){
//    count=0;
//     for(let j=0; j<num.length;j++){
//         if(result[i] == num[j] ){
//             count++;
//             result2[i]=count;
//         }
//     }
// }
// for(let i=0;i<23;i++){
//     str=str+result2[i]+" ";
// }
// console.log(str);

// 1094
// let num = prompt("정수 입력").split(" ");
// for(let i = num.length; i>0; i--){
    // console.log(num[i]);//깔끔하게 보고싶다면 str=""사용
// }
// console.log(num.reverse());

// 1095
// let num1 = Number(prompt("정수입력1"));
// let num = prompt("정수 입력2").split(" ");
// let min = num[0];
// for(let i=0; i<num1; i++){
//     min = Number(num[i])< min? Number(num[i]):min;
// }
// console.log(min);
