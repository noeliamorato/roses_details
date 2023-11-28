import styled from "styled-components";
import { colors, displayflex } from "./styled_herencia";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #0009;
  ${displayflex};
  & > section {
    ${displayflex};
    width: 900px;
    height: 500px;
  }
`;
export const Inicio = styled.section`
  & > div {
    ${displayflex};
    .botones {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      /* background-color: 212121; */
      background: linear-gradient(#b01a1d, #efd3d4);
      display: flex;
      justify-content: center;
      align-items: end;
      width: 300px;
      height: 500px;
      flex-direction: column;
      gap: 1em;
      position: relative;
      overflow: hidden;
      box-shadow: 0 10px 10px #000;
      & > img {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      & > p {
        z-index: 1;
        color: white;
        padding: 1em 2em;
        &:hover {
          background-color: ${colors.primary};
          color: ${colors.terceary};
          border-radius: 2em 0em 0em 2em;
          position: relative;
          /* &::before{
            position: absolute;
            content: "";
            width: 100px;
            height: 50px;
            background-color: ${colors.primary};
            top: -50px;
            right: 0;
             clip-path: polygon(81% 84%, 93% 73%, 100% 51%, 100% 70%, 100% 100%, 50% 100%, 21% 100%, 0 100%, 50% 95%, 68% 90%); */
        }
      }
    }
    .login {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: ${colors.primary};
      ${displayflex};
      width: 600px;
      height: 500px;
      flex-direction: column;
      overflow: hidden;

      & section:nth-child(1) {
        margin-top: 1em;
        height: 40vh;
        ${displayflex}
        flex-direction: column;
        & > img {
          width: 250px;
        }
        & > p {
          font-size: 22px;
          color: ${colors.secondary};
          font-weight: bold;
          -webkit-text-stroke: 0.7px ${colors.black};
        }
      }
      & section:nth-child(2) {
        height: 60vh;
        width: 500px;
        ${displayflex};
        justify-content: flex-start;
        flex-direction: column;
        gap: 0.5em;
        padding: 2em;
        & > div {
          ${displayflex};
          flex-direction: row;
          & > input {
            width: 350px;
            background-color: transparent;
            border: 0px;
            border-bottom: 1px solid #0005;
            outline: none; //elimina los bordes cuando haces focus
            padding: 1em;
          }
        }
      }
      & section:nth-child(3) {
        width: 500px;
        height: 60vh;
        display: flex;
        justify-content: end;
        align-items: baseline;
        & > button {
          width: 100px;
          height: 40px;
          background-color: ${colors.secondary};
          border-radius: 2em;
          border: 0px;
          color: ${colors.padrecolor};
          /* background: linear-gradient(#b01a1d, #efd3d4); */
        }
      }
      & section:nth-child(4) {
        & > div {
          width: 600px;
          height: 60px;
          background-color: #0005;
        }
      }
    }
  }
`;
