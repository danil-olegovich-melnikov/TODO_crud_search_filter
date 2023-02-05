import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({todos, setTodoData, item}) => {
    const style = {
        color: item.important ? 'steelblue' : 'black',
        textDecoration: item.done ? 'line-through' : 'none'
    };

    return (
        <div className="todo-list-item d-flex">
          <span
              className="todo-list-item-label"
              style={style}>
            {item.label}
          </span>
            <div>
                <button className="btn btn-outline-success btn-sm"
                        onClick={() => setTodoData(
                            todos.map(todo => todo.id === item.id ? {...todo, important: !todo.important} : todo)
                        )}>
                    ✔
                </button>
                <button className="btn btn-outline-warning btn-sm"
                        onClick={() => setTodoData(
                            todos.map(todo => todo.id === item.id ? {...todo, done: !todo.done} : todo)
                        )}>
                    ❗
                </button>
                <button className="btn btn-outline-danger btn-sm"
                        onClick={() => setTodoData(todos.filter(todo => todo.id !== item.id))}>
                    X
                </button>
            </div>
        </div>
    );
}

export default TodoListItem