export function getPrevAndNextIndex(index: number, length: number) {
  const prev = index === 0 ? length - 1 : index - 1;
  const next = index === length - 1 ? 0 : index + 1;
  return { prev, next };
}
