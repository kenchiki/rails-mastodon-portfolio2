import FieldMover from './field_mover';

document.addEventListener('turbolinks:load', function () {
  const jsWorkImages = document.querySelector('.js-work-images');
  if(!jsWorkImages) {
    return;
  }

  const fieldMover = new FieldMover(jsWorkImages);

  $('.js-work-images').on('cocoon:after-insert', function (event, added_task) {
    fieldMover.removeButtonListener();
    fieldMover.addButtonListener();
    fieldMover.resetPosition();
  });
  fieldMover.addButtonListener();
  fieldMover.resetPosition();
});
