---
title: "Estructura del monorepo"
description: "Dónde va cada archivo y qué no se crea. Aplica a todo el repositorio."
globs:
  - "**/*"
applicationType: autoAttached
---

La estructura de carpetas de primer nivel está fijada y documentada en
memory-bank/stack.md. No se crean carpetas nuevas de primer nivel.

Antes de crear un archivo dentro de una carpeta de primer nivel, leer el README
de esa carpeta. La única sin README es data/, cuyo flujo es raw, pipelines,
process, eval.

Rutas fijas de la capa de aplicación:

- Web pública de Nexova: uis/website
- Aplicación interna: uis/backoffice
- APIs y workers de backend: services/, un servicio por subcarpeta

No se crea un segundo árbol de frontend ni de API fuera de esas rutas.

.agents/ es la configuración de los agentes de código. agents/ y skills/, sin
punto, son código de producto. No se mezcla su contenido.
