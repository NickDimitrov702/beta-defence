import { NavLink } from 'react-router-dom'
import Profile from '../Profile'
import All from '../Profile'
export default function IsAuthenticated() {
    return (
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <p className="logo-link"><NavLink to="/">LOGO</NavLink>
                </p>
            </div>
            <ul className="ul-list-items">
                <li className="link-items">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="link-items">
                    <button className="button" type="submit" variant="link" onClick={All.handleLogout}>Log out</button>
                </li>
                     {/* <Profile/> */}
            </ul>
        </div>


    )

}