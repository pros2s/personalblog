const subnav = (navSelector) => {
  const nav = document.querySelector(navSelector),
        subNav = nav.querySelector('.subnav');

  nav.addEventListener('click', e => {
    const hasSub = e.currentTarget.querySelector('.has-subnav');
    if (hasSub) {
      if (!subNav.classList.contains('show')) {
        setTimeout(() => {
          subNav.classList.add('show');
          subNav.querySelectorAll('.subnav__item').forEach(item => {
            item.style.display = 'block';
          });
        }, 200);
      }
      else {
        subNav.classList.remove('show');

        subNav.querySelectorAll('.subnav__item').forEach(item => {
          item.removeAttribute('style');
        });
      }
    }
  });
};

export default subnav;