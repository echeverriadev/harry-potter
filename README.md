Microfronted Harry Potter:
Independiente del resto de las aplicacions
Repositorio propio de la app

Desplegado en: https://harry-potter-gules-ten.vercel.app/
## Getting Started
Para empezar debes tener el proyecto en tu local, bien sea que se haya clonado como submodulo o como proyecto independiente

Agregar las variables de entorno requeridas (ver archivo ./.env.default)

Instalar las dependencias:
```bash
npm install
# or
yarn install
# or
pnpm install
```

Y para correrlo de forma independiente:
```bash
npm run dev
# or
yarn run dev
# or
pnpm run dev
```

Esta hecho con pages route de NextJs 13

## Internamente el proyecto esta programado con:
- NextJs
- JestJs

A estos ambientes de trabajo se le sumaron algunas otras herramientas como:
- Module Federation de Webpack
- i18n para las traducciones
- Tailwindcss
- Axios
- Vercel para el deploy
