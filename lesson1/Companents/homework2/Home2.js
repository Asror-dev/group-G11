import {useState} from "react";


function Home2(){

    let [nom,setNome] = useState('')
    function Eldor(){
        setNome('Eldor')
    }
    function Chuchqa(){
        setNome('Chuchqa')
    }
    function Ot(){
        setNome('Ot')
    }
    function Sabzi(){
        setNome('Sabzi')
    }
    function Bodring(){
        setNome('Bodring')
    }
    function Barselona(){
        setNome('Barselona')
    }
    function Uzbekistan(){
        setNome('Uzbekistan')
    }

    return <div>
        <div>
            <button onClick={Eldor}>Eldor</button>
            <button onClick={Chuchqa}>Chuchqa</button>
            <button onClick={Ot}>Ot</button>
            <button onClick={Sabzi}>Sabzi</button>
            <button onClick={Bodring}>Bodring</button>
            <button onClick={Barselona}>Barselona</button>
            <button onClick={Uzbekistan}>Uzbekistan</button>
        </div>
        <div>
            <h1>
                {nom}
            </h1>
        </div>
    </div>
}

export default Home2