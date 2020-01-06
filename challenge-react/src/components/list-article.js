import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class ListArticle extends Component{
    render(){
        return (
            <div>
                <div className="list-article">
                    <div className="list-article-img">
                        <img src={require('../assets/img/news.jpg')} alt=""/>
                    </div>
                    <div className="list-article-title">
                        <h3>
                            Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar Kerajaan
                        </h3>
                    </div>
                    <div className="list-article-description">
                        <p>
                            Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upacara tradisional Jepang.
                        </p>
                    </div>
                    <div className="list-article-publisher">
                        Last updated 3 hours ago
                    </div>
                    <div className="row action-list">
                        <div className="col-md-4 action">
                            <a href="index.html">
                                <i class="fa fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-md-4 action">
                            <a href="index.html">
                                <i class="fa fa-share-alt"></i>
                            </a>
                        </div>
                        <div className="col-md-4 action">
                            <a href="index.html">
                                <i class="fa fa-thumbs-down"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}
export default ListArticle;