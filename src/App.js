import {useState} from "react";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";
import TodoAddForm from "./components/todo-add-form";
import TodoUpdateForm from "./components/todo-update-form";


let todoDataDB = [
    {id: 1, label: 'Clean Teeth', important: false, done: false},
    {id: 2, label: 'Buy food', important: true, done: false},
    {id: 3, label: 'Buy charger', important: false, done: true},
    {id: 4, label: 'Clean room', important: false, done: false},
];


const App = () => {
    const [searchValue, setSearchValue] = useState("");
    const [newValueText, setNewValueText] = useState("");
    const [newValueImportant, setNewValueImportant] = useState("");
    const [filterValue, setFilterValue] = useState("");
    const [todoData, setTodoData] = useState(todoDataDB);
    const [todoDataID, setTodoDataID] = useState(todoDataDB);

    const todoDataFiltered = todoData.filter(todo => {
        return (!searchValue || todo.label.toLowerCase().includes(searchValue.toLowerCase())) &&
            (filterValue === '' || todo.done === filterValue)
    })


    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel">
                <SearchPanel searchValue={searchValue} setSearchValue={setSearchValue}/>
                <TodoList todos={todoDataFiltered} setTodoData={setTodoData}/>
                <TodoAddForm newValue={newValueText} setNewValue={setNewValueText}
                             newValueImportant={newValueImportant} setNewValueImportant={setNewValueImportant}
                             todoData={todoData} setTodoData={setTodoData}
                             todoDataID={todoDataID} setTodoDataID={setTodoDataID}/>
                <TodoUpdateForm todoData={todoData} setTodoData={setTodoData}/>
                <ItemStatusFilter filterValue={filterValue} setFilterValue={setFilterValue}/>
            </div>
        </div>
    )
}


export default App
