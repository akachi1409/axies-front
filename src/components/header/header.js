import React from "react";

// import Logo from '../../assets/logo.png'

//import css
import "./header.css";

import { Container } from "react-bootstrap";

function Header(props) {
    return (
      <>
        <div className="itemHeader-contanier">
            <Container className="itemHeader-layout">
                <h2 className="itemHeader-title">{props.title}</h2>
                <h2 className="itemHeader-text">{props.text}</h2>
            </Container>
        </div>
      </>
    );
}

export default Header;
