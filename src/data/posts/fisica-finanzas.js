// src/data/posts/fisica-finanzas.js

const contenidoPost = [
  {
    type: 'h1',
    content: 'Paradigmas del Modelado Financiero en la Última Década'
  },
  {
    type: 'p',
    style: 'disclaimer',
    content: 'Este artículo ofrece una síntesis de las corrientes dominantes en la modelización de finanzas cuantitativas, con un enfoque en los desarrollos post-crisis financiera y su relevancia emergente en el ecosistema DeFi.'
  },
  {
    type: 'h2',
    content: '1. Más Allá de Black-Scholes: La Era de la Volatilidad Estocástica'
  },
  {
    type: 'p',
    content: 'El modelo de Black-Scholes-Merton, aunque fundamental, asume una volatilidad constante, una premisa que los mercados reales refutan a diario a través del "volatility smile". La primera generación de modelos avanzados, como el de Heston (1993), introdujo la volatilidad como un proceso estocástico propio, permitiendo capturar de forma más realista la dinámica del mercado.'
  },
  {
    type: 'p',
    content: 'El modelo de Heston describe el precio del activo (S) y su varianza (v) mediante un sistema de ecuaciones diferenciales estocásticas:'
  },
  {
    type: 'math',
    content: 'dS_t = r S_t dt + \\sqrt{v_t} S_t dW_t^S \\\\ dv_t = \\kappa (\\theta - v_t) dt + \\xi \\sqrt{v_t} dW_t^v'
  },
  {
    type: 'p',
    content: 'Donde κ es la tasa de reversión a la media, θ es la varianza a largo plazo, y ξ es la "volatilidad de la volatilidad". La correlación entre los ruidos Wiener (dW) es clave para generar el "skew" de volatilidad.'
  },
  {
    type: 'h2',
    content: '2. La Revolución "Rough": La Volatilidad no es Suave'
  },
  {
    type: 'p',
    content: 'Un avance significativo de la última década, liderado por Jim Gatheral y otros, es la observación empírica de que la volatilidad no solo es estocástica, sino también "rugosa" (rough). Esto significa que la volatilidad histórica es mucho menos suave de lo que sugieren los modelos de difusión clásicos. Matemáticamente, esto se modela utilizando el movimiento Browniano fraccional (fBm) con un parámetro de Hurst (H) cercano a cero (típicamente H ≈ 0.1).'
  },
  {
    type: 'p',
    content: 'El modelo rHeston (Rough Heston) es un ejemplo. La idea central es que la volatilidad futura es fuertemente dependiente de la volatilidad pasada reciente, pero esta dependencia decae rápidamente. Esto ha demostrado tener un poder predictivo y de ajuste a los datos de mercado (especialmente para opciones de corto vencimiento) muy superior a los modelos anteriores.'
  },
  {
    type: 'h2',
    content: '3. El Ascenso del Machine Learning y los Modelos No-Paramétricos'
  },
  {
    type: 'p',
    content: 'Paralelamente, el auge de la computación y los datos ha impulsado el uso de Machine Learning (ML) y Redes Neuronales (NN) en las finanzas cuantitativas. En lugar de postular un modelo paramétrico (como Heston), se utilizan NNs para "aprender" la superficie de volatilidad implícita directamente de los precios de mercado.'
  },
  {
    type: 'list',
    items: [
      'Calibración de Modelos: Las NNs pueden calibrar modelos complejos a los precios de mercado en milisegundos, una tarea que tradicionalmente tomaba minutos u horas.',
      'Pricing de Derivados: Se entrenan redes para mapear directamente las características de un derivado (strike, vencimiento, etc.) a su precio, evitando la resolución de complejas PDEs.',
      'Deep Hedging: Un enfoque revolucionario donde una red neuronal aprende una estrategia de cobertura óptima directamente, minimizando el riesgo en presencia de costes de transacción y otros factores del mundo real.'
    ]
  },
  {
    type: 'p',
    content: 'Estos métodos "libres de modelo" no asumen una dinámica subyacente, sino que la infieren de los datos, ofreciendo una flexibilidad sin precedentes.'
  },
  {
    type: 'h2',
    content: '4. La Nueva Frontera: Modelando el Ecosistema DeFi'
  },
  {
    type: 'p',
    content: 'Las Finanzas Descentralizadas (DeFi) presentan un conjunto de desafíos y oportunidades únicos para los quants. Los modelos deben ahora dar cuenta de:'
  },
  {
    type: 'table',
    headers: ['Concepto DeFi', 'Desafío de Modelado Cuantitativo'],
    rows: [
      ['Automated Market Makers (AMMs)', 'Modelar el "impermanent loss" y las estrategias óptimas de provisión de liquidez. La dinámica de precios no sigue un paseo aleatorio simple.'],
      ['Protocolos de Préstamo (Lending)', 'Cuantificar el riesgo de liquidación en cascada y modelar las tasas de interés algorítmicas.'],
      ['Derivados On-Chain', 'Valorar opciones en un entorno con altas tasas de gas, latencia y oráculos de precios imperfectos.']
    ]
  },
  {
    type: 'p',
    content: 'La fórmula de un AMM de producto constante, como Uniswap V2, es engañosamente simple, pero su dinámica de riesgo es profundamente compleja:'
  },
  {
    type: 'math',
    content: 'x \\cdot y = k'
  },
  {
    type: 'p',
    content: 'La econofísica y el modelado basado en agentes son especialmente prometedores en este campo, ya que las reglas del sistema están codificadas y son transparentes, permitiendo simulaciones de alta fidelidad.'
  },
  {
    type: 'h2',
    content: 'Conclusión'
  },
  {
    type: 'p',
    style: 'final-note',
    content: 'La última década ha sido testigo de una transición desde modelos paramétricos elegantes hacia enfoques más empíricos, computacionalmente intensivos y basados en datos. La llegada de DeFi no es solo un nuevo mercado para aplicar viejos modelos, sino un catalizador para una nueva generación de teorías cuantitativas que deben incorporar la mecánica explícita de los protocolos en su núcleo.'
  }
];

export default contenidoPost;