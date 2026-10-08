# CandoraStudio — Proyecto Fullstack v1

Este repositorio contiene un backend con NestJS (TypeORM + MySQL) y un frontend con React + Vite.

## Resumen
- Backend: `backend/` (NestJS, TypeORM, MySQL)
- Frontend: `frontend/` (React + Vite)
- Base de datos: MySQL mediante `docker compose` (ver `docker-compose.yml`)

## Requisitos
- Node.js (recomendado >= 18)
- pnpm (gestor de paquetes usado en el proyecto)
- Docker & Docker Compose (para levantar la base de datos)

## Puertos por defecto
- Backend: `3000` (configurable vía `PORT` en `.env`)
- MySQL (contenedor): mapeado a `3307` en el host (puerto del contenedor: `3306`)
- Frontend (Vite): `5173` por defecto (Vite)

## Variables de entorno (backend)
El backend carga variables desde un archivo `.env` en `backend/`.

Ejemplo de `backend/.env`:

```
PORT=3000
DB_HOST=127.0.0.1
DB_PORT=3307
DB_USERNAME=fran_user
DB_PASSWORD=candoraStudio_password
DB_DATABASE=candoraStudio_db
```

Notas:
- Si arrancas la base de datos con `docker compose` en la misma máquina que el backend (ej. desarrollando localmente), usa `127.0.0.1` o `localhost` como `DB_HOST` y el puerto `3307` (según `docker-compose.yml`).
- Si despliegas el backend en contenedores y usas `docker compose` para orquestar ambos servicios, el `DB_HOST` debería ser el nombre del servicio (`db`) en el `docker-compose.yml`.

## Pasos para levantar el proyecto (desarrollo)

1. Arrancar la base de datos (MySQL) con Docker Compose (desde la raíz del repo):

```bash
docker compose up -d
```

2. Backend

```bash
cd backend
pnpm install
# Crear un archivo .env con las variables mostradas arriba
pnpm run start:dev
```

El backend por defecto escucha en `http://localhost:3000`.

3. Frontend

```bash
cd frontend
pnpm install
pnpm run dev
```

El frontend de Vite quedará disponible por defecto en `http://localhost:5173`.

## Probar que el backend responde

Desde tu terminal puedes hacer:

```bash
curl http://localhost:3000
```

Si ves la respuesta esperada (`Hello World` o similar según `AppController`), el servidor está arriba.

## Problema común: "Connection was refused by the server" en Thunder Client / Postman

- Asegúrate de que el backend está corriendo (`pnpm run start:dev`) y sin errores en la terminal.
- Comprueba que estás haciendo la petición a la URL y puerto correctos (ej. `http://localhost:3000/tu-ruta`).
- Verifica que no haya otro proceso ocupando el puerto 3000.
- Si la petición es al backend desde el frontend, el backend tiene CORS habilitado en `backend/src/main.ts`.
- Si estás intentando conectar a MySQL desde el backend y obtienes errores, confirma que el contenedor está arriba: `docker compose ps` y revisa `docker logs` del servicio `candoraStudio_mysql_db`.

Comandos útiles de diagnóstico:

```bash
# Ver procesos Docker
docker compose ps

# Ver logs del contenedor MySQL
docker logs candoraStudio_mysql_db

# Probar el endpoint del backend
curl -v http://localhost:3000

# Revisar que el backend no haya fallado (en la terminal donde corre)
```

## Tests

Backend (Jest):

```bash
cd backend
pnpm run test
```

Frontend: usa las herramientas de Vite / tu propio flujo de testing si las añades.

## Notas finales y buenas prácticas
- `synchronize: true` en TypeORM está activado (ver `backend/src/app.module.ts`): solo es recomendable en desarrollo. Para producción, usar migraciones.
- Si necesitas cambiar versiones de Node o pnpm, ajusta según tus herramientas locales.

Si quieres, puedo:
- Añadir un script raíz para instalar y arrancar ambos servicios a la vez.
- Crear un archivo `.env.example` en `backend/` con los valores de ejemplo.
