import React, { useState } from 'react';
import './styles/Formulario.css'; // Ajusta la ruta según tu estructura

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [imagen, setImagen] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica para agregar productos
        // Puedes usar useState o un contexto para manejar el estado globalmente
    }

    const handleLimpiar = () => {
        setNombre('');
        setPrecio('');
        setImagen('');
    }

    return (
        <section className="formulario">
            <form className="formulario-campo" onSubmit={handleSubmit}>
                <h1 className="titulo">Agregar<br />Producto:</h1>
                <input type="text" placeholder="nombre.." value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="text" placeholder="precio.." value={precio} onChange={(e) => setPrecio(e.target.value)} />
                <input type="text" placeholder="imagen.." value={imagen} onChange={(e) => setImagen(e.target.value)} />
                <fieldset className="botones">
                    <button className="boton-enviar boton" type="submit">Enviar</button>
                    <button className="boton-limpiar boton" type="button" onClick={handleLimpiar}>Limpiar</button>
                </fieldset>
            </form>
        </section>
    );
}

export default Formulario;
