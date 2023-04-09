import React, { Component } from 'react';

class Subject extends Component{
    render() {
      console.log('Subject rendered')
      return (
        <header> 
          <h1 a href="/" onClick = {function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>
            {this.props.title}
          </h1>
        </header>
      );
    }
}

export default Subject