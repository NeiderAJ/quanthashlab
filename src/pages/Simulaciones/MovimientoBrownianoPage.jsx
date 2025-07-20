/// src/pages/Simulaciones/MovimientoBrownianoPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlockMath, InlineMath } from 'react-katex';
import { publicUrl } from '../../utils/paths';

// --- COMPONENTES REUTILIZABLES ---
import LabCell from '../../components/LabCell';
import CodeBlock from '../../components/CodeBlock';
import CollapsibleCell from '../../components/CollapsibleCell';
import Accordion from '../../components/Accordion';

// --- DATOS Y ESTILOS ---
// CORRECCIÓN: Apuntamos a la carpeta 'simulaciones/contenido' que está dentro de 'src'
import { accordionItems } from '../../simulaciones/contenido/movimientoBrownianoContenido.jsx';
import { accordionItems2 } from '../../simulaciones/contenido/movimientoBrownianoFinanzasContenido.jsx';
import './Simulaciones.css';


const MovimientoBrownianoPage = () => {
  const [theme, setTheme] = useState('dark');
  const navigate = useNavigate();

  const pythonCode = `# 🧩 Librerías necesarias
%matplotlib inline
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib import animation
from IPython.display import HTML

import matplotlib as mpl
mpl.rcParams['animation.embed_limit'] = 53  # en MB, puedes ajustar a 50, 100, etc.

# 🎯 Parámetros de simulación
dim = 3             # Dimensión: 3D
nump = 1000         # Número de partículas
nums = 500         # Número de pasos de tiempo (sirve entre otras cosas para hacer que la generación del vídeo sea posible)
dt = 0.05           # Paso temporal
zeta = 1.0          # Coeficiente de fricción
m = 1.0             # Masa de la partícula
kBT = 1.0           # Temperatura (kB*T)
std = np.sqrt(2 * kBT * zeta * dt)  # Desviación estándar de los impulsos
np.random.seed(0)

# 🧱 Inicialización de matrices
R = np.zeros((nump, dim))
V = np.zeros((nump, dim))
W = np.zeros((nump, dim))
Rs = np.zeros((nums, nump, dim))  # Posiciones
Vs = np.zeros((nums, nump, dim))  # Velocidades
Ws = np.zeros((nums, nump, dim))  # Impulsos (fuerzas)
time = np.zeros(nums)

# 🔁 Bucle principal de simulación
for i in range(nums):
    W = std * np.random.randn(nump, dim)  # Fuerza aleatoria
    R = R + V * dt                        # Actualiza posición
    V = V * (1 - zeta / m * dt) + W / m   # Actualiza velocidad
    Rs[i, :, :] = R
    Vs[i, :, :] = V
    Ws[i, :, :] = W
    time[i] = i * dt

# 📈 Visualización 2D: eje X vs Y
box = 80
fig, ax = plt.subplots(figsize=(7.5, 7.5))
ax.set_xlim(-box / 2, box / 2)
ax.set_ylim(-box / 2, box / 2)
ax.set_xlabel(r"$R_x$", fontsize=16)
ax.set_ylabel(r"$R_y$", fontsize=16)
for n in range(nump):
    ax.plot(Rs[:, n, 0], Rs[:, n, 1], alpha=0.3)
plt.title("Trayectorias 2D de partículas brownianas")
plt.grid(True)
plt.show()

`;

const pythonCode2 = `# 📈 Visualización 3D
box = 80
fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection='3d')
ax.set_xlim(-box / 2, box / 2)
ax.set_ylim(-box / 2, box / 2)
ax.set_zlim(-box / 2, box / 2)
ax.set_xlabel("x", fontsize=14)
ax.set_ylabel("y", fontsize=14)
ax.set_zlabel("z", fontsize=14)
ax.view_init(elev=12, azim=120)
for n in range(nump):
    ax.plot(Rs[:, n, 0], Rs[:, n, 1], Rs[:, n, 2], alpha=0.3)
plt.title("Trayectorias 3D de partículas brownianas")
plt.show()

`;

const pythonCode3 = `from google.colab import drive
drive.mount('/content/drive')

import os

video_dir = '/content/drive/My Drive/Colab_Notebooks/BookQUantPy/SimulacionMovimientoBrowniano'
os.makedirs(video_dir, exist_ok=True)  # crea el directorio si no existe
video_path = os.path.join(video_dir, 'langevin_simulacion.mp4')
anim.save(video_path, fps=30, dpi=100, writer='ffmpeg')


# 🎞️ Animación de una partícula
fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection='3d')
ax.set_xlim(-box / 2, box / 2)
ax.set_ylim(-box / 2, box / 2)
ax.set_zlim(-box / 2, box / 2)
ax.set_xlabel("x", fontsize=14)
ax.set_ylabel("y", fontsize=14)
ax.set_zlabel("z", fontsize=14)
ax.view_init(elev=12, azim=120)

n = 0  # Partícula a animar
particles, = ax.plot([], [], [], 'ro', ms=8, alpha=0.5)
title = ax.text(-box/2, box/2, box/2, "", transform=ax.transAxes, va='center')
line, = ax.plot([], [], [], 'b', lw=1.0, alpha=0.8)

def init():
    particles.set_data([], [])
    particles.set_3d_properties([])
    line.set_data([], [])
    line.set_3d_properties([])
    title.set_text("")
    return particles, title, line

def animate(i):
    title.set_text(f"$t = {time[i]:.2f}$")
    line.set_data(Rs[:i+1, n, 0], Rs[:i+1, n, 1])
    line.set_3d_properties(Rs[:i+1, n, 2])
    particles.set_data([Rs[i, n, 0]], [Rs[i, n, 1]])
    particles.set_3d_properties([Rs[i, n, 2]])
    return particles, title, line

anim = animation.FuncAnimation(fig, animate, init_func=init, frames=nums,
                               interval=10, blit=True, repeat=False)

HTML(anim.to_jshtml())


`;

  return (
    <div className={`lab-page ${theme}`}>
      <header className="lab-page-header">
        <button onClick={() => navigate(-1)} className="back-button">← Volver</button>
        <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} className="theme-toggle-button">
          {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </header>
      
      <div className="lab-cells-container">
        <LabCell>
          <h1>Fundamentos del Movimiento Browniano</h1>
          <Accordion items={accordionItems} />
        </LabCell>

  <CollapsibleCell title="Código: Simulación y Gráfico 2D" defaultOpen={true} >
    <CodeBlock initialCode={pythonCode} />
  </CollapsibleCell>

  <CollapsibleCell title="Resultado: Visualización 2D" className="output-cell">
  <img src={publicUrl('sim-outputs/brownian_2d_trajectories.png')} alt="Trayectorias 2D" />
  </CollapsibleCell>    


  <CollapsibleCell title="Código: Gráfico 3D">
    <CodeBlock initialCode={pythonCode2} />
  </CollapsibleCell>

  <CollapsibleCell title="Resultado: Visualización 3D"  className="output-cell">
  <img src={publicUrl('sim-outputs/Fig2.png')} alt="Trayectorias 3D" />
  </CollapsibleCell>

  <CollapsibleCell title="Código: Animación 3D de una Partícula">
    <CodeBlock initialCode={pythonCode3} />
  </CollapsibleCell>

  <CollapsibleCell title="Resultado: Visualización 3D" className="output-cell">
  <img src={publicUrl('sim-outputs/Fig3.png')} alt="Trayectorias 3D" />
  </CollapsibleCell>

      <CollapsibleCell title="Resultado: Animación" className="output-cell">
    <video controls autoPlay loop muted src={publicUrl('sim-outputs/langevin_simulacion.mp4')}/>
  </CollapsibleCell>

        
       
      </div>
    </div>
  );
};

export default MovimientoBrownianoPage;




