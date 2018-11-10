import React, {Component} from 'react';
import DashboardNavbar from './navbar/DashboardNavbar';

import './App.css';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            position : "home"
        };

        this.goToHome = this.goToHome.bind(this);
        this.goToEvConn = this.goToEvConn.bind(this);
        this.goToPerformance = this.goToPerformance.bind(this);
        this.goToSecurity = this.goToSecurity.bind(this);
    }

    goToHome(){
        this.setState({position : "home"});
    }

    goToEvConn(){
        this.setState({position : "ev-conn"});
    }

    goToPerformance(){
        this.setState({position : "performance"});
    }

    goToSecurity(){
        this.setState({position : "security"});
    }

    render() {
        return (
            <div className="App">
                <DashboardNavbar goToHome={this.goToHome} goToEvConn={this.goToEvConn}
                                 goToPerformance={this.goToPerformance} goToSecurity={this.goToSecurity}/>
            </div>
        );
    }
}

export default App;
