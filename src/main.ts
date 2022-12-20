import "./style.css";
import { setupCanvas } from "./canvas";

const portraitId = "portrait";
const landscapeId = "landscape";
const canvasId = "canvas";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Image Placer</h1>
    <div class="card">
      <button id="${portraitId}" type="button" disabled>Portrait</button>
      <button id="${landscapeId}" type="button" disabled>Landscape</button>
    </div>
    <canvas id="${canvasId}" width="300" height="300"></canvas>
  </div>
`;

const imgs = [
  { aspect: 1 },
  { aspect: 0.2 },
  { aspect: 5 },
  { aspect: 0.5 },
  { aspect: 0.1 },
  { aspect: 3 },
  { aspect: 12 },
];

const result = imgs.reduce((acc, curr) => {
  // return acc + curr.aspect;
  return acc + (curr.aspect < 1 ? 0 : 1);
}, 0);

console.log(result);

setupCanvas(
  document.querySelector<HTMLCanvasElement>(`#${canvasId}`)!,
  document.querySelector<HTMLButtonElement>(`#${portraitId}`)!,
  document.querySelector<HTMLButtonElement>(`#${landscapeId}`)!
);
