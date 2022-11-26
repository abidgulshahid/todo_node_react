import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className="App">
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SIMPLE TODO</Navbar.Brand>
        </Container>
      </Navbar>
        <Form>
            <Form.Label htmlFor="todo">Enter Your Todo</Form.Label>
            <Form.Control
                type="text"
                id="text"
                aria-describedby="passwordHelpBlock"
            />
        </Form>
    </div>
  );
}

export default App;