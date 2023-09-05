// TODO: 1131 ~ 1133
// 1131
// let char = prompt("입력")
// console.log(char);

// 1132
// let char = prompt("입력")
// console.log(char);

// 1133
// let char = prompt("입력")
// console.log(char);

// TODO: 1295, 1406, 1408, 1410, 1414, 1418, 1419, 1733, 1734
// 1295
// let char = prompt("입력")
// let str = ""
// for(let i=0;i<char.length;i++){
//     if(char[i] == char[i].toUpperCase()){
//         str += char[i].toLocaleLowerCase()
//     }else if(char[i] == char[i].toLocaleLowerCase()){
//         str += char[i].toUpperCase()
//     }else{
//         str +=" "
//     }
// }
// console.log(str);

// 1406
// let char = prompt("입력")
// if(char == "love"){
//     console.log("I love you.")
// }

// 1408
// let char = prompt("입력");
// let char1 = [];
// let char2 = [];
// for (let i = 0; i < char.length; i++) {
//   char1[i] = char[i].charCodeAt(0) + 2;
//   char1[i] = String.fromCharCode(char1[i]);
// }
// for (let i = 0; i < char.length; i++) {
//   char2[i] = ((char[i].charCodeAt(0) * 7) % 80) + 48;
//   char2[i] = String.fromCharCode(char2[i]);
// }
// console.log(char1.toString());
// console.log(char2.toString());

// // 1410 문제 없음

// 1414
// let char = prompt("입력");
// let c = 0;
// let cc = 0;
// for(let i=0;i<char.length;i++){
//     if(char[i] == "c" || char[i] == "C"){
//         c++;
//     }
//     if(char[i]+char[i+1] == "cc" || char[i]+char[i+1] == "cC" || char[i]+char[i+1] == "Cc" || char[i] + char[i+1] == "CC" ){
//         cc++;
//     }
// }
// console.log(c)
// console.log(cc)

// 1418
// let char = prompt("입력");
// let str = ""
// for(let i=0;i<char.length;i++){
//     if(char[i] == "t"){
//         str += i+1 + " "
//     }
// }
// console.log(str);

// 1419
// let char = prompt("입력");
// let c = 0;
// let cc = 0;
// for (let i = 0; i < char.length; i++) {
//   if (char[i] + char[i+1] + char[i+2] + char[i+3] == "love") {
//     c++;
//   }
// }
// console.log(c)

// 1733
// let char = prompt("입력");
// if(char == "IOI"){
//     console.log("IOI is the International Olympiad in Informatics.")
// }else(
//     console.log("I don't care.")
// )

// 1734
// let id = prompt("입력");
// console.log("welcome! " + id)

// TODO: 1754, 1990, 2721
// 1754
// let char = prompt("입력").split(" ");
// let temp;
// let str = ""
// if(char[0]>char[1]){
//    temp = char[0]
//    char[0] = char[1]
//    char[1] = temp
//    str += char[0] +" " +char[1]
// }
// console.log(str)

// 1990
// let num = Number(prompt("입력"));
// let flag = 0;
// if(num%3 === 0){
//     flag = 1;
// }
// console.log(flag)

// 2721  turtle error robot
// let char = prompt("입력1").split(" ");
// let char1 = char[0];
// let char2 = char[1];
// let char3 = char[2];
// // let char2 = prompt("입력2");
// // let char3 = prompt("입력3");
// let flag = "bad";
// if (
//   char1[char1.length - 1] == char2[0] &&
//   char2[char2.length - 1] == char3[0] &&
//   char3[char3.length - 1] == char1[0]
// ) {
//   flag = "good";
// }
// console.log(flag);
