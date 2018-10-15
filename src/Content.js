import React, { Component } from 'react'

class Content extends Component {
 constructor(){
   super();  
   this.state = {};   
 }


 render(){
     let { content } = this.props;
     return (
         <div>
             { content }
        </div>
     )
    }
}

export default Content;