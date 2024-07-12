import  { useState, useEffect } from 'react';
import axios from 'axios';
import './Paises.css';

function Paises() {
    const [paises, setPaises] = useState([]);
    const [nuevoPais, setNuevoPais] = useState({
        codpais: '',
        pais: '',
        capital: '',
        area: '',
        poblacion: '',
        continente: ''
    });

    useEffect(() => {
        fetchPaises();
    }, []);

    const fetchPaises = () => {
        axios.get('https://servicios.campus.pe/paises.php')
            .then(response => setPaises(response.data))
            .catch(error => console.error('Error fetching paises:', error));
    };

    const handleInputChange = (e) => {
        setNuevoPais({ ...nuevoPais, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://servicios.campus.pe/paisesinsert.php', nuevoPais)
            .then(response => {
                console.log('País insertado:', response.data);
                fetchPaises();
                setNuevoPais({ codpais: '', pais: '', capital: '', area: '', poblacion: '', continente: '' });
            })
            .catch(error => console.error('Error inserting pais:', error));
    };

    return (
        <div className="paises-container">
            <h2>Países</h2>
            <table className="paises-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Código</th>
                    <th>País</th>
                    <th>Capital</th>
                    <th>Área</th>
                    <th>Población</th>
                    <th>Continente</th>
                </tr>
                </thead>
                <tbody>
                {paises.map(pais => (
                    <tr key={pais.idpais}>
                        <td>{pais.idpais}</td>
                        <td>{pais.codpais}</td>
                        <td>{pais.pais}</td>
                        <td>{pais.capital}</td>
                        <td>{pais.area}</td>
                        <td>{pais.poblacion}</td>
                        <td>{pais.continente}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h3>Insertar nuevo país</h3>
            <form onSubmit={handleSubmit} className="pais-form">
                <input name="codpais" value={nuevoPais.codpais} onChange={handleInputChange} placeholder="Código de país" required />
                <input name="pais" value={nuevoPais.pais} onChange={handleInputChange} placeholder="Nombre del país" required />
                <input name="capital" value={nuevoPais.capital} onChange={handleInputChange} placeholder="Capital" required />
                <input name="area" value={nuevoPais.area} onChange={handleInputChange} placeholder="Área" type="number" required />
                <input name="poblacion" value={nuevoPais.poblacion} onChange={handleInputChange} placeholder="Población" type="number" required />
                <input name="continente" value={nuevoPais.continente} onChange={handleInputChange} placeholder="Continente" required />
                <button type="submit">Insertar País</button>
            </form>
        </div>
    );
}

export default Paises;