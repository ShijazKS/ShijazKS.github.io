
// cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#a8e6cf",
    "#9de2c9",
    "#91dec3",
    "#86dabc",
    "#7ad6b6",
    "#6fd2b0",
    "#63ceaa",
    "#58caa4",
    "#4dc69e",
    "#42c297",
    "#37be91",
    "#2cba8b",
    "#21b685",
    "#16b27f",
    "#0bad79",
    "#00a973",
    "#009f68",
    "#00945e",
    "#008a54",
    "#007f4a",
    "#007540",
    "#006b36",
    "#00612c"
  ];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


