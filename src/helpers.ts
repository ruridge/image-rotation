export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const drawMidLineX = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d")!;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
};
export const drawMidLineY = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d")!;
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
};
