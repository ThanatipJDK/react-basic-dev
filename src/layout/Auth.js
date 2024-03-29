import React, { useContext, useEffect } from 'react'
import { Button, Form, FormControl, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import logo from '../logo.svg'
import { Context, actions } from '../store'
function Auth(props) {

    const {value, dispatch} = useContext(Context)
    console.log(value);

    const user = {
        username : 'xxxx',
        logo: logo
    }

    const handleToggle = () => {
        dispatch(actions.ToggleNavbar(!value.navbar.expanded))
      
    }
    useEffect(() => {
       console.log('dismount layout');
    }, [value]);
    // const [expanded, setExpanded] = useState(false)
    return (
        <div>
            <Navbar bg="light" expand="lg" expanded={value.navbar.expanded} onToggle={handleToggle}>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to="/about">About</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to="/users">Users</Link>
                    </Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    <Image src={logo} roundedCircle width="50px" height="50px"/>
                    {/* <Nav.Link >
                        <Link to="/login">Login</Link>
                    </Nav.Link> */}
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            {props.children}
        </div>
    )
}


export default Auth

