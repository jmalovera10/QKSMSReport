import React, {Component} from 'react';
import DashboardNavbar from './navbar/DashboardNavbar';
import Home from "./home/Home";
import EventualConnectivity from "./ev-conn/EventualConnectivity";
import Storage from "./storage/Storage";
import Performance from "./performance/Performance";
import Security from "./security/Security";
import Others from "./others/Others";


import './App.css';
import Usability from "./usability/Usability";
import Threading from "./threading/Threading";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            position: "home"
        };

        this.goToHome = this.goToHome.bind(this);
        this.goToEvConn = this.goToEvConn.bind(this);
        this.goToStorage = this.goToStorage.bind(this);
        this.goToPerformance = this.goToPerformance.bind(this);
        this.goToSecurity = this.goToSecurity.bind(this);
        this.goToUsability = this.goToUsability.bind(this);
        this.goToOther = this.goToOther.bind(this);
        this.goToThreading = this.goToThreading.bind(this);
    }

    goToThreading(){
        this.setState({position:"threading"});
    }

    goToHome() {
        this.setState({position: "home"});
    }

    goToEvConn() {
        this.setState({position: "ev-conn"});
    }

    goToStorage() {
        this.setState({position: "storage"});
    }

    goToPerformance() {
        this.setState({position: "performance"});
    }

    goToSecurity() {
        this.setState({position: "security"});
    }

    goToUsability() {
        this.setState({position: "usability"});
    }

    goToOther() {
        this.setState({position: "other"});
    }

    render() {
        return (
            <div className="App">
                <DashboardNavbar goToHome={this.goToHome} goToEvConn={this.goToEvConn} goToStorage={this.goToStorage}
                                 goToPerformance={this.goToPerformance} goToSecurity={this.goToSecurity}
                                 goToUsability={this.goToUsability} goToOther={this.goToOther}
                                 goToThreading={this.goToThreading}
                />
                {
                    this.state.position === "home" ?
                        <Home/>
                        : this.state.position === "ev-conn" ?
                        <EventualConnectivity/>
                        : this.state.position === "storage" ?
                            <Storage/>
                            : this.state.position === "performance" ?
                                <Performance/>
                                : this.state.position === "security" ?
                                    <Security/>
                                    : this.state.position === "usability" ?
                                        <Usability/>
                                        : this.state.position === "other" ?
                                            <Others/>
                                            : this.state.position === "threading" ?
                                            <Threading/>
                                            : null
                }
            </div>
        );
    }
}

export default App;
