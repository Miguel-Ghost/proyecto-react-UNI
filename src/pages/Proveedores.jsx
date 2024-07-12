import { useState, useEffect } from 'react';
import axios from 'axios';
import './Proveedores.css';

function Proveedores() {
    const [proveedores, setProveedores] = useState([]);
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);

    useEffect(() => {
        axios.get('https://servicios.campus.pe/proveedores.php')
            .then(response => setProveedores(response.data))
            .catch(error => console.error('Error fetching proveedores:', error));
    }, []);

    const mostrarDetalles = (proveedor) => {
        setProveedorSeleccionado(proveedor);
    };

    return (
        <div className="proveedores-container">
            <h2>Proveedores</h2>
            <table className="proveedores-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre de la Empresa</th>
                    <th>País</th>
                    <th>Detalles</th>
                </tr>
                </thead>
                <tbody>
                {proveedores.map(proveedor => (
                    <tr key={proveedor.idproveedor}>
                        <td>{proveedor.idproveedor}</td>
                        <td>{proveedor.nombreempresa}</td>
                        <td>{proveedor.pais}</td>
                        <td>
                            <button onClick={() => mostrarDetalles(proveedor)}>👁️</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {proveedorSeleccionado && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setProveedorSeleccionado(null)}>&times;</span>
                        <h3>{proveedorSeleccionado.nombreempresa}</h3>
                        <p><strong>ID:</strong> {proveedorSeleccionado.idproveedor}</p>
                        <p><strong>Contacto:</strong> {proveedorSeleccionado.nombrecontacto}</p>
                        <p><strong>Cargo:</strong> {proveedorSeleccionado.cargocontacto}</p>
                        <p><strong>Dirección:</strong> {proveedorSeleccionado.direccion}</p>
                        <p><strong>Ciudad:</strong> {proveedorSeleccionado.ciudad}</p>
                        <p><strong>Región:</strong> {proveedorSeleccionado.region || 'N/A'}</p>
                        <p><strong>Código Postal:</strong> {proveedorSeleccionado.codigopostal}</p>
                        <p><strong>País:</strong> {proveedorSeleccionado.pais}</p>
                        <p><strong>Teléfono:</strong> {proveedorSeleccionado.telefono}</p>
                        <p><strong>Fax:</strong> {proveedorSeleccionado.fax || 'N/A'}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Proveedores;