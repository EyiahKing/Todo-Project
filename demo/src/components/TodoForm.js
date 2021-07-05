import React, {useState} from 'react'

function TodoForm() {
    const [input, setInput] = useState("")
    return (
        <form className="todo-from">
            <input type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input">
            </input>

        </form>
    )
}

export default TodoForm
