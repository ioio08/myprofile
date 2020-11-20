'use strict'

{


  window.addEventListener("scroll", () => {
    const topLink = document.getElementById("top-link");
    const scrollTop = document.scrollingElement.scrollTop;
    if (scrollTop >= 200) {
      topLink.classList.remove('hidden');
    } else {
      topLink.classList.add('hidden');
    }
  })

}