import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navb.css";

function Navb() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  return (
    <Navbar
      className={navbar ? "active" : "navb"}
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100vw",
          }}
        > */}
        <Navbar.Brand
          href="#home"
          style={{
            fontFamily: "Caveat",
            fontSize: "20px",
          }}
        >
          IEEE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="collapsingIcons">
          <Nav
            style={{
              textAlign: "center",
            }}
          >
            <Nav.Link>
              <Link
                to="speakers"
                spy={true}
                smooth={true}
                offset={-55}
                duration={500}
                style={{
                  textDecoration: "none",
                  fontFamily: "Libre Franklin",
                }}
              >
                Speakers
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="sponsors"
                spy={true}
                smooth={true}
                offset={-55}
                duration={500}
                style={{
                  textDecoration: "none",
                  fontFamily: "Libre Franklin",
                }}
              >
                Sponsors
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="location"
                spy={true}
                smooth={true}
                offset={-55}
                duration={500}
                style={{
                  textDecoration: "none",
                  fontFamily: "Libre Franklin",
                }}
              >
                Location
              </Link>
            </Nav.Link>
            {/* <Nav.Link>
              <Link
                to="footer"
                spy={true}
                smooth={true}
                offset={-55}
                duration={500}
                style={{
                  textDecoration: "none",
                  fontFamily: "Libre Franklin",
                }}
              >
                Footer
              </Link>
            </Nav.Link> */}
            <NavDropdown
              title="Dropdown"
              style={{
                fontFamily: "Libre Franklin",
                textAlign: "center",
              }}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                href="#action/3.1"
                style={{
                  textDecoration: "none",
                  fontFamily: "Libre Franklin",
                }}
              >
                Action
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                style={{
                  textDecoration: "none",
                  fontFamily: "Libre Franklin",
                }}
              >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                style={{
                  textDecoration: "none",
                  fontFamily: "Libre Franklin",
                }}
              >
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.4"
                style={{
                  textDecoration: "none",
                  fontFamily: "Libre Franklin",
                }}
              >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link>
            <Link
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              style={{
                textDecoration: "none",
                fontFamily: "Libre Franklin",
                color: "white",
                padding: "8px",
                marginLeft: "20px",
                borderColor: "blue",
                borderWidth: "2px",
                borderRadius: "10px",
                borderStyle: "solid",
                backgroundColor: "blue",
              }}
            >
              Register
            </Link>
          </Nav.Link>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
        {/* </div> */}
      </Container>
    </Navbar>
  );
}

export default Navb;