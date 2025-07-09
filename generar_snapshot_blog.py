import os
import datetime

def generar_snapshot_proyecto(directorio_raiz, archivo_salida, nombre_proyecto):
    """
    Recorre un directorio de proyecto y guarda la estructura y el contenido
    de los archivos de texto relevantes en un único archivo de salida.
    """
    
    # --- CONFIGURACIÓN ---
    extensiones_incluidas = [
        '.js', '.jsx', '.css', '.html', '.json', 
        '.md', '.yml', '.py', '.txt'
    ]
    
    directorios_ignorados = {
        'node_modules', '.git', 'dist', '.vscode', 
        '__pycache__', '.env', 'build'
    }
    
    print(f"Iniciando snapshot del proyecto '{nombre_proyecto}'...")
    
    try:
        with open(archivo_salida, 'w', encoding='utf-8', errors='ignore') as f_out:
            f_out.write(f"Snapshot del Proyecto: {nombre_proyecto}\n")
            f_out.write(f"Generado el: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f_out.write("="*80 + "\n\n")

            for dirpath, dirnames, filenames in os.walk(directorio_raiz):
                # Evitar descender a directorios ignorados
                dirnames[:] = [d for d in dirnames if d not in directorios_ignorados]
                
                for filename in filenames:
                    # Incluir archivos sin extensión y los de las extensiones permitidas
                    if '.' not in filename or any(filename.endswith(ext) for ext in extensiones_incluidas):
                        ruta_completa = os.path.join(dirpath, filename)
                        ruta_relativa = os.path.relpath(ruta_completa, directorio_raiz)
                        
                        # Ignorar el propio script de snapshot y su salida
                        if filename == os.path.basename(__file__) or filename == archivo_salida:
                            continue

                        print(f"Procesando: {ruta_relativa}")
                        
                        try:
                            with open(ruta_completa, 'r', encoding='utf-8') as f_in:
                                contenido = f_in.read()
                            
                            f_out.write(f"--- START OF FILE {ruta_relativa.replace(os.sep, '/')} ---\n\n")
                            f_out.write(contenido)
                            f_out.write(f"\n\n--- END OF FILE {ruta_relativa.replace(os.sep, '/')} ---\n\n")
                            f_out.write("="*80 + "\n\n")
                            
                        except Exception as e:
                            print(f"  AVISO: No se pudo leer el archivo {ruta_completa} como texto. Se omite. Causa: {e}")

        print(f"\n¡Éxito! Snapshot del proyecto guardado en: {archivo_salida}")

    except Exception as e:
        print(f"\nERROR: Ocurrió un error general al crear el snapshot. Causa: {e}")

if __name__ == "__main__":
    # Nombre de la carpeta raíz del proyecto
    nombre_del_proyecto = 'MI_BLOG_VITE'
    # El script se ejecuta desde la raíz del proyecto
    directorio_proyecto = '.' 
    nombre_archivo_salida = 'snapshot_quanthashlab.txt'
    generar_snapshot_proyecto(directorio_proyecto, nombre_archivo_salida, nombre_del_proyecto)