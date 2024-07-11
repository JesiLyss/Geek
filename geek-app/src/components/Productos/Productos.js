import React from 'react';
import './styles/Productos.css'; 

const Productos = () => {
    return (
        <section className="contenedor">
            <h1 className="titulo">Mis Productos</h1>
            <section className="cards-contenedor" data-cards-contenedor>

            </section>
            <div className="mensajes" data-error>
                <h2>¡Lo siento!</h2>
                <p>parece que no hay productos</p>
                <img src="/oops-error.png" className="imagen-error" alt="Error" />
            </div>
        </section>
    );
}

export default Productos;
