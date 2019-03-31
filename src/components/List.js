import React from "react";
import TodoItem from "./TodoItem.js";

class List extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

export default List;
