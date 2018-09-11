$(function(){
	//第七部分
	$('.mbT div ul h6').hover(function(){
		$(this).css({'color':'#f35041'})
	},function(){
		$(this).css({'color':'#000'})
	})

	var flag=false;
	var pattern=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
	var phone=/^1[3|4|5|7|8][0-9]{9}$/
	var username = /^[\u4E00-\u9FA5A-Za-z]+$/;

	$('.mbF input').eq(0).blur(function(){
		if($(this).val().length==0){
			$('.mbF h5').eq(0).text('* 请输入您的姓名');
			flag=true;
		}else{
			if(username.test($(this).val())){
					$('.mbF h5').eq(0).text('用户名正确');
					$('.mbF h5').eq(0).css('color','lightgreen');
					$(this).css('border','1px solid #ccc')
					flag = true;
				}else{
					$('.mbF h5').eq(0).text('× 用户名不符合规范');
					flag = false;
			}
		}
	})

	$('.mbF input').eq(1).blur(function(){
		if($(this).val().length==0){
			$('.mbF h5').eq(1).text('* 请输入邮箱地址');
			flag=true;
		}else{
			if(pattern.test($(this).val())){
					$('.mbF h5').eq(1).text('邮箱地址正确');
					$('.mbF h5').eq(1).css('color','lightgreen');
					$(this).css('border','1px solid #ccc')
					flag = true;
				}else{
					$('.mbF h5').eq(1).text('× 请输入正确的邮箱地址');
					flag = false;
			}
		}
	})

	$('.mbF input').eq(2).blur(function(){
		if($(this).val().length==0){
			$('.mbF h5').eq(2).text('* 请输入您的电话号码');
			flag=true;
		}else{
			if(phone.test($(this).val())){
					$('.mbF h5').eq(2).text('电话号码正确');
					$('.mbF h5').eq(2).css('color','lightgreen');
					$(this).css('border','1px solid #ccc')
					flag = true;
				}else{
					$('.mbF h5').eq(2).text('× 请输入正确的电话号码');
					flag = false;
			}
		}
	})

	$('.mbF div a').hover(function(){
		$(this).addClass('ration')
	},function(){
		$(this).removeClass('ration')
	})

	$('.mbF div').on('click',function(){
		if($('.mbF input').eq(0).val().length==0||$('.mbF input').eq(1).val().length==0||$('.mbF input').eq(2).val().length==0){
			$(this).next().text('* 信息不正确');
			$('.mbF input').css('border','1px solid red')
			$('.mbF textarea').css('border','1px solid red')
			flag=true;
		}
		if(username.test($('.mbF input').eq(0).val())&&pattern.test($('.mbF input').eq(1).val())&&phone.test($('.mbF input').eq(2).val())){
			alert('提交成功');
			$(this).next().hide()
			$('.mbF input').css('border','1px solid #ccc')
			$('.mbF textarea').css('border','1px solid #ccc')
		}
	})
})