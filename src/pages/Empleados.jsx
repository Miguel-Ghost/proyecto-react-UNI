
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Empleados.css';

function Empleados() {
    const [empleados, setEmpleados] = useState([]);
    const [seleccionados, setSeleccionados] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://servicios.campus.pe/empleados.php')
            .then(response => setEmpleados(response.data))
            .catch(error => console.error('Error fetching empleados:', error));

        // Cargar empleados seleccionados del localStorage
        const storedSeleccionados = JSON.parse(localStorage.getItem('empleadosSeleccionados') || '[]');
        setSeleccionados(storedSeleccionados);
    }, []);

    const seleccionarEmpleado = (empleado) => {
        if (!seleccionados.find(e => e.idempleado === empleado.idempleado)) {
            const nuevosSeleccionados = [...seleccionados, empleado];
            setSeleccionados(nuevosSeleccionados);
            localStorage.setItem('empleadosSeleccionados', JSON.stringify(nuevosSeleccionados));
        }
    };

    const irASeleccionados = () => {
        navigate('/empleados-seleccionados');
    };

    return (
        <div className="empleados-container">
            <h2>Empleados</h2>
            <button onClick={irASeleccionados} className="ver-seleccionados-btn">Ver Seleccionados ({seleccionados.length})</button>
            <div className="empleados-grid">
                {empleados.map(empleado => (
                    <div key={empleado.idempleado} className="empleado-card" onClick={() => seleccionarEmpleado(empleado)}>
                        <img className="empleado-card-img" src={`/src/assets/images/${empleado.foto}`} alt={`${empleado.nombres} ${empleado.apellidos}`} />
                        <h3>{empleado.nombres} {empleado.apellidos}</h3>
                        <p>{empleado.cargo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Empleados;