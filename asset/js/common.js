(function($){
  // skill Level
  var n = 0;
  var skillLen = $('.skill > ul > li').length;
  var skillLevel = $('.skillLevel');
  for ( ; n < skillLen ; n++ ){
    var i = 0;
    var skLClass_ = skillLevel.eq(n).attr('class');
    var sliceClass_ = skLClass_.slice(-1);
    for( ; i < sliceClass_ ; i++){
      skillLevel.eq(n).find('li').eq(i).css({'backgroundColor':'#8eafce'});
    }
  }
  
  // about - tab
  var conCategory = $('.conCategory > ul');
  var conCateLi = conCategory.find('li');
  $('.conInner').find('.conList').hide();
  $('.conInner').find('.conList').eq(0).fadeIn(500);
  
  
  conCateLi.on('click',function(){
    var _this = $(this).index();
    $(this).siblings().removeClass('act');
    $(this).addClass('act');
    var hasAct = conCateLi.eq(_this).hasClass('act');
    if(hasAct){
      $('.conInner').find('.conList').hide();
      $('.conInner').find('.conList').eq(_this).fadeIn(500);
    }
  });
})(jQuery);