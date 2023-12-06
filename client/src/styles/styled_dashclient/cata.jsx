import styled from "styled-components";

export const Cata = styled.div`
.cartillas-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

/* Estilos para cada elemento del catálogo */
.cartilla {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

.cartilla img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

.cartilla h4 {
  font-size: 18px;
  margin-bottom: 5px;
}

.cartilla section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.cartilla section p {
  font-size: 14px;
}

.cartilla button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cartilla button:hover {
  background-color: #0056b3;
}
`;