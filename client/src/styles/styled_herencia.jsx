import { css } from "styled-components";

export const colors = {
  padrecolor: "#ffff",
  primary: "#efd3d4",
  secondary: "#b01a1d",
  terceary: "#5f1b1e",
  color: "#263f30",
  black: "#000",
};

export const displayflex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const botoncito = css`
  width: 100px;
  height: 40px;
  background-color: ${colors.secondary};
  border-radius: 2em;
  border: 0px;
  color: ${colors.padrecolor};
  box-shadow: 0 5px 5px #0008;
  transition: all 0.5s ease-in-out;
  &:hover {
    width: 120px;
  }
`;

