import React, { Component } from 'react';
import Card from './Card';
import ReactDOM from 'react-dom';
const json = require('./data.json');

class Searchbox extends Component {
 constructor(){
   super();
   this.state = {
    suggestions: [],
    selectedSuggestionIndex : -1
   }
 }



getAllUsers( url, callback ){
   fetch(url).then(
     function( response ){
       return response.json()
     }
   ).then( function( json ){
     callback( json );
   })
 } 

 

 searchUsers(){
    let query = this.state.query;
    let all_addresses = [];
    let filtered = [];
    let that = this;
    this.getAllUsers( 'https://4bc526dc-50c9-4d6c-898d-6274ae8931a1.mock.pstmn.io/all-users.json', function(json){
      all_addresses = json.all_data;
      filtered = json.all_data.filter(function (el) {
      return el.id.containsString( query ) ||
               el.name.containsString( query )||
               el.items.containsString( query ) ||
               el.address.containsString( query ) ||
               el.pincode.containsString( query );
      });
      that.setState({ 
        suggestions: filtered
      })
 })
}


 focusSearchBox(){
  ReactDOM.findDOMNode(this.search).focus();
 }

 handleKeyDown(event){
   let selected, length = this.state.suggestions.length;
   if( !length ){
     return;
   }
   if( event.keyCode == 40 ){
      event.preventDefault();
      selected = (this.state.selectedSuggestionIndex + 1) % length;
   } else if( event.keyCode == 38 ) {
      event.preventDefault();
      if( this.state.selectedSuggestionIndex == -1 ||  this.state.selectedSuggestionIndex == 0 ){
        selected = length - 1;
      } else {
        selected = (  this.state.selectedSuggestionIndex - 1 ) % length;
      }
   } else {
     selected = -1;
   }
   this.setState({
      selectedSuggestionIndex: selected
   });
 }

  setSuggestionIndex( index ){
    this.setState({
      selectedSuggestionIndex: index
    });
  }


 handleInputChange(){
   var that = this;
   this.setState({
     query: this.search.value
   }, () => {
      that.searchUsers();
   })

 }

 render() {
   let { selectedSuggestionIndex, suggestions, query } = this.state;
   const suggestionsList = suggestions.map((item, index) => 
                         <Card query = {query} focusSearchBox={this.focusSearchBox.bind(this)} 
                         setSuggestionIndex={ this.setSuggestionIndex.bind(this) } 
                         index={index} key={item.id} 
                         user={item} 
                         selected={ selectedSuggestionIndex === index }/> 
                        );
    const noSuggestions = (<div className="no-user-card"> No User Found </div>)
    
    const suggestionsWrapper = query && suggestions.length ? suggestionsList : ( query ? noSuggestions : null );                  
   return (
     <div className="form-wrapper">
        <div className="form">
        <input className="field"
          tabIndex="1"
          id="input-search-field"
          placeholder="Search users by Id, name and address"
          ref={input => this.search = input}
          onKeyDown={ this.handleKeyDown.bind(this)} 
          onChange={this.handleInputChange.bind(this)}
        />
        <div id="all-suggestions">
          { suggestionsWrapper }
        </div>
       </div>
     </div>
   )
 }
}

export default Searchbox;