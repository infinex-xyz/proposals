export function number(num: number) {
  return [0, 9999].includes(num) ? 'X' : num;
}
