import { DiaSemana, obterDiaSemana } from "./diaSemana";
const diaAtual: number = new Date().getDay();
console.log(`Hoje é ${obterDiaSemana(diaAtual)}`);
