import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

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
        >
          <Button className="rounded-pill">{label}</Button>
        </Nav.Link>
      );
    });
  };

  return (
    <Navbar
      className=" p-0 sticky-top nav-shadow"
      bg="light"
      id="header"
      expand="sm"
    >
      <Container className="p-4 bg-light container-shadow">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="bg-white"
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
