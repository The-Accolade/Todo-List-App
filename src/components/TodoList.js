import React, { Component } from 'react';
import TodoItem from './TodoItem';
    
class TodoList extends Component {
  render() {
    const { items, clearList, deleteItem, editItem } = this.props; 
    return(
      <div> 
        <ul className="list-group my-5"> 
          {
            items.map(item => <TodoItem 
              key={item.id} 
              title={item.title}
              deleteItem={()=> deleteItem(item.id)}
              editItem={()=> editItem(item.id)}
              />)
          }
           
        </ul>
        <button 
          className="btn btn-danger btn-block mt-3"
          onClick={ clearList }
          > 
          Clear List
           </button>
       </div>
    );
  }
}

export default TodoList;


