$(document).ready(() => {
  const slickOption = {
    autoplay: true,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Previous</button>;',
  };
  $(".deposlider").slick(slickOption);
});
