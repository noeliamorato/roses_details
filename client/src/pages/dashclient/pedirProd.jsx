import { useEffect, useState } from "react";
import { getdelete } from "../../services/getdelete";
import { Estilos } from "../../styles/styled_dashclient/pedirclient";

const PedirProd = () => {
  const [productos, setProductos] = useState([]);

  const [pedidos, setPedidos] = useState([]);

  const [eliminar, setEliminar] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function fetchProductos() {
      const productosData = await getdelete("Productos");
      if (productosData.length > 0) {
        setProductos(productosData);
      }
    }

    fetchProductos();
  }, []);

  console.log(productos);
  const agregarPedido = (producto) => {
    setPedidos([...pedidos, producto]);
  };

  const eliminarPedido = () => {
    const nuevosPedidos = pedidos.filter((pedido) => pedido.id !== eliminar.id);
    setPedidos(nuevosPedidos);
    setEliminar(null); // Limpiar el producto seleccionado después de eliminar
    setModal(false); // Cerrar el modal después de eliminar
  };

  const mostrarModal = (producto) => {
    setEliminar(producto);
    setModal(true);
  };
  return (
    <Estilos>
      <h3>Productos Disponibles</h3>
      <div className="cartillas-container">
        {productos.map((producto) => (
          <div key={producto.id} className="cartilla">
            <img src={producto.imagen} alt={""} />
            <h4>{producto.nombre}</h4>
            <section>
              <p>{producto.precio}bs</p>
              <p>{producto.cantidad}</p>
            </section>
            <button onClick={() => agregarPedido(producto)}>
              Agregar pedido
            </button>
          </div>
        ))}
      </div>

      <div className="mispedidos">
        <h3>Mis pedidos</h3>
        <table>
          <thead>
            <th>Nº</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Imagen</th>
            <th>Colores</th>
            <th>Acciones</th>
          </thead>
          <tbody>
            {pedidos.map((pedido, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{pedido.nombre}</td>
                <td>{pedido.descripcion}</td>
                <td>{pedido.precio}</td>
                <td>{pedido.cantidad}</td>
                <td>
                  <button>ver</button>
                </td>
                <td>{pedido.colores}</td>
                <td>
                  <button onClick={() => mostrarModal(pedido)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h3>¿Estás seguro que quieres eliminar este producto?</h3>
            <div>
              <button onClick={eliminarPedido}>Sí</button>
              <button onClick={() => setModal(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </Estilos>
  );
};

export default PedirProd;
