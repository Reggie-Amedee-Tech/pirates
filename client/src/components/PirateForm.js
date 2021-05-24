import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import './styles.css'


const PirateForm = (props) => {
    const [pirateName, setPirateName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [treasureChest, setTreasureChest] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [position, setPosition] = useState('');
    const [attribute, setAttribute] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirate', {
            pirateName,
            imageUrl,
            treasureChest,
            catchPhrase,
            position,
            attribute

        })
            .then(res => {
                console.log(res)
                navigate('/all')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errArr = []
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr)
            })
    }


    return (

        <form onSubmit={onSubmitHandler}>

            <div className="form">
                <div className="titleContainer">
                    <h1>Add Pirate</h1>
                    <button onClick={() => navigate('/all')}>
                        Crew Board
                </button>

                </div>

                {errors.map((err, i) => <p key={i}>{err}</p>)}
                <div className="topContainer">
                    <div>
                        <label>What is your name?<br /></label>
                        <input type="text" name="pirateName" value={pirateName} onChange={(e) => setPirateName(e.target.value)} />
                    </div>
                    <div>
                        <label>Image URL <br /></label>
                        <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    </div>
                </div>
                <div className="middleContainer">


                    <div>
                        <label htmlFor="quantity">Treasure Chest <br /></label>
                        <input type="number" name="treasureChest" value={treasureChest} onChange={(e) => setTreasureChest(e.target.value)} />
                    </div>

                    <div>
                        <label> Catchphrase <br /></label>
                        <input type="text" name="catchPhrase" value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} />
                    </div>

                </div>

                <div className='bottomContainer'>
                    <div>
                        <label> Position<br /></label>
                        <select type="text" name="position" value={position} onChange={(e) => setPosition(e.target.value)}>
                            <option value="Captain">Captain</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Boatswain">Boatswain</option>
                            <option value="Powder Monkey">Powder Monkey</option>
                        </select>

                    </div>


                    <div>


                        <label>Choose Your Attribute!<br /></label>
                        <select type="text" name="attribute" value={attribute} onChange={(e) => setAttribute(e.target.value)}>
                            <option value="Peg Leg">Peg Leg</option>
                            <option value="Eye Patch">Eye Patch</option>
                            <option value="Hook Hand">Hook Hand</option>
                        </select>

                    </div>
                </div>

                <button type="submit" >Add Pirate</button>
            </div>
        </form>
    )
}

export default PirateForm;