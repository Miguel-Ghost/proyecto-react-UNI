import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PedidoDetalle() {
    const { idpedido } = useParams();
    const [detalles, setDetalles] = useState([]);

    useEffect(() => {
        axios.get(`https://servicios.campus.pe/pedidosdetalle.php?idpedido=${idpedido}`)
            .then(response => setDetalles(response.data))
            .catch(error => console.error('Error fetching detalles:', error));
    }, [idpedido]);

    return (
        <div>
            <h2>Detalles del Pedido {idpedido}</h2>
            <div className="grid-container">
                {detalles.map(detalle => (
                    <div key={detalle.idproducto} className="grid-item">
                        <img src={detalle.imagenchica} alt={detalle.nombre} />
                        <h3>{detalle.nombre}</h3>
                        <p>Precio: ${parseFloat(detalle.precio).toFixed(2)}</p>
                        <p>Cantidad: {detalle.cantidad}</p>
                        <p>Detalle: {detalle.detalle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PedidoDetalle;