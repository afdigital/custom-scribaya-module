
(function($){ 
  $(document).ready(function(){
	
	/* Set destination to register link as pathname of the page */
    if(window.location.pathname == "/")
    	$('.menu-path-node-500 a').attr('href','/register?destination=home');
	else
		$('.menu-path-node-500 a').attr('href','/register?destination='+window.location.pathname.substring(1));
    
    
    var node_id;
    /* Get nodeID from server using alias name (URL) */
    node_url = window.location.pathname.split('/');
    $.ajax({
      url: "http://"+window.location.hostname+"/get/node/id",
      type: 'POST',
      dataType: 'json',
      data: {'url':node_url[1]+"/"+node_url[2]},
      success: function(data) {
        /* Use the nodeID to show login/register div to user over rating block */
        node_id = data.node_id;

        $('.custom_rating_block').css({position:'relative'});
        $('#mini-panel-rating_block').css({opacity:'0.2'});
        $('#mini-panel-rating_block').after('<div class="overlay-wrapper" style="position:absolute; top:0; bottom:0; left:0; right:0; opacity: 5;"><div id="kcustom_comment_login_link"> <p><a href="/login?destination=node/'+node_id+'">Login</a> or <a href="/register?destination=node/'+node_id+'">Register</a> to rate </p></div></div>');
      }
    });
	$('.custom_get_started_wrapper a').attr('href','/signup?destination=home');
	
  });  
})(jQuery);
