import { useEffect, useState } from "react";
import { getdelete } from "../../services/getdelete";
import { postput } from "../../services/postPut";
import { Container } from "../../styles/styled_dashboard/contenedor";

const Categorias = () => {
  const [editar, setEditar] = useState(null);

  const [contenido, setContenido] = useState({
    nombre: "",
    descripcion: "",
  });

  useEffect(() => {
    if (editar) {
      setContenido({
        nombre: editar.nombre || "",
        descripcion: editar.descripcion || "",
      });
    } else {
      setContenido({
        nombre: "",
        descripcion: "",
      });
    }
  }, [editar]);

  const [datos, setDatos] = useState("");
  useEffect(() => {
    PeticionGet();
  }, []);

  const PeticionGet = async () => {
    const resiviendo = await getdelete("Categorias");
    if (resiviendo.length > 0) {
      setDatos(resiviendo);
    }
    console.log(resiviendo);
  };

  const PeticionDelete = async (id) => {
    const resiviendo = await getdelete("Categorias/" + id, "DELETE");
    if (resiviendo === 1) {
      alert("Eliminado");
      await PeticionGet();
    }
  };

  const PeticionPost = async () => {
    const resiviendo = await postput("Categorias", contenido);
    if (resiviendo) {
      await PeticionGet();
      alert("Se agregó correctamente");
      return;
    }
    alert("ERROR");
  };

  const PeticionPut = async () => {
    const resiviendo = await postput(
      "Categorias/" + editar.id,
      contenido,
      "PUT"
    );
    setEditar(null);
    if (resiviendo) {
      await PeticionGet();
    }
  };

  return (
    <Container>
      <button onClick={() => (editar ? PeticionPut() : PeticionPost())}>
        {editar ? "actualizar" : "agregar"}
      </button>
      <form>
        <label>Nombre</label>
        <input
          value={contenido.nombre}
          onChange={(e) =>
            setContenido({ ...contenido, nombre: e.target.value })
          }
          type="text"
        />
        <label>Descripción</label>
        <input
          value={contenido.descripcion}
          onChange={(e) =>
            setContenido({ ...contenido, descripcion: e.target.value })
          }
          type="text"
        />
      </form>
      <table>
        <thead>
          <th>id</th>
          <th>Nombre</th>
          <th>Descripción</th>
        </thead>

        <tbody>
          {Array.isArray(datos) &&
            datos.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.nombre}</td>
                <td>{cat.descripcion}</td>
                <td>
                  <button onClick={() => PeticionDelete(cat.id)}>
                    Eliminar
                  </button>
                  <button onClick={() => setEditar(cat)}>Editar</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Categorias;
