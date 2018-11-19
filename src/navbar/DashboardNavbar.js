import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./DashboardNavbar.css"
import {Glyphicon, Nav, Navbar, NavItem} from "react-bootstrap"

export default class DashboardNavbar extends Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand onClick={this.props.goToHome}>
                        <div className="brand-logo">
                            <img src="qksmsLogo.png" alt=""/>
                        </div>
                        <div className="brand">
                            QKSMS Analysis
                        </div>

                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={0} onClick={this.props.goToUsability}>
                        <Glyphicon glyph="heart" bsClass="glyphicon"/>
                        <div>
                            Usability
                        </div>
                    </NavItem>
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
                    <NavItem eventKey={4} onClick={this.props.goToOther}>
                        <Glyphicon glyph="plus-sign" bsClass="glyphicon"/>
                        <div>
                            Others
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
    goToSecurity: PropTypes.func.isRequired,
    goToOther : PropTypes.func.isRequired
};