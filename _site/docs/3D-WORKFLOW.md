# Guía de Flujo de Trabajo 3D para Web

Para mostrar tus modelos de arquitectura en la web, es fundamental entender que los navegadores no pueden leer directamente archivos de trabajo nativos como `.blend`, `.rvt` (Revit) o `.skp` (SketchUp). 

Incluso formatos de intercambio antiguos como `.obj` o `.fbx` no están optimizados para web (son pesados, requieren múltiples archivos para texturas, y no tienen estándar de iluminación consistente).

## 🏆 La Solución: GLB (glTF Binary)
El formato estándar para 3D en la web hoy en día es **glTF/GLB**. Es como el "JPG del 3D".
*   ✅ Un solo archivo (incluye texturas y geometría).
*   ✅ Muy ligero y rápido de cargar.
*   ✅ Soporta PBR (materiales físicamente realistas).

### Cómo exportar a GLB desde tus herramientas

#### 1. Desde Blender (Recomendado)
Blender es gratuito y es el mejor conversor.
1.  Abre o importa tu modelo (`.fbx`, `.obj`, `.dae`, etc.) en Blender.
2.  Ve a **File > Export > glTF 2.0 (.glb/.gltf)**.
3.  En las opciones de exportación (derecha):
    *   **Format**: `glTF Binary (.glb)`
    *   **Includes**: Marca `Selected Objects` si solo quieres exportar lo seleccionado.
    *   **Geometry**: Marca `Apply Modifiers` si tienes modificadores sin aplicar.
    *   **Materials**: Asegúrate de que está activo.
4.  Guarda el archivo y úsalo en tu web con `model_3d: "/ruta/al/archivo.glb"`.

#### 2. Desde Rhino
Rhino 7+ tiene exportación nativa.
1.  Selecciona tu modelo.
2.  **File > Export Selected**.
3.  Elige formato **glTF (.glb)**.
4.  *Nota*: A veces las texturas complejas de Rhino no pasan bien. Se recomienda pasar por Blender para "cocinar" (bake) las texturas si es necesario.

#### 3. Desde Revit
No hay exportador nativo directo a GLB de alta calidad.
*   **Opción A**: Usar un plugin como "SimLab glTF Exporter".
*   **Opción B**: Exportar a FBX -> Importar en Blender -> Exportar a GLB.

---

## ☁️ Alternativa: Sketchfab (Para .blend, .fbx, .obj directos)
Si no quieres convertir tus modelos o son demasiado complejos/pesados para cargarlos directamente en el navegador del usuario:

1.  Crea una cuenta en [Sketchfab.com](https://sketchfab.com/).
2.  Sube tu archivo `.blend`, `.fbx`, `.obj`, `.skp` directamente. Sketchfab lo procesará automáticamente.
3.  Copia el ID del modelo de la URL (ej: `https://sketchfab.com/models/aaaa1111bbbb2222`).
4.  En tu archivo de proyecto (`.md`), usa:
    ```yaml
    sketchfab_id: "aaaa1111bbbb2222"
    ```
Esto mostrará el visor de Sketchfab en lugar del visor nativo.

## Resumen
| Formato | Soporte Web Nativo | Recomendación |
| :--- | :--- | :--- |
| **.glb / .gltf** | ⭐⭐⭐⭐⭐ (Nativo) | **La mejor opción.** Rápido, gratis, sin logos externos. |
| **.obj** | ⭐⭐ (Posible pero complejo) | Convertir a GLB usando Blender. |
| **.fbx** | ⭐ (Malo) | Convertir a GLB usando Blender. |
| **.blend** | ❌ (Imposible) | Exportar a GLB o subir a Sketchfab. |
| **.rvt / .skp** | ❌ (Imposible) | Exportar a FBX -> Convertir a GLB. |
