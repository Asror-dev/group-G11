import  {useState} from "react";

function Home1(){
    let [yes,setYes] = useState('')

    function click(){
        setYes(       <div  className={'buttom'}>
                     <div className="conteiner">
                    <input placeholder={'Firsname'} type="text"/>
                    <input placeholder={'Lastname'} type="text"/>
                    <input placeholder={'City'} type="text"/>
                    <input placeholder={'Age'} type="number"/>
                    <button>clear</button>
                    <button>sabmet</button>

                </div>
            </div> )
    }
    function click1(){
        setYes('')
    }

    return <div className={'body'}>
        <div className={'top'}>
            <button onClick={click}>Show</button>
            <button onClick={click1} >Hide</button>

        </div>
        {yes}
    </div>

}

export default Home1