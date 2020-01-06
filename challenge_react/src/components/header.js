import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
class Header extends Component{
    render(){
        return (
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <a href="index.html" className="header-logo">
                                <img src={require('../assets/img/logo-ALTA.png')} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-9">
                            <div className="header-nav">
                                <ul className="header-nav__list list-unstyled">
                                    <li className="active">
                                        <a href="index.html"><strong>HOME</strong></a>
                                    </li>
                                    <li>
                                        <a href="about.html"><strong>ABOUT</strong></a>
                                    </li>
                                    <li>
                                        <a href="experience.html"><strong>EXPERIENCE</strong></a>
                                    </li>
                                    <li>
                                        <a href="contact.html"><strong>CONTACT</strong></a>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;