class FieldMover {
  constructor(container) {
    this.container = container;
    this.handles = [];
  }

  addButtonListener() {
    this.container.querySelectorAll('.nested-fields').forEach((nested) => {
      this.handles.push({
        elm: nested.querySelector('.js-up'),
        handle: (event) => {
          this.up(event, this.container, nested);
          this.resetPosition();
        }
      });
      this.handles.push({
        elm: nested.querySelector('.js-down'),
        handle: (event) => {
          this.down(event, this.container, nested);
          this.resetPosition();
        }
      });
    });

    this.handles.forEach(function (event) {
      event['elm'].addEventListener('click', event['handle'], false);
    })
  }

  removeButtonListener() {
    this.handles.forEach(function (event) {
      event['elm'].removeEventListener('click', event['handle'], false);
    });
    this.handles = [];
  }

  resetPosition() {
    this.container.querySelectorAll('.nested-fields').forEach(function (nested, index) {
      nested.querySelector('.js-position').value = index + 1;
    });
  }

  up(event, container, nested) {
    event.preventDefault();
    const elms = container.querySelectorAll('.nested-fields');
    const index = Array.prototype.indexOf.call(elms, nested);

    if ((index - 1) < 0) {
      return;
    }
    const prev = elms[index - 1];
    nested.parentNode.insertBefore(nested, prev);
  }


  down(event, container, nested) {
    event.preventDefault();
    const elms = container.querySelectorAll('.nested-fields');
    const index = Array.prototype.indexOf.call(elms, nested);

    if ((index + 1) >= elms.length) {
      return;
    }
    const next = elms[index + 1];
    nested.parentNode.insertBefore(next, nested);
  }
}

document.addEventListener('turbolinks:load', function () {
  const fieldMover = new FieldMover(document.querySelector('.js-work-images'));
  $('.js-work-images').on('cocoon:after-insert', function (event, added_task) {
    fieldMover.removeButtonListener();
    fieldMover.addButtonListener();
    fieldMover.resetPosition();
  });
  fieldMover.addButtonListener();
  fieldMover.resetPosition();
});
