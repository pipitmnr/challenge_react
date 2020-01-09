import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

const Profile = props => {
    const is_login = this.props.is_login;
    const email = this.props.email;
    const full_name = this.props.full_name;
    const api_key = this.props.api_key;

    if (is_login !== true) {
        return <Redirect to={{ pathname: "/login" }} />;
    }
    else{
        return (
            <div>
                <div className="container">
                    <div className="margin-atas">
                    </div>
                    <div className="margin-atas">
                    </div>
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">
                            <h2 className="text-center">Profil</h2>
                            Email : {email}
                            <br></br>
                            Fullname : {full_name}
                            <br></br>
                            Api Key : {api_key}
                            <button className="btn btn-primary btn-block"><Link to="/">Home</Link></button>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}
export default connect(
    "username, password, isLoading, api_key, is_login, full_name, email",
    actions
)(withRouter(Profile));