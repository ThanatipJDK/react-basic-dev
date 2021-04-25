import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Users from "./screens/Users";
import Login from "./screens/Login";
export default function App() {
 //
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users/:user_id">
              <Users />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// function UsersDetail() {
//   const param = useParams()
//   return <h2>User {param.user_id}</h2>;
// }



// import logo from './logo.svg';
// import './App.css';
// import { Dropdown } from "react-bootstrap";
// import styled  from "styled-components";
// // import { Title } from 'react-bootstrap';
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Dropdown>
//           <Dropdown.Toggle variant="success" id="dropdown-basic">
//             Dropdown Button
//           </Dropdown.Toggle>

//           <Dropdown.Menu>
//             <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//             <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//             <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//         <Title > xxxxx </Title>
//       </header>
//     </div>
//   );
// }

// export default App;
