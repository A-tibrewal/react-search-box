import React, { Component } from 'react'

class Content extends Component {
 constructor(){
   super();  
   this.state = {};   
 }


 render(){
     let { content, query } = this.props;
     if( query ){
        content = content.replace( new RegExp( query, 'gi'), '<highlight>$&</highlight>' ); 
     }
     return (
         <div dangerouslySetInnerHTML={{ __html: content }} >
        </div>
     )
    }
}

export default Content;