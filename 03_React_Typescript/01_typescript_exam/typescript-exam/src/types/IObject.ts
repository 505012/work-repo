// IObject.ts
// todo : 타입스크립트 파일명 종류 : /tsx(jsx표현식을 사용한 js) , .ts(jsx표현식 사용안한 js)
// todo : 리액트의 jsx(javascript and Xml) : {값}
// 사용법 : export default interface 객체자료형명 { 속성? : 자료형 | 자료형2 ... 속성2:자료형}
// 속성? : 옵셔널(?) : 속성이 없어도 오류없이 실행되게 해줌
// 예) let obj: IOBject = {name:"홍길동"}
// obj.id(결과는 오류로 출력되지만 에러없이 프로그램이 실행되게 해줌)
export default interface IObject{
    id: any | null,
    name: string
}