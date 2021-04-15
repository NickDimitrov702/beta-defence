import React, { useRef, useState } from "react"
import { useAuth } from "../../../../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import style from './Login.style.css'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <>
            <div>
                <form className="signe-in-for-wrapper" onSubmit={handleSubmit}>
                    <label className="lable-item">Enter email</label>
                    <input type="text" id="email" ref={emailRef} required className="email input-items" placeholder="Enter email"></input>
                    <label className="lable-item">Enter password</label>
                    <input type="password" id="password" ref={passwordRef} required className="password input-items" placeholder="Enter password"></input>
                    <button type="submit" disabled={loading} className="submit-button">Log in</button>
                    <div className="lable-item">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </form>


            </div>
        </>
    )
}