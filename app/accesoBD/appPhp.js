document.getElementById('formBusqueda').addEventListener('submit', (event) => {
    event.preventDefault();

    const dni = document.getElementById('dni').value;
    const divResultado = document.getElementById('resultado');

    divResultado.innerHTML = '<p>Cargando...</p>';

    fetch(`buscar.php?dni=${encodeURIComponent(dni)}`)
    //fetch(`buscar.php?dni=${dni}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(res => {
            if (res.status === 'success') {
                const cliente = res.data;
                divResultado.innerHTML = `
                    <div class="card">
                        <h3>${cliente.nombre}</h3>
                        <p><strong>DNI:</strong> ${cliente.dni}</p>
                        <p><strong>Email:</strong> ${cliente.email}</p>
                    </div>
                `;
            } else {
                divResultado.innerHTML = `<p class="error">${res.message}</p>`;
            }
        })
        .catch(err => {
            console.error('Error:', err);
            divResultado.innerHTML = `<p class="error">Error al consultar datos en PHP.</p>`;
        });
});