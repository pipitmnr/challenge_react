import React, { Component } from "react";
import axios from "axios";
import ListArticle from "../components/list-article"

const apiKey = "448feafa267b4bf4babf102fe746d08b"
const baseUrl = "https://newsapi.org/v2/top-headlines"
const country = "id"
const urlHeadline = baseUrl + "?country=" + country + "&apiKey=" + apiKey;

class ListArticleData extends Component{
    state = {
        listListArticle: [],
        isLoading: true ,
        category: 'sport'
    };
    componentDidMount = () => {
        const self = this;
        axios
            .get(urlHeadline)
            .then(function(response){
                self.setState({listListArticle: response.data.articles, isLoading: false});
            })
            .catch(function(error){
                self.setState({isLoading: false});
            });
    };
    render(){
        const {listListArticle, isLoading} = this.state;
        const topHeadlines = listListArticle.filter(item => {
            if(item.content !== null && item.urlToImage !== null){
                return item;
            }
            return false;
        });
        const headlineNews = topHeadlines.map((item, key) => {
            return(
                <ListArticle
                    key = {key}
                    title = {item.title}
                    img = {item.urlToImage}
                    description = {item.description}
                    url = {item.url}
                    published = {item.publishedAt}
                />
            );
        });
        return(
            <div className="headlineNews">
                {isLoading ? <div style={{ textAlign: "center" }}>Loading...</div> : headlineNews}
            </div>
        );
    }
}
export default ListArticleData;