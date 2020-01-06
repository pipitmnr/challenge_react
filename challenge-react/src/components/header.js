import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import Search from './search';
class Header extends Component{
    render(){
        return (
            <header>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet"/>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-2 header-kiri">
                            <a href="index.html" className="header-logo">
                                <img src={require('../assets/img/logo192.png')} alt=""/>
                            </a>
                            <div href="index.html" className="header-logo-text">
                                KabarKabar
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="header-navbar">
                                <ul className="header-navbar-list list-unstyled">
                                    <li><a href="index.html">Sepakbola</a></li>
                                    <li><a href="index.html">Ekonomi</a></li>
                                    <li><a href="index.html">Politik</a></li>
                                    <li><a href="index.html">Hiburan</a></li>
                                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="index.html">Hiburan <span class="caret"></span></a>
                                        <ul class="dropdown-menu">
                                        <li><a href="index.html">Page 1-1</a></li>
                                        <li><a href="index.html">Page 1-2</a></li>
                                        <li><a href="index.html">Page 1-3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Search/>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <ul className="header-navbar-list list-unstyled">
                                    <li><a href="index.html">Masuk</a></li>
                                    <li><a href="index.html">Daftar</a></li>
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