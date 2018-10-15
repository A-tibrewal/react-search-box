import React, { Component } from 'react'

class Card extends Component {
 constructor(){
   super();  
   this.state = {};   
 }

 componentDidUpdate(){
     if( this.props.selected){
        this.currentDiv.scrollIntoView({block: 'end', behavior: 'smooth'});
     }
 }


 handleMouseEnter(){
    let { index, setSuggestionIndex, focusSearchBox } = this.props;
    setSuggestionIndex( index );
    focusSearchBox();
 }


 render(){
     let { address, selected } = this.props;
     return(
        <div className={ "card" + (selected ? " selected" : "") } tabIndex="1" ref={ref => this.currentDiv = ref} 
        onMouseMove={ this.handleMouseEnter.bind(this)}>
            <div className="card__id" ><b>{address.id }</b></div>
            <div className="card__name" ><i>{address.name }</i></div>
            <div className="card__address" ><small>{address.address }</small></div>
            <div className="card__pincode" ><small>{address.pincode }</small></div>
        </div>
     );
 }
}

export default Card;