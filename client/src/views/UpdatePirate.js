import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';



const UpdatePirate = (props) => {
    const [pirateName, setPirateName] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [treasureChest, setTreasureChest] = useState();
    const [catchPhrase, setCatchPhrase] = useState();
    const [position, setPosition] = useState();
    const [attribute, setAttribute] = useState();
    const { id } = props;


    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate/' + id)
            .then(res => {
                setPirateName(res.data.pirateName)
                setImageUrl(res.data.imageUrl)
                setTreasureChest(res.data.treasureChest)
                setCatchPhrase(res.data.catchPhrase)
                setPosition(res.data.position)
                setAttribute(res.data.attribute)
            })
    }, [])

    const newUpdatedPirate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pirate/' + id, {
            pirateName,
            imageUrl,
            treasureChest,
            catchPhrase,
            position,
            attribute
        })
            .then(res => {
                navigate('/all')
                console.log(res)})
    }


    return (
        <form onSubmit={newUpdatedPirate}>

            <div>
                <label>What is your name?<br /></label>
                <input type="text" name="pirateName" value={pirateName} onChange={(e) => { setPirateName(e.target.value) }} />
            </div>
            <div>
                <label>Image URL <br /></label>
                <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }} />
            </div>
            <div>
                <label htmlFor="quantity">Treasure Chest <br /></label>
                <input type="number" name="treasureChest" value={treasureChest} onChange={(e) => { setTreasureChest(e.target.value) }} />
            </div>
            <div>
                <label> Catchphrase <br /></label>
                <input type="text" name="catchPhrase" value={catchPhrase} onChange={(e) => { setCatchPhrase(e.target.value) }} />
            </div>
            <div>
                <label> Position<br /></label>
                <select type="text" name="position" value={position} onChange={(e) => { setPosition(e.target.value) }}>
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
            <button type="submit">Complete Edit</button>
        </form>
    )
}

export default UpdatePirate;