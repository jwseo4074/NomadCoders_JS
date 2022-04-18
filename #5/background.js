const images = ["1.jpg","2.jpg","3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 지금까지와는 반대로 JS에서 HTML로 뭔가를 넘겨줘야 해
// HTML에 추가해줘야 해

const bgImage = document.createElement("img");

bgImage.src=`${chosenImage}`;

// console.log(bgImage);

document.body.appendChild(bgImage);