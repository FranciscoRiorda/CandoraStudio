import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // Estado para guardar las velas que traemos de la base de datos
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect ejecuta la carga apenas se abre la página en el navegador
  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al conectar con el backend:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#fdfbf7', minHeight: '100vh' }}>
      {/* Encabezado Simple */}
      <header style={{ textStyle: 'center', marginBottom: '40px', borderBottom: '1px solid #eadecc', paddingBottom: '20px' }}>
        <h1 style={{ color: '#4a3f35', textAlign: 'center' }}>Cándora Studio</h1>
        <p style={{ color: '#8c7e70', textAlign: 'center', fontStyle: 'italic' }}>Velas artesanales & Sales aromáticas</p>
      </header>

      {/* Estado de carga */}
      {loading ? (
        <p style={{ textAlign: 'center', color: '#8c7e70' }}>Cargando catálogo...</p>
      ) : (
        /* Grilla del Catálogo */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #f0e6d6',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'between'
            }}>
              {/* Imagen provisoria */}
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f5efe6',
                borderRadius: '4px',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#b5a89b'
              }}>
                {product.imageUrl ? <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : '🕯️ Sin imagen'}
              </div>

              <h3 style={{ color: '#4a3f35', margin: '0 0 10px 0' }}>{product.name}</h3>
              <p style={{ color: '#7a6c5f', fontSize: '14px', flexGrow: 1, margin: '0 0 15px 0' }}>{product.description}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#c29d70' }}>${product.price}</span>
                <span style={{ fontSize: '12px', color: product.stock > 0 ? '#606c38' : '#bc6c25' }}>
                  {product.stock > 0 ? `Stock: ${product.stock}` : 'Sin Stock'}
                </span>
              </div>
              
              <button style={{
                marginTop: '15px',
                backgroundColor: '#4a3f35',
                color: 'white',
                border: 'none',
                padding: '10px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;