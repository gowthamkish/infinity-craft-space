"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "@/css/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.jpeg";
const Header = () => {
  return (
    <Navbar className={styles.header} expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image width={40} height={40} src={logo} rounded />
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Link className="text-white p-2" href="/auth/login">
            Login
          </Link>
          <Link className="text-white p-2" href="/auth/register">
            Register
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
