export enum DiaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}

export function obterDiaSemana(dia: number): string {
  switch (dia) {
    case DiaSemana.Domingo: return "domingo";
    case DiaSemana.Segunda: return "segunda-feira";
    case DiaSemana.Terca:   return "terça-feira";
    case DiaSemana.Quarta:  return "quarta-feira";
    case DiaSemana.Quinta:  return "quinta-feira";
    case DiaSemana.Sexta:   return "sexta-feira";
    case DiaSemana.Sabado:  return "sábado";
    default: return "dia inválido";
  }
}
