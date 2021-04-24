import {Link} from 'react-router-dom'
import {getOne} from '../../../Services/ComapnyInformation'
import  * as Service from '../../../Services/ComapnyInformation'
import { useState } from 'react'



function GetOneReview({
    story,
    gameplay,
    dev,
    game,
    rev
}) {

   
    


    return (
        <section className="get-one-wrapper">
            <section className="get-one-review">
                <div className="get-one-company-logo">
                    <p className="get-one-company-logo-wrapper">
                        <Link onClick={getOne}  className="company-links" to="/get-one-review">{dev}</Link>
                    </p>
                </div>
                <section className="get-one-review-content">
                    <ul className='get-one-games-list-items'>
                        <li className="get-one-games">
                            <h3 className="get-one-game-header">{game}</h3>
                            <p className="get-one-description">{rev}</p>
                        </li>
                    </ul>
                </section>
                <section className="get-one-review-content">
                    <ul className='get-one-games-list-items'>
                        <li className="get-one-games">
                            <section className="get-one-review-content">
                                <h3 className="get-one-reveiw-headers">Story</h3>
                                <p>{story}</p>
                            </section>
                        </li>
                        <li className="get-one-games">
                            <section className="get-one-review-content">
                                <h3 className="get-one-reveiw-headers">Gameplay</h3>
                                <p>{gameplay}</p>
                            </section></li>
                    </ul>
                </section>
            </section>
        </section>
    );
}

export default GetOneReview;