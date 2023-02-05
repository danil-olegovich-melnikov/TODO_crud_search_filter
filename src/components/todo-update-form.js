import {useState} from "react";

function TodoUpdateForm(props) {
    const [optionValue, setOptionValue] = useState(props.todoData[0].id);
    const [updateValue, setUpdateValue] = useState('');

    const change = () => {
        let todo = props.todoData.map(todo => todo.id === parseInt(optionValue) ? {...todo, label: updateValue} : todo)
        props.setTodoData(todo)
    }

    let options = props.todoData.map(todo => <option key={todo.id} value={todo.id}>{todo.label}</option>)
    return (
        <div className="my-4 todo-update">
            <h3 className="text-center">Update todo</h3>
            <div className="my-3">
                <div className="row todo-add-form">
                    <div className="col-12 my-2">
                        <select className="form-control"
                                value={optionValue}
                                onChange={e => setOptionValue(e.target.value)}>
                            {options}
                        </select>
                    </div>
                    <div className="col-9">
                        <input
                            className="form-control"
                            placeholder="Name todo..."
                            value={updateValue}
                            onChange={e => setUpdateValue(e.target.value)}
                        />
                    </div>
                    <div className="col-3 text-end">
                        <button className={"btn btn-sm btn-outline-success"}
                            onClick={change} disabled={!updateValue}>
                            ✔
                        </button>
                        <button className="btn btn-outline-danger btn-sm"
                                onClick={() => {
                                    setUpdateValue("")
                                }}>
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoUpdateForm