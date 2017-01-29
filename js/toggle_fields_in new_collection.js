
(function($){ 
  $(document).ready(function(){
    function hide_novel(){
      $('#edit-field-novels-in-this-collection').hide();
    }
    function show_novel(){
      $('#edit-field-novels-in-this-collection').show();
    }
    function hide_collection(){
      $('#edit-field-articles-in-this-collectio').hide();
    }
    function show_collection(){
      $('#edit-field-articles-in-this-collectio').show();
    }
    if($('input[name="field_is_novel[und]"]:checked').val() == 1) {
          hide_collection();
          show_novel();
    } else if($('input[name="field_is_novel[und]"]:checked').val() == 0){
          hide_novel();
          show_collection();
    }
    $('input[name="field_is_novel[und]"]').live('click',function(){
        if($(this).val() == 1) {
          hide_collection();
          show_novel();
      } else if($(this).val() == 0){
          hide_novel();
          show_collection();
      }
    });
  });
})(jQuery);