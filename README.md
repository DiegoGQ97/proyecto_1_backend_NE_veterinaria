# Desafío - Veterinaria JS 🐾

Una aplicación simple en **Node.js** para registrar y ver citas de una veterinaria usando la terminal de comandos.

## 🛠️ Archivos del proyecto

* `index.js`: El archivo principal que recibe las órdenes en la terminal.
* `operaciones.js`: Contiene las funciones para guardar y leer los datos.
* `citas.json`: El archivo de texto donde se guarda la lista de mascotas.

---

## 🚀 Cómo usar la aplicación

Abre la terminal en la carpeta del proyecto y usa los siguientes comandos:

### 1. Registrar una mascota
Para guardar una cita, escribe `registrar` seguido del nombre, edad, tipo de animal, color y enfermedad:

```bash
node index.js registrar Benito "2 años" perro blanco vomitos
```

### 2. Ver las mascotas registradas
Para mostrar en la pantalla todas las citas que has guardado, escribe:

```bash
node index.js leer
```
