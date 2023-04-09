import React, { Component } from 'react';

class TOC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;

      while (i<data.length){
        lists.push(
        <div>
            <b>Title:</b> {data[i].title}<br></br>
            <b>Importance:</b> {data[i].importance}<br></br>
            <b>Content:</b> {data[i].desc}<br></br>
            <b>Due:</b> {data[i].due} <br></br><br></br>
        </div>

             )
        i=i+1;
      }
      
      return(
        <div>
          <h2>
            Current To-do Items:
          </h2>
            {lists}
        </div>
        
      )
    }
}


export default TOC;