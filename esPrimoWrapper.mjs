import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const esPrimo = require('./esPrimo.cjs');

export default esPrimo;