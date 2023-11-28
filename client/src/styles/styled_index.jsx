import styled from "styled-components";
import { colors } from "./styled_herencia";
import { displayflex } from "./styled_herencia";

export const Container = styled.section`
  .segundo {
    width: 100vw;
    display: flex;
    flex-direction: row;
    position: absolute;
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
  z-index: 100;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1em;
    gap: 3em;
    z-index: 100;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${colors.terceary};
  }
`;
export const Redes = styled.section`
  & > div {
    width: 100px;
    height: 100px;
    ${displayflex};
    gap: 1em;
    &>a{
      color: ${colors.black};
    }
  }
`;

//------------------------------------------------HOME-------------------------------------------------------
export const Home = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  &::before {
    //seudoclase que permite crear un elemento, es decir: crea una caja igual a la otra osea home
    background-color: ${colors.secondary};
    content: ""; //contenido que tiene la caja copiada
    position: absolute;
    width: 30%;
    height: 100vh;
    right: 0;
    z-index: -10;
  }

  &::after {
    background-color: ${colors.primary};
    content: "";
    position: absolute;
    width: 70%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: -10;
  }

  & > section {
    flex-direction: row;
    ${displayflex}
    position:absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    .imagenes {
      background-color: #eeecef;
      width: 550px;
      height: 400px;
      ${displayflex};
      position: absolute;
      right: 15em;
      z-index: -2;
      box-shadow: 0 5px 5px #0005;

      & img {
        width: 230px;
        position: absolute;
        filter: drop-shadow(0 5px 5px #0005);
        &:nth-child(1) {
          top: 3em;
          left: 4em;
        }
        &:nth-child(2) {
          top: 1em;
          right: 0em;
        }
        &:nth-child(3) {
          bottom: -3em;
          /* left:6em; */
        }
      }
    }

    .title {
      width: 50%;
      height: 55%;
      position: absolute;
      bottom: 10em;
      & > h1 {
        font-size: 110px;
        color: ${colors.secondary};
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        justify-content: center;
        text-align: center;
      }
      & > h2 {
        color: transparent;
        -webkit-text-stroke: 1px ${colors.secondary};
        font-size: 90px;
        transform: translate(-25px, -25px);
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
  justify-content: center;
  align-items: center;

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
    width: 250px;
    height: 250px;
    filter: drop-shadow(0 5px 5px #000);
  }
`;
export const Vision = styled.div`
  background-color: #eeecef;
  width: 100vw;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
      margin-inline-start: 3em;
    }
  }
  & > img {
    width: 220px;
    height: 250px;
    filter: drop-shadow(0 5px 5px #000);
  }
`;
export const Valores = styled.div`
  background-color: #eeecef;
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  & > img {
    width: 200px;
    height: 250px;
    filter: drop-shadow(0 5px 5px #000);
  }
`;
//-------------------------------------CONTACTOS------------------------------------------------------------
export const Contactos = styled.section`
  width: 100vw;
  height: 100vh;
  margin-top: 1em;
  display: flex;
  flex-direction: row;
`;
export const Titulo = styled.div`
  width: 60vw;
  & > p {
    &:nth-child(1) {
      font-size: 40px;
      text-align: start;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      color: transparent;
      -webkit-text-stroke: 1px ${colors.terceary};
    }
    &:nth-child(2) {
      font-size: 30px;
      width: 100%;
      border-bottom: solid 1px ${colors.color};
    }
    &:nth-child(3) {
      padding-top: 1em;
      font-size: 18px;
    }
  }
  .form {
    display: flex;
    flex-direction: row;
    border: solid 1px ${colors.color};
    margin-top: 0.5em;
    align-items: center;
    box-shadow: 0px 5px 10px #0008;

    & div:nth-child(1) {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 1em;
      padding: 1em;
      & label {
        width: 100%;
      }
      & input {
        width: 80%;
        height: 2.5em;
      }
      &>button{
        width: 60px;
        ${displayflex};
        margin-inline-start: 9em;
      }
    }
    & div:nth-child(2) {
      width: 50%;
      display: flex;
      justify-content: center;
      & > img {
        filter: drop-shadow(0px 5px 10px black);
        width: 300px;
      }
    }
  }
`;
export const Imagenes = styled.div`
  width: 40vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  & > img {
    filter: drop-shadow(0px 5px 10px #000);
    content: "";
    position: absolute;
    top: 0em;
    left: -15em;
    width: 550px;
    height: 550px;
    object-fit: cover;
    animation: rotateimge 10s infinite linear;
    /* transform:rotateX("360deg"); */
  }
`;
//-------------------------------------FOOTER---------------------------------------------------------------
export const Footer = styled.section`
  background-color: ${colors.primary};
  width: 100vw;
  height: 50vh;
  margin-top: 1em;
  .redes {
    height: 5em;
    ${displayflex};
    position: relative;

    &::before {
      width: 90vw;
      height: 1px;
      background-color: ${colors.black};
      position: absolute;
      content: "";
    }
    .Fa{
      background-color: ${colors.primary};
      ${displayflex};
      width: 150px;
      
      &>a{
      color: ${colors.black};
      z-index: 1;
      background-color: ${colors.primary};
      ${displayflex};
      width: 100px;
    }
    }
  }
  .uno {
    height: 8em;
    ${displayflex};
    flex-direction: column;
    justify-content: end;
    .dos {
      gap: 1em;
      padding: 1em;
      ${displayflex};
      flex-direction: column;
      & p:nth-child(1) {
        font-size: 30px;
      }
      & p:nth-child(2) {
        font-size: 15px;
      }
    }
    .tres {
      font-weight: bold;
      text-decoration: underline;
      display: flex;
      flex-direction: row;
      gap: 1em;
    }
  }
`;
