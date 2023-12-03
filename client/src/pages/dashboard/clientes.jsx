import { useEffect, useState } from "react";
import { getdelete } from "../../services/getdelete";

const Clientes = () => {
  const [datos, setDatos ] = useState("");

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
    const resiviendo = await getdelete ("Clientes/" + id, "DELETE");
    if (resiviendo) {
      alert("Eliminado");
      await PeticionGet();
    }
  };
  return (
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
              <td>{clien.rol}</td>
              <td>
                <button onClick={() => PeticionDelete(clien.id)}>
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

export default Clientes;
