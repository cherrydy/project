$(function(){
	//第三个
	$('.mBo ul li div').hover(function(){
		$(this).children('div').fadeIn(1000)
		$(this).children('img').animate({zoom:1.1},500)
	},function(){
		$(this).children('div').fadeOut(1000)
		$(this).children('img').animate({zoom:1},500)
	})

	$('.mBo ul li div div a').hover(function(){
		$(this).addClass('cood')
		},
		function(){
			$(this).removeClass('cood')
	})		

	$('.mBo ul li div div a').click(function(){
		$('.box').children('.main').eq(6).show().siblings().hide()
	})
})