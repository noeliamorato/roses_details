import React from "react";
import {
  Title,
  Navbar,
  Container,
  Home,
  Nosotros,
  Contactos,
} from "../../styles/styled_index";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Index = () => {
  return (
    <Container>
      <div className="segundo">
        <Title>Roses & Details</Title>
        <Navbar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Nosotros</Link>
            </li>
            <li>
              <Link to="/">Contactos</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </Navbar>
      </div>

      {/* --------------------------------------home----------------------------------------- */}
      <Home>
        <section>
          <div> Roses & Details</div>
          <div>
            <img src={logo} alt="" />
          </div>
        </section>
        <p></p>
      </Home>

      {/* --------------------------------------nosotros----------------------------------------- */}
      <Nosotros>
        <p>hola</p>
      </Nosotros>

      {/* --------------------------------------contactos----------------------------------------- */}
      <Contactos>
        <p>hola</p>
      </Contactos>

      {/* --------------------------------------footer----------------------------------------- */}
      <footer>
        <p>hola</p>
      </footer>
    </Container>
  );
};

export default Index;
