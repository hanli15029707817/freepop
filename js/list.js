window.onload=function(){
	var str1="";
	$.ajax({
		type:"get",
		url:"php/getGoodsList.php",
		async:true,
		success:function(data){
			//data  json类的数组
			console.log(data);
			var str=eval(data);
			//str是 解析data数组的 每一条json元素
			console.log(str);	
			for(var i=0;i<str.length;i++){
				//str1是每个商品列表的结构
				var str1="<dl id='list-row1'>"
					+"<dt><img src='"+str[i].goodsImg+"'/></dt>"
		 			+"<dd><a href='detailgoods.html' class='add' goodid="+str[i].goodsId+">"+str[i].goodsDesc+"</a></dd>"
					 +"<dd><span>￥"+str[i].goodsPrice+"</span></dd>"
		 			+"<dd><a href='#'></a></dd>"
		 			+"<dd></dd><dd><a href='#'></a></dd>"
		 			+"<dd><a href='#'></a></dd></dl>";
				   $("#list-row").append(str1);
			}
			
		}
	});
	$("#list-row").on("click",".add",function(){
		  //alert($(this).attr("goodid"))
		  var id = $(this).attr("goodid")
		  addCookie("goodid",id,1);
	})
	
}
			
							
							
						