
import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';


export const accordionItems = [
  {
  title: 'Línea de tiempo del MB',
  content: (
    <>
      <p>Una cronología de los hitos clave en el descubrimiento y formalización del Movimiento Browniano, desde la botánica hasta las finanzas de vanguardia.</p>
      <table className="content-table">
        <thead>
          <tr>
            <th>Año</th>
            <th>Evento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1827</td>
            <td>Robert Brown observa el movimiento errático de partículas de polen en agua.</td>
          </tr>
          <tr>
            <td>1863</td>
            <td>James Clerk Maxwell sugiere que colisiones moleculares podrían explicar el fenómeno.</td>
          </tr>
          <tr>
            <td>1905</td>
            <td>Albert Einstein formula una teoría física del movimiento browniano basada en la estadística molecular.</td>
          </tr>
          <tr>
            <td>1906</td>
            <td>Marian Smoluchowski desarrolla una teoría similar de forma independiente.</td>
          </tr>
          <tr>
            <td>1908</td>
            <td>Jean Perrin confirma experimentalmente la teoría de Einstein, validando la existencia de átomos.</td>
          </tr>
          <tr>
            <td>1923</td>
            <td>Norbert Wiener define matemáticamente el proceso de Wiener, base formal del movimiento browniano.</td>
          </tr>
          <tr>
            <td>1951</td>
            <td>Paul Lévy y otros amplían la teoría de procesos estocásticos.</td>
          </tr>
          <tr>
            <td>1973</td>
            <td>Black, Scholes y Merton aplican el movimiento browniano a las finanzas en la valoración de opciones.</td>
          </tr>
          <tr>
            <td>Época actual</td>
            <td>Se desarrollan modelos más realistas: saltos, volatilidad estocástica, browniano fraccionario, etc.</td>
          </tr>
        </tbody>
      </table>
    </>
  )
},
  {
  title: 'Movimiento Browniano en Física',
  content: (
    <>
      <h3>Observación y naturaleza del movimiento browniano</h3>
      <p>El fenómeno conocido como movimiento browniano ha fascinado a científicos durante casi dos siglos debido a su carácter errático y aparentemente caótico. Se trata del comportamiento observado en partículas microscópicas, típicamente de tamaño aproximado a 10⁻⁴ cm, suspendidas en un fluido, como el agua o el aire. Estas partículas, al ser suficientemente pequeñas, se ven afectadas por las colisiones con las moléculas del medio circundante, las cuales están en constante movimiento térmico.</p>
      <p>Este tipo de movimiento fue documentado por primera vez en 1827 por el botánico escocés Robert Brown, quien, al observar granos de polen suspendidos en agua a través de un microscopio, notó que se desplazaban de forma continua y desordenada sin causa aparente. En su momento, Brown descartó causas vitales o biológicas para este comportamiento, ya que observó el mismo efecto en partículas inertes. Sin embargo, la naturaleza física subyacente del fenómeno permaneció sin explicación clara durante décadas.</p>
      <p>Fue hasta el año 1905 que Albert Einstein, en uno de sus artículos más influyentes, ofreció una explicación teórica basada en la estadística molecular. Einstein propuso que el movimiento errático observado era una consecuencia directa de las colisiones aleatorias e independientes entre las partículas suspendidas y las moléculas del fluido, las cuales, aunque invisibles al microscopio, ejercen una fuerza neta fluctuante que impulsa a la partícula en diferentes direcciones. Su análisis no solo ofrecía una explicación teórica al movimiento observado por Brown, sino que también permitía predecir cuantitativamente la magnitud del desplazamiento medio cuadrático de una partícula en función del tiempo, estableciendo así un vínculo entre la mecánica estadística y la observación experimental.</p>
      <p>Desde esta perspectiva, una partícula sólida suspendida en un fluido se encuentra en equilibrio térmico, pero experimenta una fuerza neta aleatoria resultado del desequilibrio momentáneo entre las innumerables colisiones de las moléculas del fluido con su superficie. Esta fuerza fluctuante es la responsable del movimiento irregular de la partícula, el cual no cesa mientras exista agitación térmica.</p>
      <p>El movimiento browniano, por tanto, se constituye como una manifestación directa de la estructura molecular de la materia. Es una evidencia empírica del comportamiento microscópico de los átomos y moléculas, y se ha convertido en una piedra angular tanto para el desarrollo de la física estadística como para la validación del modelo cinético de los gases.</p>
    
      <h3 style={{ marginTop: '2rem' }}>Descripción dinámica del movimiento browniano: la ecuación de Langevin</h3>

<p>Para profundizar en la dinámica de una partícula sometida al movimiento browniano, es necesario ir más allá de su desplazamiento medio y considerar las fuerzas que actúan sobre ella. Una de las formulaciones más influyentes es la introducida por Paul Langevin en 1908, conocida como la <strong>ecuación de Langevin</strong>.</p>
      
<p>Sea <strong><i>R(t)</i></strong> la posición de la partícula en el tiempo <strong><i>t</i></strong>, y <strong><i>V(t)</i></strong> su velocidad. La partícula esférica, con masa <strong><i>m</i></strong> y radio <strong><i>a</i></strong>, se encuentra inmersa en un fluido y experimenta dos tipos principales de fuerzas:</p>
<ul>
  <li>Una fuerza de fricción proporcional y opuesta a la velocidad, de la forma -<i>ζ </i><strong>V</strong>, donde <strong><i>ζ</i></strong> es el coeficiente de fricción.</li>
  <li>Una fuerza aleatoria <strong><i>F(t)</i></strong>, que representa el efecto agregado de las múltiples colisiones microscópicas con las moléculas del fluido. Esta fuerza varía aleatoriamente en el tiempo.</li>
</ul>

<p>Con estos elementos, la ecuación de movimiento toma la forma:</p>
<BlockMath math={'m \\frac{d\\mathbf{V}}{dt} = -\\zeta \\mathbf{V} + \\mathbf{F}(t)'} />

<p>Esta es la <strong>ecuación de Langevin</strong>. Describe cómo la velocidad de la partícula evoluciona bajo la influencia de una disipación determinista (fricción) y una agitación aleatoria (fuerza de ruido térmico).</p>
      
<p>El coeficiente de fricción <i>ζ</i> puede estimarse mediante la fórmula de Stokes para una partícula esférica de radio <i>a</i> en un fluido de viscosidad <i>η</i>:</p>
<BlockMath math={'\\zeta = 6\\pi \\eta a'} />

<p>Desde el punto de vista físico, esta formulación permite modelar el equilibrio dinámico entre pérdida de energía por fricción y ganancia de energía debido al bombardeo aleatorio del entorno. En el régimen estacionario, la distribución de velocidades converge a una distribución de Maxwell-Boltzmann, coherente con la termodinámica.</p>

<p>La ecuación de Langevin es un puente entre la mecánica clásica y la estadística, y ha dado origen a desarrollos fundamentales como el cálculo estocástico, el teorema de fluctuación-disipación y las ecuaciones de Fokker–Planck, que describen la evolución de la distribución de probabilidad asociada a estas trayectorias.</p>

</>
  )
},
  {
  title: 'Simulación numérica y propiedades estadísticas de la fuerza aleatoria',
  content: (
    <>
      <h3>Discretización estocástica: Euler frente a Wiener</h3>
      
      <h4 className="accordion-subsection-title">Limitaciones del método de Euler clásico</h4>
      <p>Cuando se desea resolver numéricamente la ecuación de Langevin, una estrategia común en ecuaciones diferenciales deterministas es emplear el método de Euler, que aproxima una integral como el producto entre el valor del integrando en el extremo inicial y el paso de integración <i>Δt</i>. En particular, para la ecuación de posición:</p>
      <BlockMath math={'\\mathbf{R}_{i+1} = \\mathbf{R}_i + \\int_{t_i}^{t_{i+1}} \\mathbf{V}(t) \\, dt \\approx \\mathbf{R}_i + \\mathbf{V}_i \\Delta t'} />
      <p>y para la velocidad:</p>
      <BlockMath math={'\\mathbf{V}_{i+1} = \\mathbf{V}_i + \\int_{t_i}^{t_{i+1}} \\left( -\\frac{\\zeta}{m} \\mathbf{V}(t) + \\frac{1}{m} \\mathbf{F}(t) \\right) dt'} />
      <p>Una tentación natural sería suponer que la fuerza aleatoria <i><b>F(t)</b></i> puede tratarse como una función suave y reemplazar su integral por una simple multiplicación:</p>
      <BlockMath math={'\\int_{t_i}^{t_{i+1}} \\mathbf{F}(t) \\, dt \\overset{?}{\\approx} \\mathbf{F}_i \\Delta t'} />
      <p>Sin embargo, esta aproximación es incorrecta. A diferencia de las funciones deterministas, la fuerza <i><b>F(t)</b></i> es un proceso estocástico de tipo ruido blanco, es decir, presenta valores altamente variables en escalas temporales infinitesimales y carece de correlación entre instantes distintos. Esto se expresa matemáticamente como:</p>
      <BlockMath math={'\\langle \\mathbf{F}(t) \\cdot \\mathbf{F}(t\') \\rangle = 2 k_B T \\zeta \\, \\delta(t - t\')'} />
      <p>Esto implica que el producto <i><b>F</b><sub>i</sub>Δt</i> no reproduce el comportamiento real de la integral, ya que esta fuerza no puede ser evaluada como un valor puntual constante. En rigor, la integral de <i><b>F(t)</b></i> debe tratarse como una integral estocástica y no como una Riemann clásica. Esta observación fundamental motiva el uso del formalismo de Wiener.</p>

      <h4 className="accordion-subsection-title">Reformulación mediante el proceso de Wiener</h4>
      <p>El proceso de Wiener <i>W(t)</i>, o movimiento browniano, es la herramienta matemática que permite representar de forma coherente el efecto acumulativo de una fuerza aleatoria delta-correlacionada. En una formulación numérica, este proceso se introduce a través de incrementos aleatorios Δ<b><i>W</i></b><sub>i</sub>, tales que:</p>
      <BlockMath math={'\\langle \\Delta \\mathbf{W}_i \\rangle = 0, \\qquad \\langle \\Delta \\mathbf{W}_i \\cdot \\Delta \\mathbf{W}_j \\rangle = 2 k_B T \\zeta \\Delta t \\, \\delta_{ij}'} />
      <p>Estos incrementos representan los impulsos acumulativos durante un intervalo temporal <i>Δt</i>, y su varianza está controlada por la temperatura y la fricción, como exige la relación de fluctuación-disipación.</p>
      <p>Así, la integral (de impulsos) estocástica de la fuerza se reemplaza por:</p>
      <BlockMath math={'\\int_{t_i}^{t_{i+1}} \\mathbf{F}(t) \\, dt \\longrightarrow \\Delta \\mathbf{W}_i'} />
      <p>Esto permite expresar la ecuación de Langevin discretizada de manera correcta como:</p>
      <BlockMath math={'\\begin{aligned} \\mathbf{V}_{i+1} &= \\left( 1 - \\frac{\\zeta}{m} \\Delta t \\right) \\mathbf{V}_i + \\frac{1}{m} \\Delta \\mathbf{W}_i \\\\ \\mathbf{R}_{i+1} &= \\mathbf{R}_i + \\mathbf{V}_i \\Delta t \\end{aligned}'} />
      <p>Esta forma asegura que la evolución temporal incorpore correctamente tanto la disipación como las fluctuaciones térmicas, respetando las propiedades estadísticas fundamentales del sistema.</p>

      <h4 className="accordion-subsection-title">Comentario final</h4>
      <p>Es fundamental destacar que la fuerza <i><b>F(t)</b></i> no es una función suave, sino una variable aleatoria con estructura matemática específica. Su tratamiento riguroso requiere el uso de cálculo estocástico, donde el proceso de Wiener es el análogo estocástico del incremento infinitesimal. Sin esta reinterpretación, cualquier integración numérica carecería de validez física y conduciría a resultados erróneos respecto a las propiedades térmicas del sistema simulado.</p>
      
      <hr style={{margin: '2rem 0'}} />

      <h3>Simulación del movimiento browniano en 3D mediante integración estocástica</h3>
      <p>En este capítulo se implementa una simulación numérica completa del movimiento browniano tridimensional de múltiples partículas, utilizando la ecuación de Langevin e integración temporal tipo Euler con ruido térmico. La simulación está desarrollada en Python y ejecutada en Google Colab.</p>

      <h4 className="accordion-subsection-title">Ecuación de Langevin discretizada</h4>
      <p>La versión numérica de la ecuación de Langevin, en una dimensión cualquiera, es:</p>
      <BlockMath math={'\\mathbf{V}_{i+1} = \\left( 1 - \\frac{\\zeta}{m} \\Delta t \\right) \\mathbf{V}_i + \\frac{1}{m} \\Delta \\mathbf{W}_i'} />
      <BlockMath math={'\\mathbf{R}_{i+1} = \\mathbf{R}_i + \\mathbf{V}_i \\Delta t'} />
      <p>donde Δ<b><i>W</i></b><sub>i</sub> ~ <i>N(0, 2k<sub>B</sub>TζΔt)</i> representa el impulso aleatorio acumulado en el intervalo <i>Δt</i>, modelado como un incremento del proceso de Wiener.</p>

      <h4 className="accordion-subsection-title">Implementación computacional</h4>
      <p>La simulación se lleva a cabo para <i>N = 1000</i> partículas en <i>d = 3</i> dimensiones durante 500 pasos de tiempo. En cada paso:</p>
      <ol>
        <li>Se generan vectores aleatorios gausianos para modelar la fuerza estocástica.</li>
        <li>Se actualizan las velocidades y posiciones según la discretización anterior.</li>
        <li>Se almacenan los resultados para visualización posterior.</li>
      </ol>
    </>
  )
},
  
];