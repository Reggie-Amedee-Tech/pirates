import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PirateCrew from '../components/PirateCrew'

const Main = () => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/pirate/all')
        .then(res=> {
            setPirates(res.data);
            setLoaded(true);
        })

    }, [])

    const removeFromDom = (pirateid) => {
        setPirates(pirates.filter(pirate=> pirate._id !== pirateid))
    }

    return (
        <div>
            {loaded && <PirateCrew pirates={pirates} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Main;