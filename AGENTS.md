# AGENTS.md

Protocolo de trabajo para cualquier agente de código que opere en este
repositorio: Copilot, Cursor, Claude Code u otro.

## 1. Antes de tocar nada

Leer, en este orden:

1. BRIEFING.md, quién es Nexova y qué problemas tiene.
2. memory-bank/product.md, el alcance elegido y las restricciones de producto.
3. memory-bank/stack.md, el entorno y dónde va cada cosa.
4. memory-bank/current-state.md, qué existe hoy y qué está decidido.
5. .agents/rules/, las convenciones que hay que respetar.

Si la tarea toca una carpeta de primer nivel, leer además el README de esa
carpeta antes de crear ningún archivo dentro.

## 2. Mientras se trabaja

- Citar archivo y línea de cada hallazgo y de cada cambio propuesto.
- Explicar cada cambio antes de aplicarlo.
- No crear carpetas nuevas de primer nivel. La estructura está fijada en stack.md.
- No inventar datos de dominio. Los nombres de campo, los departamentos y las
  restricciones salen de BRIEFING.md y de memory-bank/product.md.
- Si una instrucción choca con una regla de .agents/rules/, detenerse y
  preguntar. No resolver la contradicción por cuenta propia.

## 3. Flujo de entrega, obligatorio antes de cada commit

1. Verificar que cada archivo creado está en la ruta que indica
   memory-bank/stack.md.
2. Correr las verificaciones que apliquen al cambio:
   - Código Python: uv run pytest en el paquete afectado.
   - Código JavaScript o TypeScript: pnpm lint y pnpm build en el paquete afectado.
   - Solo documentación: comprobar que los enlaces internos apuntan a archivos
     que existen.
3. Si alguna verificación no se puede correr, decirlo de forma explícita en vez
   de darla por aprobada.
4. Actualizar memory-bank/current-state.md con lo que cambió: qué se agregó, qué
   se decidió y qué quedó pendiente.
5. Un commit por unidad de cambio, con mensaje en español y con prefijo feat:,
   fix:, docs:, chore: o refactor:.

Un commit que no pasó por estos cinco pasos no se hace.

## 4. Cuándo detenerse y preguntar

- Cuando la tarea implique eliminar la revisión humana en las recomendaciones de
  formación o en el emparejamiento de candidatos.
- Cuando no haya una ruta clara en stack.md para lo que hay que crear.
- Cuando la tarea dependa de una decisión que current-state.md marca como pendiente.
- Cuando haya que incorporar una dependencia nueva de peso.
