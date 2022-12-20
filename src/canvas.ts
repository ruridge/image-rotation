import { placeImages } from "./placeImages";

const imageLoader = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Could not load image at ${url}`));
  });
};

export const setupCanvas = async (
  canvas: HTMLCanvasElement,
  portraitButton: HTMLButtonElement,
  landscapeButton: HTMLButtonElement
) => {
  canvas.width = 300;
  canvas.height = 300;
  // load images
  const twoLandscapeImages = await Promise.all([
    imageLoader("https://random.imagecdn.app/400/300?v=0"),
    imageLoader("https://random.imagecdn.app/400/300?v=1"),
  ]);
  const twoPortraitImages = await Promise.all([
    imageLoader("https://random.imagecdn.app/300/400?v=0"),
    imageLoader("https://random.imagecdn.app/300/400?v=1"),
  ]);
  landscapeButton.disabled = false;
  portraitButton.disabled = false;
  // enable button
  // place images on the canvas
  landscapeButton.addEventListener("click", () =>
    placeImages(canvas, twoLandscapeImages)
  );
  portraitButton.addEventListener("click", () =>
    placeImages(canvas, twoPortraitImages)
  );
};
