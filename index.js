
import esPrimo from './esPrimoWrapper.mjs';
import dotenv from 'dotenv';

dotenv.config();

const numero = parseInt(process.env.NUMERO);
console.log(`¿El número ${numero} es primo?`, esPrimo(numero) ? 'Sí' : 'No');