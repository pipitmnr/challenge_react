import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class TopArticle extends Component{
    render(){
        const listArticle = ['#1', '#2', '#3', '#4', '#5'];
        const topArticleList = listArticle.map((listArticle) =>
            (
                <div className="top-article-list">
                    <a href="index.html" className="top-article-list-isi">
                        <span>
                            {"_"}
                            {listArticle}
                            {"_"}
                        </span>
                        <br></br>
                        Gabung Alterra Academy
                    </a>
                </div>
            )
        );
        return (
            <div>
                <div className="top-article">
                    <div className="top-article-header">
                        <a href="index.html" className="top-article-header-left">
                            BERITA TERKINI
                        </a>
                        
                        <a href="index.html" className="top-article-header-right">
                            lihat semua
                        </a>
                    </div>
                    {topArticleList}
                </div>
            </div>   
        );
    }
}
export default TopArticle;