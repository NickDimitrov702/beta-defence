import Content from './CompanyDetails/Company'
import { Switch, Route } from 'react-router-dom'
import { Component } from 'react';
import * as Service from '../../Services/ComapnyInformation'
import style from './Dashboard.style.css'
// import Profile from '../Profile'
import { IsAuthenticated } from "../Header/Header";
// import backgorundImg from '../../resources/Johny.jpg'
// import {database} from '../../config/firebase'


class MainContent extends Component {
    constructor(props) {
        super(props)


        this.state = {
            company: []
        }
    }


    componentDidMount() {
        Service.getAllInformation()
            .then(res => Object.values(res))
            .then(res => this.setState({company: res}))
            .catch(error => console.log(error))
    }


    render() {
        console.log(this.state.company)
        return (
            <div className="main-content">
                
                {this.state.company.map(x =>
                    <Content key={x.description} name={x.developer}
                        {...x} />
                      
                )}
                
            </div>
        );

    }


}

export default MainContent;