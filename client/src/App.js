import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Form from './components/Form';

function App() {

    const [msg,setMsg] = useState('');

    useEffect(()=>{
        fetch("/api")
            .then(res => res.text())
            .then(data => {
                setMsg(data);
            });
    },[]);


    return (
        <main className='container'>
            <span>{msg}</span>
            <Form />
        </main>
    );
}

export default App;
