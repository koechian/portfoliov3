// navigation starts here
$("#toggle").click(function () {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function () {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});

$(".close-btn").click(function () {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});
// navigation ends here

// nav animation
TweenMax.from("#brand", 1, {
  delay: 0.4,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  "#menu li a",
  1,
  {
    delay: 0.4,
    opacity: 0,
    ease: Expo.easeInOut,
  },
  0.1
);

// nav animation ends
new WOW().init();

// Bottom links animation
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = (id) => {
  const element = document.getElementById(id),
    text = element.innerText.split("");

  element.innerText = "";

  text.forEach((value, index) => {
    const outer = document.createElement("span");

    outer.className = "outer";

    const inner = document.createElement("span");

    inner.className = "inner";

    inner.style.animationDelay = `${rand(-5000, 0)}ms`;

    const letter = document.createElement("span");

    letter.className = "letter";

    letter.innerText = value;

    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);

    outer.appendChild(inner);

    element.appendChild(outer);
  });
};

// side scroller

const scroller = (id) => {
  const element = document.getElementById(id);

  for (let i = 0; i < 40; i++) {
    const span = document.createElement("span");

    span.className = "conveyer-content";

    span.innerHTML = "<em>2023 </em>&nbsp;&nbsp; Portfolio";

    element.appendChild(span);
  }
};

// various animation function calls
scroller("left-scroller-wrapper");
scroller("right-scroller-wrapper");

enhance("whatsapp-link");
enhance("mail-link");
enhance("ian");
enhance("software");
enhance("engineer");

// Custom console.log
console.log(
  "%c \uD83E\uDD19 Developed by koechian",
  "font-size: 12px;font-family: monospace;background: black;display: inline-block;color: white;padding: 15px;border: 2px solid white;"
);
