export const isInInterval = (
  value: number,
  min?: number,
  max?: number
): boolean =>
  (min === undefined || value >= min) && (max === undefined || value <= max)
