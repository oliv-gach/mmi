$(function(){
   $(".dropdown-item").click(function(){
      var id = $(this).parent().attr('aria-labelledby');
      $('#' + id).text($(this).text());
  });

});