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
    const [box_add_visible, setBox_add_visible] = useState(false);``
    const [box_list1, setBox_list1] = useState([]);
    const [box_list2, setBox_list2] = useState([]);
    const [box_list3, setBox_list3] = useState([]);
    const [user_title, setUser_title] = useState('');
    const [user_name, setUser_name] = useState('');
    const [user_importance, setUser_importance] = useState('상');
    const [max_box1, setMax_box1] = useState(1);
    const [max_box2, setMax_box2] = useState(1);
    const [max_box3, setMax_box3] = useState(1);
    const [recent_box1, setRecent_box1] = useState(1);
    const [recent_box2, setRecent_box2] = useState(1);
    const [recent_box3, setRecent_box3] = useState(1);

    function chooga_click() {
        setBox_add_visible(true);
    }

    function Container(props) {
        const start = (props.recentbox - 1) * 3;
        const end = start + 3;
    
        return (
            <>
            <div id="box" className={props.status}>
                <div id='box_head'>
                    <span id="status_name">{props.name}</span>
                    <span id='chooga' onClick={()=> {chooga_click(); setBox_add_title(props.name);}}>+추가</span>
                </div>
                <div id='box_content'>
                    {props.boxlist.slice(start, end).map((box, index) => (
                        <div key={index} className={`box ${props.color}`}>
                            <span id='usertitle'>{box.title}</span>
                            <div className="import" id={box.importance}>{box.importance}</div>
                            <span id='username'>생성자: {box.name}</span>
                            <span id="date">생성일: {today}</span>
                        </div>
                    ))}
                </div>
                <div id="box_bottom">
                    <img src={leftarrow} className='arrow' onClick={() => {
                        if(props.recentbox > 1){
                            props.setRecent(props.recentbox -1);
                        }
                    }}/>
                    <span>{props.recentbox}/{props.max}</span>
                    <img src={rightarrow} className='arrow' onClick={() => {
                        if(props.recentbox < props.max){
                            props.setRecent(props.recentbox +1);
                        }
                    }}/>
                </div>
            </div>
            </>
        )
    }

    function Box_add() {

        if(user_name == "" || user_title == ""){
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
            const newList = [...box_list1, user_data];
            setBox_list1(newList);
            setMax_box1(Math.ceil(newList.length /3));
        }
        else if(box_add_title === "진행†"){
            const newList = [...box_list2, user_data];
            setBox_list2(newList);
            setMax_box2(Math.ceil(newList.length /3));
        }
        else {
            const newList = [...box_list3, user_data];
            setBox_list3(newList);
            setMax_box3(Math.ceil(newList.length /3));
        }

        setUser_name('');
        setUser_title('');
        setUser_importance('상');

    }
    
    return (
        <div id="main_box">
            <header className='jua-regular'>
                To-do-List
            </header>

            <Container status="daegi" name="대기¢" boxlist={box_list1} color="red" max={max_box1} recentbox={recent_box1} setRecent={setRecent_box1}/>
            <Container status="jinhaeng" name="진행†" boxlist={box_list2} color="blue" max={max_box2} recentbox={recent_box2} setRecent={setRecent_box2}/>
            <Container status="wanryo" name="완료♤" boxlist={box_list3} color="green" max={max_box3} recentbox={recent_box3} setRecent={setRecent_box3}/>

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
                            <option value="상">상</option>
                            <option value="중">중</option>
                            <option value="하">하</option>
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
