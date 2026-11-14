# Estado actual

## Qué hay construido

Nada de código de producto todavía. El repositorio es la plantilla del monorepo
con sus carpetas y sus READMEs.

## Qué agregó la rama feature/agent-memory-bank

- memory-bank/ con el contexto de negocio y el contexto técnico.
- AGENTS.md en la raíz, con el protocolo que sigue cualquier agente de código.
- .agents/rules/ con las convenciones del repositorio.
- .agents/skills/new-component-scaffold/ con la primera skill formalizada.

## Decisiones tomadas

- El alcance se centra en formación corporativa y operaciones de reclutamiento.
  Las demás áreas del briefing quedan fuera por ahora.
- El primer entregable de producto previsto es el agente de formación personalizada.
- La revisión humana antes de aprobar una recomendación es una restricción de
  producto, no una opción.

## Qué falta decidir

- Qué framework se usa para uis/website y uis/backoffice.
- Si el catálogo de cursos se modela en base de datos o se carga desde un archivo
  en data/raw.
- Qué base de datos vectorial se usa cuando llegue la parte de RAG.

## Cómo se mantiene este archivo

Se actualiza al cerrar cada rama: qué se agregó, qué se decidió y qué quedó
pendiente. Un banco de memoria desactualizado deja de servir en días.
