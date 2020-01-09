import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import Header from '../components/header';
import ListArticleData from './list-article-data';
import TopArticleData from './top-article-data';
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
// import Login from "./login";

const baseUrl = "https://newsapi.org/v2/everything";
const apiKey = "448feafa267b4bf4babf102fe746d08b";
const baseUrlTop = "https://newsapi.org/v2/top-headlines"
const country = "id"
const urlHeadline = baseUrlTop + "?country=" + country + "&apiKey=" + apiKey;

class Home extends Component{
    axiosCategory = async() => {
        const category = this.props.match.params.q;
        // const self = this;
        await axios
            .get(`${baseUrl}?q=${category}&apiKey=448feafa267b4bf4babf102fe746d08b`)
            .then(function(response){
                store.setState({listListArticle: response.data.articles, isLoading: false});
            })
            .catch(function(error){
                store.setState({isLoading: false});
            });
    }
    axiosTop = async() => {
        // const self = this;
        await axios
            .get(urlHeadline)
            .then(function(response){
                store.setState({listTopArticle: response.data.articles, isLoading: false});
            })
            .catch(function(error){
                store.setState({isLoading: false});
            });
    }
    componentDidMount = () => {
        this.axiosCategory();
        this.axiosTop();
    };
    render(){
        console.warn("INI DARI HOME", this.props)
        if(this.props.is_login === true) {
            return (
                <div>
                    <Header {...this.props} doSearch={event => this.props.handleInputChange(event)} doCategory={e => this.props.categoryNews(e)}
                        placeholder="ketik sesuatu"/>
                    <div className="container">
                        <div className="margin-atas-lagi">
                        </div>
                        <div className="margin-atas">
                            <div className="row">
                                <div className="col-md-1">
    
                                </div>
                                <div className="col-md-4">
                                    <TopArticleData {...this.props} listTopArticle = {this.props.listTopArticle} isLoading={this.props.isLoading}/>
                                </div>
                                <div className="col-md-7">
                                    <ListArticleData {...this.props} listListArticle = {this.props.listListArticle} isLoading={this.props.isLoading}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            );
        }
        else{
            return <Redirect to={{ pathname: "/login" }} />;
        }
        
    }
}
export default connect(
    "listListArticle, isLoading, listTopArticle, is_login",
    actions
  )(withRouter(Home));