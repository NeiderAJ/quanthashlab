import imag1 from './images/imag1.jpg';
import imag2 from './images/imag2.jpg';
import imag3 from './images/imag3.jpg';
import imag4 from './images/imag4.jpg';
import contenidoGeometria from '../../../data/posts/geometria-diferencial.js';
import contenidoFisica from '../../../data/posts/fisica-finanzas.js';



const lecturas = [
  {
    id: 1,
    titulo: "Quantitative Crypto",
    slug: "quantitative-crypto", //<-- Una cadena de texto simple, en minúsculas y sin espacios, ideal para las URLs
    descripcion: "¿Es posible aplicar los métodos cuantitativos al mundo DeFi?",
    imagen: imag1,
    contenido: [ // <-- NUEVO CAMPO: Contenido estructurado
      { 
        type: 'p', // 'p' para párrafo de texto
        content: 'La intersección entre las finanzas cuantitativas y el ecosistema de las criptomonedas, especialmente DeFi (Finanzas Descentralizadas), abre un universo de posibilidades. Los modelos estocásticos que tradicionalmente se han usado para valorar derivados en mercados tradicionales pueden adaptarse para analizar el comportamiento de activos digitales.' 
      },
      { 
        type: 'p', 
        content: 'Por ejemplo, la famosa ecuación de Black-Scholes, que se usa para la valoración de opciones europeas, tiene como base el movimiento Browniano geométrico.' 
      },
      { 
        type: 'math', // 'math' para una fórmula en bloque (display)
        content: '\\frac{\\partial V}{\\partial t} + \\frac{1}{2}\\sigma^2 S^2 \\frac{\\partial^2 V}{\\partial S^2} + rS \\frac{\\partial V}{\\partial S} - rV = 0' 
      },
      { 
        type: 'p', 
        content: 'Donde V es el precio de la opción, S es el precio del subyacente, t es el tiempo, σ es la volatilidad y r es la tasa de interés libre de riesgo. Adaptar estos conceptos al volátil y descentralizado mundo cripto no es trivial, pero es un campo de investigación activo y fascinante.' 
      }
    ]
  },
  {
    id: 2,
    titulo: "Biblioteca Quant",
    slug: "/biblioteca",
    descripcion: "Links a libros esenciales en la Econofísica.",
    imagen: imag2,
    contenido: [
      { type: 'p', content: 'Aquí va el contenido detallado sobre la Biblioteca Quant...' }
    ]
  },
  {
    id: 3,
    titulo: "Geometría diferencial y Análisis Cuantitativo",
    slug: "geometria-diferencial-analisis-cuantitativo",
    descripcion: "Se discute el libro 'Analysis, Geometry, and Modeling in Finance' de Henry-Labordère.",
    imagen: imag3,
    contenido: contenidoGeometria
  },
  {
  id: 4,
  titulo: "Física, modelado y finanzas cuantitativas",
  slug: "fisica-modelado-finanzas",
  descripcion: "Econofísica, métodos cuantitativos y DeFi.",
  imagen: imag4,
  contenido: contenidoFisica // <-- Aquí está el cambio
 },
];

export default lecturas;