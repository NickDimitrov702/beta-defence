import style from './Company.style.css'
import { Link } from 'react-router-dom'
import { getOne } from '../../../Services/ComapnyInformation'
import Comments from '../../PrivetComponents/Comments/Comments'
// import {useRef} from 'react'


function Company({
    developer,
    gamename,
    description,
    story,
    gameplay,
    dev,
    game,
    rev
}) {
    

    

    return (
        <section className="comapny-wrapper">
            <section className="comapnies">
                <div className="company-logo">
                    <p className="company-logo-wrapper">
                        <Link onClick={getOne}  className="company-links" to="/get-one-review">{dev}</Link>
                    </p>
                </div>
                <section className="review-content">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">{game}</h3>
                            <p className="description">{rev}</p>
                        </li>
                    </ul>
                </section>
                <section className="review-content">
                    <ul className='games-list-items'>
                        <li className="games">
                            <section className="review-content">
                                <h3 className="reveiw-headers">Story</h3>
                                <p>{story}</p>
                            </section>
                        </li>
                        <li className="games">
                            <section className="review-content">
                                <h3 className="reveiw-headers">Gameplay</h3>
                                <p>{gameplay}</p>
                            </section></li>
                    </ul>
                </section>
                <Comments />
            </section>

        </section>
    );
}

export default Company;