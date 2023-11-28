import styled from "styled-components";
import { botoncito, displayflex } from "./styled_herencia";

export const Register = styled.div`
  width: 100%;
  height: 70%;
  ${displayflex};
  justify-content: flex-start;
  flex-direction: column;
  & > article {
    width: 60%;
    height: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    & > div {
        width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1em;

      & > input {
        width: 100%;
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid #0005;
        outline: none;
        padding: 1em;
      }
    }
  }
  & > button {
    ${botoncito};
    align-self: flex-end;
    margin: 2em 4em 0 0;
  }
`;
