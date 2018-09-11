$(function(){
	//第一部分
	//头部轮播图
	var index = 0;
	$('.left li').eq(0).fadeIn(500);
	var timer = setInterval(changeImage,3000);
	function changeImage(){
		if($('.left li').eq(index).next().length == 0){
			$('.left li').first().fadeIn(500);
			$('.left li').last().hide();
			index = 0;
		}else{
			$('.left li').eq(index).hide().next().fadeIn(500);
			index++;
		}	
		$('.right li').eq(index).addClass('art');
		$('.right li').eq(index).siblings().removeClass('art');
	}	
	//头部轮播图点击
	$('.right li').on('click',function(){
		clearInterval(timer);
		$(this).addClass('art').siblings().removeClass('art');
		var index=$(this).index();
		$('.left li').eq(index).fadeIn(2000).siblings().hide();
		timer = setInterval(changeImage,2000);
	})	
	//头部hover
	$('.mhBottom a').hover(function(){
		$(this).addClass('beauti')
		},
		function(){
			$(this).removeClass('beauti')
	})	
	$('.mhBottom a').click(function(){
		$('.box').children('.main').eq(2).show().siblings().hide()
	})



	// $(window).scroll(function(){
	// 	var wTop=document.documentElement.scrollTop||document.body.scrollTop;
	// 	var i=Math.floor(wTop/650)
	// 	if(wTop>i*650)
	// 		$('.main').eq(0).chlidren('div').eq(i+1).slideDown(1000)
	// })





	//主体头部hover
	$('.mtRight div a').hover(function(){
		$(this).addClass('nice');
		},
		function(){
			$(this).removeClass('nice')
	})	
	$('.mtRight div a').click(function(){
		$('.box').children('.main').eq(1).show().siblings().hide()
	})

	//主体轮播图
	var timer1;
	clearInterval(timer1);
	timer1=setInterval(loop,2000);
	var i=1;
	$('.num li').eq(0).addClass('art').siblings().removeClass('art');	
	function loop(){
		if(i<=4){
			var art={left:-355*i+'px'};
			$('.img').animate(art,500);
			$('.num li').eq(0).addClass('art').siblings().removeClass('art');	
			i++;
		}
		if(i>4){
			$('.num li').eq(1).addClass('art').siblings().removeClass('art');
			i=0;
		}
	}

	//主题轮播图点击		
	$('.num li').eq(0).click(function(){
		console.log('asfds')
		clearInterval(timer1);
		var index=$(this).index();
		$('.num li').eq(index).addClass('art').siblings().removeClass('art');
		var art={left:0+'px'};
		$('.img').animate(art,500);
		i=index+1
		timer1=setInterval(loop,2000);
	})
	$('.num li').eq(1).click(function(){
		console.log('asfds')
		clearInterval(timer1);
		var index=$(this).index();
		$('.num li').eq(index).addClass('art').siblings().removeClass('art');
		var art={left:-1420+'px'};
		$('.img').animate(art,500);
		i=index-1
		timer1=setInterval(loop,2000);
	})
	//主体轮播图hover
	$('.img li a').hover(function(){
		$(this).children('div').slideDown();
	},function(){
		$(this).children('div').slideUp();
	})

	//主体尾部
	$('.mbBottom ul li').hover(function(){
		$(this).children('div').fadeIn(1000);
	},function(){
		$(this).children('div').fadeOut(1000);
	})

	$('.mbBottom ul li div div a').hover(function(){
		$(this).addClass('cool')
		},
		function(){
			$(this).removeClass('cool')
	})	
	$('.mbBottom ul li div div a').click(function(){
		$('.box').children('.main').eq(2).show().siblings().hide()
	})

	$('.ftlLeft ul li a').hover(function(){
		$(this).children('img').eq(1).fadeIn(1000).siblings().hide();
	},function(){
		$(this).children('img').eq(0).fadeIn(1000).siblings().hide();
	})
	
})