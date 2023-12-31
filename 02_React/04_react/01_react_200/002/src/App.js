// 이미지 import
import logo from './logo.svg';
// App.css import(기본 : 중앙정렬)
import './App.css';
import A_Lifecycle from './pages/A_Lifecycle.js';
import B_Props from './pages/B_Props.js';
import C_Exam from './pages/C_Exam.js';
import D_Exam2 from './pages/D_Exam2.js'
import E_Exam3 from './pages/E_Exam3.js';
import F_Clock from './pages/F_Clock';
// todo : 이랙트에서 처음으로 실행되는 js(최상위 부모 컴포넌트)
// todo : 웹브라우저 확인(주소창) : http://localhost:3000
function App() {
  // 변수/함수를 정의하는 부분
  return (
    // 화면에 보이는 부분: return 안에 있는 html 태그 화면에 보임
    <div className="App">
      <h1>Start React 200!</h1>
      {/* <A_Lifecycle></A_Lifecycle> */}
      {/* <B_Props prop_value="hong gil dong"></B_Props> */}
      {/* TODO: 연습문제 : 데이터 전달 */}
      {/* <C_Exam prop_value="From App" /> */}
      {/* <D_Exam2/> */}
      {/* 연습문제 3 */}
      {/* <E_Exam3 name="처음 만난 파이썬" numOfPage={300}/> */}
      {/* <E_Exam3 name="처음 만난 자바" numOfPage={500}/> */}
      {/* <E_Exam3 name="처음 만난 JS" numOfPage={200}/> */}
      {/* <F_Clock></F_Clock> */}
    </div>
  );
}

export default App;
