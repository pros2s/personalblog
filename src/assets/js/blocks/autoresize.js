const autoResize = (textareaSelector) => {
  const textArea = document.querySelectorAll(textareaSelector);

  textArea.forEach(area => {
    area.addEventListener('input', e => {
      const target = e.target;

      target.style.height = '3.5rem';
      target.style.paddingBottom = '0';
      target.style.height = target.scrollHeight + 'px';
    });
  });
};

export default autoResize;