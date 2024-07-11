import React from 'react';
import './styles/Footer.css'; // Ajusta la ruta según tu estructura

const Footer = () => {
    return (
        <footer>
            <div className="pie-logos">
                <img src="/cat-logo.png" className="logo" alt="Logo de Gatos" />
            </div>
            <div className="pie-texto">
                <h2 className="derechos">Desarrollado por Jesica Antonella Gomez</h2>
                <p className="mencion">Alura Latam 2024</p>
            </div>
        </footer>
    );
}

export default Footer;
