window.onload=function(){
	   var id=getCookie("goodid");
		console.log(id); 
		$.ajax({
			url: "php/getGoodsInfo.php",
			type: "get",
			asyc:false,
			data: {"goodsId":id},
			success:function (data){
			var d =	eval('(' + data + ')');
			console.log(d);
			    	var tit="<li>"+d.goodsDesc+"</li>";
		            $("#tit").append(tit);
			       var bigImg="<img src='"+d.goodsImg+"'/>";
		             $("#goods-detail-left-bigimg").append(bigImg);
		             var  smallImg="<li><img src='"+d.goodsImg+"'/></li>"
	         			+"<li><img src='"+d.goodsImg+"'/></li>"
	         			+"<li><img src='"+d.goodsImg+"'/></li>"
	         			+"<li><img src='"+d.goodsImg+"'/></li>"
	         			+"<li><img src='"+d.goodsImg+"'/></li>";
	         		$("#smallImg").append(smallImg);
		            $("#mc").html(d.goodsDesc);
		    }
		});

                 
}
		
	
			
		
				
							
							
							
						