import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/informativa";
import Login from "./pages/dashboard/login";
import NavDash from "./pages/dashboard/navDash";
import Productos from "./pages/dashboard/productos";
import Usuarios from "./pages/dashboard/usuarios";
import Pedidos from "./pages/dashboard/pedidos";
import PerflUserNav from "./pages/dashboard/perflUserNav";
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
          <Route path="/dashboard/usuarios" element={<Usuarios />} />
          <Route path="/dashboard/pedidos" element={<Pedidos />} />
          <Route
            path="/dashboard/pedidos/:user"
            element={<Usuarios const id={"id"} />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
