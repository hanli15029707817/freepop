//注册手机号邮箱验证
window.onload=function(){
     //点击跳转注册
       $("#btnLogoin").click(function(){
       	location.href="zhuce.html";
       });
      //点击跳转首页
       $("#denglu").click(function(){
            $.ajax({
            	type:"post",
            	url:"php/loginCheck.php",
            	async:true,
            	data:{userName:$("#phone").val(),userPass:$("#Pass").val()},
            	success:function(data){
            		console.log(data);
            		if(data==1){
							//记录cookie
							addCookie("useremail",$("#phone").val(),7);
							location.href="index.html";
						}else{
							alert("登录失败，用户名或者密码不对！");
						}
            	}
            });
        });
}


















