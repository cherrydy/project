$(function(){
	$('.fixed .enter').click(function(){
		$('.meth').show()
	})

	$(window).scroll(function(){
		var wTop=document.documentElement.scrollTop||document.body.scrollTop;
		var i=wTop/650;
		console.log(wTop)
		if(wTop>1000){
			console.log(111)
			$('.fixed').show().stop(true).animate({right:60+'px'},1000);
		}else{
			console.log('222')
			$('.fixed').stop(true).animate({right:-60+'px'},1000,function(){
				$(this).hide();
			});
		}		
	})
	$('.meth').hover(function(){
		$('.meth span').show()
	},
	function(){
		$('.meth span').hide()
	})

	$('.meth span').click(function(){
		$('.meth').hide();
		$(this).children('a').attr('href','Western Food.html')
	})

	$('.meth ul li').eq(0).children('a').click(function(){
		$(this).addClass('pig').parent().siblings().children('a').removeClass('pig')
		var index=$(this).index()
		$('.min .meth div ul').eq(0).show().siblings().hide()
	})

	$('.meth ul li').eq(1).children('a').click(function(){
		$(this).addClass('pig').parent().siblings().children('a').removeClass('pig')
		var index=$(this).index()
		$('.min .meth div ul').eq(1).show().siblings().hide()
	})

	var flag=false;
	var phone=/^1[3|4|5|6|8][0-9]{9}$/;
	var password=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
	$('.meth input').focus(function(){
		$(this).addClass('shadow')
	})

	$('.meth input').eq(0).blur(function(){
		if($(this).val().length==0){
			$(this).next().text('* 请输入您的账号');
			flag=true;
		}else{
			if(phone.test($(this).val())){
					$(this).next().text('账号正确');
					$(this).next().css('color','lightgreen');
					$(this).css('border','1px solid #ccc')
					flag = true;
				}else{
					$(this).next().text('× 账号格式不正确');
					flag = false;
			}
		}
		$(this).removeClass('shadow')
	})

	$('.meth input').eq(1).blur(function(){
		if($(this).val().length==0){
			$(this).next().text('* 请输入您的密码');
			flag=true;
		}else{
			if(password.test($(this).val())){
					$(this).next().text('密码正确');
					$(this).next().css('color','lightgreen');
					$(this).css('border','1px solid #ccc')
					flag = true;
				}else{
					$(this).next().text('× 请重新输入密码');
					flag = false;
			}
		}
		$(this).removeClass('shadow')
	})

	$('.meth .end input').eq(0).blur(function(){
		if($(this).val().length==0){
			$(this).next().text('* 请输入您的账号');
			flag=true;
		}else{
			if(phone.test($(this).val())){
					$(this).next().text('账号正确');
					$(this).next().css('color','lightgreen');
					$(this).css('border','1px solid #ccc')
					flag = true;
				}else{
					$(this).next().text('× 账号格式不正确');
					flag = false;
			}
		}
		$(this).removeClass('shadow')
	})

	$('.meth .end input').eq(1).blur(function(){
		if($(this).val().length==0){
			$(this).next().text('* 请输入您的密码');
			flag=true;
		}else{
			if(password.test($(this).val())){
					$(this).next().text('密码正确');
					$(this).next().css('color','lightgreen');
					$(this).css('border','1px solid #ccc')
					flag = true;
				}else{
					$(this).next().text('× 请重新输入密码');
					flag = false;
			}
		}
		$(this).removeClass('shadow')
	})

	$('.meth .enter').on('click',function(){
		if($('.meth input').eq(0).val().length==0||$('.meth input').eq(1).val().length==0){
			$(this).next().text('* 信息不正确');
			$('.meth input').css('border','1px solid red')
			$('.meth textarea').css('border','1px solid red')
			flag=true;
		}
		if(phone.test($('.meth input').eq(0).val())&&password.test($('.meth input').eq(1).val())){
			alert('登陆成功')
			$(this).children('a').attr('href','Western Food.html')
			$(this).next().hide();
			$('.meth input').css('border','1px solid #ccc')
			$('.meth textarea').css('border','1px solid #ccc')
		}
	})

	$('.meth .login').on('click',function(){
		console.log('asd')
		if($('.meth .end input').eq(0).val().length==0||$('.meth .end input').eq(1).val().length==0){
			$(this).next().text('* 信息不正确');
			$('.meth input').css('border','1px solid red')
			$('.meth textarea').css('border','1px solid red')
			flag=true;
		}
		if(phone.test($('.meth .end input').eq(0).val())&&password.test($('.meth .end input').eq(1).val())){
			alert('注册成功');
			$(this).children('a').attr('href','Western Food.html')
			$(this).next().hide();
			$('.meth input').css('border','1px solid #ccc')
			$('.meth textarea').css('border','1px solid #ccc')
		}
	})
})