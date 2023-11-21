import React, {useState} from "react";
import TodoItem from './components/todoitem'

const App = () => {
    const [todos, setTodos] = useState(todosArray)
    const [addTodo, setAddTodo] = useState("")


    const handleAdd = () => {
        setTodos([...todos,
            {
                id: todos.length + 1,
                title: addTodo,
                completed: false


            }
        ])
        setAddTodo('')
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleEditTodo = (data) => {
        setTodos(todos.map(el => el.id === data.id ? data : el))
    }

    const toggle = (data)=>{
        setTodos(todos.map(todo=>(todo.id === data.id ? data : todo)))
    }

    console.log(todos)
    return (

        <div className={'container'}>
            <div className={'card'}>

                <div className={'add-container'}>
                    <input placeholder={'Добавить заметку'}  type="text" value={addTodo} onChange={((e) => setAddTodo(e.target.value))}/>
                    <button onClick={handleAdd}>Add</button>
                </div>
                {
                    todos.map((todo, idx) =>
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            handleEditTodo={handleEditTodo}
                            toggle={toggle}
                        />
                    )
                }

            </div>
        </div>
    )
}

export default App

const todosArray = [
    {
        id: 1,
        title: 'Todo 1',
        completed: true
    },
    {
        id: 2,
        title: 'Todo 2',
        completed: false
    }
]


