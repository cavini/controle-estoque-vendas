export const navSlide = () => {
  const burger = document.querySelector(".styles.burger");

  const nav = document.querySelector(".styles.navLinks");

  if (burger) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("navActive");
    });
  }
};

navSlide();
