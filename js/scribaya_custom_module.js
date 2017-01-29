
(function($){ 
  $(document).ready(function(){
    /* Calculate number of rating parameters on the page viewed*/
    count_fivestar = $('div.field-type-fivestar').size();
    var vote_tags = [];
    $('div.field-type-fivestar .field-label').each(function(){
       vote_tags.push($(this).text())
    });
    //var vote_tags = $('div.field-type-fivestar .field-label').text().split(':');
    for(var i = 0; i < count_fivestar; i++) {
      votes[vote_tags[i]] = 0;
      if($('div.field-type-fivestar').eq(i).find('div.description span.user-rating > span').text()) {
        if(!isNaN($('div.field-type-fivestar').eq(i).find('div.description span.user-rating > span').text())) {
          votes[$.trim(vote_tags[i])] = parseInt($('div.field-type-fivestar').eq(i).find('div.description span.user-rating > span').text())*20;
          count++;
          is_voted = 1;
        }
      }
    }		

    /* Add a div after all the stars. This is now usefull to display Thankyou msg */
    $('.custom_rating_block .panel-pane:last-child').after('<div class = "clearfix" ><div name="submit_rate_button" value="Rate It" class = "form-submit ajax-processed submit_rate_button" id = "submit_rate_button"></div></div>');

    /* If user has not voted the post */
    if( is_voted == 0 && !$('.fivestar-static-form-item').length) {
      $('#mini-panel-rating_block .field-type-fivestar .field-items').each(function() {
        $(this).css('position','relative');
        $(this).append('<div class = "overlay" style = "position:absolute;width:100%; height:100%;top:0;opacity: 0.5;background: #F0F0F0; border-radius: 6px;"></div>');
      });
      $('#mini-panel-rating_block .field-type-fivestar .field-items').eq(0).find('.overlay').remove('');
      //$('#mini-panel-rating_block .field-type-fivestar .field-items').eq(0).css('border','2px solid #26769E').css('background','#eff9ff').css('border-radius','6px');
      $('#mini-panel-rating_block .field-type-fivestar .field-items').eq(0).css('background','#eff9ff');
      //$('#mini-panel-rating_block .field-type-fivestar .field-items .field-item').eq(0).css('padding-top','6px').css('padding-bottom','6px');
      $('#mini-panel-rating_block .field-type-fivestar .field-items .star a').bind('click',click_highlight);
    } else {
        $('#mini-panel-rating_block .field-type-fivestar .field-items').each(function() {
            $(this).css('position','relative');
            $(this).append('<div class = "overlay" style = "position:absolute;width:100%; height:100%;top:0;opacity: 0;background: #F0F0F0; border-radius: 6px;"></div>');
        });
    }
    
  /*else if( is_voted == 1 ) { // Else user has already voted for the post
      $('#mini-panel-rating_block .pane-entity-field').each(function(){
        $('#mini-panel-rating_block .field-type-fivestar .field-items').css('background','#eff9ff').css('border-radius','6px');
        $('.custom_overall_rate_result .fivestar-oxygen').css('border','2px solid #26769E').css('background','#eff9ff').css('border-radius','6px').css('padding-top','6px').css('padding-bottom','6px');
      });
      /* Unbind click_highlight function from stars */
      /*$('#mini-panel-rating_block .field-type-fivestar .field-items .star a').unbind('click',click_highlight);
      /* Add mousehover effect to stars */
      /*$('#mini-panel-rating_block .field-type-fivestar .field-items .star a').mouseenter(function(){
        $(this).parents('.field-items').css('border','2px solid #26769E');
        $(this).parents('.field-item').css('padding','6px');
      });
      $('#mini-panel-rating_block .field-type-fivestar .field-items .star a').mouseleave(function(){
        $(this).parents('.field-items').css('border','');
        $(this).parents('.field-item').css('padding','8px');
      });
    }*/

    /* Display author that he cannot vote his own content */
    if($('.fivestar-static-form-item').length) {
      $('.pane-node-field-overall').next().remove();
      $('.pane-node-field-overall').next().next().remove();
      $('.pane-node-field-overall').after('<div class="cannot-rate">** You cannot rate your own article</div>');
    }
  });  
})(jQuery);

