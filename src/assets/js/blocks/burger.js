const burger = (burgetSelector) => {
  const burgerBtn = document.querySelector(burgetSelector),
        body = document.body;


  burgerBtn.addEventListener('click', () => {
    (body.classList.contains('show-sidebar')) ? body.classList.remove('show-sidebar') : body.classList.add('show-sidebar');
  });
};

export default burger;