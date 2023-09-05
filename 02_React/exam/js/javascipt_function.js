//  TODO: 1615, 1620

// 1615
let num = prompt("숫자 입력").split(" ");
let a = Number(num[0]);
let b = Number(num[1]);
let hab = 0;
function selfSum(a, b) {
  let c = a;
  let sum = 0;
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  let count = 0;
  let div = 1;
  // 구문시작
  for (a; a <= b; a++) {
    //   자리수 판별식
    div = 1;
    for (let i = 1; i <= a; i++) {
      if (c < 10) {
        break;
      }
      c = c / 10;
      div = div * 10;
    }
    hab = 0;
    c = a;
    arr = [];
    //숫자 분해 ex) 91 => 9, 1
    arr = [];
    for (let i = 0; c > 0; i++) {
      arr[i] = parseInt(c / div);
      c = c % div;
      div = div / 10;
    }
    // 제네레이터 판별후 제네레이터를 배열에 넣음
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      if (i == arr.length - 1) {
        sum += a;
        arr2[count] = sum;
        count++;
      }
    }
    sum = 0;
    // 제네레이터가 아닌 값들의 합 저장
    for (let i = 0; i <= a; i++) {
      arr3[i] = i;
      for (let j = 0; j <= a; j++) {
        if (arr3[i] == arr2[j]) {
          arr3[i] = 0;
          break;
        }
      }
      hab = hab + arr3[i];
    }
  }
}

// 함수 호출
selfSum(a, b);
console.log(hab);

// 1620

// let num = prompt("숫자 입력");
// let arr = [];
// let c = num;
// let div = 1;
// while (c >= 10) {
//   num = c;
//   div = 1;
//   for (let i = 1; i < num; i++) {
//     if (num < 10) {
//       break;
//     }
//     num = parseInt(num / 10);
//     div = div * 10;
//   }

//   for (let i = 0; c > 0; i++) {
//     arr[i] = parseInt(c / div);
//     c = c % div;
//     div = div / 10;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     c = c + arr[i];
//   }
//   arr = [];
//   div = 1;
// }
// console.log("c22 : " + c);

// 설명용
// let num = prompt("숫자 입력").split(" ");
// let a = Number(num[0]);
// let b = Number(num[1]);
// let hab = 0;
// function selfSum(a, b) {
//   let c = a;
//   let sum = 0;
//   let arr = [];
//   let arr2 = [];
//   let arr3 = [];
//   let count = 0;
//   let div = 1;
//   // 구문시작
//   for (a; a <= b; a++) {
//     //   자리수 판별식
//     div = 1;
//     for (let i = 1; i <= a; i++) {
//       if (c < 10) {
//         break;
//       }
//       c = c / 10;
//       div = div * 10;
//     }
//     hab = 0;
//     c = a;
//     arr = [];
//     //숫자 분해 ex) 91 => 9, 1
//     arr = [];
//     for (let i = 0; c > 0; i++) {
//       arr[i] = parseInt(c / div);
//       c = c % div;
//       div = div / 10;
//       console.log("c" + c);
//       console.log("a" + a);
//       console.log("div : " + div);
//     }
//     // 제네레이터 판별후 제네레이터를 배열에 넣음
//     for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//       console.log("arr" + arr[i]);
//       console.log("sum" + sum);
//       console.log("i" + i);
//       console.log("arr.length" + arr.length);
//       if (i == arr.length - 1) {
//         sum += a;
//         arr2[count] = sum;
//         console.log("arr :" + arr[i]);
//         console.log("sum :" + sum);
//         console.log("i : " + i);
//         console.log("arr.length :" + arr.length);
//         console.log("arr2" + [count] + " : " + arr2[count]);
//         console.log("count : " + count);
//         count++;
//       }
//     }
//     sum = 0;
//     // 제네레이터가 아닌 값들의 합 저장
//     for (let i = 0; i <= a; i++) {
//       arr3[i] = i;
//       for (let j = 0; j <= a; j++) {
//         if (arr3[i] == arr2[j]) {
//           arr3[i] = 0;
//           break;
//         }
//       }
//       hab = hab + arr3[i];
//     }
//   }
// }

// // 함수 호출
// selfSum(a, b);
// console.log(hab);
