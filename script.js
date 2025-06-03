// Başlık metnini harflere ayırma
const title = "Bootcamp Turu";
const titleElement = document.getElementById("animated-title");

// Her harfi span elementi olarak oluştur
title.split("").forEach((char) => {
  const span = document.createElement("span");

  if (char === " ") {
    span.className = "space";
  } else {
    span.className = "letter";
    span.textContent = char;
  }

  titleElement.appendChild(span);
});
