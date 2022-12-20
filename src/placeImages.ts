// import { drawMidLineY } from "./helpers";
// place images on the canvas evenly using the number of images and their aspect

import { getRandomInt } from "./helpers";

// ratio to determine the size and position of the images.
async function placeImages(
  canvas: HTMLCanvasElement,
  images: HTMLImageElement[]
) {
  if (images.length === 0) {
    throw new Error("Images array is empty");
  }
  const ctx = canvas.getContext("2d")!;
  // clear the canvas before drawing so we can run this function multiple times
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // for two images
  if (images.length === 2) {
    // check if the images are both landscape or portrait
    const imageAspects = images.map((image) => image.width / image.height);
    if (imageAspects[0] > 1 && imageAspects[1] > 1) {
      // two landscape images
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const aspect = image.width / image.height;
        const width = canvas.width * 0.8;
        const height = width / aspect;
        // the difference between half the canvas height and the height of the image
        // is the offset
        const offset = (height - canvas.height / 2) / 2;
        const x = (canvas.width - width) / 2;
        const y = i * (canvas.height / 2) - offset;
        console.log(
          `x: ${x}, y: ${y}, width: ${width}, height: ${height}, offset: ${offset}`
        );
        // apply image rotation
        ctx.save();
        //translate the canvas to the center of the image
        ctx.translate(x + width / 2, y + height / 2);
        //rotate the canvas around the center of the image by a random angle between -15 and 15 degrees
        ctx.rotate((Math.PI / 180) * getRandomInt(-15, 15));
        // ctx.rotate((Math.PI / 180) * 10);
        // translate the canvas back to the top left corner
        ctx.translate(-x - width / 2, -y - height / 2);
        ctx.drawImage(image, x, y, width, height);
        ctx.restore();
      }
    } else if (imageAspects[0] < 1 && imageAspects[1] < 1) {
      console.log("two portrait images");
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const aspect = image.width / image.height;
        const height = canvas.height * 0.8;
        const width = height * aspect;
        // the difference between half the canvas height and the height of the image
        // is the offset
        const offset = (height - canvas.height / 2) / 2;
        const x = (canvas.width - width) / 2;
        const y = i * (canvas.height / 2) - offset;
        console.log(
          `x: ${x}, y: ${y}, width: ${width}, height: ${height}, offset: ${offset}`
        );
        // apply image rotation
        ctx.save();
        //translate the canvas to the center of the image
        ctx.translate(x + width / 2, y + height / 2);
        //rotate the canvas around the center of the image by a random angle between -15 and 15 degrees
        ctx.rotate((Math.PI / 180) * getRandomInt(-15, 15));
        // ctx.rotate((Math.PI / 180) * 10);
        // translate the canvas back to the top left corner
        ctx.translate(-x - width / 2, -y - height / 2);
        ctx.drawImage(image, x, y, width, height);
        ctx.restore();
      }
    } else {
      console.log("one landscape and one portrait image");
    }
  }
}

export { placeImages };
