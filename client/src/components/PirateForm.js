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
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
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
        <div className="casket">
            <div className="head">

                <ul className="topList">
                    <li><h1>Pirate Crew</h1></li>
                    <li><button onClick={() => navigate('/all')} className="headButton">
                        Crew Board
                </button></li>
                </ul>

                {/* <h1 className="headTitle">Add Pirate</h1>
                <button onClick={() => navigate('/all')} className="headButton">
                    Crew Board
                </button> */}

            </div>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, i) => <p key={i}>{err}</p>)}
                <div className="topContainer">
                    <div>
                        <label>Pirate name<br /></label>
                        <input type="text" name="pirateName" value={pirateName} onChange={(e) => setPirateName(e.target.value)} />
                    </div>
                    <div>
                        <label> Crew Position<br /></label>
                        <select type="text" name="position" value={position} onChange={(e) => setPosition(e.target.value)}>
                            <option value="Captain">Captain</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Boatswain">Boatswain</option>
                            <option value="Powder Monkey">Powder Monkey</option>
                        </select>
                    </div>


                </div>
                <div className="middleContainer">
                    <div className="imgUrl">

                        <label>Image URL: <br /></label>
                        <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    </div>
                    <div>

                    </div>
                </div>







                <div className='bottomContainer'>

                    <div className="treasureToggle">


                        <label htmlFor="quantity"># of Treasure Chests <br /></label>
                        <input type="number" name="treasureChest" value={treasureChest} className="treasureBox" onChange={(e) => setTreasureChest(e.target.value)} />
                    </div>



                    <div className="pirateAtt">
                        <div>


                            <label> Peg Leg</label>
                            <input type="checkbox" checked={pegLeg} onChange={(e) => setPegLeg(e.target.checked)}></input>
                        </div>


                        <div>


                            <label> Eye Patch</label>
                            <input type="checkbox" checked={eyePatch} onChange={(e) => setEyePatch(e.target.checked)}></input>
                        </div>


                        <div>


                            <label> Hook Hand</label>
                            <input type="checkbox" checked={hookHand} onChange={(e) => setHookHand(e.target.checked)}></input>
                        </div>
                    </div>


                </div>
                <div className="footContainer">


                    <div className="phraseBox">
                        <label> Catchphrase <br /></label>
                        <input type="text" name="catchPhrase" value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} />
                    </div>
                    <div className="footSubmitFrame">


                        <button className="submitButton" type="submit" >Add Pirate</button>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default PirateForm;