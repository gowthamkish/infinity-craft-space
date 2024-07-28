"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "@/css/Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <Navbar className={styles.header} bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="justify-content-end">
          <Link className="text-white p-2" href="/auth/login">Login</Link>
          <Link className="text-white p-2" href="/auth/register">Register</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
