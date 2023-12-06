import { useState, useEffect } from 'react';
import { getdelete } from '../../services/getdelete';
import Catalogo from './catalogo'; // Asegúrate de importar el componente Catalogo
import PedirProd from './pedirProd';// Asegúrate de importar el componente PedirProd

const VistaPrincipal = () => {
  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  // Obtener los productos disponibles
  useEffect(() => {
    async function fetchProductos() {
      const productosData = await getdelete('Productos');
      if (productosData.length > 0) {
        setProductos(productosData);
      }
    }

    fetchProductos();
  }, []);

  // Función para agregar un pedido
  const agregarPedido = (producto) => {
    setPedidos([...pedidos, producto]);
  };

  return (
    <div>
      <Catalogo productos={productos} agregarPedido={agregarPedido} />
      <PedirProd pedidos={pedidos} setPedidos={setPedidos} />
    </div>
  );
};

export default VistaPrincipal;
