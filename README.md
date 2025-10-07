# Informe del Proyecto: 🪲 BugLog Web
## Parcial 1 - Plataformas de Desarrollo (ACN4BV)

**Repositorio:** https://github.com/Lukarda/parcial-1-pd-acn4bv-galarza-salazar
**Equipo:** Galarza & Salazar  
**Descripción:** Primer parcial de Plataformas de Desarrollo en Escuela Da Vinci

---
## 📋 Descripción

BugLog es una aplicación web que permite a los usuarios reportar y gestionar bugs encontrados en videojuegos de manera organizada y eficiente. Cuenta con un formulario interactivo de registro, un historial visual para consultar los reportes realizados y una interfaz visualmente atractiva con fondo animado para gestionar los reportes.

## ✨ Características

- **Reporte de Bugs**: Formulario completo para reportar bugs con información detallada
- **Historial**: Visualización de todos los bugs reportados
- **Filtros Dinámicos**: Filtrado de bugs por nivel de gravedad (Baja, Media, Alta)
- **Almacenamiento Local**: Los datos persisten usando LocalStorage
- **Diseño Responsivo**: Interfaz adaptable a diferentes dispositivos
- **Tema Oscuro**: Diseño moderno con paleta de colores oscuros
- **Fondo Animado**: Background con GIF animado para una experiencia visual mejorada
- **Validación de Formularios**: Validación en tiempo real de todos los campos

## 🚀 Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y efectos visuales)
- JavaScript ES6+ (Módulos)
- LocalStorage API
- Animaciones CSS

## 📱 Wireframe / Capturas de Pantalla

### Pantalla Principal - Formulario de Reporte
<img width="1920" height="1304" alt="wireframe_main" src="https://github.com/user-attachments/assets/9ab6bbc8-ee3f-40b8-99a0-2c2d84cef80f" />

<img width="2560" height="1278" alt="parcial-1-pd-acn4bv-galarza-salazar-index-html" src="https://github.com/user-attachments/assets/c19a5f3d-32ae-4fd5-bc93-75298f5ca23c" />



### Pantalla Secundaria - Historial de Bugs
<img width="1920" height="1304" alt="wireframe_historialbugs" src="https://github.com/user-attachments/assets/9eab8d21-e9da-41bb-8a65-7c3be82f49db" />

<img width="2533" height="1266" alt="parcial-1-pd-acn4bv-galarza-salazar-bug-html" src="https://github.com/user-attachments/assets/fc81f36b-03ff-412a-917e-faed84d21f1a" />


## 🔧 Instalación 

1. Clona el repositorio:
```bash
git clone https://github.com/Lukarda/parcial-1-pd-acn4bv-galarza-salazar.git
```

2. Abre el archivo `index.html` en tu navegador web

3. No requiere instalación de dependencias ni servidor web

## 📝 Uso de la Aplicación

1. **Reportar un Bug**:
   - Ve a la página principal (index.html) o haz clic en "Reportar Bug" en el menú
   - Completa todos los campos del formulario
   - La descripción tiene un límite de 500 caracteres
   - Haz clic en el botón de envío
   - Recibirás una confirmación del reporte exitoso

2. **Ver Historial**:
   - Navega a "Historial" en el menú superior
   - Visualiza todos los bugs reportados en formato de tarjetas
   - Usa los botones de filtro para organizar por gravedad
   - Los bugs se muestran con toda su información detallada

## 🎮 Funcionalidades Detalladas

### Reporte de Bugs

El formulario permite ingresar:
- **Nombre del juego**: Campo de texto libre
- **Plataforma**: Selector con opciones:
  - PC
  - PlayStation 5
  - PlayStation 4
  - Xbox Series S/X
  - Nintendo Switch
  - Nintendo Switch 2
  - Android
  - iOS
- **Tipo de Bug**: Gráfico, Audio o Gameplay
- **Gravedad**: Baja, Media o Alta (radio buttons)
- **Descripción**: Texto descriptivo del bug (máximo 500 caracteres)

### Historial de Bugs

- Visualización de todos los bugs reportados en tarjetas estilizadas
- Badges de colores según la gravedad del bug
- Información completa y organizada de cada reporte
- Fecha y hora de reporte en formato local (es-AR)

### Sistema de Filtros

Botones de filtrado rápido:
- **TODOS**: Muestra todos los bugs sin filtrar
- **BAJA**: Solo bugs de baja gravedad (verde)
- **MEDIA**: Solo bugs de gravedad media (amarillo)
- **ALTA**: Solo bugs de alta gravedad (rojo)

### Lenguajes de Programación
- **JavaScript**

## 🎭 Efectos Visuales

- **Fondo animado**: GIF de fondo con opacidad del 40% para no interferir con la legibilidad
- **Navbar sticky**: Barra de navegación fija en la parte superior
- **Transiciones suaves**: Efectos hover en botones y enlaces
- **Sombras**: Box shadows en tarjetas para profundidad
- **Border radius**: Esquinas redondeadas en todos los elementos

## 🏗️ Arquitectura

La aplicación sigue una arquitectura modular basada en ES6 Modules:

- **bug.js**: Define la clase Bug con el constructor y métodos del modelo
- **storage.js**: Capa de persistencia con funciones CRUD para LocalStorage
- **form.js**: Maneja la lógica del formulario, validaciones y envío de datos
- **listbugs.js**: Renderiza dinámicamente la lista de bugs y maneja los filtros

### Patrones de Commit Utilizados

El proyecto utiliza **Conventional Commits** con los siguientes prefijos:

- `feat`: Nueva funcionalidad
- `fix`: Corrección de errores
- `chore`: Tareas de mantenimiento
- `ui`: Mejoras de interfaz de usuario

**Formato:** `tipo(alcance): descripción breve`

### Principios aplicados:
- Separación de responsabilidades
- Programación orientada a objetos (clase Bug)
- Módulos ES6 para organización del código
- DOM Manipulation con JavaScript vanilla
- Event-driven architecture

## 👥 Información del Repositorio
- **Visibilidad:** Público
- **Rama principal:** master
- **Colaboradores:** AnthonyNadsat (Salazar), Lukarda (Galarza)
- **Total de commits:** 8
- **Última actualización:** 07 de Octubre de 2025 - 03:59 AM UTC
- **Lenguajes:** JavaScript (25.2%), CSS (45.0%), HTML (29.8%)

## 📝 Conclusiones

El proyecto **BugLog** cumple exitosamente con los objetivos del primer parcial de Plataformas de Desarrollo. Se logró implementar una aplicación web funcional y completa que demuestra los siguientes logros:

### Logros Técnicos:
✅ **Arquitectura modular** utilizando ES6 Modules para una mejor organización del código
✅ **Persistencia de datos** mediante LocalStorage API sin necesidad de backend
✅ **Diseño visual atractivo** con tema oscuro y animaciones sutiles

## 🔗 Enlaces Relevantes

- **Repositorio:** https://github.com/Lukarda/parcial-1-pd-acn4bv-galarza-salazar
- **Commit más reciente:** https://github.com/Lukarda/parcial-1-pd-acn4bv-galarza-salazar/commit/afe88533801ac493fe18ef7f8ff99ea625a15b47
- **Historial completo de commits:** https://github.com/Lukarda/parcial-1-pd-acn4bv-galarza-salazar/commits/master

---
