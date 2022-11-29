export function loadCursor() {

  let cursor = document.querySelector(".cursor");
  let cursor2 = document.querySelector(".cursor2");
  let cursorScale = document.querySelectorAll(".cursor-scale");
  let swiper = document.querySelector(".swiper");
  let mouseX = window.clientX;
  let mouseY = window.clientY;


  gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY
        }
      });
      gsap.set(cursor2, {
        css: {
          left: mouseX,
          top: mouseY
        }
      });
    }
  });

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  swiper.addEventListener("drag", (e) => {
    mouseX = e.changedTouches[0].screenX;
    mouseY = e.changedTouches[0].screenY;
    console.log(e.changedTouches[0].screenX + "\t" + e.changedTouches[0].screenY)
  });

  swiper.addEventListener("touchend", (e) => {
    mouseX = e.changedTouches[0].screenX;
    mouseY = e.changedTouches[0].screenY;
    console.log(e.changedTouches[0].screenX + "\t" + e.changedTouches[0].screenY)
  });

  cursorScale.forEach((link) => {
    link.addEventListener("mousemove", () => {
      cursor.classList.add("grow");
      if (link.classList.contains("small")) {
        cursor.classList.remove("grow");
        cursor.classList.add("grow-small");
      }
    });

    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
      cursor.classList.remove("grow-small");
    });
  });
}

export default loadCursor;