import { Container, Inicio } from "../../styles/styled_login";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Registro from "./registro";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { postput } from "../../services/postPut";
import { useUser } from "../../context/userContext";

const Login = () => {

const useStore = useUser();
const dataUser = useStore.setUser;
  const [contenido, setContenido] = useState({
    nombre: "",
    password: "",
  });
  const [verRegister, setVerRegister] = useState(false);
  const navigate = useNavigate();

  const logueo = async () => {
    const resiviendo = await postput("Login",{
      nombre: contenido.nombre,
      password: contenido.password,
    }
    );
    dataUser(resiviendo);
    
    console.log(resiviendo)
    if (resiviendo) {
      navigate("/dashboard");
      return;
    }
    alert("ERROR");
  };
  console.log(dataUser)

  return (
    <Container>
      <section>
        <Inicio>
          <div>
            <div className="botones">
              <p onClick={() => setVerRegister(false)}>LOGIN</p>
              <p onClick={() => setVerRegister(true)}>SIGN IN</p>
              <img
                src="https://i.pinimg.com/564x/6c/4c/c7/6c4cc7e7d7f522ef2edeee4fb7c00d80.jpg"
                alt=""
              />
            </div>

            <div className="login">
              <section>
                <img src={logo} alt="" />
                {verRegister ? <p>REGISTRATE </p> : <p>INICIA SESIÓN </p>}
              </section>
              {verRegister ? (
                <Registro />
              ) : (
                <>
                  <section>
                    <div>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <input
                        value={contenido.nombre}
                        onChange={(e) =>
                          setContenido({ ...contenido, nombre: e.target.value })
                        }
                        type="text"
                        placeholder="Nombre"
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faKey} />
                      <input
                        value={contenido.password}
                        onChange={(e) =>
                          setContenido({ ...contenido, password: e.target.value })
                        }
                        type="text"
                        placeholder="Password"
                      />
                    </div>
                  </section>
                  <section>
                    <button onClick={() => logueo()}>Ingresar</button>
                  </section>
                  <section>
                    <p>Inicia sesión con: </p>
                    <div>
                      {" "}
                      <FaGoogle /> Google
                    </div>
                    <div>
                      {" "}
                      <FaFacebook /> Facebook
                    </div>
                  </section>
                </>
              )}
            </div>
          </div>
        </Inicio>
      </section>
    </Container>
  );
};

export default Login;
