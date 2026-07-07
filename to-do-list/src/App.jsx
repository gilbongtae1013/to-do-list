import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import leftarrow from './assets/arrow-left.png'
import rightarrow from './assets/arrow-right.png'


function App() {

    const today = new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });


    const [box_add_title, setBox_add_title] = useState('');
    const [box_add_visible, setBox_add_visible] = useState(false);
    const [box_list1, setBox_list1] = useState([]);
    const [box_list2, setBox_list2] = useState([]);
    const [box_list3, setBox_list3] = useState([]);
    const [user_title, setUser_title] = useState('');
    const [user_name, setUser_name] = useState('');
    const [user_importance, setUser_importance] = useState('');

    function chooga_click() {
        setBox_add_visible(true);
    }

    function Container(props) {
    
        return (
            <>
            <div id="box" className={props.status}>
                <div id='box_head'>
                    <span id="status_name">{props.name}</span>
                    <span id='chooga' onClick={()=> {chooga_click(); setBox_add_title(props.name);}}>+추가</span>
                </div>
                <div id='box_content'>
                    {props.boxlist.map((box, index) => (
                        <div key={index} className={`box ${props.color}`}>
                            <span id='usertitle'>{box.title}</span>
                            <span id='username'>생성자: {box.name}</span>
                            <span id="date">생성일: {today}</span>
                        </div>
                    ))}
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

    function Box_add() {
        const titlename = document.getElementById('title_input');
        const writername = document.getElementById('writer_name');

        if(titlename.value == "" || writername.value == ""){
            alert('빈칸을 모두 채우시오');
            return;
        }
        
        setBox_add_visible(false);

        const user_data = {
            name: user_name,
            title: user_title,
            importance: user_importance
        }

        if(box_add_title === "대기¢"){
            setBox_list1([...box_list1, user_data]);
        }
        else if(box_add_title === "진행†"){
            setBox_list2([...box_list2, user_data]);
        }
        else {
            setBox_list3([...box_list3, user_data]);
        }
    }
    
    return (
        <div id="main_box">
            <header className='jua-regular'>
                To-do-List
            </header>

            <Container status="daegi" name="대기¢" boxlist={box_list1} color="red"/>
            <Container status="jinhaeng" name="진행†" boxlist={box_list2} color="blue"/>
            <Container status="wanryo" name="완료♤" boxlist={box_list3} color="green"/>

            {box_add_visible && (
                <div id="todo_box_add">
                    <div id="box_add_title_span">
                        {box_add_title}
                    </div>
                    <div>
                        <label for="title_input">제목:</label>
                        <input id="title_input" onChange={(e) => setUser_title(e.target.value)}></input>
                    </div>
                    <div>
                        <label for="writer_name">작성자 이름:</label>
                        <input id="writer_name" onChange={(e) => setUser_name(e.target.value)}></input>
                    </div>
                    <div>
                        <label for="importance">난이도:</label>
                        <select id="importance" onChange={(e) => setUser_importance(e.target.value)}>
                            <option value="imp1">상</option>
                            <option value="imp2">중</option>
                            <option value="imp3">하</option>
                        </select>
                    </div>

                    <div id="chooga_or_cancel">
                        <div id="box_add_button" onClick={() => {
                            Box_add();
                        }}>추가</div>
                        <div id="cancel_button" onClick={() => {
                            setBox_add_visible(false);
                        }}>취소</div>
                    </div>

                </div>
            )}

        </div>
    )
}

export default App
