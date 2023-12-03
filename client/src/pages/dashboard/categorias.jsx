import { useEffect, useState } from "react";
import { getdelete } from "../../services/getdelete";
import { postput } from "../../services/postPut";
import { Container } from "../../styles/styled_dashboard/contenedor";

const Categorias = () => {
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

  const [contenido, setContenido] = useState({
    nombre: "",
    descripcion: "",
  });

  const PeticionPost = async () => {
    const resiviendo = await postput("Categorias", contenido);
    console.log(resiviendo);
    if (resiviendo) {
      await PeticionGet();
      alert("Se agregó correctamente");
      return;
    }
    alert("ERROR");
  };

  const PeticionPut = async (cat) => {
    const resiviendo = await postput("Categorias/" + cat.id, contenido, "PUT")
    if (resiviendo) {
      await PeticionGet();      
    }
  }

  return (
    <Container>
      <button onClick={() => PeticionPost()}>Agregar</button>
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
                  <button onClick={()=> (PeticionPut(cat),
                    setContenido(cat)
                    )}>Editar</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Categorias;
