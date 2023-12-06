import styled from "styled-components";
import { botoncito, colors, displayflex } from "../../styles/styled_herencia";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import NavClient from "../dashclient/navClient";

const NavDash = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const roles = user.user.rol;

  const salir = () => {
    navigate("/login");
  };

  return (
    <>
      {roles === "admin" ? (
        <NavbarDash>
          <div className="nav">
            <Link to="/dashboard">Home</Link>
            <Link to="/dashboard/pedidos">Pedidos</Link>
            <Link to="/dashboard/clientes">Clientes</Link>
            <Link to="/dashboard/productos">Productos</Link>
            <Link to="/dashboard/categorias">Categorias</Link>
            <div className="perfilUser"></div>
            <button onClick={() => salir()}>salir</button>
          </div>
          <div>
            <Outlet />
          </div>
        </NavbarDash>
      ) : (
        <>
          <NavClient />
          <div>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default NavDash;

const NavbarDash = styled.div`
  display: flex;
  .nav {
    button {
      ${botoncito};
      &:hover {
        background-color: ${colors.primary};
        color: black;
      }
    }
    width: 15vw;
    height: 100vh;
    background-color: ${colors.secondary};
    box-shadow: 0 0px 5px #0008;
    ${displayflex}
    flex-direction:column;
    gap: 1em;
    & a {
      text-decoration: none;
      color: #ffff;
    }
  }
`;
