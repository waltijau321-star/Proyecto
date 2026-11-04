// engine/vpo-listas.js
// Reexportación: la fábrica de listas buscables vive ahora en engine/listas-marcables.js, que no
// pertenece a ningún área. Este archivo se queda porque los cuatro módulos de VPO que la usan la
// importan por este nombre, y porque la prueba que comprueba que todos los módulos de VPO están
// en SHELL del service worker los enumera por nombre de archivo.
export { listaMarcable, bloqueHTML } from './listas-marcables.js';
