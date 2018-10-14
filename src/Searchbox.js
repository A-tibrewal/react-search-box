import React, { Component } from 'react';
import Card from './Card';

class Searchbox extends Component {
 constructor(){
   super();
   this.state = {
    suggestions: []
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

 handleKeyPress(event){
   if( event.keyCode == 40){
     console.log('go down');
   } else {
     console.log(' go up');
   }
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
   let suggestions = this.state.suggestions;
   const suggestionsList = suggestions.map((item, index) => <Card key={item.id} address={item} /> );

   return (
     <div className="form-wrapper">
        <div className="form">
        <input className="field"
          tabindex="1"
          placeholder="Search users by id, name and address"
          ref={input => this.search = input}
          onKeyDown={ this.handleKeyPress.bind(this)} 
          onChange={this.handleInputChange.bind(this)}
        />
        <div id="all-suggestions">
          { suggestionsList }
        </div>
       </div>
     </div>
   )
 }
}

export default Searchbox;