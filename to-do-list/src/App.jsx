import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import leftarrow from './assets/arrow-left.png'
import rightarrow from './assets/arrow-right.png'


function App() {

    function Container(props) {
    
        return (
            <>
            <div id="box" className={props.status}>
                <div id='box_head'>
                    <span id="status_name">{props.name}</span>
                    <span id='chooga'>+추가</span>
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
        
        </div>
    )
}

export default App
