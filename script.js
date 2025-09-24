import { single_container } from "./image_container.js";

async function loadImage() {
  const url = "https://picsum.photos/200/300";

  const container = document.createElement("div");
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Random image";
  single_container.appendChild(img);

  document.body.appendChild(container);
}

async function loadImage_() {
  fetch("https://picsum.photos/200/300", { cache: "no-cache" })
  .then(res => res.blob())
  .then(blob => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(blob);
    single_container.appendChild(img)
    document.body.appendChild(single_container);
  });
}

loadImage_();
loadImage_();
loadImage_();
loadImage_();
loadImage_();
loadImage_();
loadImage_();
loadImage_();

loadImage_();
loadImage_();
loadImage_();
loadImage_();
loadImage_();
loadImage_();
loadImage_();
loadImage_();
loadImage_();