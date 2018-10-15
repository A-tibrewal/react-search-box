import React, { Component } from 'react';
import Content from './Content';
import ItemFound from './ItemFound';


class Card extends Component {
 constructor(){
   super();  
   this.state = {};   
 }

 componentDidUpdate(){
     if( this.props.selected){
        this.currentDiv.scrollIntoViewIfNeeded({block: 'end', behavior: 'smooth'});
     }
 }

 handleMouseEnter(){
    let { index, setSuggestionIndex, focusSearchBox } = this.props;
    setSuggestionIndex( index );
    focusSearchBox();
 }

 render(){
     let { user, selected, query } = this.props;
     return(
        <div className={ "card" + (selected ? " selected" : "") } tabIndex="1" ref={ref => this.currentDiv = ref} 
        onMouseMove={ this.handleMouseEnter.bind(this)}>
            <div className="card__id" ><b><Content query={query} content={user.id } /></b></div>
            <div className="card__name" ><i><Content query={query} content={user.name } /></i></div>
            <ItemFound query={query} items={user.items} />
            <div className="card__address" ><small><Content query={query} content={user.address } /></small></div>
            <div className="card__pincode" ><small><Content query={query} content={user.pincode } /></small></div>
        </div>
     );
 }
}

export default Card;