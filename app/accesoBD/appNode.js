/**
 *  appNode.js es una gran CALLBACK que se ejecuta al producirse el evento  
 *  onClick sobre el ojeto tipo button llamado submit.
 */
document.getElementById('formBusqueda').addEventListener('submit', (event) => {
    event.preventDefault();

    const dni = document.getElementById('dni').value;
    const divResultado = document.getElementById('resultado');

    divResultado.innerHTML = '<p>Cargando...</p>';
// Promesa inicial:
    fetch(`http://localhost:3000/api/clientes/${encodeURIComponent(dni)}`)
        .then(response => {
            if (response.status === 404) {
                return response.json().then(res => { throw new Error(res.message); });
            }
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(res => {
            const cliente = res.data;
            divResultado.innerHTML = `
                <div class="card">
                    <h3>${cliente.nombre}</h3>
                    <p><strong>DNI:</strong> ${cliente.dni}</p>
                    <p><strong>Email:</strong> ${cliente.email}</p>
                </div>
            `;
        })
        .catch(err => {
            console.error('Error:', err);
            divResultado.innerHTML = `<p class="error">${err.message || 'Error al consultar datos en Node.js.'}</p>`;
        });
});