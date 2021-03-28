import React, { Component } from "react";
import API from "../utils/API";
import ResultList from './ResultList'
import axios from "axios"

class SearchResultContainer extends Component {
state = {
    search: "",
    results: []
};

componentDidMount(){
    this.searchAPI()
}


searchAPI() {
    
    axios.get('https://randomuser.me/api/')
        .then(res => this.setState({results: res.data.results[0]})
            
            
            
            // console.log(res.data.results[0])
            
            
            
            
            // this.setState({results: res.data.result}),
        
        
        )
        
            


        
}



render (){
    return (
        <div>
        <ResultList results={this.state.results} />
        </div>
        
        
        )




}






















}

export default SearchResultContainer;