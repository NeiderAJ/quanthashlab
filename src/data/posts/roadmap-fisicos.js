// src/data/posts/roadmap-fisicos.js

const contenidoRoadmap = [
  { type: 'h1', content: 'Guía Definitiva de Trading Cuantitativo' },
  { type: 'h3', content: 'Roadmap 2024/2025' },
  { type: 'p', style: 'author-line', content: 'Autor: Stat Arb | Twitter: @quant_arb' },
  { type: 'h2', content: 'Sobre la Guía' },
  { type: 'p', content: 'El trading cuantitativo tiene fama de ser muy difícil de comenzar, y francamente eso es cierto. Incluso para profesionales, puede ser difícil determinar qué recursos valen la pena. Por ello, esta guía sirve como un “recurso de recursos”, diseñada para resaltar todo el material útil disponible. Con tanto contenido disponible, puede ser difícil saber por dónde empezar. Por ello, este año hay tres versiones de la guía:' },
  { type: 'list', items: ['Edición Definitiva (Ultimate Edition)', 'Edición Integral (Comprehensive Edition)', 'Edición Esencial (Essential Edition)'] },
  { type: 'p', content: 'Las diferencias entre ellas se centran en el equilibrio entre ser exhaustivo y evitar abrumar al lector. Si quieres un directorio puro de todos los recursos valiosos, la Edición Definitiva es para ti. Hemos hecho lo mejor posible para organizar las secciones, pero no hay mucha orientación sobre cómo aprenderlo. La Edición Integral busca un equilibrio cuidadoso entre presentar los recursos más importantes directamente al lector, cubrir una variedad de material y guiar sobre cómo aprenderlo.' },
  { type: 'p', content: 'Finalmente, para quienes no saben por dónde empezar, la Edición Esencial está pensada para ustedes. Se enfoca fuertemente en cómo aprender el material y en ser lo más eficiente posible (cubriendo temas centrales en lugar de temas marginales).' },
  { type: 'p', content: 'La Edición Integral también incluye cobertura de prerrequisitos, al igual que la Definitiva. Si ya sabes los temas de fondo (matemáticas, informática, etc.), siéntete libre de comenzar con la Esencial e ir avanzando. De lo contrario, considera empezar por la Integral. Esto no sustituye el trabajo real y la implementación. La Edición Definitiva especialmente se enfoca en catalogar los recursos disponibles, pero no puedes aprenderlos simplemente leyéndolos a la fuerza. Solo pueden mostrarte lo que no sabes que no sabes. Para un aprendizaje real, debes involucrarte con el material mediante conversación, implementación y modificación propia.' },
  
  { type: 'h2', content: 'Sobre el Autor' },
  { type: 'p', content: 'Trabajo como investigador cuantitativo en el espacio de activos digitales y he liderado equipos en estrategias HFT y MFT. Tanto en mi propio fondo de cobertura como en uno más grande como jefe de investigación cuantitativa. No soy un veterano con décadas de experiencia, pero espero tener lo suficiente como para que valga la pena compartirlo.' },

  { type: 'h1', content: 'Capítulo 1: Aprendizaje Automático y Trading Algorítmico' },
  { type: 'p', content: 'Todo lo resaltado en rojo es opcional, ya que es más una repetición con añadidos del libro anterior en negro. Depende de qué tan rápido o intensamente quieras aprender. Deberías empezar con los primeros libros de texto y luego decidir si continuar con la sección de Aprendizaje Automático o la de Derivados primero. Puedes hacer ambas a la vez. Tienen intersecciones y me encantan ambas áreas, aunque tengo preferencia por la primera. Sin embargo, son bastante independientes y no requieren conocimiento de la otra para aprender.' },
  { type: 'blockquote', content: 'Nota legal: No soy responsable si incurres en piratería y no lo recomiendo porque está mal, pero he oído que algunas personas lo usan para verificar si el contenido no es basura antes de comprar. Además, comprar el libro físico te da una estantería impresionante y algunos creen que es mejor para leer, aunque yo disfruto tanto del PDF como del formato físico (comprado directamente al autor, por supuesto).' },
  { type: 'list_styled', title: 'Libros de Texto Principales', items: ['"Quantitative Trading" 2da edición', '"Algorithmic Trading" (opcional)', '"Machine Trading" (opcional)', '"Trading and Exchanges" - Puede omitirse si no te interesa la microestructura, pero es muy útil para evitar errores tontos.'] },
  { type: 'blockquote', content: 'Nota: Los libros de Ernest Chan no son muy profundos pero son una introducción sencilla. Puedes hojearlos. Especialmente "Algorithmic Trading" y "Machine Trading" son tan básicos que deberían omitirse a menos que seas 100% nuevo en el campo cuantitativo.' },
  { type: 'list_styled', title: 'Libros sobre Machine Learning (ML)', items: ['ML (1/3) Aprendizaje automático para trading algorítmico', 'ML (1/3) Dominar Python para Finanzas', 'ML (2) Finding Alphas: Enfoque cuantitativo (2da edición)', 'ML (4) Advanced Algorithmic Trading', 'ML (5) Advances in Financial Machine Learning', 'ML (6) The Elements of Statistical Learning', 'ML (7) Análisis de regresión con Python', 'ML (8) Estrategias de modelado de regresión'] },

  { type: 'h1', content: 'Capítulo 2: Derivados y Trading de Volatilidad' },
  { type: 'list_styled', title: 'Libros de Texto sobre Derivados', items: ['Derivados (1) Hull: Futures, Options and Other Derivatives', 'Derivados (1 Alternativo) Option Trading y Volatility Trading', 'Derivados (2) Positional Option Trading', 'Derivados (3) Trading Volatility'] },
  { type: 'list_styled', title: 'Recursos Adicionales sobre Derivados', items: ['Option Volatility and Pricing', 'Trading Options Greeks', 'The Volatility Surface', 'The Volatility Smile', 'Currency Derivatives', 'Exotic Options and Hybrids'] },

  { type: 'h1', content: 'Capítulo 3: Videos de YouTube' },
  { type: 'p', content: 'Aquí hay algunos excelentes videos de Ben Felix. Honestamente, recomiendo todos sus videos, pero estos abarcan puntos clave que todos los traders deben conocer. Están muy enfocados en modelos de valuación de activos y la Hipótesis del Mercado Eficiente (EMH). Aunque prefiero modelos de Valor Esperado (EV), sigue siendo importante conocer esto.' },

  { type: 'h1', content: 'Capítulo 4: Cursos' },
  { type: 'p', content: 'En Coursera, Robert Shiller tiene un curso llamado "Financial Markets". Es gratuito sin certificado (USD $50 con certificado). También está disponible en YouTube. Es una excelente introducción a las finanzas y los mercados en general, y enseña los fundamentos básicos.' },

  // ... (Se pueden añadir más capítulos)
  
  { type: 'p', style: 'final-note', content: 'La guía completa contiene muchos más recursos, incluyendo canales de YouTube, podcasts, plataformas de trading y temas avanzados. Descarga el PDF para acceder a todos los enlaces y al contenido completo.' },
  { type: 'download_button', label: 'Descargar Roadmap Completo (PDF)', path: '/libros/pdfs/Roadmap-Ultimate-Edition.pdf' }
];

export default contenidoRoadmap;