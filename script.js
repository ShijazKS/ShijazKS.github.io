var typingDiv = document.getElementById("typing-animation");

if (!typingDiv) {
  typingDiv = document.createElement("div");
  typingDiv.id = "typing-animation";
  document.body.appendChild(typingDiv);
}

// Create a span element for typing animation
var typingSpan = document.createElement("span");
typingDiv.appendChild(typingSpan);

function typeWriter(text, i) {
  if (i < text.length) {
    typingSpan.innerHTML += text.charAt(i);
    i++;
    setTimeout(function () {
      typeWriter(text, i);
    }, 50);
  } else {
    setTimeout(function () {
      eraseText(text.length);
    }, 1000);
  }
}

function eraseText(length) {
  var text = typingSpan.innerHTML;
  if (text.length > 0) {
    text = text.substring(0, text.length - 1);
    typingSpan.innerHTML = text;
    setTimeout(function () {
      eraseText(length);
    }, 30);
  } else {
    setTimeout(function () {
      typeWriter("I am using Arch linux BTW :)", 0);
    }, 1000);
  }
}

typeWriter("I am using Arch linux BTW :)", 0);


