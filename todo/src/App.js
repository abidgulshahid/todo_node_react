import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from 'react';
import TodoList from "./component/get_todo_list"
import AddTodo from "./component/add_todo"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
              href="#home">SIMPLE TODO</Navbar.Brand>
        </Container>
      </Navbar><br></br>
        <br></br><br></br>
        <Container >
        <Row>
            <Col >

        <AddTodo/>
        <TodoList />
            </Col>
        </Row>
        </Container>


    </div>
  );
}

export default App;