---
name: new-component-scaffold
description: Crear un componente nuevo en el monorepo de Nexova, en la carpeta correcta, con su estructura mínima y el banco de memoria actualizado. Úsala al agregar un frontend, un servicio, un agente, un MCP, una librería compartida o un workflow.
---

# Crear un componente nuevo en el monorepo

## Objetivo

Que un componente nuevo quede en la carpeta que le corresponde, con la
estructura mínima que esa carpeta pide, sin duplicar árboles y con el banco de
memoria al día.

## Entradas

Quien invoca la skill entrega tres datos:

1. El tipo de componente: frontend, servicio de backend, agente, servidor MCP,
   librería compartida, workflow o herramienta interna.
2. El nombre, en kebab-case.
3. En una frase, qué resuelve y a qué área del briefing de Nexova pertenece.

Si falta cualquiera de los tres, preguntar antes de crear nada.

## Procedimiento

1. Leer memory-bank/stack.md y decidir la carpeta de destino según el tipo. Las
   rutas de uis/website, uis/backoffice y services/ ya están fijadas ahí.
2. Leer el README de esa carpeta. Si no tiene README, que es el caso de data/,
   seguir su flujo: raw, pipelines, process, eval.
3. Crear la subcarpeta con el nombre en kebab-case.
4. Crear dentro un README.md que diga qué hace el componente, a qué área del
   briefing responde, cómo se ejecuta en local y de qué depende.
5. Crear el archivo de dependencias que corresponda: pyproject.toml para Python,
   package.json para Node. No tocar la raíz del monorepo.
6. Actualizar memory-bank/current-state.md: sumar el componente a lo construido
   y mover a decisiones lo que se haya resuelto al crearlo.

## Salida esperada

- Una subcarpeta nueva bajo la carpeta correcta de primer nivel.
- Un README.md dentro de ella.
- Un archivo de dependencias propio, cuando el componente lleve código.
- memory-bank/current-state.md actualizado en el mismo cambio.

## Criterios de aceptación

La skill se da por cumplida solo si se verifica todo lo siguiente:

1. La ruta del componente aparece en la tabla de memory-bank/stack.md. Si no
   aparece, la ubicación es incorrecta.
2. No se creó ninguna carpeta nueva de primer nivel. Se comprueba con ls -1 en
   la raíz, contrastado con la tabla de stack.md.
3. El README del componente nombra el área del briefing a la que responde.
4. No quedó ningún archivo de dependencias nuevo en la raíz del monorepo.
5. git status muestra el cambio en memory-bank/current-state.md junto al
   componente, para que entren en el mismo commit.
6. El nombre de la carpeta está en kebab-case, en minúsculas y sin espacios.

Si alguno de los seis falla, el componente no está listo y no se hace commit.

## Qué no hace esta skill

No escribe la lógica de negocio del componente. Deja el esqueleto en su sitio
para que el trabajo siguiente empiece sin discutir dónde va cada archivo.
