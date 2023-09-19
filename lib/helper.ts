interface Lerp {
  current: number;
  target: number;
  factor: number;
}

export const lerp = ({ current, target, factor }: Lerp) => {
  return current * (1 - factor) + target * factor;
};

interface CalculateDistance {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export const calculateDistance = ({ x1, y1, x2, y2 }: CalculateDistance) => {
  return Math.hypot(x1 - x2, y1 - y2);
};
