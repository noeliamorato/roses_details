import { useEffect, useState } from "react";
import { getdelete } from "../../services/getdelete";
import { postput } from "../../services/postPut";
import { Container } from "../../styles/styled_dashboard/contenedor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Clientes = () => {
  const [verform, setVerform] = useState(false);
  const [editar, setEditar] = useState(null);
  const [contenido, setContenido] = useState({
    ci: "",
    nombre: "",
    apellidos: "",
    telefono: "",
    direccion: "",
    departamento: "",
    rol: "",
  });

  useEffect(() => {
    if (editar) {
      setContenido({
        ci: editar.ci || "",
        nombre: editar.nombre || "",
        apellidos: editar.apellidos || "",
        telefono: editar.telefono || "",
        direccion: editar.direccion || "",
        departamento: editar.departamento || "",
        rol: editar.rol || "",
      });
    } else {
      setContenido({
        ci: "",
        nombre: "",
        apellidos: "",
        telefono: "",
        direccion: "",
        departamento: "",
        rol: "",
      });
    }
  }, [editar]);

  const [datos, setDatos] = useState("");

  useEffect(() => {
    PeticionGet();
  }, []);

  const PeticionGet = async () => {
    const resiviendo = await getdelete("Clientes");
    if (resiviendo) {
      setDatos(resiviendo);
    }
  };

  const PeticionDelete = async (id) => {
    const resiviendo = await getdelete("Clientes/" + id, "DELETE");
    if (resiviendo) {
      alert("Eliminado");
      await PeticionGet();
    }
  };

  const PeticionPost = async () => {
    const resiviendo = await postput("Clientes", contenido);
    if (resiviendo) {
      await PeticionGet();
      alert("Se agregó correctamente");
      return;
    }
    alert("ERROR");
  };

  const PeticionPut = async () => {
    const resiviendo = await postput("Clientes/" + editar.id, contenido, "PUT");
    setEditar(null);
    if (resiviendo) {
      await PeticionGet();
    }
  };
  return (
    <Container>
      <h1>Clientes</h1>
      <button onClick={() => setVerform(!verform)}>Agregar</button>

      <div className={verform ? "si" : "no"}>
        <form>
          <section className="x">
            <button onClick={() => setVerform(!verform)}>X</button>
          </section>
          <label>ci</label>
          <input
            value={contenido.ci}
            onChange={(e) => setContenido({ ...contenido, ci: e.target.value })}
            type="text"
          />
          <label>Nombre</label>
          <input
            value={contenido.nombre}
            onChange={(e) =>
              setContenido({ ...contenido, nombre: e.target.value })
            }
            type="text"
          />
          <label>Apellidos</label>
          <input
            value={contenido.apellidos}
            onChange={(e) =>
              setContenido({ ...contenido, apellidos: e.target.value })
            }
            type="text"
          />
          <label>Teléfono</label>
          <input
            value={contenido.telefono}
            onChange={(e) =>
              setContenido({ ...contenido, telefono: e.target.value })
            }
            type="text"
          />
          <label>Dirección</label>
          <input
            value={contenido.direccion}
            onChange={(e) =>
              setContenido({ ...contenido, direccion: e.target.value })
            }
            type="text"
          />
          <label>Departamento</label>
          <select
            value={contenido.departamento}
            onChange={(e) =>
              setContenido({ ...contenido, departamento: e.target.value })
            }
          >
            <option value="">Selecciona un departamento</option>
            <option value="Chuquisaca">Chuquisaca</option>
            <option value="La Paz">La Paz</option>
            <option value="Cochabamba">Cochabamba</option>
            <option value="Oruro">Oruro</option>
            <option value="Potosí">Potosí</option>
            <option value="Tarija">Tarija</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="Beni">Beni</option>
            <option value="Pando">Pando</option>
          </select>
          <label>Rol</label>
          <input
            value={contenido.rol}
            onChange={(e) =>
              setContenido({ ...contenido, rol: e.target.value })
            }
            type="text"
          />
          <section>
            <button
              className="boton"
              onClick={() => (
                editar ? PeticionPut() : PeticionPost(), setVerform(!verform)
              )}
            >
              {editar ? "actualizar" : "agregar"}
            </button>
          </section>
        </form>
      </div>
      <table>
        <thead>
          <th>id</th>
          <th>ci</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Teléfono</th>
          <th>Dirección</th>
          <th>Departamento</th>
          <th>rol</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          {Array.isArray(datos) &&
            datos.map((clien) => (
              <tr key={clien.id}>
                <td>{clien.id}</td>
                <td>{clien.ci}</td>
                <td>{clien.nombre}</td>
                <td>{clien.apellidos}</td>
                <td>{clien.telefono}</td>
                <td>{clien.direccion}</td>
                <td>{clien.departamento}</td>
                <td>
                  <select name="" id="">
                    <option value="">Opciones</option>
                    <option value="admin">Admin</option>
                    <option value="personal">Personal</option>
                    <option value="cliente">Cliente</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => PeticionDelete(clien.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                  <button
                    onClick={() => (setEditar(clien), setVerform(!verform))}
                  >
                    <FontAwesomeIcon icon={faPencil} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Clientes;
