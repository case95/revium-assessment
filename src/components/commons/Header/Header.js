import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

import Logo from "../Logo/Logo.js";

import "./Header.css";

const Header = () => {
  const placeholderRoutes = [
    { url: "/", label: "Home" },
    { url: "/work", label: "Work" },
    { url: "/about", label: "About" },
  ];

  const generateNavLinks = (routes) => {
    return routes.map((route) => {
      const { url, label } = route;
      return (
        <Nav.Link
          key={url}
          as={Link}
          to={url}
          className="my-nav-link text-white px-0 px-sm-3 py-sm-0"
          onClick={() => setIsExpanded((_) => false)}
        >
          <Button className="rounded-pill">{label}</Button>
        </Nav.Link>
      );
    });
  };

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const initializeHeader = () => {
      const header = document.getElementById("header");

      var lastScrollTop = 0;

      window.addEventListener("scroll", () => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          setIsExpanded((_) => false);
          // I have to subtract one more pixel otherwise is still visible a thin white line.
          header.style.top = `-${header.offsetHeight + 1}px`;
        } else {
          header.style.top = "0";
        }
        lastScrollTop = scrollTop;
      });
    };
    initializeHeader();
  }, []);

  return (
    <Navbar
      className=" p-0 sticky-top nav-shadow"
      bg="light"
      id="header"
      expand="sm"
      expanded={isExpanded}
    >
      <Container className="p-4 bg-light container-shadow">
        <Link
          to="/"
          className="logo"
          onClick={() => setIsExpanded((_) => false)}
        >
          <Logo src="/assets/logo.png" alt="Logo" dimension="md" />
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="bg-white"
          onClick={() => {
            setIsExpanded((state) => !state);
          }}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="flex justify-content-center pt-4 pt-sm-0"
        >
          {placeholderRoutes?.length > 0 && generateNavLinks(placeholderRoutes)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
