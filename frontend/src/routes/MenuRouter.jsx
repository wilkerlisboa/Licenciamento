import { BrowserRouter, Routes, Route } from "react-router-dom";

import Licencas from "../pages/Licencas";   
import Lojas from "../pages/Lojas";
import Usuarios from "../pages/Usuarios";
import PrivateRoute from "./PrivateRouter";
import Login from "../pages/Login";

export default function MenuRouter() {

  return (
    <BrowserRouter>
      <Routes>
        {/* rotas públicas */}
        <Route path="/" element={<Login />} />

        {/* rotas privadas */}
        <Route path="/usuarios" element={
            <PrivateRoute>
                <Usuarios />
            </PrivateRoute>} />

        <Route path="/lojas" element={
            <PrivateRoute>
                <Lojas />
            </PrivateRoute>} />
        <Route path="/licencas" element={
            <PrivateRoute>
                <Licencas />
            </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}