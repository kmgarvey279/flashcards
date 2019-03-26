$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).find('.answer').toggle();
    $(this).find('.question').toggle();
  });
});
