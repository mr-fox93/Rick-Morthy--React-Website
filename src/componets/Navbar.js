import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Navbar() {
  return (
    <Menu inverted color="blue" style={{ borderRadius: 0 }}>
      <Menu.Item
        as={Link}
        to="/"
        header
        style={{ fontSize: "1.2em", fontWeight: "bold" }}
      >
        Rick&Morty Wiki
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          style={{ fontWeight: "bold" }}
        />
        <Menu.Item
          as={Link}
          to="/favorite"
          name="Favorite"
          style={{ fontWeight: "bold" }}
        />
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
