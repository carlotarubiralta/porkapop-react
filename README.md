# Nodepop React App

Esta es una aplicación de tipo dashboard que permite gestionar el API de anuncios Nodepop.

## Requisitos

- Node.js
- npm

## Instalación

### Backend

1. Clonar el repositorio del backend Nodepop API:
```bash
   git clone https://github.com/davidjj76/nodepop-api.git
   cd nodepop-api
```
2. Instalar dependecias
```bash
    npm install
```
3. Ejecutar rl servidor del backend
```bash
npm start
```

### Frontend

1. Clona el repositorio
```bash
   git clone https://github.com/carlotarubiralta/porkapop-react.git
   cd nodepop-react-app
```
2. Instalar dependecias
```bash
    npm install
```
3. Crear archivo .env y configurar la URL del API
```bash
    REACT_APP_API_URL=http://localhost:3001
```
4. Ejecuta la aplicación
```bash
npm start
```
## Endpoints del Backend

La API de Nodepop proporciona los siguientes endpoints:

1. Autenticación
POST /api/auth/signup: Permite crear usuarios.
GET /api/auth/me: Devuelve la información del usuario autenticado.
POST /api/auth/login: Devuelve un token de acceso cuando se proporcionan un email y password correctos.

2. Anuncios
GET /api/v1/adverts: Devuelve un listado de anuncios con posibilidad de aplicar filtros.
Filtros disponibles:
name=coche: Filtra por nombre.
sale=true/false: Filtra por tipo de anuncio (venta/compra).
price=0-25000: Filtra por rango de precio.
tags=motor,work: Filtra por etiquetas.
POST /api/v1/adverts: Crea un anuncio.
GET /api/v1/adverts/tags: Devuelve el listado de etiquetas disponibles.
GET /api/v1/adverts/:id: Devuelve un único anuncio por su ID.
DELETE /api/v1/adverts/:id: Borra un anuncio por su ID.
Nota: Todos los endpoints bajo /adverts requieren que se envíe el token proporcionado en el endpoint de login. El token debe enviarse en la cabecera de la petición de la siguiente forma:

```bash
Header['Authorization'] = Bearer ${token}
````

## Uso

Login: Permite a los usuarios autenticarse.
Crear Anuncio: Permite crear un nuevo anuncio.
Listar Anuncios: Muestra todos los anuncios disponibles.
Detalle del Anuncio: Muestra los detalles de un anuncio específico.
Filtros: Permite filtrar los anuncios por nombre, tipo, precio y etiquetas.

## Estructura del proyecto

```
└── 📁porkapop-react
    └── .DS_Store
    └── .env
    └── .gitignore
    └── README.md
    └── package-lock.json
    └── package.json
    └── 📁public
        └── favicon.ico
        └── index.html
        └── logo192.png
        └── logo512.png
        └── manifest.json
        └── robots.txt
    └── 📁src
        └── .DS_Store
        └── App.css
        └── App.test.js
        └── 📁api
            └── client.js
        └── 📁assets
            └── 📁images
                └── logo.png
                └── placeholder.png
        └── 📁components
            └── 📁adverts
                └── 📁AdvertPage
                    └── AdvertDetail.js
                    └── AdvertPage.js
                    └── index.js
                └── 📁AdvertsPage
                    └── AdvertsList.js
                    └── AdvertsPage.js
                    └── EmptyList.js
                    └── FiltersForm.js
                    └── filters.js
                    └── index.js
                └── 📁NewAdvertPage
                    └── NewAdvertForm.js
                    └── NewAdvertPage.js
                    └── index.js
                └── 📁SelectTags
                    └── SelectTags.js
                    └── index.js
                └── propTypes.js
                └── service.js
            └── 📁app
                └── App.js
                └── NotFoundPage.js
            └── 📁auth
                └── 📁AuthButton
                    └── AuthButton.js
                    └── index.js
                └── 📁LoginPage
                    └── LoginForm.js
                    └── LoginPage.js
                    └── index.js
                └── 📁RequireAuth
                    └── RequireAuth.js
                    └── index.js
                └── context.js
                └── service.js
            └── 📁layout
                └── Footer.css
                └── Footer.js
                └── Header.css
                └── Header.js
                └── Layout.css
                └── Layout.js
                └── index.js
        └── 📁hooks
            └── useForm.js
        └── index.css
        └── index.js
        └── logo.svg
        └── reportWebVitals.js
        └── setupTests.js
        └── 📁utils
            └── navigateAfterRequestError.js
            └── storage.js
```

## Contribuir
Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
Realiza tus cambios y haz un commit (git commit -am 'Añadir nueva característica').
Empuja la rama (git push origin feature/nueva-caracteristica).
Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT. Consulta el archivo LICENSE para más detalles.

