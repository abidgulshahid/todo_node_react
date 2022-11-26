import {useState} from 'react'
import {add_todo,get_todo} from "../utils/server"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

const AddTodo = () => {
    const [create_todo, setTodo] = useState([]);

    const handleText = (event) => {
        setTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
           add_todo({task_name:create_todo})
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
                    <Button variant="danger" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
            )
}

export default AddTodo