import './Inicio.css';

function Inicio() {
    return (
        <div className="inicio-gimnasio">
            <h1>Bienvenido a FitLife Gym</h1>
            <div className="banner-container">
                <img src="/src/assets/images/gym1.jpeg" alt="Equipamiento de gimnasio" className="banner-image" />
            </div>
            <h2>Transforma tu cuerpo, transforma tu vida</h2>
            <div className="features">
                <div className="feature">
                    <img src="/src/assets/images/area pesas.jpeg" alt="Pesas" />
                    <h3>Área de pesas</h3>
                </div>
                <div className="feature">
                    <img src="/src/assets/images/zona cardio.jpeg" alt="Cardio" />
                    <h3>Zona de cardio</h3>
                </div>
                <div className="feature">
                    <img src="/src/assets/images/clases grupales.jpeg" alt="Clases grupales" />
                    <h3>Clases grupales</h3>
                </div>
            </div>
            <MembresiasComponent />
        </div>
    );
}


function MembresiasComponent() {
    return (
        <div className="membresias">
            <h2>Nuestras Membresías</h2>
            <ul>
                <li>Membresía Básica - $29.99/mes</li>
                <li>Membresía Plus - $49.99/mes</li>
                <li>Membresía Premium - $79.99/mes</li>
            </ul>
            <button className="cta-button">¡Únete ahora!</button>
        </div>
    );
}

export default Inicio;