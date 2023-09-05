import logo from "./logo.svg";
import "./App.css";
import A_Comment from "./pages/A_Comment";
import B_Comment_Exam from "./pages/B_Comment_Exam";
import C_Comment_Exam2 from './pages/C_Comment_Exam2';
import D_Comment_Exam3 from "./pages/D_Comment_Exam3";
import E_Comment_Exam4 from './pages/E_Comment_Exam4';
import F_CommentList_Exam2 from './pages/F_CommentList_Exam2';

function App() {
  return (
    <div className="App">
      {/* 자식 컴포넌트 추가 */}
      {/* <A_Comment/> */}
      {/* <B_Comment_Exam/> */}
      {/* <C_Comment_Exam2/> */}
      {/* <D_Comment_Exam3/> */}
      {/* <E_Comment_Exam4/> */}
      <F_CommentList_Exam2/>
    </div>
  );
}

export default App;
