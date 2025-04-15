# Ejercicio 1 – Números Primos con Node.js

Este proyecto es una actividad práctica para trabajar con **Node.js**, **CommonJS**, **ES Modules** y **variables de entorno** utilizando `.env`. El objetivo es comprobar si un número definido en una variable de entorno es un número primo.

---

## 📁 Estructura del proyecto

```
Ejercicio 1/
├── esPrimo.cjs             # Función que verifica si un número es primo (CommonJS)
├── esPrimoWrapper.mjs      # Importa esPrimo usando require desde ES Module
├── index.js                # Archivo principal que utiliza la función
├── .env                    # Variables de entorno
├── package.json            # Configuración del proyecto Node.js
├── README.md               # Este archivo
└── node_modules/           # Dependencias instaladas
```

---

## ⚙️ Requisitos

- Node.js v14 o superior
- npm (Node Package Manager)

---

## 🚀 Instalación

1. Cloná o descargá el proyecto.
2. Abrí la terminal y ubicáte en la carpeta del proyecto:

```bash
cd "Ejercicio 1"
```

3. Instalá las dependencias:

```bash
npm install
```

4. Creá un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
NUMERO=19
```

Podés cambiar `19` por cualquier número que quieras evaluar.

---

## 🧪 Uso

Para ejecutar el proyecto:

```bash
npm start
```

Deberías ver en la consola algo como:

```
¿El número 19 es primo? Sí
```

---

## 🛠 Tecnologías usadas

- [Node.js](https://nodejs.org/)
- CommonJS (`require` / `module.exports`)
- ES Modules (`import` / `export`)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📚 Detalles técnicos

- `esPrimo.cjs`: contiene la función `esPrimo(num)` exportada usando CommonJS.
- `esPrimoWrapper.mjs`: importa la función `esPrimo` usando `createRequire()` desde un ES Module.
- `index.js`: archivo principal que importa el módulo, lee la variable de entorno y muestra el resultado.

---

## ✍️ Autor

A. Nicolas Burda - DWN4AP
---

## 📝 Licencia

Este proyecto es solo para fines educativos y prácticas de programación con Node.js.
