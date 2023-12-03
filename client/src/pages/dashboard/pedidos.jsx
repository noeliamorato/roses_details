import { useEffect, useState } from "react";
import { getdelete } from "../../services/getdelete";

const Pedidos = () => {
  const [datos, setDatos] = useState("");

  useEffect(() => {
    PeticionGet();
  }, []);

  const PeticionGet = async () => {
    const resiviendo = await getdelete("Pedidos");
    if (resiviendo.length > 0) {
      setDatos(resiviendo);
    }
    console.log(resiviendo.message);
  };

  const PeticionDelete = async (id) => {
    const resiviendo = await getdelete ("Pedidos/" + id, "DELETE")
    if (resiviendo === 1) {
      alert("Eliminado");
      await PeticionGet();
    }
  }
  return (
    <table>
      {/* llaves para instanciar javascrip ley */}
      <thead>
          <th>id</th>
          <th>id Clientes</th>
          <th>id Productos</th>
          <th>Métodos pago</th>
          <th>Fecha</th>
          <th>Acciones</th>
      </thead>
      <tbody>
        {Array.isArray(datos) &&
          datos.map((ped) => (
            <tr key={ped.id}>
              <td>{ped.id}</td>
              <td>{ped.id_clientes}</td>
              <td>{ped.id_productos}</td>
              <td>{ped.metodos_pago}</td>
              <td>{ped.fecha}</td>
              <td>
                <button onClick={()=>PeticionDelete(ped.id)}>Eliminar</button>
                <button>Editar</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Pedidos;
