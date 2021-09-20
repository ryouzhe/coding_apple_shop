import React, { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import styled from "styled-components";
import data from "./data";

const JumboDiv = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
`;

function App() {
  let [shoes, changeShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <JumboDiv className="background">
        <h1>20% Season off</h1>
        <p>This is a simple hero unit...</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </JumboDiv>

      <div className="container">
        <div className="row">
          {shoes.map(function (item, index) {
            let imageSrc =
              "https://codingapple1.github.io/shop/shoes" +
              (index + 1) +
              ".jpg";
            return (
              <div className="col-md-4" key={index}>
                <img src={imageSrc} width="100%" alt="" />
                <h4>{item.title}</h4>
                <p>
                  {item.content} & {item.price}
                </p>
              </div>
            );
          })}
          {/* <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
              alt=""
            />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="100%"
              alt=""
            />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="100%"
              alt=""
            />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
