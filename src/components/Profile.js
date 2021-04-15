import React, { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useHistory } from "react-router-dom"




export default function Dashboard() {
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
        <>
            <div className='form-wrapper'>
                <form className="form">
                    <h2 className="profile">Profile</h2>
                    {error && <alert variant="danger">{error}</alert>}
                     <strong>Email:</strong>
                </form>
            </div>
            <div className="w-100 text-center mt-2">
                <button className="button" type="submit" variant="link" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </>
    )
}