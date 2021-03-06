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
  });

  window.addEventListener("scroll", () => {
    const nav = document.getElementById("Navigation");
    const profile = document.getElementById("Profile");
    const fadeJuniorHighSchool = document.getElementById("fade-junior-high-school");
    const fadeHighSchool = document.getElementById("fade-highschool");
    const fadeUniversity = document.getElementById("fade-university");
    const programing = document.getElementById("Programing");
    const product = document.getElementById("Product");
    const contact = document.getElementById("Contact");
    const scrollTop = document.scrollingElement.scrollTop;
    if (scrollTop >= 0 && scrollTop <= 679 ) {
      nav.classList.add('fade-in');
      profile.classList.add('fade-in');
    } else if (scrollTop > 680 && scrollTop <= 1499 ) {
      fadeJuniorHighSchool.classList.add('fade-in');
    } else if (scrollTop > 1500 && scrollTop <= 2099 ) {
      fadeHighSchool.classList.add('fade-in');
    } else if (scrollTop > 2100 && scrollTop <= 2599 ) {
      fadeUniversity.classList.add('fade-in');
    } else if (scrollTop > 2600 && scrollTop <= 3799 ) {
      programing.classList.add('fade-in');
    } else if (scrollTop > 3800 && scrollTop <= 5299 ) {
      product.classList.add('fade-in');
    } else if (scrollTop > 5300 ) {
      contact.classList.add('fade-in');
    }
  });
}