import Content from './CompanyDetails/Company'
// import GetOneContent from './GetOneReview/GetOneReview'
import { Switch, Route } from 'react-router-dom'
import { Component } from 'react';
import * as Service from '../../Services/ComapnyInformation'
import style from './Dashboard.style.css'
// import Profile from '../Profile'
import { IsAuthenticated } from "../Header/Header";
// import backgorundImg from '../../resources/Johny.jpg'
import {getOne} from '../../Services/ComapnyInformation'


class MainContent extends Component {
    constructor(props) {
        super(props)
    

        this.state = {
            company: [],
            getOne: [],
        }
    }

    

    componentDidMount() {
        Service.getAllInformation()
            .then(res => Object.values(res))
            .then(res => this.setState({company: res}))
            .then(res => console.log(this.state.company))
            .catch(error => console.log(error))

           
            
    }

   


    render() {
        
        return (
            <div className="main-content">
                
                {this.state.company.map(x =>
                    <Content key={x.dev} name={x.game}
                        {...x} />
                      
                )}
                
                {/* {this.state.getOne.map(x => {
                    <GetOneContent key={x.dev} name={x.game} {...x} />
                })} */}
                
            </div>
        );

    }


}

export default MainContent;