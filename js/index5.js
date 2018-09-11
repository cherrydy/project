$(function(){
	$('.mBot .two a').hover(function(){
		$(this).addClass('vin')
	},function(){
		$(this).removeClass('vin')
	})	

	$('.mBot .five ul div ul a').hover(function(){
		$(this).addClass('min')
	},function(){
		$(this).removeClass('min')
	})	

	$('.nine .nTop ul').on({click:function(){
			$(this).children('a').addClass('arr').parent().siblings().children().removeClass('arr');
			var index = $(this).index();
			$('.nine .nTop div').hide();
			$('.nine .nTop span').removeClass('yu')
			$('.nine .nFoot p').eq(index).fadeIn(500).siblings().hide()},
		mouseenter:function(){
			$(this).children('a').addClass('asd').parent().siblings().children().removeClass('asd');
			$('.nine .nTop div').hide();
			$('.nine .nTop span').removeClass('yu')	
		},
		mouseleave:function(){
			$(this).children('a').removeClass('asd');
			$('.nine .nTop div').hide();
			$('.nine .nTop span').removeClass('yu')
		}
	})

	$('.nine .nTop span').removeClass('yu').on({click:function(){
		$('.nine .nTop div').show()
		$(this).addClass('yu')
		},
		mouseenter:function(){
			$(this).children('a').addClass('asd')
		},
		mouseleave:function(){
			$(this).children('a').removeClass('asd');
		}
	})

	$('.nine .nTop div p').eq(0).on({click:function(){
			$(this).css('backgeound','#eee')
			$('.nine .nFoot p').eq(2).fadeIn(500).siblings().hide()
		}
	})

	$('.nine .nTop div p').on({	
		mouseenter:function(){
			$(this).css('background','#eee')
		},
		mouseleave:function(){	
			$(this).css('background','white')		
		}
	})
	
	$('.nine .nTop div p').eq(1).on({click:function(){
		$(this).css('backgeound','#eee')
		$('.nine .nFoot p').eq(3).fadeIn(500).siblings().hide()
		}
	})
})