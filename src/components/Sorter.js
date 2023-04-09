import React, { Component } from 'react';

class Sorter extends Component{
    render() {
        var data = this.props.data
      return (
        <div>
            <h2>Change your list</h2>
            <button
            onClick={function(){
                var list, i, switching, a, shouldSwitch;
                list = data
                switching = true;

                while (switching) {
                    // Start by saying: no switching is done:
                    switching = false;
                    // Loop through all list items:
                    for (i = 0; i < (data.length - 1); i++) {
                    // Start by saying there should be no switching:
                    shouldSwitch = false;
                    /* Check if the next item should
                    switch place with the current item: */
                    if (data[i].importance < data[i+1].importance) {
                        /* If next item is alphabetically lower than current item,
                        mark as a switch and break the loop: */
                        shouldSwitch = true;
                        break;
                    }
                    }
                    if (shouldSwitch) {
                    /* If a switch has been marked, make the switch
                    and mark the switch as done: */
                    a = data[i];
                    data[i]=data[i+1];
                    data[i+1]=a;
                    switching = true;
                    }
                }
                this.props.onSorting(list)
            }.bind(this)}
            
            >Sort in order of importance</button>
        </div>
      );
    }
}

export default Sorter