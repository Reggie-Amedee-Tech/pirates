import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Details = (props) => {
    const [pirates, setPirates] = useState({});


    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate/' + props.id)
            .then(res => setPirates({
                ...res.data
            }))
    })

    return (

        <div className="detailedPirateBox">
            <div className="middleBox">

            
            <div className='aboutBox'>
                <h1>About</h1>
                <div>
                    <p> Position: {pirates.position}</p>
                    <p> Treasures: {pirates.treasureChest}</p>
                    <p>Your Attribute! {pirates.attribute}</p>
                </div>

            </div>
            <div className="pictureBox">
                <img src={pirates.imageUrl} alt="Luffy"></img>
                <p>{pirates.catchPhrase}</p>
            </div>
                </div>


            <button onClick={() => navigate('/pirate/' + pirates._id + '/edit')}>Edit Pirate</button>
        </div>


    )
}

export default Details;