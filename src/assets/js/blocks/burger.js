const burger = (burgetSelector) => {
  const burgerBtn = document.querySelector(burgetSelector),
        page = document.querySelector('.page'),
        body = document.body;


  burgerBtn.addEventListener('click', () => {
    (body.classList.contains('show-sidebar')) ? closeBurgerMenu() : openBurgerMenu();
  });

  const openBurgerMenu = () => {
    let mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.addEventListener('click', closeBurgerMenu);
    page.appendChild(mask);

    body.classList.add('show-sidebar');
  };

  const closeBurgerMenu = () => {
    body.classList.remove('show-sidebar');
    page.querySelector('.page__mask').remove();
  };

};

export default burger;