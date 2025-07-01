// src/data/posts/geometria-diferencial.js

const contenidoPost = [
  {
    type: 'p',
    style: 'disclaimer', // Un estilo especial para la nota de autoría
    content: 'Nota del autor de QuantHashLab: El siguiente texto es una traducción, resumen y expansión del invaluable trabajo "Analysis, Geometry, and Modeling in Finance" de Pierre Henry-Labordère. El objetivo de este post es hacer más accesible y tangible este conocimiento, complementándolo con aplicaciones prácticas. Todo el crédito por la teoría original pertenece al autor.'
  },
  {
    type: 'h1',
    content: 'Introducción a la Geometría en Finanzas Cuantitativas'
  },
  {
    type: 'p',
    content: 'La modelización financiera moderna ha trascendido los modelos analíticos simples, adoptando herramientas de la física matemática y la geometría diferencial para abordar la complejidad de los mercados. Este enfoque permite obtener resultados más precisos en la valoración de opciones donde antes solo existían aproximaciones. Se presentan métodos como la descomposición espectral y la supersimetría, aplicados directamente al problema práctico de la valoración de derivados.'
  },
  {
    type: 'h2',
    content: 'El Problema Central: La Volatilidad Implícita'
  },
  {
    type: 'p',
    content: 'El modelo de Black-Scholes-Merton (BSM) es la piedra angular, pero su supuesto de volatilidad constante es una simplificación. En la práctica, el mercado asigna diferentes volatilidades a opciones con distintos precios de ejercicio (strikes) y vencimientos, creando lo que se conoce como la "superficie de volatilidad implícita". El verdadero desafío cuantitativo es "invertir" el modelo BSM: dado un precio de opción observado en el mercado, ¿cuál es la volatilidad (σ) que el mercado está implicando?'
  },
  {
    type: 'p',
    content: 'Dado que la fórmula de BSM no puede ser despejada algebraicamente para σ, se deben emplear métodos numéricos para encontrar la raíz de la siguiente ecuación:'
  },
  {
    type: 'math',
    content: 'f(\\sigma) = C_{BSM}(\\sigma) - C_{mercado} = 0'
  },
  {
    type: 'h3',
    content: 'Métodos Numéricos para Encontrar la Raíz'
  },
  {
    type: 'p',
    content: 'Existen varios métodos iterativos para resolver la ecuación anterior. La elección depende de un balance entre velocidad y estabilidad.'
  },
  {
    type: 'table', // Un nuevo tipo de bloque: tabla
    headers: ['Método', 'Característica Principal', 'Requiere'],
    rows: [
      ['Newton-Raphson', 'Convergencia muy rápida (cuadrática).', 'El cálculo de la derivada (Vega).'],
      ['Bisección', 'Convergencia más lenta pero garantizada.', 'Un intervalo inicial [a, b] donde f(a) y f(b) tengan signos opuestos.'],
    ]
  },
  {
    type: 'p',
    content: 'La derivada del precio de la opción con respecto a la volatilidad, conocida como Vega (ν), es fundamental para el método de Newton-Raphson. Su fórmula es:'
  },
  {
    type: 'math',
    content: '\\text{Vega} (\\nu) = S e^{-qT} \\phi(d_1) \\sqrt{T}'
  },
  {
    type: 'h2',
    content: 'Elección del Valor Inicial de σ'
  },
  {
    type: 'p',
    content: 'La elección de un buen valor inicial (σ₀) es crucial para la eficiencia de los métodos iterativos. Se pueden usar varios enfoques: valores típicos de mercado (e.g., 20-30% para acciones), la volatilidad histórica del activo, o fórmulas empíricas como la aproximación de Brenner-Subrahmanyam para opciones "at-the-money":'
  },
  {
    type: 'math',
    content: '\\sigma_0 \\approx \\frac{C_{market}}{S \\sqrt{T}} \\sqrt{2\\pi}'
  },
  {
    type: 'p',
    style: 'final-note',
    content: 'Este resumen cubre los pilares para el cálculo de la volatilidad implícita. El documento completo explora en profundidad la derivación de Vega, el cálculo estocástico y las aplicaciones avanzadas.'
  },
  {
    type: 'download_button', // Un nuevo tipo de bloque: botón de descarga
    label: 'Descargar Tratado Completo (PDF)',
    path: '/libros/pdfs/QuantPy-Completo.pdf' // <-- Asegúrate que este nombre coincida con tu archivo
  }
];

export default contenidoPost;