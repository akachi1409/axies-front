import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

import NavImg from "../../assets/navbar/navbar.png";
import "./navbarcomp.css";
class NavbarComp extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img src={NavImg} alt="" /> Axies
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Explore">
                <NavDropdown.Item href="/explore1">Explore1</NavDropdown.Item>
                <NavDropdown.Item href="/explore2">Explore2</NavDropdown.Item>
                <NavDropdown.Item href="/explore3">Explore3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Activity">
                <NavDropdown.Item href="/activity1">Activity1</NavDropdown.Item>
                <NavDropdown.Item href="/activity2">Activity2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Item">
                <NavDropdown.Item href="/create_item">Create Item</NavDropdown.Item>
                {/* <NavDropdown.Item href="/activity2">Activity2</NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="/auction">Auctions</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/help">Help</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Item className="nav-wallet-layout">
                <Nav.Link className="nav-wallet" href="/connect_wallet">Connect Wallet</Nav.Link>
              </Nav.Item>

              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default NavbarComp;
