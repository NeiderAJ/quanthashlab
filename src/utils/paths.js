// src/utils/paths.js
const BASE_URL = import.meta.env.BASE_URL;

export const publicUrl = (path) => {
  // Si la ruta ya es absoluta (http), no la toques
  if (path.startsWith('http')) {
    return path;
  }
  // Une la base y la ruta, y limpia las barras dobles
  return (BASE_URL + path).replace(/\/\/+/g, '/');
};