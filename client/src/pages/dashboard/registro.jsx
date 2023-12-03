
import { Register } from "../../styles/styled_registro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

const Registro = () => {
  return (
    <Register>
      <article className="uno">
        <div>
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder="Nombre" />
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <input type="text" placeholder="Celular" />
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <FontAwesomeIcon icon={faKey} />
          <input type="password" placeholder="Password" />
        </div>
      </article>
      <button>Registrar</button>
    </Register>
  );
};

export default Registro;
