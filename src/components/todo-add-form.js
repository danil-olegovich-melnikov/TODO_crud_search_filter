import React from "react";
import "./todo-add-form.css";

function TodoAddForm(props) {
    let reset = () => {
        props.setNewValue("")
        props.setNewValueImportant(false)
    }
    let addTodo = () => {
        reset()
        props.setTodoDataID(props.todoDataID + 1)
        props.setTodoData([...props.todoData, {
            id: props.todoDataID,
            label: props.newValue,
            important: props.newValueImportant,
            done: false
        }])
    }

    return (<div className="my-4 todo-add">
        <h3 className="text-center">Add todo</h3>
        <div className="my-3">
            <div className="row todo-add-form">
                <div className="col-9">
                    <input
                        className="form-control"
                        placeholder="Name todo..."
                        value={props.newValue}
                        onChange={e => props.setNewValue(e.target.value)}/>
                </div>
                <div className="col-3 text-end">
                    <button
                        className={"btn btn-sm " + (props.newValueImportant ? 'btn-warning' : 'btn-outline-warning')}
                        onClick={() => props.setNewValueImportant(!props.newValueImportant)}>
                        ❗
                    </button>
                    <button className="btn btn-outline-danger btn-sm"
                            onClick={reset}>
                        X
                    </button>
                </div>
            </div>
        </div>
        <div className="text-end">
            <button className="btn btn-info" disabled={!props.newValue} onClick={addTodo}>Добавить</button>
        </div>
    </div>)
}

export default TodoAddForm

