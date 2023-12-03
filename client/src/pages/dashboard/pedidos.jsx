import { useEffect, useState } from "react";
import { getdelete } from "../../services/getdelete";
import { postput } from "../../services/postPut";
import { Container } from "../../styles/styled_dashboard/contenedor";

const Pedidos = () => {
  const [verform, setVerform] = useState(false);

  const [editar, setEditar] = useState(null);

  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);

  const [contenido, setContenido] = useState({
    id_clientes: "",
    id_productos: "",
    metodos_pago: "",
    fecha: "",
  });

  useEffect(() => {
    if (editar) {
      setContenido({
        id_clientes: editar.id_clientes || "",
        id_productos: editar.id_productos || "",
        metodos_pago: editar.metodos_pago || "",
        fecha: editar.fecha || "",
      });
    } else {
      setContenido({
        id_clientes: "",
        id_productos: "",
        metodos_pago: "",
        fecha: "",
      });
    }
  }, [editar]);
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
    const resiviendo = await getdelete("Pedidos/" + id, "DELETE");
    if (resiviendo === 1) {
      alert("Eliminado");
      await PeticionGet();
    }
  };

  const PeticionPost = async () => {
    const resiviendo = await postput("Pedidos", contenido);
    if (resiviendo) {
      await PeticionGet();
      alert("Se agregó correctamente");
      return;
    }
    alert("ERROR");
  };

  const PeticionPut = async () => {
    const resiviendo = await postput("Pedidos/" + editar.id, contenido, "PUT");
    setEditar(null);
    if (resiviendo) {
      await PeticionGet();
    }
  };

  useEffect(() => {
    async function fetchClientes() {
      const clientesData = await getdelete("Clientes");
      if (clientesData.length > 0) {
        setClientes(clientesData);
      }
    }

    async function fetchProductos() {
      const productosData = await getdelete("Productos");
      if (productosData.length > 0) {
        setProductos(productosData);
      }
    }

    fetchClientes();
    fetchProductos();
  }, []);

  return (
    <Container>
      <h1>Pedidos</h1>
      <button onClick={() => setVerform(!verform)}>Agregar</button>

      <div className={verform ? "si" : "no"}>
        <form>
          <section className="x">
            <button onClick={() => setVerform(!verform)}>X</button>
          </section>
          <label>ID Clientes</label>
          <select
            value={contenido.id_clientes}
            onChange={(e) =>
              setContenido({ ...contenido, id_clientes: e.target.value })
            }
          >
            <option value="">Selecciona un cliente</option>
            {clientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nombre}
              </option>
            ))}
          </select>
          <label>ID Productos</label>
          <select
            value={contenido.id_productos}
            onChange={(e) =>
              setContenido({ ...contenido, id_productos: e.target.value })
            }
          >
            <option value="">Selecciona un producto</option>
            {productos.map((producto) => (
              <option key={producto.id} value={producto.id}>
                {producto.nombre}
              </option>
            ))}
          </select>
          <label>Métodos pago</label>
          <input
            value={contenido.metodos_pago}
            onChange={(e) =>
              setContenido({ ...contenido, metodos_pago: e.target.value })
            }
            type="text"
          />
          <label>Fecha</label>
          <input
            value={contenido.fecha}
            onChange={(e) =>
              setContenido({ ...contenido, fecha: e.target.value })
            }
            type="date"
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
                  <button onClick={() => PeticionDelete(ped.id)}>
                    Eliminar
                  </button>
                  <button
                    onClick={() => (setEditar(ped), setVerform(!verform))}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Pedidos;
