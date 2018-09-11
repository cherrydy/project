$(function(){
	$('.head ul li a').hover(function(){
		$(this).addClass('trans')
	},
	function(){
		$(this).removeClass('tran').parent().siblings().children('a').removeClass('trans tran')
	})
	//头部点击
	$('.head ul li').click(function(){
		var index=$(this).index();
		$(this).children('a').addClass('tran')
		$(this).siblings().children('a').removeClass('trans tran')
		$('.box').children('.main').eq(index).show().siblings().hide()
	})

	$('.head ul li').eq(3).click(function(){
		var index=$(this).index();
		$('.box').children('.main').eq(0).show().siblings().hide()
	})

	$('.head ul li').last().click(function(){
		var index=$(this).index();
		$('.box').children('.min').show().siblings().hide()
	})


	//尾部
	$('.ftlLeft ul li').click(function(){
		$('.box').children('.main').eq(6).show().siblings().hide()
	})

	$('.ftlLeft ul li').eq(0).hover(function(){
		$(this).addClass('fc');
		},function(){
			$(this).removeClass('fc');
	})

	$('.ftlLeft ul li').eq(1).hover(function(){
		$(this).addClass('fs');
		},function(){
			$(this).removeClass('fs');
	})

	$('.ftlLeft ul li').eq(2).hover(function(){
		$(this).addClass('ss');
		},function(){
			$(this).removeClass('ss');
	})

	$('.ftlLeft ul li').eq(3).hover(function(){
		$(this).addClass('lc');
		},function(){
			$(this).removeClass('lc');
	})

	$('.ftrLeft li').hover(function(){
		$(this).addClass('cat');
		},function(){
			$(this).removeClass('cat');
	})

	$('.foot .fTop li a').click(function(){
		$('.box').children('.main').eq(6).show().siblings().hide()
	})

	$('input.second').hover(function(){
		$(this).addClass('win')
		},
		function(){
			$(this).removeClass('win')
	})	

	var flag=false;
	var pattern=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
	$('input.input').blur(function(){
		if($(this).val().length==0){
			$(this).next().text('* 请输入邮箱地址');
			flag=true;
		}else{
			if(pattern.test($(this).val())){
					$(this).next().text('邮箱地址正确');
					$(this).next().css('color','lightgreen');
					$(this).css('border','1px solid #ccc')
					flag = true;
				}else{
					$(this).next().text('× 请输入正确的邮箱地址');
					$(this).next().css('color','red');
					flag = false;
			}
		}
	})

	$('input.second').click(function(){
		if($('input.input').val().length==0){
			$(this).next().text('* 信息不正确');
		}
		if(pattern.test($('.foot input').eq(0).val())){
			$(this).next().hide();
			alert('提交成功');
		}
	})
})