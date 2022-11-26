import {useState} from 'react'
import {add_todo,get_todo} from "../utils/server"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

const AddTodo = () => {
    const [create_todo, setTodo] = useState([]);
    const [todo_description, setTodoDescription] = useState([]);

    const handleText = (event) => {
        setTodo(event.target.value);
    };

    const handledescriptionn = (event) => {
        setTodoDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        try {
           add_todo({task_name:create_todo,task_description:todo_description})
            get_todo()
        }
        catch (e) {
            console.log(e)
        }
    };
    return (
            <div>

                <Form onSubmit={handleSubmit}>
                    <Form.Label htmlFor="todo">Enter Your Todo</Form.Label>
                    <Form.Control
                        type="text"
                        id="text"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Enter Your Todo"
                        value={create_todo}
                        onChange={handleText}
                    />
                    <br></br>
                    <Form.Label htmlFor="todo">Enter Your Todo  Description</Form.Label>

                    <Form.Control
                        type="text"
                        id="text"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Enter Your Todo Description"
                        value={todo_description}
                        onChange={handledescriptionn}
                    />
                    <br></br>

                        <Button variant="success"size="lg" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
            )
}

export default AddTodo