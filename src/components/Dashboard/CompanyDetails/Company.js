import style from './Company.style.css'
import { Link } from 'react-router-dom'
import { getOne } from '../../../Services/GameServices'
import Comments from '../../PrivetComponents/Comments/Comments'


function Company({
    developer,
    gamename,
    description,
    story,
    gameplay
}) {

    return (
        <section className="comapny-wrapper">
            <section className="comapnies">
                <div className="company-logo">
                    <p className="company-logo-wrapper">
                        <Link onClick={getOne} className="company-links" to="/company-details">{developer}</Link>
                    </p>
                </div>
                <section className="review-content">
                    <ul className='games-list-items'>
                        <li className="games">
                            <h3 className="game-header">{gamename}</h3>
                            <p className="description">{description}</p>
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