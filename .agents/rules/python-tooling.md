---
title: "Convenciones de Python"
description: "Versión, gestor de paquetes y ubicación del código Python."
globs:
  - "**/*.py"
  - "**/pyproject.toml"
applicationType: autoAttached
---

Python 3.12. El gestor de paquetes es uv, no pip ni poetry. Las dependencias se
declaran en el pyproject.toml del paquete que las usa, nunca en la raíz del
monorepo.

El backend escucha en el puerto 8000, que es el que expone el devcontainer. El
5678 queda reservado para depuración.

El código Python vive en services/, agents/, mcps/, internal/ o data/pipelines,
según lo que sea. Los scripts sueltos de apoyo van en scripts/ y no llevan
pyproject.toml propio.

Los tests van junto al módulo que prueban y se corren con uv run pytest desde el
paquete afectado.
