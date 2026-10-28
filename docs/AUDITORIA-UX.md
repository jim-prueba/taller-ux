# Auditoría de UX/UI - App Biblioteca

**Estudiante:** Jim Franco Parari Milla  
**Repositorio:** https://github.com/jim-prueba/laboratorio-readme.git  
**Página Publicada:** https://github.io

## 1. Tabla de Evaluación Heurística (Nielsen)

| Heurística                 | Problema Detectado (Antes)                                                                                     | Gravedad | Solución Aplicada (Después)                                                                                   |
| :------------------------- | :------------------------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------ |
| **Visibilidad del estado** | Al reservar o registrar un libro, la interfaz no mostraba si la acción fue exitosa.                            | Media    | Se añadió un banner de estado dinámico (`role="status"`) que muestra "¡Libro registrado exitosamente!".       |
| **Mundo real**             | Los botones usaban términos del sistema como "Ejecutar Query" o "Procesar".                                    | Baja     | Se cambió el texto por acciones cotidianas del usuario: "Guardar Libro" y "Limpiar Formulario".               |
| **Control y libertad**     | Si el usuario presionaba por error "Limpiar", todos los datos se borraban de inmediato.                        | Alta     | Se integró un evento `reset` con una ventana de confirmación (`confirm()`) para cancelar la pérdida de datos. |
| **Prevención de errores**  | El formulario permitía guardar libros sin título o con formatos de código erróneos.                            | Alta     | Se usó el atributo `required` de HTML5 y validación estricta por JavaScript antes de procesar el envío.       |
| **Reconocer vs Recordar**  | Los campos solo tenían placeholders. Al escribir, la pista se borraba y el usuario olvidaba qué campo llenaba. | Media    | Se agregaron etiquetas `<label>` visibles y fijas enlazadas semánticamente a cada input.                      |

## 2. Leyes de Usabilidad Aplicadas

- **Ley de Fitts:** El botón "Guardar Libro" se hizo grande (`min-height: 44px`), expandible (`flex: 1`) y separado por un espacio prudente (`gap: 24px`) del botón secundario para evitar clics accidentales.
- **Ley de Hick:** La selección de categorías de libros se agrupó sistemáticamente para reducir las opciones iniciales y agilizar la toma de decisiones.
- **Ley de Miller:** Se organizó la interfaz dividiendo los elementos en bloques visuales claros (Formulario a la izquierda, Reporte/Tabla a la derecha), manteniendo menos de 7 elementos en la memoria de trabajo simultáneamente.
