import React from "react";
import {
  Title,
  Navbar,
  Container,
  Home,
  Nosotros,
  Contactos,
  Mision,
  Vision,
  Valores,
  Footer,
  Titulo,
  Imagenes,
} from "../../styles/styled_index";

import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import fondo1 from "../../assets/img/fondo1.png";
import fondo5 from "../../assets/img/fondo5.png";
import fondo4 from "../../assets/img/fondo4.png";
import uno from "../../assets/img/uno.png";
import dos from "../../assets/img/dos.png";
import tres from "../../assets/img/tres.png";
import cuatro from "../../assets/img/cuatro.png";
import cinco from "../../assets/img/cinco.png";
import seis from "../../assets/img/seis.png";
import fondo2 from "../../assets/img/fondo2.png";
import fondo3 from "../../assets/img/fondo3.png";
import siete from "../../assets/img/siete.png";
import diez from "../../assets/img/diez.png";
import doce from "../../assets/img/doce.png";

const Index = () => {
  return (
    <Container>
      <div className="segundo">
        <Title>
          <img src={logo} alt="" />
        </Title>
        <Navbar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Nosotros</Link>
            </li>
            <li>
              <Link to="/">Contactos</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </Navbar>
      </div>

      {/* --------------------------------------home----------------------------------------- */}
      <Home>
        <section>
          <div className="title">
            <h1 >Roses  &</h1>
            <h2 >Details</h2>
          </div>
          <div className="imagenes">
            <img  src={fondo1} alt="" />
            <img  src={fondo5} alt="" />
            <img  src={fondo4} alt="" />
          </div>
        </section>
      </Home>

      {/* --------------------------------------nosotros----------------------------------------- */}
      <Nosotros>
        <Mision>
          <div>
            <h1>MISIÓN</h1>
            <section>
              <p>
                En Roses & Details nos comprometemos a proporcionar una
                experiencia excepcional en compras en línea, ofreciendo una
                amplia gama de productos únicos y artesanales. Buscamos inspirar
                la creatividad y la conexión emocional a través de detalles
                cuidadosamente seleccionados que elevan momentos cotidianos a
                experiencias extraordinarias para nuestros clientes.
              </p>
            </section>
          </div>
          <img src={uno} alt="" />
          <img src={dos} alt="" />
          <img src={tres} alt="" />
        </Mision>
        <Vision>
          <img src={cuatro} alt="" />
          <img src={cinco} alt="" />
          <img src={seis} alt="" />
          <div>
            <h1>VISIÓN</h1>
            <section>
              <p>
                Nos esforzamos por ser la principal referencia en el mundo de
                detalles y manualidades en línea, destacando por nuestra
                excelencia en calidad, originalidad y atención al cliente.
                Aspiramos a ser reconocidos como un destino confiable y
                apreciado, donde la innovación y la pasión por lo artesanal se
                encuentran para deleitar a nuestros clientes en cada compra.
              </p>
            </section>
          </div>
        </Vision>
        <Valores>
          <div>
            <h1>VALORES</h1>
            <section>
              <p>
                <p>
                  1. Creatividad y Originalidad: Nos comprometemos a ofrecer
                  productos únicos y creativos que inspiren y añadan un toque
                  especial a cada momento.
                </p>
                <p>
                  2. Calidad y Artesanía: Valoramos la excelencia artesanal y
                  nos esforzamos por ofrecer productos de la más alta calidad
                  que transmitan la dedicación de nuestros artesanos.
                </p>
                <p>
                  3. Atención al Cliente: Colocamos a nuestros clientes en el
                  centro de todo lo que hacemos, ofreciendo un servicio
                  excepcional y garantizando su satisfacción.
                </p>
                <p>
                  4. Innovación y Mejora Continua: Buscamos constantemente
                  nuevas formas de mejorar y crecer, adaptándonos a las
                  necesidades cambiantes del mercado y de nuestros clientes.
                </p>
              </p>
            </section>
          </div>
          <img src={fondo2} alt="" />
          <img src={fondo3} alt="" />
          <img src={siete} alt="" />
        </Valores>
      </Nosotros>

      {/* --------------------------------------contactos----------------------------------------- */}
      <Contactos>
        <Imagenes>
          <img src={diez} alt="" />
        </Imagenes>
        <Titulo>
          <p>¿Tienes dudas?</p>
          <p>Contáctanos</p>
          <p>Nos encontramos en las redes sociales</p>

          <div className=" form">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" />
              <label htmlFor="pedido">Detalle elegido</label>
              <input type="text" />
              <label htmlFor="detalle elegido">Fecha y lugar</label>
              <input type="text" />
            </div>
            <div>
              <img src={doce} alt="" />
            </div>
          </div>
        </Titulo>
      </Contactos>

      {/* --------------------------------------footer----------------------------------------- */}
      <Footer>
        <div className="redes"> 
        <p>redes</p>
        </div>
        <div className="uno">
          <div className="dos">
          <p>Roses & Details</p>
          <p>Copyright © 2023 Noelia Morato Caero</p>
          </div>
          <div className="tres">
            <p>Información legar</p>  
            |
            <p>Política de privacidad</p>
          </div>
        </div>
      </Footer>
    </Container>
  );
};

export default Index;
