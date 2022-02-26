import burger from './blocks/burger';
import modal from './blocks/modal';

window.addEventListener('DOMContentLoaded', () => {
  burger('.burger');

  modal('#contactModal', '[data-modal="contact-modal"]');
  modal('#story-modal', '[data-modal="story-modal"]');
  modal('#share-modal', '[data-modal="share-modal"]');
});