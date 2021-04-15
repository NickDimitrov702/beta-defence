import React, { useRef, useState } from "react"
import { useAuth } from "../../../../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import style from './Register.style.css'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        //   return setError("Passwords do not match")
        // }
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <>
            <div>
                <form className="signe-in-for-wrapper" onSubmit={handleSubmit}>
                    <label className="form-header">Create account</label>
                    <label className="lable-item">Enter email</label>
                    <input type="text" id="email" ref={emailRef} required className="email input-items" placeholder="Enter email"></input>
                    <label className="lable-item">Enter password</label>
                    <input type="password" id="password" ref={passwordRef} required className="password input-items" placeholder="Enter password"></input>
                    <button type="submit" disabled={loading} className="submit-button">Sign up</button>
                    <div className="lable-item">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </form>

            </div>

        </>
    )
}