
import { useState, useEffect } from 'react';
import './EmpleadosSeleccionados.css';
function EmpleadosSeleccionados() {
    const [seleccionados, setSeleccionados] = useState([]);

    useEffect(() => {
        const storedSeleccionados = JSON.parse(localStorage.getItem('empleadosSeleccionados') || '[]');
        setSeleccionados(storedSeleccionados);
    }, []);

    return (
        <div className="seleccionados-container">
            <h2>Empleados Seleccionados</h2>
            <div className="seleccionados-grid">
                {seleccionados.map(empleado => (
                    <div key={empleado.idempleado} className="empleado-mini">
                        <img className="empleado-mini-img" src={`/src/assets/images/${empleado.foto}`} alt={`${empleado.nombres} ${empleado.apellidos}`} />
                        <p>{empleado.nombres} {empleado.apellidos}</p>
                        <p>{empleado.cargo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EmpleadosSeleccionados;