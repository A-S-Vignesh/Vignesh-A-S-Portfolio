// import React, { useEffect, useRef } from "react";
// import dropletSvg from "../assets/raindrop.png"; // Adjust the path as needed

// const RainCanvas = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const raindrops = [];
//     const numRaindrops = 50;
//     const img = new Image();
//     img.src = dropletSvg;

//     for (let i = 0; i < numRaindrops; i++) {
//       raindrops.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         speed: Math.random() * 2 + 2,
//         size: Math.random() * 20 + 10, // Adjust the size of the droplet
//       });
//     }

//     const drawRaindrop = (x, y, size) => {
//       ctx.drawImage(img, x, y, size, size);
//     };

//     const animateRain = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       raindrops.forEach((drop) => {
//         drawRaindrop(drop.x, drop.y, drop.size);
//         drop.y += drop.speed;
//         if (drop.y > canvas.height) {
//           drop.y = -drop.size;
//           drop.x = Math.random() * canvas.width;
//         }
//       });

//       requestAnimationFrame(animateRain);
//     };

//     // Start animation once the image has loaded
//     img.onload = animateRain;
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute top-0 left-0 w-full h-full"
//     ></canvas>
//   );
// };

// export default RainCanvas;

import React, { useEffect, useRef } from "react";

const RainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Raindrop properties
    const raindrops = [];
    const numRaindrops = 100;

    for (let i = 0; i < numRaindrops; i++) {
      raindrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10, // length between 10 and 30
        speed: Math.random() * 3 + 2, // speed between 2 and 5
      });
    }

    const drawRaindrop = (x, y, length) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + length);
      ctx.strokeStyle = "rgba(174, 194, 224, 0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const animateRain = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      raindrops.forEach((drop) => {
        drawRaindrop(drop.x, drop.y, drop.length);
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -drop.length; // Reset raindrop to above the canvas
          drop.x = Math.random() * canvas.width; // Randomize new position
        }
      });

      requestAnimationFrame(animateRain);
    };

    animateRain();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
    ></canvas>
  );
};

export default RainCanvas;
