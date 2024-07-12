import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Pedidos.css';

function Pedidos() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        axios.get('https://servicios.campus.pe/pedidos.php')
            .then(response => setPedidos(response.data))
            .catch(error => console.error('Error fetching pedidos:', error));
    }, []);

    return (
        <div className="pedidos-container">
            <h2>Pedidos</h2>
            <table className="pedidos-table">
                <thead>
                <tr>
                    <th>ID Pedido</th>
                    <th>Fecha Pedido</th>
                    <th>Usuario</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Detalles</th>
                </tr>
                </thead>
                <tbody>
                {pedidos.map(pedido => (
                    <tr key={pedido.idpedido}>
                        <td >{pedido.idpedido}</td>
                        <td>{new Date(pedido.fechapedido).toLocaleDateString()}</td>
                        <td>{pedido.usuario}</td>
                        <td>{pedido.nombres}</td>
                        <td>${parseFloat(pedido.total).toFixed(2)}</td>
                        <td>
                            <Link to={`/pedido/${pedido.idpedido}`} className="ver-detalles-link:hover">Ver detalles</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Pedidos;