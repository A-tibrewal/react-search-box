import React, { Component } from 'react'

class ItemFound extends Component {
 constructor(){
   super();  
   this.state = {};   
 }

 render(){ 
    let { query, items} = this.props;
    let message;
    if( items.length && (items.containsString(query) )){
       message = <div className="item-found"><span class="list-dot"></span>{`"${query}" found in items`}</div>;
    } else {
        message = ``;
    }
    
    return (
        <div>
            {message}
        </div>
    ) 
 }
}

export default ItemFound;

