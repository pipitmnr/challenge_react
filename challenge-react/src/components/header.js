import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import Search from './search';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
class Header extends Component{
    handleRouterNav = categoryName => {
        const category = categoryName;
        this.props.history.replace("/news/" + category);
    };
    // postSignout = () => {
    //     localStorage.removeItem("is_login");
    //     this.props.history.push("/login");
    //   };
    render(){
        const is_login = JSON.parse(localStorage.getItem("is_login"));
        if (is_login!==true){
            return (
                <header>
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet"/>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-2 header-kiri">
                                <div className="header-logo">
                                    <Link to="/news">
                                        <img src={require('../assets/img/logo192.png')} alt=""/>
                                    </Link>
                                </div>
                                <div href="index.html" className="header-logo-text">
                                    KabarKabar
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="header-navbar">
                                    <ul className="header-navbar-list list-unstyled">
                                        {/* <li onClick={
                                            this.handleRouterNav("sepakbola")
                                        }><Link to={`/news/sepakbola`}>Sepakbola</Link></li> */}
                                        <li><Link to={`/news/sepakbola`}>Sepakbola</Link></li>
                                        <li><Link to={`/news/ekonomi`}>Ekonomi</Link></li>
                                        <li><Link to={`/news/politik`}>Politik</Link></li>
                                        <li><Link to={`/news/hiburan`}>Hiburan</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                {/* <Search {...this.props} /> */}
                                {/* <Search/> */}
                                <form className="form-inline active-cyan-4">
                                    <input className="form-control form-control-sm w-75" type="text" placeholder="Search"
                                        aria-label="Search" onChange={(e) => this.props.searchNews(e.target.value)}/>
                                        <button type="submit" class="searchButton">
                                            <i class="fa fa-search"></i>
                                        </button>
                                </form>
                            </div>
                            <div className="col-md-2">
                                <div>
                                    <ul className="header-navbar-list list-unstyled">
                                        <li>
                                            <Link to="/login">
                                                Masuk
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            );
        }
        else{
            return (
                <header>
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet"/>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-2 header-kiri">
                                <div className="header-logo">
                                    <Link to="/news">
                                        <img src={require('../assets/img/logo192.png')} alt=""/>
                                    </Link>
                                </div>
                                <div href="index.html" className="header-logo-text">
                                    KabarKabar
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="header-navbar">
                                    <ul className="header-navbar-list list-unstyled">
                                        {/* <li onClick={
                                            this.handleRouterNav("sepakbola")
                                        }><Link to={`/news/sepakbola`}>Sepakbola</Link></li> */}
                                        <li><Link to={`/news/sepakbola`}>Sepakbola</Link></li>
                                        <li><Link to={`/news/ekonomi`}>Ekonomi</Link></li>
                                        <li><Link to={`/news/politik`}>Politik</Link></li>
                                        <li><Link to={`/news/hiburan`}>Hiburan</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                {/* <Search {...this.props} fungsiSearch/> */}
                                <form className="form-inline active-cyan-4">
                                    <input className="form-control form-control-sm w-75" type="text" placeholder="Search"
                                        aria-label="Search" onChange={this.props.doSearch}/>
                                        <button type="submit" class="searchButton">
                                            <i class="fa fa-search"></i>
                                        </button>
                                </form>
                            </div>
                            <div className="col-md-2">
                                <div>
                                    <ul className="header-navbar-list list-unstyled">
                                        <li>
                                            <Link to="/profile" >Profile</Link>
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
}
Search.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};
export default Header;