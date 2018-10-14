import React, { Component } from 'react'

class Card extends Component {
 constructor(){
   super();  
   this.state = {};   
 }

 render(){
     let { address, selected } = this.props;
     return(
        <div className={ "card" + (selected ? " selected" : "") } tabIndex="1">
            <div className="card__id" >{address.id }</div>
            <div className="card__name" >{address.name }</div>
            <div className="card__address" >{address.address }</div>
            <div className="card__pincode" >{address.pincode }</div>
        </div>
     );
 }
}

export default Card;