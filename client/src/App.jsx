import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/informativa";
import Login from "./pages/dashboard/login";
import NavDash from "./pages/dashboard/navDash";
import Productos from "./pages/dashboard/productos";
import Pedidos from "./pages/dashboard/pedidos";
import Categorias from "./pages/dashboard/categorias";
import Clientes from "./pages/dashboard/clientes";
import NavClient from "./pages/dashclient/navClient";
import Catalogo from "./pages/dashclient/catalogo";
import PedirProd from "./pages/dashclient/pedirProd";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/dashboard/" element={<NavDash />}>
          <Route path="/dashboard/productos" element={<Productos />} />
          <Route path="/dashboard/clientes" element={<Clientes />} />
          <Route path="/dashboard/pedidos" element={<Pedidos />} />
          <Route path="/dashboard/categorias" element={<Categorias />} />
          <Route
            path="/dashboard/pedidos/:user"
            element={<Clientes const id={"id"} />}
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/dashclient/" element={<NavClient/>}>
          <Route path="/dashclient/catalogo" element={<Catalogo/>}></Route> 
          <Route path="/dashclient/pedirProd" element={<PedirProd/>}></Route> 
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
