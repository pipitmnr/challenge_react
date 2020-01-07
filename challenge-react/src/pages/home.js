import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import Header from '../components/header';
// import TopArticle from '../components/top-article';
// import ListArticle from '../components/list-article';
import ListArticleData from './list-article-data';
import TopArticleData from './top-article-data';

class Home extends Component{
    render(){
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="margin-atas">
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-4">
                                <TopArticleData/>
                            </div>
                            <div className="col-md-7">
                                <ListArticleData/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}
export default Home;