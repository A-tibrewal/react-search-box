import React, { Component } from 'react'

class Card extends Component {
 constructor(){
   super();  
   this.state = {};   
 }

 componentDidUpdate(){
     if( this.props.selected){
        this.currentDiv.scrollIntoView();
     }
 }


 render(){
     let { address, selected } = this.props;
    //  console.log( this );
     return(
        <div className={ "card" + (selected ? " selected" : "") } tabIndex="1" ref={ref => this.currentDiv = ref} >
            <div className="card__id" >{address.id }</div>
            <div className="card__name" >{address.name }</div>
            <div className="card__address" >{address.address }</div>
            <div className="card__pincode" >{address.pincode }</div>
        </div>
     );
 }
}

export default Card;