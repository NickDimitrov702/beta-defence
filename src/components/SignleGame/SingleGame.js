import {useEffect, useState} from 'react'
import { matchPath } from 'react-router';
import {getOne} from '../../Services/ComapnyInformation'

const SingleGame = ({
    match,
    description
}) => {
    let [game, setGame] = useState();
    useEffect(() => {
        getOne(match.params.description)
            .then(res => setGame(res))
    }, [])

   

    return(
        <div className="detailsOtherPet">
                <h3>{game.gamename}</h3>
                <p className="img">{game.description}</p>
				<p className="description">{game.story}</p>
                <p>EVAKA</p>
            </div>
    );
}

export default SingleGame;