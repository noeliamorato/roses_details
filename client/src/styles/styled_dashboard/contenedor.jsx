import styled from "styled-components";
import { botoncito, colors, displayflex } from "../styled_herencia";

export const Container = styled.div`
  width: 85vw;
  height: 100vh;
  padding: 3em;
  h1 {
    transition: all 0.5s ease-in-out;
    ${displayflex};
    &:hover {
      color: ${colors.secondary};
      transform: translateY(-3px);
    }
  }
  & > button {
    ${botoncito};
  }
  div {
    width: 100vw;
    height: 100vh;
    position: fixed;
    ${displayflex};
    top: 0;
    left: 0;
    form {
      row-gap:1em ;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 1em;
      backdrop-filter: blur(5px);
      box-shadow: 0 0 10px #0003;
      background-color: #fff3;
      height: auto;
      width: 30%;
      .x {
        display: flex;
        justify-content: end;
        width: 100%;
        button {
          ${botoncito};
          &:hover {
            width: 40px;
          }
          cursor: pointer;
          width: 40px;
        }
      }
      section {
        width: 100%;
        ${displayflex};
        .boton {
          ${botoncito};
        }
      }
      label {
        width: 40%;
      }
      input {
        width: 60%;
        height: 2em;
      }
      select {
        width: 60%;
        height: 2em;
      }
    }
  }
  table {
    padding-top: 2em;
    filter: drop-shadow(0 5px 5px #0005);
    width: 100%;
    thead {
      background-color: ${colors.padrecolor};
      cursor: pointer;
      &:hover {
        color: ${colors.padrecolor};
        background-color: ${colors.secondary};
        transform: translateY(-3px);
      }
      box-shadow: 0 2px 10px #0001;
      transition: all 0.5s ease-in-out;
      th {
        padding: 0.5em;
      }
    }
    tbody {
      box-shadow: 0 2px 10px #0001;
      transition: all 0.5s ease-in-out;
      tr {
        &:hover {
          background-color: ${colors.primary};
          transform: translateY(-3px);
        }
        td {
          text-align: center;
        }
        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5em;
          &:hover {
            background-color: ${colors.secondary};
            border-radius: 0.5em;
            padding: 0.5em;
            transform: translateY(-3px);
            color: ${colors.padrecolor};
          }
        }
      }
    }
  }
`;
