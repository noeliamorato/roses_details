import { useEffect, useState } from "react";
import { getdelete } from "../../services/getdelete";
import { Estilos } from "../../styles/styled_dashclient/pedirclient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const PedirProd = () => {
  const [productos, setProductos] = useState([]);

  const [pedidos, setPedidos] = useState([]);

  const [eliminar, setEliminar] = useState();
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

  // Función para obtener los pedidos almacenados en localStorage al cargar el componente
  useEffect(() => {
    const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
    setPedidos(pedidosGuardados);
  }, []);
  // Función para agregar un pedido y guardarlos en localStorage
  const agregarPedido = (producto) => {
    const nuevosPedidos = [...pedidos, producto];
    setPedidos(nuevosPedidos);
    localStorage.setItem('pedidos', JSON.stringify(nuevosPedidos));
  };


  const eliminarPedido = () => {
    const nuevosPedidos = pedidos.filter((pedido) => pedido.id !== eliminar.id);
    setPedidos(nuevosPedidos);
    localStorage.setItem('pedidos', JSON.stringify(nuevosPedidos));
    setEliminar(null);
    setModal(false);
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
          <aside key={producto.id} className="cartilla">
            <img src={producto.imagen} alt={""} />
            <h4>{producto.nombre}</h4>
            <section>
              <p>{producto.precio}bs</p>
              <p>{producto.cantidad}</p>
            </section>
            <button onClick={() => agregarPedido(producto)}>
              Agregar <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </aside>
        ))}
      </div>

      <div className="mispedidos">
        <h3>Mis pedidos</h3>
        <section>
          <button>
            Enviar <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </section>
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
                <td>{index + 1}</td>
                <td>{pedido.nombre}</td>
                <td>{pedido.descripcion}</td>
                <td>{pedido.precio}</td>
                <td>{pedido.cantidad}</td>
                <td>
                  <button>ver</button>
                </td>
                <td>{pedido.colores}</td>
                <td>
                  <button onClick={() => mostrarModal(pedido)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
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
              <button onClick={() => eliminarPedido()}>Sí</button>
              <button onClick={() => setModal(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </Estilos>
  );
};

export default PedirProd;
