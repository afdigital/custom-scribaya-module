
(function($){
  $(document).ready(function(){
    var flag = 1;
    /* Bind Function to upload button to set max upload limit */
    $('#edit-picture-upload').bind('change', function() {
      //this.files[0].size gets the size of your file.
      if(this.files[0].size) {
	if(((this.files[0].size)/(1024*1024)) > 2) {
	  flag = 0;
        }else {
	  flag = 1;
        }
      }
    });
    /* Show error msg when user submits pic > 2MB */
    $('#edit-submit').bind('click',function() {
      if (flag == 0) {
        $('#post-content').prepend('<div class="messages error"><h2 class="element-invisible">Error message</h2>Your profile pic cannot be more then 2MB.</div>');
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      }
    });
  });  
})(jQuery);

