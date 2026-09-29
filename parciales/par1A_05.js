/*
5. Dado un arreglo de strings `opcionesMenu = ['Inicio', 'Productos', 'Contacto']`, escriba las líneas de 
código necesarias utilizando `.map()`, Template Literals (``` ` ```) y `.join('\n')` para generar una cadena de
texto con una estructura HTML de lista desordenada `<ul class="menu">...</ul>`.
*/
opcionesMenu = ['Inicio', 'Productos', 'Contacto'];
const itemsHTML = opcionesMenu.map(cadaOpcion => `  <li>${cadaOpcion}</li>`);
const renderHTML = `<ul class="menu">\n   ${itemsHTML.join('\n')} </ul>`;
console.log(renderHTML);
console.log();

const opcionesSelect1 = ['Ma&ntilde;ana', 'Tarde', 'Noche','Tardecita','Ma&ntilde;ana muy temprano'];
const selectA = `<select id="sel1" class="opciones">\n
        ${opcionesSelect1.map(aux => `<option value=${aux}>${aux}</option>`).join('\n')}
        </select>`;
console.log(selectA);                

const fs = require('fs').promises;

async function writeFileExample() {
  try {
    // Write text to a file
    await fs.writeFile('ejemplo.txt', 'NUEVO CONTENIDO', 'utf8');

    // Write JSON data
    const data = { name: 'John', age: 30, city: 'New York' };
    await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');

    console.log('Archivo creado OK');
  } catch (err) {
    console.error('Error al crear archivo', err);
  }
}

writeFileExample();
