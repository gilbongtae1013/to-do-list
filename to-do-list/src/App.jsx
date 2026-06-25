import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div id="fspan-container">
        <span id="fspan">할 일 목록</span>
        <img src="img/icon.png" alt="icon" id="icon"></img>
        <span id="menu">☰</span>
    </div>  
    <div id="large-container">
        <div id="daegi" className="container">
            <div id="daegi_name" className="cname">
                <span>대기</span>
                <span className="plus">+추가</span>
            </div>
            <div className="box_container">
            </div>
            <div className="con_bottom">
                <img src="img/arrow-left.png" className="gguk"></img>
                <span id="con1_leng">1/1</span>
                <img src="img/arrow-right.png" className="gguk"></img>
            </div>
        </div>

        <div id="jinhaeng" className="container">
            <div id="jinhaeng_name" className="cname">
                <span>진행</span>
                <span className="plus">+추가</span>
            </div>
            <div className="box_container">
            </div>
            <div className="con_bottom">
                <img src="img/arrow-left.png" className="gguk"></img>
                <span id="con2_leng">1/1</span>
                <img src="img/arrow-right.png" className="gguk"></img>
            </div>
        </div>

        <div id="wanryo" className="container">
            <div id="jinhaeng_name" className="cname">
                <span>완료</span>
                <span className="plus">+추가</span>
            </div>
            <div className="box_container">
            </div>
            <div className="con_bottom">
                <img src="img/arrow-left.png" className="gguk"></img>
                <span id="con3_leng">1/1</span>
                <img src="img/arrow-right.png" className="gguk"></img>
            </div>
        </div>
    </div>

    <div id="sidebar">
        <div id="reset" className="sidediv">
            <span>초기화</span>
        </div>
    </div>

    <div id="add_container">
        <div id="add_box">
            <h1 id="chooga">추가</h1>
            <div id="add_title">
                <label htmlFor="a_title">제목:</label>
                <input id="a_title"></input>
            </div>
            <div id="add_name">
                <label htmlFor="a_name">작성자이름:</label>
                <input id="a_name"></input>
            </div>
            <div id="nan_choice_box">
                <label htmlFor="nan_choice">난이도:</label>
                <select id="nan_choice">
                    <option value="imp_1">상</option>
                    <option value="imp_2">중</option>
                    <option value="imp_3">하</option>
                </select>
            </div>

            <div id="chooga_box">
                <div id="chiso_button">
                    <span>취소하기</span>
                </div>
                <div id="chooga_button">
                    <span>추가하기</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
