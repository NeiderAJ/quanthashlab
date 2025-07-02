import os

# --- Configuración ---
# Directorio raíz del proyecto (donde se ejecuta este script)
PROJECT_ROOT = '.' 

# Nombre del archivo de salida
OUTPUT_FILE = 'resumen_completo_proyecto.txt'

# Extensiones de archivo que queremos incluir
EXTENSIONS_TO_INCLUDE = (
    '.js', '.jsx', '.css', '.html', '.json', '.md', '.py', '.txt' 
)

# Directorios que queremos ignorar completamente
DIRS_TO_IGNORE = [
    'node_modules',
    '.git',
    'dist',
    '__pycache__'
]

# Archivos específicos que queremos ignorar
FILES_TO_IGNORE = [
    OUTPUT_FILE, # Para no incluir el propio resumen en el resumen
    'package-lock.json' # Suele ser muy largo y no tan relevante para el contexto
]
# --------------------

def main():
    """Función principal para generar el resumen del proyecto."""
    try:
        with open(OUTPUT_FILE, 'w', encoding='utf-8', errors='ignore') as outfile:
            print(f"Generando resumen en '{OUTPUT_FILE}'...")
            
            for root, dirs, files in os.walk(PROJECT_ROOT, topdown=True):
                # Ignorar directorios no deseados
                dirs[:] = [d for d in dirs if d not in DIRS_TO_IGNORE]
                
                # Ordenar para una salida consistente
                dirs.sort()
                files.sort()

                for filename in files:
                    if filename.endswith(EXTENSIONS_TO_INCLUDE) and filename not in FILES_TO_IGNORE:
                        
                        file_path = os.path.join(root, filename)
                        relative_path = os.path.relpath(file_path, PROJECT_ROOT).replace('\\', '/')
                        
                        try:
                            with open(file_path, 'r', encoding='utf-8', errors='ignore') as infile:
                                content = infile.read()
                                
                                # Escribir el encabezado del archivo
                                outfile.write('=' * 80 + '\n')
                                outfile.write(f'// ARCHIVO: {relative_path}\n')
                                outfile.write('=' * 80 + '\n\n')
                                
                                # Escribir el contenido del archivo
                                outfile.write(content)
                                outfile.write('\n\n')
                                
                                print(f"  + Añadido: {relative_path}")

                        except Exception as e:
                            print(f"  ! Error al leer {relative_path}: {e}")
            
            print(f"\n¡Resumen '{OUTPUT_FILE}' generado con éxito!")

    except IOError as e:
        print(f"Error fatal al escribir en el archivo de salida: {e}")

if __name__ == '__main__':
    main()