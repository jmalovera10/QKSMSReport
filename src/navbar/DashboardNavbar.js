import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem, Glyphicon} from "react-bootstrap";

export default class DashboardNavbar extends Component{

    render(){
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand onClick={this.props.goToHome}>
                        <a>React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} onClick={this.props.goToEvConn}>
                        <Glyphicon glyph=""/>
                        Ev. Connectivity
                    </NavItem>
                    <NavItem eventKey={2} onClick={this.props.goToPerformance}>
                        Performance
                    </NavItem>
                    <NavItem eventKey={3} onClick={this.props.goToSecurity}>
                        Security
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

DashboardNavbar.propTypes={
    goToHome : PropTypes.func.isRequired,
    goToEvConn : PropTypes.func.isRequired,
    goToPerformance : PropTypes.func.isRequired,
    goToSecurity : PropTypes.func.isRequired
};