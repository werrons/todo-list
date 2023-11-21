import React, {useState} from "react";

const TodoItem = ({todo, deleteTodo, handleEditTodo, toggle}) => {
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(todo.title)


    const handleEdit = () => {
        if (!edit) {
            setEdit(!edit)
        } else {
            const newData = {...todo, title: editTitle}
            handleEditTodo(newData)
            setEdit(false)
        }
    }

    const handleCheck = (e) => {
        const newData = {...todo, completed: e.target.checked}
        toggle(newData)
    }
    return (
        <div className={'todo-container'}>
            {
                edit ? <input type="text" defaultValue={todo.title} onChange={((e) => setEditTitle(e.target.value))}/> :
                    <h3>{todo.title}</h3>
            }
            <input type="checkbox" onChange={handleCheck} checked={todo.completed}/>
            <button onClick={handleEdit}>
                {edit ? "Save" : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path>
                </svg>}
            </button>
            <button className={'btn'} onClick={() => deleteTodo(todo.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                </svg>
            </button>
        </div>
    )
}
export default TodoItem