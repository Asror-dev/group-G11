
import {useState} from "react";


function Home3(){

    let [color,setColor] = useState('')
    function red(){
        setColor('red')
    }
    function green(){
        setColor('green')
    } function yellow(){
        setColor('yellow')
    } function blue(){
        setColor('blue')
    } function black(){
        setColor('black')
    } function white(){
        setColor('white')
    }

    return <div>
        <div>
            <button onClick={red}>red</button>
            <button onClick={green}>green</button>
            <button onClick={yellow}>yellow</button>
            <button onClick={blue}>blue</button>
            <button onClick={black}>black</button>
            <button onClick={white}>white</button>
        </div>
        <div>
            <div style={{backgroundColor: `${color}`}} className={'rang'}>

            </div>
        </div>
    </div>
}

export default Home3