import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/informativa";
import Login from "./pages/dashboard/login";
import NavDash from "./pages/dashboard/navDash";
import Productos from "./pages/dashboard/productos";
import Pedidos from "./pages/dashboard/pedidos";
import Categorias from "./pages/dashboard/categorias";
import PerflUserNav from "./pages/dashboard/perflUserNav";
import Clientes from "./pages/dashboard/clientes";
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
    </HashRouter>
  );
}

export default App;
