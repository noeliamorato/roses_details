import styled from "styled-components";
import { colors, displayflex } from "../styled_herencia";

export const Estilos = styled.div`
  width: 100%;
  height: 100%;
  & > h3 {
    ${displayflex}
    background-color: #0002;
    box-shadow: 0 5px 10px #0005;
    padding: 1em;
  }
  .cartillas-container {
    ${displayflex};
    gap: 2em;
    background-color: #0002;
    padding: 1.5em;
    .cartilla {
        
      gap: 0.7em;
      width: 200px;
      height: 250px;
      ${displayflex};
      justify-content: flex-start;
      flex-direction: column;
      /* From https://css.glass */
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      img {
        object-fit: cover;
        width: 100%;
        height: 150px;
        transition: all 0.5s ease-in-out;
        &:hover {
          transform: scale(1.3);
          filter: drop-shadow(0 5px 5px #0009);
        }
      }
      h4 {
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
      }
      section {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      & > button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0.5em;
        background-color: ${colors.secondary};
        border-radius: 0.5em;
        padding: 0.5em;
        transform: translateY(-3px);
        color: ${colors.padrecolor};
        &:hover {
          background-color: ${colors.color};
        }
      }
    }
  }
  .mispedidos {
    box-shadow: 0 -5px 10px #0005;
    display: flex;
    justify-content: center;
    flex-direction: column;
    & > h3 {
      ${displayflex}
      padding-top:1em;
    }
    table {
      padding-left: 4em;
      padding-right: 4em;
      padding-top: 1em;
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
    }
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0003;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .modal-content {
    backdrop-filter: blur(5px);
    box-shadow: 0 0 10px #0008;
    background-color: #fff3;
    padding: 20px;
    border-radius: 8px;
  }
`;
