$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).addClass("showAnswer");
    $(this).addClass("showQuestion");
  });
});
