import React, { Component } from 'react';
import Card from './Card';
import ReactDOM from 'react-dom';

class Searchbox extends Component {
 constructor(){
   super();
   this.state = {
    suggestions: [],
    selectedSuggestionIndex : -1
   }
 }

 getJson(){
  return [
    {
      "id": "123-s2-546",
      "name": "John Jacobs",
      "items": ["bucket", "bottle"],
      "address": "1st Cross, 9th Main, abc Apartment",
      "pincode": "5xx012"
    },
    {
      "id": "123-s3-146",
      "name": "David Mire",
      "items": ["Bedroom Set"],
      "address": "2nd Cross, BTI Apartment",
      "pincode": "4xx012"
    },
    {
      "id": "223-a1-234",
      "name": "Soloman Marshall",
      "items": ["bottle"],
      "address": "Riverbed Apartment",
      "pincode": "4xx032"
    },
    {
      "id": "121-s2-111",
      "name": "Ricky Beno",
      "items": ["Mobile Set"],
      "address": "Sunshine City",
      "pincode": "5xx072"
    },
    {
      "id": "123-p2-246",
      "name": "Sikander Singh",
      "items": ["Air Conditioner"],
      "address": "Riverbed Apartment",
      "pincode": "4xx032"
    },
    {
      "id": "b23-s2-321",
      "name": "Ross Wheeler",
      "items": ["Mobile"],
      "address": "1st Cross, 9th Main, abc Apartement",
      "pincode": "5xx012"
    },
    {
      "id": "113-n2-563",
      "name": "Ben Bish",
      "items": ["Kitchen Set", "Chair"],
      "address": "Sunshine City",
      "pincode": "5xx072"
    },
    {
      "id": "323-s2-112",
      "name": "John Michael",
      "items": ["Refrigerator"],
      "address": "1st Cross, 9th Main, abc Apartement",
      "pincode": "5xx012"
    },
    {
      "id": "abc-34-122",
      "name": "Jason Jordan",
      "items": ["Mobile"],
      "address": "Riverbed Apartment",
      "pincode": "4xx032"
    }
  ]
 }

 searchAddress(){
    let query = this.state.query;
    let all_addresses = this.getJson();
    var filtered = all_addresses.filter(function (el) {
      return el.id.containsString( query ) ||
             el.name.containsString( query )||
             el.address.containsString( query ) ||
             el.pincode.containsString( query );
    });
    this.setState({ 
      suggestions: filtered
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
   }
  if( selected > -1 ){
    this.setState({
      selectedSuggestionIndex: selected
    });
  }
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
      that.searchAddress();
   })

 }

 render() {
   let { selectedSuggestionIndex, suggestions, query } = this.state;
   const suggestionsList = suggestions.map((item, index) => 
                         <Card query = {query} focusSearchBox={this.focusSearchBox.bind(this)} 
                         setSuggestionIndex={ this.setSuggestionIndex.bind(this) } 
                         index={index} key={item.id} 
                         address={item} 
                         selected={ selectedSuggestionIndex === index }/> 
                        );
    const noSuggestions = (<div> No results Found </div>)
    
    const suggestionsWrapper = query && suggestions.length ? suggestionsList : ( query ? noSuggestions : null );                  
   return (
     <div className="form-wrapper">
        <div className="form">
        <input className="field"
          tabIndex="1"
          id="input-search-field"
          placeholder="Search users by id, name and address"
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