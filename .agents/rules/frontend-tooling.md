---
title: "Convenciones de frontend"
description: "Versión de Node, gestor de paquetes y ubicación de los frontends."
globs:
  - "uis/**"
  - "packages/**"
  - "**/package.json"
applicationType: autoAttached
---

Node 22. El gestor de paquetes es pnpm, habilitado por corepack. No se usa npm
ni yarn en este repositorio.

Todos los frontends viven en uis/. El sitio público es uis/website y la
aplicación interna es uis/backoffice, con layout propio y separada del sitio
público.

El frontend escucha en el puerto 3000, que es el que expone el devcontainer.

El código que se comparte entre más de un frontend va en packages/ como librería
versionable. No se duplica entre uis/website y uis/backoffice.
