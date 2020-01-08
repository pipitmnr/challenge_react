import React, { Component } from "react";
import ListArticle from "../components/list-article"
class ListArticleData extends Component{
    render(){
        const {listListArticle, isLoading} = this.props;
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