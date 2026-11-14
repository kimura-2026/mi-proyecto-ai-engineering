# Stack y estructura

## Entorno

Monorepo que se trabaja en GitHub Codespaces con el devcontainer incluido.

- Python 3.12, con uv como gestor de paquetes y JupyterLab disponible.
- Node 22, con pnpm habilitado por corepack.
- Docker accesible desde el contenedor, GitHub CLI instalado.
- Puertos expuestos: 3000 frontend, 8000 backend, 5678 depuración.

Al crear el contenedor, si existe package.json se instala con pnpm, y si existe
pyproject.toml se ejecuta uv sync.

A la fecha de este documento no hay package.json, pyproject.toml,
requirements.txt ni docker-compose.yml en la raíz. El .gitignore está vacío.

## Dónde va cada cosa

Cada carpeta de primer nivel tiene una responsabilidad única y su propio README.
Antes de crear nada dentro de una carpeta hay que leer ese README.

| Carpeta | Qué va aquí |
|---|---|
| agents/ | Agentes de IA autónomos, uno por subcarpeta, con objetivo, herramientas y prompts |
| data/ | Datos y su procesamiento: raw, pipelines, process, eval. Es la única sin README |
| docs/ | Documentación transversal: arquitectura, decisiones técnicas, convenciones |
| infra/ | Infraestructura: Dockerfiles, manifiestos, Nginx, CI/CD |
| internal/ | Herramientas internas del equipo, con dependencias y tests propios |
| mcps/ | Servidores MCP que exponen herramientas y recursos a los agentes |
| packages/ | Librerías compartidas y versionables: tipos, SDKs, componentes |
| scripts/ | Scripts sueltos de apoyo: setup, seed de datos, migraciones puntuales |
| services/ | APIs y workers de backend, un servicio por subcarpeta |
| shared/ | Recursos compartidos que no son librería: schemas, plantillas, specs |
| skills/ | Capacidades reutilizables para los agentes de producto |
| uis/ | Todos los frontends |
| workflows/ | Automatizaciones y orquestación: n8n, jobs programados, webhooks |

## Rutas fijadas para la capa de aplicación

- uis/website: web pública de Nexova, con marca y textos alineados al BRIEFING.md.
- uis/backoffice: aplicación interna, con layout propio y separada del sitio público.
- services/: APIs y servicios de backend.

No se crea un segundo árbol de frontend ni de API fuera de esas rutas.

## Dos carpetas que se confunden

.agents/ es la configuración de los agentes de código, es decir Copilot, Cursor o
Claude Code. Ahí van las reglas y las skills que le enseñan al agente cómo
trabajar en este repositorio.

agents/ y skills/, sin punto, son código de producto: los agentes y las
capacidades que se construyen para Nexova.
