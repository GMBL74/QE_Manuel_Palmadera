# Reto técnico en vivo – Mantenimiento de frameworks de automatización

**Duración sugerida:** 60 minutos (25 min Backend · 25 min Frontend · 10 min conversación)

## Contexto

Estos son **tus** frameworks (ServeRest API con Karate DSL y Sauce Demo con Playwright + Cucumber).
Otro QA del equipo hizo un commit para acercarlos a un uso "real":

> `feat: token real, contrato de usuario y credenciales por ambiente`

Desde entonces ambas suites fallan. Tu tarea es dejarlas **funcionando y confiables**.

## Reglas

1. **No se permite** borrar escenarios, marcarlos como `@ignore`, ni debilitar validaciones
   (quitar `match`, `status` o `expect`). El objetivo es arreglar la causa raíz.
2. Puedes usar la documentación oficial (Karate, Playwright, Cucumber, Swagger de ServeRest) y el navegador.
3. **Piensa en voz alta**: explica qué ves, qué hipótesis tienes y cómo la confirmas.
4. Al terminar cada capa, muestra `git diff` y ejecuta la suite completa.

---

## Capa 1 – Backend (Karate DSL · ServeRest)

```bash
cd BackEnd/karate-automation
mvn clean test
```

**Nota del QA que hizo el cambio:** *"Reemplacé el token fijo por un login real con la cuenta de
automatización, agregué la validación de contrato con el `user-schema.json` que ya existía y una
verificación de que el usuario eliminado ya no existe."*

**Entregable:** `mvn clean test` con **7/7 escenarios en verde**, sin depender de cuentas creadas a mano.

---

## Capa 2 – Frontend (Playwright + Cucumber · Sauce Demo)

```bash
cd Frontend/playwright-demo-pom
npm ci
npx playwright install chromium
npm test
```

**Nota del QA que hizo el cambio:** *"Parametricé URL y credenciales por ambiente (ver `.env.example`),
y limité la apertura del navegador a los escenarios de interfaz."*

**Entregables:**
- `npm test` con **4/4 escenarios en verde** en tu máquina **y** en el agente de CI.
- El reporte HTML debe generarse **también cuando hay escenarios fallidos**.

---

## Conversación final (si queda tiempo)

- ¿Qué harías para que estos problemas **no vuelvan a llegar** al pipeline?
- ¿Qué cambiarías de tu propio diseño original después de ver estos fallos?
