import React, { Component } from 'react'

class Content extends Component {
 constructor(){
   super();  
   this.state = {};   
 }


 render(){
     let { content, query } = this.props;

    // console.log( typeof( content ));
    //  if( query ){
    //     content = content.replace( new RegExp( query, 'gi'), '<span>$&</span>' ); 
    //  }

    
    // all_content = '';
    
    // for(let i = 0; i < content.length; i +  ){
    //     if( content[i] == query ){
    //         all_content = (<span> content[i] <span>)
    //     } else {
    //         all_content = content[i];
    //     }
    // }

    const segregate = function(content){

        if( content.indexOf(query) === -1 ){
            return content;
        } else {
            var startIndex = content.indexOf(query);
            var queryLength = query.length;
            return (<span> {content.substr(0, startIndex)} <span className="highlight">{query}</span>{ content.substr(startIndex + queryLength)}</span>);
        }
    }

   

    return (
         <div >
             { segregate(content)}
        </div>
     )
    }
}

export default Content;