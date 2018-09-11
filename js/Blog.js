$(function(){
	//第六个
	//右边
	$('.mbRight ul li a').hover(function(){
		$(this).css('color','red');
		},
		function(){
			$(this).css('color','#ada5a5');
	})	
	//左边
	$('div.ae a').hover(function(){
		$(this).children('img').animate({zoom:1.1},500)
		},
		function(){
			$(this).children('img').animate({zoom:1},500)
	})	

	$('div.ae a').click(function(){
		$('.box').children('.main').eq(6).show().siblings().hide()
	})

	$('.mbLeft div.right li a').click(function(){
		$('.box').children('.main').eq(6).show().siblings().hide()
	})
	
	$('.mbLeft div.right li a').hover(function(){
		$(this).css('color','#f35041');
		},
		function(){
			$(this).css('color','black');
	})	

	$('.mbLeft li.abc a').hover(function(){
		$(this).css('color','black');
		},
		function(){
			$(this).css('color','#f35041');
	})	

	$('.mbLeft ul div div div a').hover(function(){
		$(this).addClass('wram')
	},function(){
		$(this).removeClass('wram')
	})

	$('.mbLeft ul div div div a').click(function(){
		$('.box').children('.main').eq(6).show().siblings().hide()
	})

	$('.mbLeft div.bottom a').hover(function(){
		$(this).addClass('cold')
	},function(){
		$(this).removeClass('cold')
	})	
})