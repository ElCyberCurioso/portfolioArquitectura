# Portfolio de Arquitectura con Jekyll

Este es un template de portfolio profesional para arquitectos, diseñado para ser minimalista, responsive y capaz de mostrar modelos 3D interactivos.

## 🚀 Inicio Rápido

### 1. Requisitos
Necesitas tener instalado [Ruby](https://www.ruby-lang.org/es/) y [Jekyll](https://jekyllrb.com/).

### 2. Instalación Local
1.  Clona este repositorio o descarga los archivos.
2.  Abre una terminal en la carpeta del proyecto.
3.  Instala las dependencias (si tienes un `Gemfile`, si no, asegúrate de tener jekyll instalado):
    ```bash
    gem install jekyll bundler
    bundle install
    ```
4.  Ejecuta el servidor local:
    ```bash
    bundle exec jekyll serve
    ```
5.  Abre tu navegador en `http://localhost:4000`.

### 3. Personalización

#### Información Básica
Edita el archivo `_config.yml` para cambiar:
*   Título del sitio
*   Descripción
*   Redes sociales
*   URL (importante para GitHub Pages)

#### Añadir Proyectos
1.  Crea un nuevo archivo en la carpeta `_projects/` con el formato `AAAA-MM-DD-nombre-proyecto.md`.
2.  Copia el encabezado (Front Matter) de `_projects/2023-casa-horizonte.md`.
3.  Rellena los datos: título, año, localización, etc.
4.  Para añadir un **Modelo 3D**, coloca la URL de tu archivo `.glb` en el campo `model_3d`.

#### Estilos
El CSS principal está en `assets/css/style.css`. Puedes cambiar las variables CSS al principio del archivo para ajustar colores y fuentes rápidamente.

## 📦 Despliegue en GitHub Pages

1.  Sube este código a un repositorio público en GitHub.
2.  Ve a **Settings** > **Pages**.
3.  En "Source", selecciona `Deploy from a branch`.
4.  Selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
5.  Guarda. En unos minutos tu web estará online.

## 🧱 Estructura

*   `_layouts/`: Plantillas HTML (default, project).
*   `_includes/`: Fragmentos reutilizables (header, footer, meta).
*   `_projects/`: Tus proyectos de arquitectura.
*   `assets/`: Imágenes, CSS, JS y modelos 3D.
