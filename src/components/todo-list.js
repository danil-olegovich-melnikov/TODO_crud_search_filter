import React from "react";
import TodoListItem from "./todo-list-item";
import './todo-list.css';


const TodoList = ({todos, setTodoData}) => {
    const elements = todos.map((item) => {
        return (
            <li key = {item.id} className="list-group-item">
                <TodoListItem item={item} todos={todos} setTodoData={setTodoData} />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list>">
            {elements}
        </ul>
    );
};

export default TodoList