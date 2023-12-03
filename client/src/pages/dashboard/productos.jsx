import { useEffect, useState } from "react";
import { getdelete } from "../../services/getdelete";

const Productos = () => {
  const [datos, setDatos] = useState("");

  useEffect(() => {
    PeticionGet();
  }, []);

  const PeticionGet = async () => {
    const resiviendo = await getdelete("Productos");
    if (resiviendo.length > 0) {
      setDatos(resiviendo);
    }
  };

  const PeticionDelete = async (id) => {
    const resiviendo = await getdelete ("Productos/" + id, "DELETE");
    if (resiviendo === 1) {
      alert("Eliminado");
      await PeticionGet();
    }
  };

  return (
    <table>
      <thead>
        <th>id</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>id Categorias</th>
        <th>Imagen</th>
        <th>Colores</th>
      </thead>
      <tbody>
        {Array.isArray(datos) &&
          datos.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.nombre}</td>
              <td>{prod.descripcion}</td>
              <td>{prod.precio}</td>
              <td>{prod.cantidad}</td>
              <td>{prod.id_categorias}</td>
              <td>{prod.imagen}</td>
              <td>{prod.colores}</td>
              <td>
                <button onClick={() => PeticionDelete(prod.id)}>
                  Eliminar
                </button>
                <button>Editar</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Productos;
