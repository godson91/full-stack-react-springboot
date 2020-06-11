import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { Link, withRouter } from "react-router-dom";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedin = AuthenticationService.isUserLoggedin();
        console.log(isUserLoggedin)
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://www.linkedin.com/in/cl-abor-jr/" className="navbar-brand">CL Abor jr Linkedin Profile</a></div>
                        <ul className="navbar-nav">
                            {isUserLoggedin && <li><Link className="nav-link" to="/welcome">Home</Link></li>}
                            {isUserLoggedin && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedin && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            {isUserLoggedin && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default withRouter(HeaderComponent)