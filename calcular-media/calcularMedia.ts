export function calcularMedia(...notas: number[]): number {
  const total = notas.reduce((sum, n) => sum + n, 0);
  return notas.length ? total / notas.length : 0;
}
