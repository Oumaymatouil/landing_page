import React from 'react';
import { Container } from 'react-bootstrap';
import '../header.css';

const Header = () => {
  return (
    <Container>
    <img className="logo" src="LogoBridge.png" alt="logo" />
    <div className="container">
        <img className="image" src="header.jpg" alt="header" />
        <div className="textimage">
            <p className="text">Improve your skills on your own
                To prepare for a better future</p>
            <a href="#" className="button">Register Now</a>
        </div>
      </div>
    </Container>
  );
};

export default Header;