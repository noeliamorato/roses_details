import { Register } from "../../styles/styled_registro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postput } from "../../services/postPut";

const Registro = () => {
  const navigate = useNavigate();
  const [contenido, setContenido] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    departamento: "",
    password: "",
  });

  const logueo = async () => {
    const resiviendo = await postput("Clientes",{
      nombre: contenido.nombre,
      apellidos: contenido.apellidos,
      telefono: +contenido.telefono,
      departamento: contenido.departamento,
      password: contenido.password,
    });
    if (resiviendo) {
      alert("Usuario registrado");
      navigate("/dashclient");
      return;
    }
    alert("ERROR");
  };
  console.log(contenido);
  return (
    <Register>
      <article className="uno">
        <div>
          <FontAwesomeIcon icon={faUser} />
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
          <FontAwesomeIcon icon={faUser} />
          <input
            value={contenido.apellidos}
            onChange={(e) =>
              setContenido({ ...contenido, apellidos: e.target.value })
            }
            type="text"
            placeholder="Apellidos"
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <input
            value={contenido.telefono}
            onChange={(e) =>
              setContenido({ ...contenido, telefono: e.target.value })
            }
            type="text"
            placeholder="Telefono"
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            value={contenido.departamento}
            onChange={(e) =>
              setContenido({ ...contenido, departamento: e.target.value })
            }
            type="text"
            placeholder="Departamento"
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faKey} />
          <input
            value={contenido.password}
            onChange={(e) =>
              setContenido({ ...contenido, password: e.target.value })
            }
            type="password"
            placeholder="Password"
          />
        </div>
      </article>
      <button onClick={() => logueo()}>Registrar</button>
    </Register>
  );
};

export default Registro;
