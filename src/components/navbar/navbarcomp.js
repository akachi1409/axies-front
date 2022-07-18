import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import NavImg from "../../assets/navbar/navbar-1.png";
import NavImg from "../../assets/navbar/catena.svg"
// import CatinaImg from "../../assets/navbar/catina.png"
import CatinaImg from "../../assets/navbar/catena-text.svg"

import "./navbarcomp.css";

function NavbarComp() {
  const blockchain = useSelector((state) => state.blockchain);

  let navigate = useNavigate();
  const onNav = (url) =>{
    navigate(url)
  }
  return (
    <>
      <Navbar bg="transparent" variant="light" className="navbar-layout">
        <Container>
          <div className="navbar-row">
            <div className="navbar-brand-layout">
              <Navbar.Brand onClick = {()=> onNav("/")}>
                <img src={NavImg} alt="" />
                <img src={CatinaImg} alt="" className="catena-logo"/>
              </Navbar.Brand>
            </div>
            <div className="navbar-left-container">
              <Nav className="navbar-left">
                {/* <Nav.Link onClick = {()=> onNav("/")}>Home</Nav.Link> */}
                <Nav.Link onClick = {()=> onNav("/explore")}>Explore</Nav.Link>
                <Nav.Link onClick = {()=> onNav("/create_item")}>Create Item</Nav.Link>
                <Nav.Link onClick = {()=> onNav("/auction")}>Auctions</Nav.Link>
                {/* <Nav.Link href="/blog">Blog</Nav.Link> */}
                <Nav.Link href="/help">Help</Nav.Link>
              </Nav>
            </div>
            <div className="navbar-wallet-container">
              <Nav>
              {blockchain.account === null  ? (
                <Nav.Item className="nav-wallet-layout">
                  <div className="nav-wallet" onClick = {()=>onNav("/connect_wallet")}>
                    Connect Wallet
                  </div>
                </Nav.Item>
              ):(
                <NavDropdown title="Profile">
                  <NavDropdown.Item onClick={()=> onNav("/mynft")}>
                    My NFT
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/profile">My profile</NavDropdown.Item>
                  {/* <NavDropdown.Item href="/activity2">Activity2</NavDropdown.Item> */}
                </NavDropdown>
              )
              }
              </Nav>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarComp;
