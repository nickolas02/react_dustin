import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert'
import Carousel from 'react-bootstrap/Carousel'
import HeroCarousel from 'react-hero-carousel'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">


    <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">RoClans</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Forts</Nav.Link>
          <Nav.Link href="#pricing">Resources</Nav.Link>
          <NavDropdown title="Community" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Clan Discords</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Clan Media</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Forums</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Sign-In
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

      <>




</>

export default () => (
  <HeroCarousel>
    <img
      src="https://pbs.twimg.com/media/Dwb-8XVU8AA7qHE.jpg"
      width="100%"
      height="100%"
    />
    <img
      src="https://cdn.discordapp.com/attachments/492654601984671755/849610152737767434/UURRRAAAA.png"
      width="100%"
      height="100%"
    />
    <img
      src="https://t4.rbxcdn.com/94d289ce2442c3f325d402e894277940"
      width="100%"
      height="100%"
    />
  </HeroCarousel>


    </div>
  );
}

export default App;
