import "./header.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { globalContext } from "../../context/GlobalProvider";
import Button from "../Components/ButtonMain/Button";

const Header = () => {
  const { mode, headerLink } = useContext(globalContext);

  return (
    <header className={`d-flex justify-content-center ${mode ? "dark" : null}`}>
      <Nav variant="pills" activeKey="1">
        {headerLink.map((item,index) => (
          <Nav.Item key={index}>
            <Nav.Link eventKey="2" title="Item">
              {item}
            </Nav.Link>
          </Nav.Item>
        ))}
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            <Button />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;
