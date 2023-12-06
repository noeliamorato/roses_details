import { useEffect, useState } from "react";
import { getdelete } from "../../services/getdelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Cata } from "../../styles/styled_dashclient/cata";

const Catalogo = () => {
  const [productos, setProductos] = useState([]);

  const [pedidos, setPedidos] = useState([]);

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

  return (
    <Cata>
      <h3>Catálogo de los productos</h3>
      <section>
        <select name="" id="">
          <option value="">Categorías</option>
          <option value="rosas eternas">Rosas eternas</option>
          <option value="cajas explosivas">Cajas explosivas</option>
          <option value="rosas naturales">Rosas naturales</option>
        </select>
        <button>Ver</button>
      </section>
      <div className="cartillas-container">
        {productos.map((producto) => (
          <aside key={producto.id} className="cartilla">
            <img src={producto.imagen} alt={""} />
            <h4>{producto.nombre}</h4>
            <p>{producto.descripcion}</p>
            <section>
              <p>{producto.precio}bs</p>
              <p>{producto.cantidad}</p>
            </section>
            <p>{producto.colores}</p>

            <button onClick={() => agregarPedido(producto)}>
              Agregar <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </aside>
        ))}
      </div>
    </Cata>
  );
};

export default Catalogo;
