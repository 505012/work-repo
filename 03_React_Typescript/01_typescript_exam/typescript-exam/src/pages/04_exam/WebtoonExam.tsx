// WebtoonExam.tsx : 자식 (연습)
// rfce
import React, { useState } from "react";
import IWebtoon from "../../types/IWebtoon";

function WebtoonExam() {
  const initialWebtoon = [
    {
      id: 1,
      name: "햄스터와 그녀",
      link: "https://webtoon.kakao.com/content/%ED%96%84%EC%8A%A4%ED%84%B0%EC%99%80-%EA%B7%B8%EB%85%80/1625?tab=episode",
      img: "http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54",
      isUpdate: true,
    },
    {
      id: 2,
      name: "프롬 스타",
      link: "https://webtoon.kakao.com/content/%ED%94%84%EB%A1%AC-%EC%8A%A4%ED%83%80/1573",
      img: "http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1",
      isUpdate: true,
    },
    {
      id: 3,
      name: "위대한 로맨스",
      link: "https://webtoon.kakao.com/content/%EC%9C%84%EB%8C%80%ED%95%9C-%EB%A1%9C%EB%A7%A8%EC%8A%A4/1564",
      img: "http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085",
      isUpdate: false,
    },
    {
      id: 4,
      name: "빛나는 손을",
      link: "https://page.kakao.com/content/49824106",
      img: "http://t1.daumcdn.net/cartoon/5913FCAC0234C50001",
      isUpdate: false,
    },
  ];
  // 변수 정의
  let [webtoon, setWebtoon] = useState<Array<IWebtoon>>(initialWebtoon);
  // 함수 정의

  return (
    <div>
      <h2>Free Webtoon</h2>
      <ul>
        {/* 반복문 : li 대해서 */}
        {webtoon.map((value, index) => (
          <li key={index}>
            <a href={value.link}>
              <img src={value.img} />
              {value.name}
            </a>
            {value.isUpdate && <span>N</span>}
          </li>
        ))}

        {/* {webtoon.map((item) => ( */}
          {/* <li className="item" key={item.id}> */}
            {/* <a href={item.link}> */}
              {/* <img src={item.img} /> */}
              {/* <span className="tit">제목 {item.name}</span> */}
            {/* </a> */}
            {/* item.isUpdate 있으면 span 태그 실행 */}
            {/* {item.isUpdate && <span className="tag">N</span>} */}
          {/* </li> */}
        {/* ))} */}

        
      </ul>
    </div>
  );
}

export default WebtoonExam;
