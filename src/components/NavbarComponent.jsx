import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg">
      <Container>  
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/kopis.png"
            width="100"
            height="90"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Brand>
          <label className="logo-x">CoffeeX</label>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" data-bs-theme="light"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </div>
              );
            })}
          </Nav>
          <div>
            <button>Sign in</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
