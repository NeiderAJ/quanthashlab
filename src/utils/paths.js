// src/utils/paths.js

// Vite nos da acceso a la ruta base configurada en vite.config.js
// a través de esta variable de entorno especial.
const BASE_PATH = import.meta.env.BASE_URL;

/**
 * Construye una ruta pública correcta, considerando el subdirectorio de despliegue.
 * @param {string} assetPath - La ruta al recurso desde la raíz de la carpeta 'public'.
 * @returns {string} La URL completa y correcta para el recurso.
 */
export const publicUrl = (assetPath) => {
  // Elimina barras iniciales o finales para evitar duplicados
  const cleanedBasePath = BASE_PATH.endsWith('/') ? BASE_PATH.slice(0, -1) : BASE_PATH;
  const cleanedAssetPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  
  return `${cleanedBasePath}/${cleanedAssetPath}`;
};