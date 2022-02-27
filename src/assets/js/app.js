import burger from './blocks/burger';
import modal from './blocks/modal';
import subnav from './blocks/subnav';
import autoResize from './blocks/autoresize';

window.addEventListener('DOMContentLoaded', () => {
  burger('.burger');

  modal('#contactModal', '[data-modal="contact-modal"]');
  modal('#story-modal', '[data-modal="story-modal"]');
  modal('#share-modal', '[data-modal="share-modal"]');

  subnav('.nav--mobile');

  autoResize('[data-textarea]');
});