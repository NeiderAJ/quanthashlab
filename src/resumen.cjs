// resumen.js
const fs = require('fs');
const path = require('path');

const EXTENSIONES_VALIDAS = ['.js', '.jsx', '.css'];
const ARCHIVO_SALIDA = 'resumen_proyecto.txt';

function recorrerDirectorio(dir, archivos = []) {
  const entradas = fs.readdirSync(dir, { withFileTypes: true });

  for (const entrada of entradas) {
    const rutaCompleta = path.join(dir, entrada.name);
    if (entrada.isDirectory()) {
      recorrerDirectorio(rutaCompleta, archivos);
    } else if (EXTENSIONES_VALIDAS.includes(path.extname(entrada.name))) {
      archivos.push(rutaCompleta);
    }
  }

  return archivos;
}

function guardarResumen() {
  const rutaRaiz = __dirname;
  const archivos = recorrerDirectorio(rutaRaiz);
  let contenido = '';

  archivos.forEach((archivo) => {
    const data = fs.readFileSync(archivo, 'utf8');
    contenido += `\n\n// ========================================\n`;
    contenido += `// ARCHIVO: ${path.relative(rutaRaiz, archivo)}\n`;
    contenido += `// ========================================\n`;
    contenido += data;
  });

  const salida = path.join(rutaRaiz, ARCHIVO_SALIDA);
  fs.writeFileSync(salida, contenido, 'utf8');
  console.log(`Resumen guardado en: ${salida}`);
}

guardarResumen();
