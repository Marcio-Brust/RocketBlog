import outsideClick from "./outsideclick.js";

export default function initiBtnMobile() {
  const btnMobile = document.querySelector(".btn-mobile");

  function handleClick(event) {
    const nav = document.querySelector(".nav");

    if (event.type === "touchstart") event.preventDefault();

    const ativo = nav.classList.contains("active");
    nav.classList.remove("active");
    btnMobile.classList.remove("active");

    outsideClick(btnMobile, ["click", "touchstart"], () => {
      nav.classList.remove("active");
      btnMobile.classList.remove("active");
    });

    if (!ativo) {
      nav.classList.add("active");
      btnMobile.classList.add("active");
    }
  }

  btnMobile.addEventListener("click", handleClick);
  btnMobile.addEventListener("touchstart", handleClick);
}
