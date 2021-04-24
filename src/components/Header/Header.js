import style from './Header.style.css'
import { Link, NavLink } from 'react-router-dom'
import React, { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useHistory } from "react-router-dom"



function Header({
    emailRef,
    handleSumbit,
    setCurrentUser
}) {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()


    async function handleLogout() {
        setError("")
        console.log('Loging out')
        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }
    return (
        <div className="header-wrapper">
            <div className="logo-wrapper">
            {currentUser.email ? (<p className="logo-link"><NavLink to="/">LOGO</NavLink>
                </p>) : (<p className="logo-link"><NavLink to="/login">LOGO</NavLink>
                </p>)}
            </div>
            <ul className="ul-list-items">
                <li className="link-items">
                    <NavLink to="/about">About</NavLink>
                </li>
                {currentUser.email ? (<li className="link-items">
                    <NavLink to="/adding-game">Add game review</NavLink>
                </li>) : ('')}
                
                {!currentUser.email ? (<li className="link-items">
                    <NavLink to="/signup">Register</NavLink>
                </li>) : ('')}
                {!currentUser.email ? (<li className="link-items">
                    <NavLink to="/login">Log in</NavLink>
                </li>) : ('')}

                <li className="link-items">
                    Welcome, {currentUser.email ? (<div>{currentUser.email}</div>) : (<div>Guest</div>)}
                </li>
                {currentUser.email ? (
                    <li className="link-items">
                        <Link type="submit" onClick={handleLogout}  >Log out</Link>
                    </li>) : ('')}




            </ul>
        </div>
    );

}

export default Header;