import FieldMover from './field_mover';
import cocoonAddLimit from './cocoon_add_limit';

document.addEventListener('turbolinks:load', function () {
  //作品画像のcocoon設定
  (function () {
    // フィールドを上下入れ替えする
    const jsWorkImages = document.querySelector('.js-work-images');
    if(!jsWorkImages) {
      return;
    }

    const fieldMover = new FieldMover(jsWorkImages);

    $(jsWorkImages).on('cocoon:after-insert', function (event, added_task) {
      fieldMover.removeButtonListener();
      fieldMover.addButtonListener();
      fieldMover.resetPosition();
    });
    fieldMover.addButtonListener();
    fieldMover.resetPosition();

    // フィールドの入力数制限
    cocoonAddLimit(jsWorkImages, 4);
  })();


  // 作品リンクのcocoon設定
  (function () {
    // フィールドを上下入れ替えする
    const jsWorkLinks = document.querySelector('.js-work-links');
    if(!jsWorkLinks) {
      return;
    }

    const fieldMover = new FieldMover(jsWorkLinks);

    $(jsWorkLinks).on('cocoon:after-insert', function (event, added_task) {
      fieldMover.removeButtonListener();
      fieldMover.addButtonListener();
      fieldMover.resetPosition();
    });
    fieldMover.addButtonListener();
    fieldMover.resetPosition();

    // フィールドの入力数制限
    cocoonAddLimit(jsWorkLinks, 4);
  })();
});
