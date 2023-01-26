/*Создаем функцию slidesPlugin для того, чтобы мы могли
менять активную картинку. По умолчанию ставим 2-ю картирку
с классом active т. е. большую*/
function slidesPlugin(activeSlide = 2) {
  /*Создаем константу slides и связываем ее с классом slide */
  const slides = document.querySelectorAll(".slide");

  /*Создаем массив слайдов в котором при выборе картинки по
 индексу на ней будет класс active */
  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    //Вешаем событие при клике на слайд
    slide.addEventListener("click", () => {
      clearActiveClasses();
      //При клике на слайд ему добавляется active
      slide.classList.add("active");
    });
  }
  /*Создаем функцию которая будет чистить не активный класс*/
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlugin(1);
