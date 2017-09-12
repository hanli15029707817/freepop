window.onload=function(){
	   var price=parseFloat($("#price").find("p").html());
       $("#str").click(function(){
       	    var num=$("#str").val();
       	    console.log(num);
       	    var allprice=num*price;
       	    console.log(allprice);
       	    $("#all-price").find("p").html("￥"+allprice+".00");
       	    $("#xiaoji").html("￥"+allprice+".00");
       	    $("#total").html("￥"+allprice+".00");
       })
}


