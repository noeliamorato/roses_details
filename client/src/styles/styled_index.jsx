import styled from "styled-components";

export const colors = {
  padrecolor: "#ffff",
  primary: "#efd3d4",
  secondary: "#b01a1d",
  terceary: "#5f1b1e",
  color: "#263f30",
  black: "#000",
};

export const Container = styled.section`
  .segundo {
    width: 100vw;
    display: flex;
    flex-direction: row;
    position: fixed;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  & > img {
    width: 180px;
  }
`;

export const Navbar = styled.nav`
  width: 70%;
  display: flex;
  justify-content: left;
  padding-left: 20em;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1em;
    gap: 3em;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${colors.terceary};
  }
`;

export const Home = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  &::before {
    //seudoclase que permite crear un elemento, es decir: crea una caja igual a la otra osea home
    background-color: ${colors.secondary};
    content: ""; //contenido que tiene la caja copiada
    position: absolute;
    width: 30%;
    height: 100vh;
    right: 0;
    z-index: -1;
  }

  &::after {
    background-color: ${colors.primary};
    content: "";
    position: absolute;
    width: 70%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: -1;
  }

  & > section {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .imagenes {
      background-color: #eeecef;
      width: 550px;
      height: 400px;
      display: flex;
      flex-direction: center;
      align-items: center;
      justify-content: center;
      .fondo1 {
        width: 240px;
        position: absolute;
        top: 75%;
        left: 60%;
        transform: translate(-100%, -100%);
        z-index: 1;
      }
      .fondo4 {
        width: 220px;
        position: absolute;
        top: 90%;
        left: 65%;
        transform: translate(-100%, -100%);
        z-index: 1;
      }
      .fondo5 {
        width: 270px;
        position: absolute;
        top: 75%;
        left: 80%;
        transform: translate(-100%, -100%);
        z-index: 1;
      }
    }

    .title {
      .roses {
        font-size: 110px;
        color: ${colors.secondary};
        display: flex;
        flex-direction: center;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 40%;
        left: 45%;
        transform: translate(-100%, -100%);
        z-index: 1;
      }
      .y {
        font-size: 90px;
        color: ${colors.secondary};
        display: flex;
        flex-direction: center;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 55%;
        left: 40%;
        transform: translate(-100%, -100%);
        z-index: 1;
      }
      .detalles {
        color: transparent;
        -webkit-text-stroke: 1px ${colors.secondary};
        font-size: 90px;
        position: relative;
        top: 70px;
      }
    }
  }
`;
//-----------------------------------------NOSOTROS----------------------------------------------------------
export const Nosotros = styled.section`
  background-color: ${colors.padrecolor};
  width: 100vw;
  height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1em;
  gap: 1em;
`;
export const Mision = styled.div`
  background-color: #eeecef;
  width: 100vw;
  height: 350px;
  display: flex;
  flex-direction: row;

  & > div {
    & > section {
      margin: 1em;
      background-color: ${colors.primary};
      width: 400px;
      height: 200px;
      border-radius: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      & > p {
        width: 300px;
      }
    }
    & > h1 {
      color: transparent;
      -webkit-text-stroke: 1px ${colors.black};
      font-size: 40px;
      margin-inline-start: 3em;
      margin-top: 0.5em;
    }
  }
  & > img {
    width: 280px;
    height: 300px;
  }
`;
export const Vision = styled.div`
  background-color: #eeecef;
  width: 100vw;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  & > div {
    & > section {
      margin: 1em;
      background-color: ${colors.primary};
      width: 400px;
      height: 200px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > p {
        width: 300px;
      }
    }
    & > h1 {
      color: transparent;
      -webkit-text-stroke: 1px ${colors.black};
      font-size: 40px;
      margin-inline-end: 5em;
    }
  }
  & > img{
    width: 200px;
    height: 300px;
  }
`;
export const Valores = styled.div`
  background-color: #eeecef;
  width: 100vw;
  height: 500px;
  & > div {
    & > section {
      margin: 1em;
      background-color: ${colors.primary};
      width: 600px;
      height: 300px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > p {
        width: 500px;
      }
    }
    & > h1 {
      color: transparent;
      -webkit-text-stroke: 1px ${colors.black};
      font-size: 40px;
      margin-inline-start: 4em;
      margin-top: 0.5em;
    }
  }
`;
//-------------------------------------CONTACTOS------------------------------------------------------------
export const Contactos = styled.section`
  background-color: ${colors.secondary};
  width: 100vw;
  height: 100vh;
  margin-top: 1em;
`;
//-------------------------------------FOOTER---------------------------------------------------------------
export const Footer = styled.section`
  background-color: ${colors.terceary};
  width: 100vw;
  height: 50vh;
  margin-top: 1em;
`;
