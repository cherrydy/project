$(function(){
	$('li.yami a').hover(function(){
		$(this).css('color','black');
		},
		function(){
			$(this).css('color','#f35041');
	})	

	$('.mlTop li a').hover(function(){
		$(this).css('color','black');
		},
		function(){
			$(this).css('color','#f35041');
	})	

	$('.mlFoot div a').hover(function(){
		$(this).addClass('rash')
		},
		function(){
			$(this).removeClass('rash')
	})

	var flag=false;
	var username = /^[\u4E00-\u9FA5A-Za-z]+$/;
	var pattern=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
	$('.mlFoot input.username').blur(function(){
		if($(this).val().length==0){
			$(this).next().text('* 请输入您的姓名');
			flag=true;
		}else{
			if(username.test($(this).val())){
					$(this).next().text('用户名正确');
					$(this).next().css('color','lightgreen');
					$(this).css('border','1px solid #ccc')
					flag = true;
				}else{
					$(this).next().text('× 用户名不符合规范');
					flag = false;
			}
		}
	})

	$('.mlFoot input').eq(1).blur(function(){
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
					flag = false;
			}
		}
	})

	$('textarea').blur(function(){
		if($(this).val().length==0){
			$(this).next().text('* 请填写此字段');
			flag=true;
		}else{
			$(this).next().text('感谢您的留言');
			$(this).next().css('color','lightgreen');
			$(this).css('border','1px solid #ccc')

		}
	})

	$('.mlFoot div').on('click',function(){
		if($('.mlFoot input').eq(0).val().length==0&&$('.mlFoot input').eq(1).val().length==0&& $('textarea').val().length==0){
			$(this).next().text('* 信息不正确');
			$('.mlFoot input').css('border','1px solid red')
			$('.mlFoot textarea').css('border','1px solid red')
			flag=true;
		}
		if(username.test($('.mlFoot input').eq(0).val())&&pattern.test($('.mlFoot input').eq(1).val())){
			alert('提交成功')
			$(this).next().hide();
			$('.mlFoot input').css('border','1px solid #ccc')
			$('.mlFoot textarea').css('border','1px solid #ccc')
		}
	})

	$('.mainR ul li a').hover(function(){
		$(this).css('color','red');
		},
		function(){
			$(this).css('color','#ada5a5');
	})	
})