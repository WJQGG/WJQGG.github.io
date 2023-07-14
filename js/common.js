 $(document).ready(function(){
function heightvalue(event){
  $('.container').css({'height':$(window).height()-$(".herder-style").height()-$(".footer-style").height(),"margin-top":$(".herder-style").height(),"position": "","bottom":0,"z-index":1,"top":0});
	$(".Language-select").css('height',$(window).height()-$(".herder-top").outerHeight());
  }
  heightvalue()
  $(window).resize(function(){
   heightvalue()
  });
	 
$('.herder-top .title_name').each(function(){
var txtLeng = $('.herder-top .title_name  ').text().length;
if( txtLeng>30){//判断字体是否超出界限
//$('.nlzzts').text(' 0 ');
var fontsize = $('.herder-top .title_name').css({"font-size":"1.2rem","line-height":"20px"}).html();
$('.herder-top .title_name ').html( fontsize );
}else{

}
}); 
	 
var flag=1; 
function column(){
    var switchbtn=$("#switch_btn");
	$("#column-style").animate({width: '45%','display':'block'},300);
	switchbtn.animate({left: '45%'},300);
	switchbtn.css({"background-position":"0px 0","opacity":"1","margin-top":-$("#switch_btn").height()/2});
	flag=0;
	$('html').addClass('noscroll');
 }
$('#switch_btn').on('click',function(event){
	 event.stopPropagation();
	var widths=$("#column-style").width();
	if(flag==1 || widths!=0){
    column(); 
	}
	if(widths==0){
	column();
	}
	else{
		$("#column-style").animate({width: '0'},300);
		$(this).animate({left: '0'},300);
		$(this).css({"background-position":"0px 0","opacity":"0.8","margin-top":-$("#switch_btn").height()/2});
		flag=1;
		$('html').removeClass('noscroll');
	}
});
	$("body").on('click',function(event){
	var switchbtn=$("#switch_btn");
	var target = $(event.target);
	if(target.is($('#switch_btn'))){
	$("#column-style").animate({width: '0','display':'none'},300);
	switchbtn.animate({left: '0'},300);
	switchbtn.css({"background-position":"0px 0","opacity":"1","margin-top":-$("#switch_btn").height()/2});
	   }
		else{
				$("#column-style").animate({width: '0','display':'none'},300);
	switchbtn.animate({left: '0'},300);
	switchbtn.css({"background-position":"0px 0","opacity":"1","margin-top":-$("#switch_btn").height()/2});
			$('html').removeClass('noscroll');
			
		}
});
});

