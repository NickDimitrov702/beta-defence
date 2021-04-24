import { useReducer, useRef } from 'react';
import style from './AddinGame.style.css'
import addGame from '../../../Services/GameServices'
import firebase from 'firebase';
import 'firebase/firebase-database'



function AddingGame() {

    const developerRef = useRef()
    const gameRef = useRef()
    const reveiw = useRef()

    async function addIngGame(e) {
        e.preventDefault()
        let dev = developerRef.current.value;
        let game = gameRef.current.value;
        let rev = reveiw.current.value;
        console.log(dev)
        const gameList = firebase.database().ref('Games/Game').set({
            dev,
            game,
            rev
        })
      
        
  


    }

    return (
        <div className="adding-game-wrapper" >
            <form className="adding-game-wrapper" onSubmit={addIngGame}>
                <label>Developer</label>
                <input type="text" ref={developerRef} placeholder="Add-developer"></input>
                <label>Game</label>
                <input type="text" ref={gameRef} placeholder="Add-game"></input>
                <label>Review</label>
                <textarea type="text" ref={reveiw} placeholder="Add-review"></textarea>
                <button className="button" type="submit">Submit</button>
            </form>

        </div>
    )
}

export default AddingGame;
