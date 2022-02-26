const modal = (modalSelector, btnSelector) => {
  const modalwind = document.querySelector(modalSelector),
        modalClose = document.querySelectorAll('.modal__close'),
        modalContent = document.querySelectorAll('.modal__content'),
        modalBtn = document.querySelectorAll(btnSelector),
        body = document.body;


  const openModal = () => {
          modalwind.classList.add('show');
          body.classList.add('no-scroll');

          setTimeout(() => {
            modalContent.forEach(item => {
              item.style.transform = 'none';
              item.style.opacity = '1';
            });
          }, 200);
        },
        closeModal = () => {
          body.classList.remove('no-scroll');

          modalContent.forEach(item => {
            item.removeAttribute('style');
          });

          setTimeout(() => {
            modalwind.classList.remove('show');
          }, 200);
        };

  modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      openModal();
    });
  });

  modalClose.forEach(close => {
    close.addEventListener('click', () => {
      closeModal();
    });
  });

  modalwind.addEventListener('click', e => {
    if (e.target == modalwind) {
      closeModal();
    }
  });
};

export default modal;