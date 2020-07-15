'use strict';
import React from 'react'
import ReactDom from 'react-dom'
import '../style/index.css'
import imgSrc from '../assets/b.png'
import '../../common/index'
function App() {
    return (<div>
        <h1>hello222 Word !!</h1>
        <img src={imgSrc} alt=""/>
    </div>)
}

ReactDom.render(<App/>,document.querySelector('#root'))