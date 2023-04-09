import React, { Component } from 'react';

class CreateContent extends Component{
    render() {
      return (
        <article>
          {/* onSubmit = 미리 약속된거 (submit버튼이 있는 폼이 있으면) */}
            <h2>Enter your to-do items below:</h2>
            <form action="/create_process" method="post"
              onSubmit={function(e){
                e.preventDefault();
                // debugger;
                if(e.target.title.value==="" ||e.target.importance.value==="" ||e.target.due.value==="" ){
                  alert("You're missing a value!")
                }else{
                  this.props.onSubmit(
                    e.target.title.value,
                    e.target.importance.value,
                    e.target.desc.value,
                    e.target.due.value
                  )
                }

              }.bind(this)}
              >
              <p>
                <input type="text" name="title" placeholder="Title"></input>
              </p>
              {/* placeholder = 값이 없을때 디스플레이되는 값 */}

              <select name="importance" onChange={function(e){
                e.preventDefault();
              }}>
              <option value="">Importance</option>
              <option value="1">Importance: 1</option>
              <option value="2">Importance: 2</option>
              <option value="3">Importance: 3</option>
              <option value="4">Importance: 4</option>
              <option value="5">Importance: 5</option>
            </select>
              <p>
                <textarea name="desc" placeholder="Enter what you'll do..."></textarea>
              </p>

              <p>
              <input type="text" name="due" placeholder="Due (mm/dd)"></input>
              </p>
              <p>
                <input type="submit"></input>
              </p>
            </form>
        </article>
        
      );
    }
}

export default CreateContent