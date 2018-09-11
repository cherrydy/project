$(function(){
	//第二部分
	$('.mT div .left div').hover(function(){	
		$(this).children('img').animate({zoom:1.1},500)
		$(this).children('div').fadeIn(500)
	},function(){	
		$(this).children('img').animate({zoom:1},500)
		$(this).children('div').fadeOut(500)
	})

	$('.mmFooter ul li a').hover(function(){
		$(this).children('div').slideDown()
	},function(){
		$(this).children('div').slideUp()
	})
	//主体中部
	$('.mmFooter ul li a div ul li').hover(function(){
		$(this).addClass('fone')
	},function(){
		$(this).removeClass('fone')
	})

	$('.mfFooter div ul a img').on('click',function(){
		$('.box').children('.main').eq(6).show().siblings().hide()
	})

	//主体尾部字体
	$('.mfFooter div ul li a').hover(function(){
		$(this).css('color','black')
	},function(){
		$(this).css('color','red')
	})
	
	$('.mfFooter div ul li a').on('click',function(){
		$('.box').children('.main').eq(6).show().siblings().hide()
	})
})