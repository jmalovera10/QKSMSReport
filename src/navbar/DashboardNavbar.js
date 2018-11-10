import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem, Glyphicon} from "react-bootstrap";

export default class DashboardNavbar extends Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand onClick={this.props.goToHome}>
                        <div className="brand">
                            Telegram Analysis
                        </div>
                        <div>
                            <Glyphicon glyph="send"/>
                        </div>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} onClick={this.props.goToEvConn}>
                        <Glyphicon glyph="globe" bsClass="glyphicon"/>
                        <div>
                            Ev. Connectivity
                        </div>
                    </NavItem>
                    <NavItem eventKey={2} onClick={this.props.goToPerformance}>
                        <Glyphicon glyph="dashboard" bsClass="glyphicon"/>
                        <div>
                            Performance
                        </div>
                    </NavItem>
                    <NavItem eventKey={3} onClick={this.props.goToSecurity}>
                        <Glyphicon glyph="lock" bsClass="glyphicon"/>
                        <div>
                            Security
                        </div>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

DashboardNavbar.propTypes = {
    goToHome: PropTypes.func.isRequired,
    goToEvConn: PropTypes.func.isRequired,
    goToPerformance: PropTypes.func.isRequired,
    goToSecurity: PropTypes.func.isRequired
};