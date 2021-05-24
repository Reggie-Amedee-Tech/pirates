import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react';
import './styles.css'

const PirateCrew = (props) => {
    const { removeFromDom } = props;

    const deletePirate = (pid) => {
        axios.delete('http://localhost:8000/api/pirate/' + pid)
            .then(res => {
                removeFromDom(pid)
            })
    }



    return (
        <div className='crewContainer'>
            <div className="pirateBox">
                {props.pirates.map((pirate, i) => {
                    return <div key={i}>
                        <p>{pirate.pirateName}</p>
                        <div>
                            <button onClick={() => navigate('/pirate/' + pirate._id)}>View Pirate</button>
                            <button onClick={(e) => deletePirate(pirate._id)}>Delete</button>
                        </div>
                    </div>


                })}
            </div>
        </div>

    )
}

export default PirateCrew;