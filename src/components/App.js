import React, { Profiler } from "react"
import Signup from "./Header/NavLinks/Register/Register"
import { AuthProvider } from "../context/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "../components/Dashboard/Dashboard"
import Login from "../components/Header/NavLinks/LogIn/LogIn"
import PrivateRoute from "./PrivateRoute"
import Header from './Header/Header'
import About from './Header/NavLinks/About/About'
import Profile from './Profile'
import appStyle from './App.style.css'
import SingleGame from "./SignleGame/SingleGame"
import AddReview from './PrivetComponents/AddingReview/AddingGame'
import AddingGame from "./PrivetComponents/AddingReview/AddingGame"
import GetOne from '../components/Dashboard/GetOneReview/GetOneReview'

// import ForgotPassword from "./ForgotPassword"
// import UpdateProfile from "./UpdateProfile"

function App() {
    return (
        <div className="app">
            <Router>
                <AuthProvider>
                    <Header >
                        {/* <Profile></Profile> */}
                    </Header>
                    <Switch>
                        <Route path="/get-one-review" component={GetOne} />
                        <Route path="/adding-game" component={AddingGame} />
                        <Route path="/about" component={About} />
                        <PrivateRoute exact path="/" component={Dashboard} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/company-details:description" component={SingleGame} />
                    </Switch>
                </AuthProvider>
            </Router>
        </div>
    )
}

export default App