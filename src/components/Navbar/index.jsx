import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default function Header({ title = 'React Pitang', routes = [] }) {
  return (
    <div>
      <Navbar title="Pitang" bg="light" varitant="dark" expand="lg">
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {routes.map(({ path, name }) => (
              <Nav.Link as={Link} key={path} to={path}>{name}</Nav.Link>
            ))}

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
