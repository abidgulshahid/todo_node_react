import {useState, useEffect} from 'react'
import {get_todo, delete_todo, update_todo} from "../utils/server"
import Form from 'react-bootstrap/Form';


const TodoList = () => {
    const [todo_list, setTodoList] = useState([]);

    useEffect(() => {
        getTodo();
    }, []);

    const handleChange = (e)  =>{
        let isChecked = e.target.checked;
        return isChecked
    }

    const getTodo = async () => {
        const response = await get_todo()
        setTodoList(response.data);
    }

    const deleteTodo = async (id) => {
        await delete_todo(id)
        return getTodo();
    }

    const updateTodo = async (id,task_status) => {
        await update_todo(id,{task_status})
        return getTodo()
    }


    return (
        <div>
            <table className="table is-striped is-fullwidth">
                <thead>
                <tr>
                    <th>No</th>
                    <th>TODO</th>
                    <th>TODO Description</th>
                    <th>Done</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {todo_list.map((todos, index) => (
                    <tr key={todos._id}>
                        <td>{index + 1}</td>
                        <td>{todos.task_name}</td>
                        <td>{todos.task_description}</td>
                        <td>
                            <Form >
                                <Form.Check
                                    id={todos._id}
                                    checked={todos.task_status}
                                    value={todos.task_status}
                                    onChange={(e) => updateTodo(todos._id,handleChange(e))}
                                />
                            </Form>

                        </td>
                        <td>

                            <button onClick={() => deleteTodo(todos._id)}
                                className="btn btn-danger">Delete
                            </button>

                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}

export default TodoList