window.onload=function(){
	var check1=false;var check2=false;var check3=false;var check4=false;
	$("#username1").blur(function(){
			let reg=/^[A-Za-z]+$/;		
			let username=$("#username1").val();
			//用户名需要做一次存在性验证运用ajax
			if(reg.test(username)){
				$.ajax({
					url:"php/checkUser.php",
					async:true,
					data:"username="+$('#username1').val(),
					type:"get",
					success:function(data){
						console.log(data)
						if(data==1){
							$("#msgname").html("√");
							check1=true;
						}else{
							$("#msgname").html("该用户已经注册过了，请重想一个用户名");
						}
					}
				})
			}else{
				$("#msgname").html("请输入字母");
			}
			return check1;
    })
	//电话邮箱验证
	$("#emial1").blur(function(){
	   	let userEmial=$("#emial1").val();
		let reg=/(^1[0-9]{9}\d$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/g;
	   	if(reg.test(userEmial)){
	   		$("#msgemial")[0].innerHTML=" ";
	   		check2=true;
	   	}else{
	   		$("#msgemial")[0].innerHTML="请输入一个有效的电子邮件或电话号码";
	   	}
	   	return check2;
	});
	
	//密码验证
	
	$("#p1").blur(function(){	
		let reg=/^[0-9][0-9]{5}$/; 
		var userPass=$("#p1").val();
		if(reg.test(userPass)){
			$("#msgpass1")[0].innerHTML="";
			check3=true;
		}else{
			$("#msgpass1")[0].innerHTML="请输入一个6位数字的密码";
		}
			return check3;
	});
	    
	//第二次密码验证
	
	$("#p2").blur(function(){
		var userPass2=$("#p2").val();
		if($("#p1").val()==userPass2){
			$("#msgpass2")[0].innerHTML=" ";
			check4=true;
		}else{
			$("#msgpass2")[0].innerHTML="两次输入密码不一致";
		}
		return check4;
	});
	
	    //提交跳转登录界面 
	$("#subm").click(function(){
		$("#username1").val()
		if( (check1==check2==check3==check4==true)){
			$.ajax({
						url:"php/regSave.php",
						async:true,
						data:"userName="+$("#username1").val()+"&useremail="+$("#emial1").val()+"&userPass="+$("#p1").val(),
						type:"post",
						success:function(str){
									console.log(str)
									if(str==1){									
									location.href="logoin.html";
									}else{
										alert("您好，您的用户名已经被占用了，请重新注册");
									}
								}		
						});
		}else{
			alert("注册失败");
		}
		
	})
}