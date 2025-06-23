# Reloj-Digital-Animado-Nano

## Descripción
Un reloj digital moderno que muestra la hora en tiempo real con animaciones CSS fluidas, transformaciones 3D y efectos visuales atractivos. Este proyecto incluye funcionalidades interactivas como cambio de formato horario (12h/24h) y alternancia entre estilos visuales.

## Características principales
- **Visualización en tiempo real** de horas, minutos y segundos
- **Animaciones CSS avanzadas**:
  - Pulsación en los segundos
  - Parpadeo de separadores
  - Efectos 3D y transformaciones
  - Transiciones fluidas
- **Dos estilos visuales** alternables
- **Formato 12h/24h** intercambiable
- **Fecha completa** con localización en español
- **Diseño responsive** que se adapta a móviles y desktop
- **Efecto glassmorphism** (vidrio esmerilado)
- **Fondo animado** con degradados dinámicos

## Tecnologías utilizadas
- **HTML5**: Estructura semántica
- **CSS3**:
  - Animaciones y transiciones
  - Transformaciones 3D
  - Variables CSS
  - Flexbox y Grid
  - Efectos de filtro (blur)
- **JavaScript**: Lógica de tiempo y controles
- **Responsive Design**: Adaptable a todos los dispositivos

## Instalación y uso
1. Clona este repositorio:
```bash
git clone https://github.com/ITZ-NANO21-MC/Reloj-Digital-Analogico-Nano
```

2. Abre el archivo `index.html` en cualquier navegador moderno

3. Usa los controles:
   - **Cambiar estilo**: Alterna entre diseño clásico y moderno
   - **Formato 12/24h**: Cambia entre formato 12 horas (AM/PM) y 24 horas

4. Disfruta de las animaciones:
   - Los segundos pulsan suavemente
   - Los separadores parpadean
   - La fecha se anima al cambiar
   - El fondo tiene un efecto de pulsación sutil

## Estructura de archivos
```
reloj-digital/
├── index.html          # Archivo principal
├── styles.css          # Estilos y animaciones
├── script.js           # Lógica del reloj
└── README.md           # Este archivo
```

## Personalización
Puedes modificar el aspecto editando las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #3498db;      /* Color principal */
    --secondary-color: #2c3e50;    /* Color secundario */
    --accent-color: #e74c3c;       /* Color de acento (segundos) */
    --text-color: #ecf0f1;         /* Color del texto */
    --bg-color: #1a1a2e;           /* Color de fondo */
    --digit-bg: rgba(255, 255, 255, 0.1);  /* Fondo de los dígitos */
    --digit-shadow: 0 0 20px rgba(52, 152, 219, 0.5); /* Sombra */
    --transition-speed: 0.3s;      /* Velocidad de transiciones */
}
```
## Mejoras futuras
- [ ] Agregar selector de zona horaria
- [ ] Implementar alarma programable
- [ ] Añadir temas adicionales
- [ ] Incluir sonidos de ticks opcionales
- [ ] Mostrar clima local
- [ ] Añadir modo oscuro/ligero automático

## Contribuciones
Las contribuciones son bienvenidas. Sigue estos pasos:
1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b nueva-feature`)
3. Haz commit de tus cambios (`git commit -am 'Agrega nueva feature'`)
4. Haz push a la rama (`git push origin nueva-feature`)
5. Abre un Pull Request

## Licencia
Este proyecto está bajo la licencia [MIT](LICENSE).

---

**Nota**: Este reloj funciona mejor en navegadores modernos que soportan las últimas características de CSS3. Para capturas de pantalla reales, simplemente abre el proyecto en tu navegador y toma capturas en diferentes modos y tamaños de pantalla.
