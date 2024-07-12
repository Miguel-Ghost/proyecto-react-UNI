import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainFooter from './common/MainFooter'
import MainHeader from './common/MainHeader'
import MainNav from './common/MainNav'
import Inicio from './pages/Inicio'
import Pedidos from "./pages/Pedidos.jsx";
import PedidoDetalle from "./pages/PedidoDetalle.jsx";
import EmpleadosSeleccionados from "./pages/EmpleadosSeleccionados.jsx";
import Paises from "./pages/Paises.jsx";
import Empleados from "./pages/Empleados.jsx";
import Proveedores from "./pages/Proveedores.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader/>
        <MainNav/>
        
        <main>
          <Routes>

            <Route path='/' element={<Inicio/>} />
            <Route path='/pedidos' element={<Pedidos/>} />
            <Route path='/pedido/:idpedido' element={<PedidoDetalle/>} />
            <Route path='/empleados' element={<Empleados/>} />
            <Route path='/empleados-seleccionados' element={<EmpleadosSeleccionados/>} />
            <Route path='/paises' element={<Paises/>} />
            <Route path='/proveedores' element={<Proveedores/>} />

          </Routes>
        </main>

        <MainFooter/>
      </BrowserRouter>
    </>
  )
}

export default App
