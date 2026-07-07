import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import leftarrow from './assets/arrow-left.png'
import rightarrow from './assets/arrow-right.png'


function App() {

    const [box_add_visible, setBox_add_visible] = useState(false);

    function chooga_click() {
        setBox_add_visible(true);
    }

    function Container(props) {
    
        return (
            <>
            <div id="box" className={props.status}>
                <div id='box_head'>
                    <span id="status_name">{props.name}</span>
                    <span id='chooga' onClick={chooga_click}>+추가</span>
                </div>
                <div id='box_content'>

                </div>
                <div id="box_bottom">
                    <img src={leftarrow} className='arrow'/>
                    <span>1/1</span>
                    <img src={rightarrow} className='arrow'/>
                </div>
            </div>
            </>
        )
    }
    
    return (
        <div id="main_box">
            <header className='jua-regular'>
                To-do-List
            </header>

            <Container status="daegi" name="대기¢"/>
            <Container status="jinhaeng" name="진행†"/>
            <Container status="wanryo" name="완료♤"/>

            {box_add_visible && (
                <div id="todo_box_add">
                    <div>
                        <label for="title_input">제목:</label>
                        <input id="title_input"></input>
                    </div>
                    <div>
                        <label for="writer_name">작성자 이름:</label>
                        <input id="writer_name"></input>
                    </div>
                    <div>
                        <label for="importance">난이도:</label>
                        <input id="importance"></input>
                    </div>

                    <div id="chooga_or_cancel">
                        <div id="box_add_button">추가</div>
                        <div id="cancel_button">취소</div>
                    </div>

                </div>
            )}
        
        </div>
    )
}

export default App
