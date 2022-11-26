import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Route } from "react-router-dom";
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import {add_todo,get_todo} from "./utils/server"
import ProductList from "./component/get_todo_list"


function App() {
//    const [products, setProduct] = React.useState([]);
    const [text_area, setTextArea] = React.useState('');

    React.useEffect(() => {
        get_todo();
        }, []);

//    const getTodo = async => {
//        const response = get_todo()
//        setProduct(response.data)
//        return response.data
//
//    }
    const handleText = (event) => {
        setTextArea(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var insert_todo = []
        const todo_input  = text_area


        try {
            const data =  add_todo({task_name:todo_input})
            insert_todo = todo_input
            insert_todo.push(data)
            console.log(insert_todo)
            this.setState({todo_input:""})
        }
        catch (e) {
            console.log(e)
        }
    };

  return (
    <div className="App">
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
              href="#home">SIMPLE TODO</Navbar.Brand>
        </Container>
      </Navbar>
        <Form onSubmit={handleSubmit}>
            <Form.Label htmlFor="todo">Enter Your Todo</Form.Label>
            <Form.Control
                type="text"
                id="text"
                aria-describedby="passwordHelpBlock"
                placeholder="Enter Your Todo"
                value={text_area}
                onChange={handleText}
            />
            <br></br>
        <Button variant="danger" type="submit">
        Save
        </Button>
        </Form>


                <ProductList />

    </div>
  );
}

export default App;