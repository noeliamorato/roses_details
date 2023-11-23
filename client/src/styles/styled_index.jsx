import styled from "styled-components";

export const color = {
  padrecolor: "#ffff",
  primary: "#efd3d4",
  secondary: "#b01a1d",
  terceary: "#5f1b1e",
  color: "#263f30",
}

export const Container = styled.section`
  .segundo {
    width: 100vw;
    display: flex;
    flex-direction: row;
    position: fixed;
  }
`;

export const Title = styled.div`
  color: ${color.secondary};
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0.5em;
  font-size: 30px;
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
    color: ${color.terceary};
  }
`;

export const Home = styled.section`
position: relative;
width: 100vw;
height: 100vh;
&::before{ //seudoclase que permite crear un elemento, es decir: crea una caja igual a la otra osea home
  background-color: ${color.secondary};
  content: ''; //contenido que tiene la caja copiada 
  position: absolute;
  width: 30%;
  height: 100vh;
  right: 0;
  z-index: -1;
}

&::after{
  background-color: ${color.primary};
  content: '';
  position: absolute;
  width: 70%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: -1;
}

& > section{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > div{
    & > img{
      width: 500px;
    }
  }
}

`;

export const Nosotros = styled.section``;

export const Contactos = styled.section``;
