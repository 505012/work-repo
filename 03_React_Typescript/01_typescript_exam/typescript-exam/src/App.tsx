import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Basic from "./pages/Basic";
import BasicExam from "./pages/BasicExam";
import Func from "./pages/01_Exam/Func";
import FuncExam from "./pages/01_Exam/FuncExam";
import Etc from "./pages/02_exam/Etc";
import Counter from "./pages/03_exam/Counter";
import Book from "./pages/04_exam/Book";
import WebtoonExam from "./pages/04_exam/WebtoonExam";

function App() {
  return (
    <div className="App">
      {/* 자식컴포넌트(페이지) 추가 */}
      {/* <Basic /> */}
      {/* <BasicExam/> */}
      {/* <Func/> */}
      {/* <FuncExam/> */}
      {/* <Etc/> */}
      {/* <Counter/> */}
      {/* <Book /> */}
      <WebtoonExam />
    </div>
  );
}

export default App;
