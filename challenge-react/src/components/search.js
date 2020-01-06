import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
class Search extends Component{
    render(){
        return (
            <form className="form-inline active-cyan-4">
                <input className="form-control form-control-sm w-75" type="text" placeholder="Search"
                    aria-label="Search"/>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
            </form>
        );
    }
}
export default Search;