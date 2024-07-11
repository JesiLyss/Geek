import React, { useState } from 'react';
import './styles/styles.css';

function App() {
  const [products, setProducts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nombre = event.target.elements.nombre.value;
    const precio = event.target.elements.precio.value;
    const imagen = event.target.elements.imagen.value;

    if (nombre && precio && imagen) {
      const newProduct = {
        id: Date.now(),
        nombre,
        precio,
        imagen,
      };

      setProducts([...products, newProduct]);
      event.target.reset();
    }
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <header>
        <img src="cat-logo.png" className="logo" alt="Logo de Gatos"/>
      </header>
      <main>
        <section className="contenedor">
          <h1 className="titulo">Mis Productos</h1>
          <section className="cards-contenedor">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="card">
                  <img src={product.imagen} alt={product.nombre} />
                  <h2 className="card-title">{product.nombre}</h2>
                  <p className="card-price">${product.precio}</p>
                  <button className="boton-limpiar boton" onClick={() => handleDelete(product.id)}>
                    Eliminar
                  </button>
                </div>
              ))
            ) : (
              <div className="mensajes" data-error>
                <h2>¡Lo siento!</h2>
                <p>parece que no hay productos</p>
                <img src="oops-error.png" className="imagen-error" alt="Error"/>
              </div>
            )}
          </section>
        </section>
        <section className="formulario">
          <form className="formulario-campo" onSubmit={handleSubmit}>
            <h1 className="titulo">Agregar<br />Producto:</h1>
            <input id="nombre" type="text" placeholder="nombre.." name="nombre" />
            <input id="precio" type="text" placeholder="precio.." name="precio" />
            <input id="imagen" type="text" placeholder="imagen URL.." name="imagen" />
            <fieldset className="botones">
              <button className="boton-enviar boton" type="submit" value="Enviar">Enviar</button>
              <button className="boton-limpiar boton" type="button" onClick={() => setProducts([])}>
                Limpiar
              </button>
            </fieldset>
          </form>
        </section>
      </main>
      <footer>
        <div className="pie-logos">
          <img src="cat-logo.png" className="logo" alt="Logo de Gatos"/>
        </div>
        <div className="pie-texto">
          <h2 className="derechos">Desarrollado por Jesica Antonella Gomez</h2>
          <p className="mencion">Alura Latam 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

