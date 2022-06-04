import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React from "react";

const MainLayout = ({ children }) => {
  const history = useHistory();
  const onSignIn = () => {
    history.replace("/login");
    window.location.reload(false);
  };
  const goToPlaces = () => {
    history.push("/places");
    window.location.reload(false);
  };
  return (
    <>
      <Navbar bg="light" variant="light" className="mb-4">
        <Navbar.Brand href="/">QR Menu</Navbar.Brand>
        <Nav className="flex-grow-1 justify-content-end">
          <Nav.Link onClick={goToPlaces}>Places</Nav.Link>
        </Nav>
        <Nav className="flex-grow-1 justify-content-end">
          <Nav.Link onClick={onSignIn}>Login</Nav.Link>
        </Nav>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
