import React from "react";
import { Navbar } from "react-bootstrap";
export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#">News App</Navbar.Brand>
    </Navbar>
  );
};
