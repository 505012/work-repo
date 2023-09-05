// TODO: 1402 ~ 1403
// 1402 //아마 문제요구는 for
// let num1 = prompt("입력");
// let num = prompt("입력").split(" ").map(Number);
// console.log(num.reverse(0))

// // 1403
// let num1 = prompt("입력");
// let num = prompt("입력").split(" ").map(Number);
// for (let i = 0; i < num1; i++) {
//   num.push(num[i]);
// }
// console.log(num);
// TODO: 1405, 1407
// 1405
// let num1 = prompt("입력1");
// let num = prompt("입력2").split(" ").map(Number);
//  console.log(num)
// for (let i = 0; i < num1-1; i++) {
//     let temp = num[0]
//     for (let j = 0; j < num1-1; j++) {
//         if(num[j+2] == null){

//             num[j] = num[j+1];
//             num[j+1] = temp;
//             break;
//         }
//         num[j] = num[j+1]
//     }
//     console.log(num)
// }

// 1407
// let char = prompt("입력").split(" ");
// let str =""
// for(let i=0;i<char.length;i++){
//     str+=char[i]
// }
// console.log(str)

// TODO: 1409 ~ 1412
// 1409
// let num = prompt("입력").split(" ").map(Number);
// let num1 = prompt("입력1");
// console.log(num[num1-1])

// 1410
// let char = prompt("입력");
// let count = 0;
// let count2 = 0;
// for(let i=0;i<char.length;i++){
//     if(char[i] == "("){
//         count++;
//     }
//     else if(char[i] ==")"){
//         count2++;
//     }
// }
// console.log(count+" "+count2)
// 1411  3 4 1 10 2 6 7 5 9
// let num1 = Number(prompt("입력1"))
// let num = prompt("입력").split(" ").map(Number);
// let sum = num1*(num1+1)/2;
// for(let i=0; i<num.length;i++){
//     sum -= num[i]
// }
// console.log(sum)

// 1412
// let str = prompt("입력");
// let char = "a".charCodeAt(0);
// for (let i = 0; i < 26; i++) {
//   let count = 0;
//   for (let j = 0; j < 26; j++) {
//     if (String.fromCharCode(char + i) == str[j]) {
//       count++;
//     }
//   }
//   console.log(String.fromCharCode(char + i) + " : " + count);
// }
// TODO: 1416, 1420, 1425, 1430, 1440
// 1416
// let num = Number(prompt("입력"));
// let n = num;
// let arr = [];
// let str =""
// for (let i = 0; i < num; i++) {
//   if (n >= 1) {
//     arr[i] = parseInt(n % 2);
//     n = parseInt(n / 2);
// }
// }
// console.log(arr.reverse(0));
// console.log(num.toString(2));

// 1420    예제 minsu 78 gunho 64 sumin 84 jiwon 96 woosung 55
// let num = Number(prompt("입력1"));
// let student = prompt("학생 입력").split(" ");
// let score = [];
// let str = []
// let count = 0;
// let char;
// for (let i = 0; i < student.length; i++) {
//   if (student[i] != Number(student[i])) {
//     str[count] = student[i];
//   }
//   if (student[i] == Number(student[i])) {
//     score[count] = Number(student[i]);
//     count++;
//   }
//   console.log(str);
//   console.log(score);
// }

// for (let i = 0; i < num; i++) {
//   for (let j = 0; j < num; j++) {
//     if (score[j + 1] == null) {
//       break;
//     }
//     if (Number(score[j]) < Number(score[j + 1])) {
//       console.log("작동중3");
//       count = score[j];
//       score[j] = score[j + 1];
//       score[j + 1] = count;
//       char = str[j];
//       str[j] = str[j + 1];
//       str[j + 1] = char;
//     }
//   }
// }
// console.log(str[2]);

// 1425
// let num = prompt("입력1").split(" ");
// let student = prompt("학생키 입력").split(" ");
// let num2 = Number(num[1]);
// let spot = [];
// let temp = 0;
// let str = "";
// for (let i = 0; i < num[0]; i++) {
//   for (let j = 0; j < num[0]; j++) {
//     if (student[j] > student[j + 1]) {
//       temp = student[j];
//       student[j] = student[j + 1];
//       student[j + 1] = temp;
//     }
//   }
// }

// for (let i = 0; i < num[0]; i++) {
//   spot[i] = student[i];
//   if (i % num[1] == 0) {
//     str += "\n";
//   }
//   str += spot[i] + " ";
// }
// console.log(str);

// 1430
// let num = prompt("입력1").split(" ");
// let num2 = prompt("입력2").split(" ");

// let b = prompt("비교").split(" ");
// let b2 = prompt("비교2").split(" ");

// let str = "";
// for (let i = 0; i < b; i++) {
//   let count = 0;
//   for (let j = 0; j < num; j++) {
//     if (b2[i] == num2[j]) {
//       count++;
//     }
//   }
//   str += count + " ";
// }
// console.log(str)

// 1440

// let num = prompt("입력1");
// let num2 = prompt("입력2").split(" ");
// for(let i=0;i<num;i++){
//     let str = ""
//     for(let j=0;j<num;j++){
//         if(i == j){
//             continue;
//         }
//         if(num2[i]>num2[j]){
//             str += ">"
//         }else if(num2[i]<num2[j]){
//             str += "<"
//         }else if(num2[i]==num2[j]){
//             str += "="
//         }
//     }
//     console.log(num2[i] +" : "+str)
// }