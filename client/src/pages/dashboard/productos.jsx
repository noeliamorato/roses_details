import { useEffect, useState } from "react";
import { getdelete } from "../../services/getdelete";
import { postput } from "../../services/postPut";
import { Container } from "../../styles/styled_dashboard/contenedor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Productos = () => {
  const [verform, setVerform] = useState(false);
  const [editar, setEditar] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [contenido, setContenido] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
    id_categorias: "",
    imagen: "",
    colores: "",
  });

  useEffect(() => {
    if (editar) {
      setContenido({
        nombre: editar.nombre || "",
        descripcion: editar.descripcion || "",
        precio: editar.precio || "",
        cantidad: editar.cantidad || "",
        id_categorias: editar.id_categorias || "",
        imagen: editar.imagen || "",
        colores: editar.colores || "",
      });
    } else {
      setContenido({
        nombre: "",
        descripcion: "",
        precio: "",
        cantidad: "",
        id_categorias: "",
        imagen: "",
        colores: "",
      });
    }
  }, [editar]);

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
    const resiviendo = await getdelete("Productos/" + id, "DELETE");
    if (resiviendo === 1) {
      alert("Eliminado");
      await PeticionGet();
    }
  };

  const PeticionPost = async () => {
    const resiviendo = await postput("Productos", contenido);
    if (resiviendo) {
      setContenido({nombre: "",
      descripcion: "",
      precio: "",
      cantidad: "",
      id_categorias: "",
      imagen: "",
      colores: "",});
      await PeticionGet();
      alert("Se agregó correctamente");
      return;
    }
    alert("ERROR");
  };

  const PeticionPut = async () => {
    const resiviendo = await postput(
      "Productos/" + editar.id,
      contenido,
      "PUT"
    );
    setEditar(null);
    if (resiviendo) {
      await PeticionGet();
    }
  };

  useEffect(() => {
    async function fetchCategorias() {
      const categoriasdata = await getdelete("Categorias");
      if (categoriasdata.length > 0) {
        setCategorias(categoriasdata);
      }
    }

    fetchCategorias();
  });

  return (
    <Container>
      <h1>Productos</h1>
      <button onClick={() => setVerform(!verform)}>Agregar</button>

      <div className={verform ? "si" : "no"}>
        <form>
        <section className="x">
            <button onClick={() => setVerform(!verform)}>X</button>
          </section>
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
          <label>Precio</label>
          <input
            value={contenido.precio}
            onChange={(e) =>
              setContenido({ ...contenido, precio: e.target.value })
            }
            type="text"
          />
          <label>Cantidad</label>
          <input
            value={contenido.cantidad}
            onChange={(e) =>
              setContenido({ ...contenido, cantidad: e.target.value })
            }
            type="text"
          />
          <label>ID Categorias</label>
          <select
            value={contenido.id_categorias}
            onChange={(e) =>
              setContenido({ ...contenido, id_categorias: e.target.value })
            }
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((categorias) => (
              <option key={categorias.id} value={categorias.id}>
                {categorias.nombre}
              </option>
            ))}
          </select>
          <label>Imagen</label>
          <input
            value={contenido.imagen}
            onChange={(e) =>
              setContenido({ ...contenido, imagen: e.target.value })
            }
            type="text"
          />
          <label>Colores</label>
          <input
            value={contenido.colores}
            onChange={(e) =>
              setContenido({ ...contenido, colores: e.target.value })
            }
            type="text"
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
        <thead>
          <th>id</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>id Categorias</th>
          <th>Imagen</th>
          <th>Colores</th>
          <th>Acciones</th>
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
                  <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                  <button
                    onClick={() => (setEditar(prod), setVerform(!verform))}
                  >
                    <FontAwesomeIcon icon={faPencil} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Productos;
