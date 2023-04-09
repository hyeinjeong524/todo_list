import './App.css';
import React, { Component } from 'react';
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import CreateContent from './components/CreateContent';
import Sorter from './components/Sorter';


class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id=1;
    this.state = {
      subject:{title:'Your To-do List'},
      contents:[
        {id:1, title:'Example', importance:5, desc:"Here's an example to-do", due:"03/14"},
        
      ]
    }
  }

  render(){
    return (
      <div className = "App">
        <Subject title={this.state.subject.title}>
        </Subject>

        <CreateContent onSubmit={function(_title, _importance, _desc,_due){
      //add content using .setState({})
      this.max_content_id = this.max_content_id+1;

      var _contents = this.state.contents.concat(
        {id:this.max_content_id, importance: _importance, title:_title, desc:_desc, due:_due}
      )
        this.setState({
        contents: _contents
      })
    }.bind(this)}></CreateContent>

        <Sorter data={this.state.contents}
        onSorting={function(data){
          this.setState({
            contents: data
          })
        }.bind(this)}></Sorter>
        
        <TOC data={this.state.contents}></TOC>        
        
      </div>
    )
  }
}

export default App;