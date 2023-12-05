import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors, displayflex } from "../../styles/styled_herencia";

const NavClient = () => {
  const navigate = useNavigate();

  const salir = () => {
    navigate("/login");
  };

  return (
    <NavbarClient>
      <div className="nav">
        <div className="sitios">
          <Link to="/dashclient">Home</Link>
          <Link to="/dashclient/catalogo">Catálogo</Link>
          <Link to="/dashclient/pedirProd">Pedir producto</Link>
          <div className="perfilUser"></div>
        </div>
        <div className="salir">
          <button onClick={() => salir()}>salir</button>
        </div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </NavbarClient>
  );
};

export default NavClient;

const NavbarClient = styled.div`
  width: 100vw;
  height: auto;

  .nav {
    width: 100vw;
    gap: 2em;
    height: 12vh;
    ${displayflex};
    background-color: ${colors.secondary};
    filter: drop-shadow(0 2px 5px #0004);
    .sitios {
      ${displayflex};

      width: 80%;
      height: 100%;
      a {
        color: #fff;
        text-decoration: none;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        background-color: ${colors.secondary};
        &:hover {
          /* transform: translateY(10px); */
          height: 120%;
          border-radius: 0 0 1em 1em;
          background-color: ${colors.primary};
          color: ${colors.black};
        }
      }
    }
    .salir {
      width: auto;
      display: flex;
      justify-content: end;
      align-items: end;
      button {
        width: 5em;
        height: 3em;
        border: transparent;
        background-color: transparent;
        color: ${colors.padrecolor};
        &:hover {
          cursor: pointer;
          background-color: ${colors.primary};
          border-radius: 2em;
          color: ${colors.black};
        }
      }
    }
  }
  .outlet {
    width: 100vw;
    height: 100%;
  }
`;
