(function($) {

  $.ajax({
    url : "../asset/data/portfolioWeb.json",
    context : document.body
  }).done(function(data){
    var imgUrl = "../asset/img/portfolio/";
    var portData = data;

    // portData의 수량 만큼 conListUl 내부에 li 요소 생성
    var portDataLen = portData.length;
    var conListUl = $('.conListUl');
    var makeLi = '<li class="conLi"><a target="_blank"><div class="lineBox"><p class="conLiTitle"></p><div class="conLiDescrip"><p class="portDes"></p><p class="portStatus"></p><p class="portLan"></p><p class="portDate"></p></div></div><img class="conLiImg" src="#" alt=""></a></li>';
    var p = 0;

    for ( ; p < portDataLen ; p++ ){
      conListUl.append(makeLi);
    }

    // 데이터바인딩
    var i = 0;
    var DataInsertFn = function(i){
      var portLi = conListUl.find('li').eq(i);
      var portLink = portLi.find('a');
      var portLiTitle = portLi.find('p.conLiTitle');
      var portLiDes = portLi.find('p.portDes');
      var portLiStatus = portLi.find('p.portStatus');
      var portLiLan = portLi.find('p.portLan');
      var portLiDate = portLi.find('p.portDate');
      var portLiImg = portLi.find('.conLiImg');

      var conLiTitle = portData[i].conLiTitle;
      var portDes = portData[i].portDes;
      var portStatus = portData[i].portStatus;
      var portLan = portData[i].portLan;
      var portDate = portData[i].portDate;
      var imgSrc = 'url(' + imgUrl + portData[i].imgSrc + ')';
      var imgAlt = portData[i].imgAlt;
      var siteLink = portData[i].siteLink;

      portLink.attr('href',siteLink);
      portLiTitle.html(conLiTitle);
      portLiDes.html(portDes);
      portLiStatus.html(portStatus);
      portLiLan.html(portLan);
      portLiDate.html(portDate);
      portLiImg.attr('src',imgSrc);
      portLiImg.attr('alt',imgAlt);
    };

    for ( ; i < portDataLen ; i++ ) {
      DataInsertFn(i);
    }
  });

})(jQuery);